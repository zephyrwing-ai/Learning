
let inputBtn = document.getElementById("input-btn")
let inputValue = document.getElementById("input-el")
let myLeads = []
let ulEl = document.getElementById("ul-el")

localStorage.clear()
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

inputBtn.addEventListener("click", function(){
    myLeads.push(inputValue.value)
    JSON.stringify(myLeads)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLead()
    inputValue.value = ""

})
let listItem = ""

function renderLead () {
    let item = `<li><a href="${inputValue.value}">${inputValue.value}</a></li>`
    ulEl.innerHTML += item
    
}

// function renderLeads () {
//     for (let i = 0; i < myLeads.length; i += 1) {
//     console.log(myLeads[i])
//     // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
//         listItem +="<li>" + myLeads[i] + "</li>"
//     }
//     ulEl.innerHTML = listItem
// }
