
let inputBtn = document.getElementById("input-btn")
let inputValue = document.getElementById("input-el")
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]

inputBtn.addEventListener("click", function(){
    myLeads.push(inputValue.value)
    
})

for (let i = 0; i < myLeads.length; i += 1) {
    console.log(myLeads[i])
}
