import { createPlan } from './plan.js'
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant, usePlants } from "./field.js"





// define export fx plantSeeds (year's planing plan)
export const plantSeeds = (yearlyPlan) => {



    for (const plan of yearlyPlan) {
        for (const plantType of plan) {
            if (plantType === "Asparagus") {
                const asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            }
            else if (plantType === "Corn") {
                const cornSeed = createCorn()
                addPlant(cornSeed)
                for (const corn of cornSeed)
                    addPlant(corn)
                }
            else if (plantType === "Potato") {
                const potatoSeed = createPotato()
                addPlant(potatoSeed)
            }
            else if (plantType === "Soybean") {
                const soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            }
            else if (plantType === "Sunflower") {
                const sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            }
            else if (plantType === "Wheat") {
                const wheatSeed = createWheat()
                addPlant(wheatSeed)
            }
        }
    }
    return usePlants()
}

//invision: this plan is an array that has 4 rows in the field to be plants

//iterate through the plan array to create the 4 rows that

// >expected output: // Example growing plan. Actual plan is bigger.
// [
//     ["Potato", "Soybean", "Soybean", "Corn"],
//     ["Wheat", "Corn", "Wheat", "Asparagus"],
//     ["Asparagus", "Wheat", "Soybean", "Corn"],
//     ["Asparagus", "Soybean", "Potato", "Wheat"]
// ]

//while iterating invoke the functions that create the coresponding plants
    // take the seed and add it to the corresponding fx
        // to do this you must omport these fx