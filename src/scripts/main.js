import { usePlants } from './field.js'
import {createPlan} from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { plantSeeds } from "./tractor.js"

const MyPlants = usePlants()
const asparagus = createAsparagus()

const yearlyPlan = createPlan()

console.log(yearlyPlan)
const sowSeeds= plantSeeds(yearlyPlan)
console.log(sowSeeds )