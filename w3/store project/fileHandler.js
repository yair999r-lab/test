import fs from "fs/promises";
import path from "path";

const PATEDIR = path.join(import.meta.dirname, process.env.DB_BASE_PATH || "data");

export async function readJsonFile(fileName) {
  try {
    const filePath = path.join(PATEDIR, fileName);
    const rewData = await fs.readFile(filePath, "utf-8");
    const parseData = JSON.parse(rewData);
    return parseData;
  } catch (error) {
    console.log(`error: ${error}`);
    return [];
  }
}

export async function writeJsonFile(fileName, data) {
  try {
    const filePate = path.join(PATEDIR, fileName);
    const stringData = JSON.stringify(data, null, 2);
    await fs.writeFile(filePate, stringData, "utf-8");
    return true;
  } catch (error) {
    console.log(`error: ${error}`);
    return false;
  }
}
