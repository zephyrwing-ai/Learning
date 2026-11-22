// const countEl = document.getElementById('count-el');
// countEl.innerText = 5;

// let count = 0;

// console.log(count);

// let myAge = 22;

// console.log(myAge);

// let myAge = 22;
// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;

// console.log(myDogAge)

// let bonuspoints = 50;
// console.log(bonuspoints);

// bonuspoints = bonuspoints + 50;
// console.log(bonuspoints);

// bonuspoints = bonuspoints - 75;
// console.log(bonuspoints);

// bonuspoints = bonuspoints + 45;
// console.log(bonuspoints);


let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment () {
    count += 1;
    countEl.textContent = count;
}

function save () {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    console.log(count);
}