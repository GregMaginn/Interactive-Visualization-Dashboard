var dataSamples = d3.json("samples.json").then((incomingData) => {
    function notNull(entry) {
        return entry.names != 0;
    }
})

var allData = incomingData.filter(notNull);

console.log(allData);