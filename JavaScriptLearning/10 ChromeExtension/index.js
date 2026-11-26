
let inputBtn = document.getElementById("input-btn")
let inputValue = document.getElementById("input-el")
let myLeads = []
let ulEl = document.getElementById("ul-el")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLead(myLeads)
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputValue.value)
    inputValue.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLead(myLeads)
})


tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLead(myLeads)
    })
})


deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLead(myLeads)
})

function renderLead (leads) {
    let listItem = ""
    for (let i = 0; i < leads.length; i += 1) {
        listItem += `
            <li>
                <a href="${leads[i]}">
                    ${leads[i]}
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
