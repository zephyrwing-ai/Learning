
let inputBtn = document.getElementById("input-btn")
let inputValue = document.getElementById("input-el")
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
let ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputValue.value)
    
})
let listItem = ""

for (let i = 0; i < myLeads.length; i += 1) {
    console.log(myLeads[i])
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        listItem +="<li>" + myLeads[i] + "</li>"
}

ulEl.innerHTML = listItem