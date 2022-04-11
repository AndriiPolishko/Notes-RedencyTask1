import {suitableDayForm} from "./date.js";
import {actions} from "./actions.js";

function forName() {
    let name = document.createElement("td");
    let container = document.createElement("section")
    container.className = "container";
    let circle = document.createElement("div");
    circle.className = "circle"
    container.appendChild(circle);
    let nameText = document.createElement("span");
    nameText.textContent = "name";
    container.appendChild(nameText)
    name.appendChild(container);
    return name;
}

function forCreated() {
    let created = document.createElement("td");
    created.textContent = suitableDayForm;
    return created;
}

function forCategory() {
    let CATEGORIES = {
        "None": {
            name: "default",
            icon: ""
        },
        "Task": {
            name: "Task",
            icon: ["fa-solid", "fa-cart-shopping"]
        },
        "Random Thought": {
            name: "Random Thought",
            icon:["fa-solid", "fa-gear"]
        },
        "Idea": {
            name:"Idea",
            icon:["fa-solid", "fa-lightbulb"]
        },
    };

    const icon = document.createElement("i");

    const createElement = (selector, text='', options ={}) => {
        const element = document.createElement(selector);
        element.innerHTML = text;
        for(const key in options) {
            element[key] = options[key];
        }
        return element;
    };

    const changeIcon = (icon, classNames) => {
        icon.classList.remove(...icon.classList);//чистимо класи іконки
        for (const className of classNames) {
            icon.classList.add(className);
        }
        document.querySelector(".circle").appendChild(icon);
    };

    const renderCategories = (parent, categories) => {
        for (const category in categories) {
            const child = createElement('option',category, {
                value: category,})
            parent.appendChild(child);
            }
    };

    const categoryChangeHandler = (e) => {
        const value = e.target.value;
        changeIcon(icon,CATEGORIES[value].icon)
    };

    let select = document.createElement("select");
    select.className = "category";
    select.setAttribute("name","categories");

    renderCategories(select, CATEGORIES);
    select.addEventListener('change', categoryChangeHandler);
    let category = document.createElement("td");

    category.appendChild(select)

    return category;
}

function forContent() {
    let content = document.createElement("td");
    content.textContent = "Sample";
    return content;
}

function forDates() {
    let dates = document.createElement("td");
    dates.textContent = "Sample";
    return dates;
}

export function createNote () {
    let note = document.createElement("tr");
    note.className = 'note';

    let name = forName();

    let created = forCreated()

    let category = forCategory()

    let content = forContent();

    let dates = forDates();

    note.appendChild(name);
    note.appendChild(created);
    note.appendChild(category);
    note.appendChild(content);
    note.appendChild(dates);
    note.appendChild(actions.cloneNode(true))

    return note;
}