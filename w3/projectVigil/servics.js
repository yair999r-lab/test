import { readFiles } from "./fileandler.js";
import { z } from "zod";

export function extractRouteInfo(req) {
  const parseUrl = new URL(req.url, `http://${req.headers.host}`);

  const fullUrl = parseUrl.pathname;

  const query = Object.fromEntries(parseUrl.searchParams);
  const parts = fullUrl.split("/").filter(Boolean);

  let param = null;
  let dynamicRouteKey = null;

  if (parts.length > 1) {
    param = parts.pop();

    const partialUrl = `/${parts.join("/")}`;

    dynamicRouteKey = `${partialUrl}/:id`;
  }
  return {
    fullUrl: fullUrl,
    dynamicRouteKey: dynamicRouteKey,
    param: param,
    query: query,
  };
}

export function parseRequestBody(req) {
  return new Promise((res, rej) => {
    if (["GET", "DELETE"].includes(req.method)) {
      return res(null);
    }
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      if (!body) {
        return res({});
      }
      try {
        const parsData = JSON.parse(body);
        res(parsData);
      } catch (error) {
        res(body);
      }
    });
    req.on("error", (err) => {
      rej(err);
    });
  });
}

export async function findHeroById(id) {
  const heroes = await readFiles();
  return heroes.find((hero) => String(hero.id) === String(id));
}

export const heroAction = {
  status: (data, val) => {
    return data.filter(
      (hero) => hero.status.toLowerCase() === val.toLowerCase(),
    );
  },
  power: (data, val) => {
    return data.filter(
      (hero) => hero.power.toLowerCase() === val.toLowerCase(),
    );
  },
  minLevel: (data, val) => {
    return data.filter((hero) => Number(hero.threatLevel) >= Number(val));
  },
  maxLevel: (data, val) => {
    return data.filter((hero) => Number(hero.threatLevel) <= Number(val));
  },
  search: (data, val) => {
    return data.filter((hero) => {
      const name = hero.codeName.toLowerCase().includes(val.toLowerCase);
      const note = hero.notes?.toLowerCase().includes(val.toLowerCase);
      return name || note;
    });
  },
  sortBy: (data, val) => {
    return [...data].sort((a, b) => {
      if (a[val] > b[val]) return 1;
      if (a[val] < b[val]) return -1;
      return 0;
    });
  },
  orderBy: (data, val) => {
    if (val === "desc") {
      return [...data].reverse();
    }
    return data;
  },
};

export async function createHero(newHero, allHeroes) {
  const time = new Date().toISOString();
  const naxtId =
    allHeroes.length > 0
      ? Math.max(...allHeroes.map((hero) => Number(hero.id))) + 1
      : 1;

  return {
    id: naxtId,
    ...newHero,
    createdAt: time,
    updatedAt: time,
  };
}

export function herosVal(heroes) {
  return z.object({
    codeName: z.string().refine((val) => {
      return !heroes.some(
        (hero) => hero.codeName.toLowerCase() === val.toLowerCase(),
      );
    }),
    powers: z.string({
      required_error: "must enter powers of the hero!!",
      invalid_type_error: "powers must be str",
    }),
    threatLevel: z
      .number({
        required_error: "must enter threat Level of the hero!!",
      })
      .positive({
        invalid_type_error: "threatLevel must be positive number",
      })
      .max(10, "threatLevel must be max 10"),

    status: z
      .enum(["active", "retired", "missing", "deceased"])
      .default("active"),
    origin: z.string().default(null),
    affiliations: z.string().default(null),
    firstSighing: z.coerce.date(),
  });
}
