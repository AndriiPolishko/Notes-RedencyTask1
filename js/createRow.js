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
    let category = document.createElement("td");
    category.textContent = "Sample";
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