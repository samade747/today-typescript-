import population, { cities, multiply } from "./pak.js"
import popopulation, { cities as ind_cities } from "./ind.js"
import { divide } from "./ind.js"

console.log(`Population of pakistan is ${population}`)
console.log(`Population of India is ${popopulation}`)
console.log(`Population of India is ${multiply(5, 5)}`)
console.log(`Population of India is ${divide(2005, 5)}`)




console.log(`Cities of pakistan are ${cities}`)
console.log(`Cities of India are ${ind_cities}`)

