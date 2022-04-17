import {suitableDayForm} from "./date.js";
import {actions} from "./actions.js";
import {CATEGORIES} from "./addButtonEvent.js";
import {renderSummaryTable} from "./renderSummaryTable.js";

function forName() {
    let name = document.createElement("td");
    let container = document.createElement("section")
    container.className = "nameContainer";
    let circle = document.createElement("div");
    circle.className = "circle"
    container.appendChild(circle);
    let nameText = document.createElement("textarea");
    nameText.className = "name";
    nameText.setAttribute("contentEditable","true")
    nameText.textContent = "Click me";
    container.appendChild(nameText)
    name.appendChild(container);
    return name;
}

function forCreated() {
    const createdCeil = document.createElement("td");
    createdCeil.className = "createContainer";
    const createdData = document.createElement("span");
    createdData.textContent = suitableDayForm;
    createdCeil.appendChild(createdData);
    return createdCeil;
}

function forCategory() {
    const icon = document.createElement("i");

    const createElement = (selector, text='', options ={}) => {
        const element = document.createElement(selector);
        element.innerHTML = text;
        for(const key in options) {
            element[key] = options[key];
        }
        return element;
    };

    const changeIcon = (icon, classNames,e) => {
        icon.classList.remove(...icon.classList);//чистимо класи іконки
        for (const className of classNames) {
            icon.classList.add(className);
        }
        let note = e.target.closest(".note");
        let circle = note.querySelector(".circle")
        circle.appendChild(icon);

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
        changeIcon(icon,CATEGORIES[value].icon,e)
        renderSummaryTable();
    };

    let select = document.createElement("select");
    select.className = "category";
    select.setAttribute("name","categories");

    renderCategories(select, CATEGORIES);
    select.addEventListener('change', categoryChangeHandler);
    let category = document.createElement("td");
    category.className = "categoryContainer";
    category.appendChild(select)

    return category;
}

function forContent() {
    let contentContainer = document.createElement("td");
    let content = document.createElement("textarea");
    content.setAttribute("readonly","true")
    content.className = "content";
    content.textContent = "Click me";
    contentContainer.appendChild(content);
    return contentContainer;
}

function forDates() {
    const datesContainer = document.createElement("td");
    datesContainer.className = "datesContainer";
    const dates = document.createElement("textarea");
    dates.className = "dates";
    dates.setAttribute("readonly","true")
    datesContainer.appendChild(dates);
    return datesContainer;
}

export function createNote (numberOfRows) {

    let note = document.createElement("tr");

    note.id = numberOfRows.n;
    numberOfRows.n++;
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