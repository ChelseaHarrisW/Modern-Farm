import { Catalog } from './catalog.js'
import { usePlants } from './field.js'
import { harvestPlants } from './harvester.js'
import {createPlan} from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { plantSeeds } from "./tractor.js"

const asparagus = createAsparagus()
const MyPlants = usePlants()


const yearlyPlan = createPlan()
console.log(yearlyPlan)
const sowSeeds= plantSeeds(yearlyPlan)

console.log(sowSeeds )


const harvest = harvestPlants(sowSeeds)
console.log(harvest)


const HTMLRepresentationOfMyLog = Catalog(harvest)