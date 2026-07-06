import { error, log } from "console";
import fs from "fs";
import { json } from "stream/consumers";

const FILEPATH = "Movie-Collection-Manager/data/movies.json"

export async function readFromFile() {
    try{
        const data = await fs.readFile(FILEPATH, 'utf-8')
        return JSON.parse(data)
    }
    catch(error){
        console.error(error())
        return []
    }
}

export async function writeToFile(arryData){
    try{
        const dataStr = JSON.stringify(arryData, null, 2)
        await fs.writeFile(FILEPATH, dataStr, 'utf-8')
        return true
    }
    catch(error){
        console.log(error);
        return false
    }
}
