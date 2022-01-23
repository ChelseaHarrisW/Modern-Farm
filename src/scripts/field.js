// define a value with the init value of []
//the array will store all the plants growing in the field ultimately
const field = []

//define export fx named "addPlant"
//this function param is (seedObj)
export const addPlant = (seedObj) => {
    // the fx will add a seedObj to the fieldArray using .push method
    // condition for the seed obj to address an array of corn in the seedObj
    if (seedObj === Array.isArray(seedObj)) {
        //iterate through the rray of corn to access the obj's in the array
        for (const corn of seedObj) {
            field.push(corn)
        }
    } else {
    field.push(seedObj)
    
}
} 


//define export fx named usePlants
export const usePlants = () => {
    //the fx will return a copy of the array of plants (these are the plants we just pushed into the field)
    let plantsInMyField= field.map(plant => ({...plant}))
// attempt at slice method: const seededField= field.splice()

return plantsInMyField
}

// const seed ={
//     type: 'Asparagus',
//         height: 24,
//         output: 4
// }

//console.log(addPlant(seed))




