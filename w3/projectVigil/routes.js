import { readFiles, writeFiles } from "./fileandler.js";
import { createHero, findHeroById, heroAction, herosVal } from "./servics.js";

export default {
  GET: {
    "/helath": (req, res) => {
      res.end("alive");
    },
    "/heroes": async (req, res) => {
      try {
        let heroes = await readFiles();

        for (const key in req.query) {
          if (heroAction[key]) {
            heroes = heroAction[key](heroes, req.query[key]);
          }
        }

        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.end(JSON.stringify(heroes));
      } catch {
        res.statusCod = 500;
        res.end(JSON.stringify({ error: "file read error" }));
      }
    },
    "/heroes/:id": async (req, res) => {
      const hero = await findHeroById(req.params.id);

      if (!hero) {
        res.statusCod = 404;
        res.end(
          JSON.stringify({ error: `hero with ${req.params.id} dont exists` }),
        );
        return;
      }
      res.setHeader("Contebt-Type", "application/json; charset=utf-8");
      res.end(JSON.stringify(hero));
    },
  },
  POST: {
    "/heroes": async (req, res) => {
      const allHeroes = await readFiles();

      const dynmicSchame = herosVal(allHeroes);
      const valid = dynmicSchame.safeParse(req.body);

      if (!valid.success) {
        res.statusCode = 400;
        res.end(JSON.stringify(valid.error.flatten().fieldErrors));
        return;
      }

      const newHero = await createHero(valid.data, allHeroes);

      allHeroes.push(newHero);
      await writeFiles(allHeroes)
      res.statusCod = 201
      res.end(JSON.stringify(newHero))
    },
  },
};
