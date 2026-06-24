import {sum, PI} from './math.js'

const sub = (a,b) => a -b
const add = (a,b) => a + b
const even = num => num % 2 == 0

export function cal(price){
    const sumry = sum(price + 10)
    const pie = PI(price)
    return {sumry, pie}
}

// const div = require('./advancedMath')

// module.exports = {sub, add, div, even}

export {sub, add, even}
