
let inputBtn = document.getElementById("input-btn")
let inputValue = document.getElementById("input-el")
let myLeads = []

inputBtn.addEventListener("click", function(){
    myLeads.push(inputValue.value)
    console.log(myLeads)
})

