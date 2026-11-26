
let inputBtn = document.getElementById("input-btn")
let inputValue = document.getElementById("input-el")
let myLeads = []
let ulEl = document.getElementById("ul-el")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn = document.getElementById("delete-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLead()
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputValue.value)
    inputValue.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLead()
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLead()
})

function renderLead () {
    let listItem = ""
    for (let i = 0; i < myLeads.length; i += 1) {
        listItem += `
            <li>
                <a href="${myLeads[i]}">
                    ${myLeads[i]}
                </a>                    
            </li>
            `
    }
    ulEl.innerHTML = listItem
}

// function renderLeads () {
//     for (let i = 0; i < myLeads.length; i += 1) {
//     console.log(myLeads[i])
//     // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
//         listItem +="<li>" + myLeads[i] + "</li>"
//     }
//     ulEl.innerHTML = listItem
// }
