import {writeToFile, readFromFile} from "./file.service.js"

const allMovies = []
const system = cinema()
system.addMovie('mm', 'd', 11,22)

export function genaretId(){
    if(allMovies.length === 0){
        return 0
    }
    return allMovies.reduce((max, m) =>{
            return (m.id > max) ? m.id : max
        },0)
}

export function cinema(){
    let conuter = genaretId()
    return async function addMovie(name, genre, year, rating) {
        const id = ++conuter
        const newMovie = await allMovies.push({
            id: id,
        title: name,
        genre:genre,
        year: year,
        rating: rating
    })
    const success = await writeToFile(newMovie)
    if(success){
        console.log("File updated successfully");
    }else{
        console.log("Update failed.")
    }
        return }
}

export function findById(id){
    return allMovies.find(m => m.id === id)
}

export function findByName(name){
    return allMovies.filter(m => m.title.toLowerCase().includes(name))
}

export function findByGenre(genre){
    return allMovies.filter(m => m.genre.toLowerCase() === genre)
}

export function deleteMovie(id){
    const movie = findById(id)
    if(!movie){
        return false
    }
    const index = allMovies.indexOf(movie)
    allMovies.splice(index, 1)
    return true
}

export function updateRate(id, new_rate){
    const movie = findById(id)
    if(!movie){
        return false
    }
    movie.rating = new_rate
    return true 
}

export function getStatistics(){
    let statistics = {
        "total movies": allMovies.length,
        "Average rating": allMovies.length === 0 ? 0: 
        (allMovies.reduce((acc, m) => acc += (m.rating),0) / allMovies.length),
        "Highest rated": allMovies.reduce((max, m) =>{
            return (m.rating > max) ? m.rating : max
        },0)
    }
    return statistics
}
