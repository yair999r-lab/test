import fs from "fs/promises"

const FILEPATH = "./heroas.json"

export async function readFiles(){
    try{
    const data = await fs.readFile(FILEPATH, 'utf-8')
    return JSON.parse(data)}
    catch(error){
        console.error(("felid to open file"), error)
        return null
    }
}

export async function writeFiles(newData) {
    try{
        const str = JSON.stringify(newData, null, 2)
        await fs.writeFile(FILEPATH, str, 'utf-8')
        return true
    }
    catch(error){
        console.error(("filed to write to file"), error)
        return false
    }
}
