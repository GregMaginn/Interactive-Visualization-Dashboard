var dataSamples = d3.json("samples.json").then((incomingData) => {
    return incomingData
})


//var trace1 = {
    //x: names.map(row => row.name)
//}

console.log(dataSamples.data)