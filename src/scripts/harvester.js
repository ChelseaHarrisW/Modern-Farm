
// define an export fx harvestPlants(array)
// this fx returns a plant object to the array that was input
export const harvestPlants = (plantArray) => {
    // iterate through the array of seedObj that have been planted (copy of field array)
    let seeds = []
    for (const plant of plantArray) {
        //on each plant get the seed object from the array
        if (plant.type === "Corn") {
            // divide the corn obj by 2?
            const cornOutput = plant.output / 2;
            for (let index = 0; index < cornOutput; index++) {
                seeds.push(plant)
            }
          
              
            
        } else {
            //add the seed object to the array
            
            for (let index = 0; index < plant.output; index++) {
                seeds.push(plant)
            }


        }
        // remimber expected outcome is an array of seed objects
    }
    return seeds
}

//iterate the array of growing plants and
    //it the iteration get the value of the output property [what does this mean?]
        // corn will need a conition to access the properties of the array
                // also with corn half will need to be returned from the array
    //initial output

    // [
    //     {
    //         type: "Peanut",
    //         height: 30,
    //         output: 2
    //     },
    //     {
    //         type: "Peanut",
    //         height: 30,
    //         output: 2
    //     }
    // ]