/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const conversations = [
    {
        title: "Length(Meter/Feet)",
        unit: "meters",
        convertUnit:"feet",
        factor: 3.281
    },
    {
        title: "Volume(Liters/Gallons)",
        unit: "Liters",
        convertUnit:"Gallons",
        factor: 0.264
    },{
        title: "Mass(Kilograms/Pounds)",
        unit: "Kilograms",
        convertUnit:"Pounds",
        factor: 2.204
    }
]
const convertBtn = document.getElementById("conBtn")
const resultEl = document.getElementById("result")
const inputEl = document.getElementById("input")

convertBtn.addEventListener("click", function () {
    let conHtml = ""
    const value = Number(inputEl.value)
    conversations.forEach(function (item) {
        const result1 = value * item.factor
        const result2 = value / item.factor
        conHtml += 
        `
        <div class="resultCard">
            <h2>${item.title}</h2>
            <p>${value} ${item.unit} = ${result1.toFixed(2)} ${item.convertUnit}| 
                ${value} ${item.convertUnit} =${result2.toFixed(2)} ${item.unit}
            </p>
        </div>
        `
    })
    resultEl.innerHTML = conHtml
})
