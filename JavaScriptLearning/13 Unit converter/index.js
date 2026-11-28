    /*
    1 meter = 3.281 feet
    1 liter = 0.264 gallon
    1 kilogram = 2.204 pound
    */
    const factor1 = 3.281
    const factor2 = 0.264
    const factor3 = 2.204

    const convertBtn = document.getElementById("conBtn")
    const resultEl = document.getElementById("result")
    const inputEl = document.getElementById("input")

    convertBtn.addEventListener("click", function () {
        const value = Number(inputEl.value)
        resultEl.innerHTML = 
        `
        <div class="resultCard">
            <h3>Length (Meter/Feet)</h3>
            <p>${value} meters = ${(factor1 * value).toFixed(2)} feet | ${value} feet = ${(value / factor1).toFixed(2)} meters</p>
        </div>

        <div class="resultCard">
            <h3>Volume (Liters/Gallons)</h3>
            <p>${value} liters = ${(factor2 * value).toFixed(2)} gallons | ${value} gallons = ${(value / factor2).toFixed(2)} liters</p>
        </div>

        <div class="resultCard">
            <h3>Mass (Kilograms/Pounds)</h3>
            <p>${value} kilos = ${(factor3 * value).toFixed(2)} pounds | ${value} pounds = ${(value / factor3).toFixed(2)} kilos</p>
        </div>
        `
    })
