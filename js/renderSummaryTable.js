import {CATEGORIES} from "./addButtonEvent.js";

function renderTableTemplate(type) {
    let tableBody;
    switch (type) {
        case("active"):
            tableBody = document.querySelector("#active > .table > tbody");
            break;
        case("archived"):
            tableBody = document.querySelector("#archived > .table > tbody");
            break;
        default:
            console.log("You chose wrong table type")
    }

    const categories = tableBody.querySelectorAll(".category");
    const currentCategories = {};
    const allCategories = Object.getOwnPropertyNames(CATEGORIES);
    try {
        categories.forEach((category)=> {
            const categoryValue = category.value;
            if(currentCategories[categoryValue]) {
                currentCategories[categoryValue] +=1;
            }
            else {
                currentCategories[categoryValue] = 1;
            }
        })
    }
    catch (error) {
        console.log(`Error message: ${error}`)
    }

    let counter;
    try {
        for(const category of allCategories) {
            if(type === "active")
                counter = document.querySelector(`#${category} > .numberOfActiveContainer > .number`);
            else
                counter = document.querySelector(`#${category} > .numberOfArchivedContainer > .number`);
            counter.textContent = "0";
        }
        for(let category in currentCategories) {
            if(type === "active")
                counter = document.querySelector(`#${category} > .numberOfActiveContainer > .number`);
            else
                counter = document.querySelector(`#${category} > .numberOfArchivedContainer > .number`);
            counter.textContent = currentCategories[category];
        }
    }
    catch (error) {
        console.log(`Error message :${error}`)
    }
}

export function renderSummaryTable() {
    renderTableTemplate("active");
    renderTableTemplate("archived");
}