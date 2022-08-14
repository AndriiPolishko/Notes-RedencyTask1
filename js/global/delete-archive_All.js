let actions = document.createElement("td");
actions.className = "actionsContainer"
const style = getComputedStyle(document.body)

let edit = document.createElement("i");
edit.className = "fa-solid fa-pen";
edit.style.color = style.getPropertyValue("--dark-gray");

let archive = document.createElement("i");
archive.className = "fa-solid fa-box-archive";
archive.style.color = style.getPropertyValue("--dark-gray");

let trash = document.createElement("i");
trash.className = "fa-solid fa-trash deleteRow";
trash.style.color = style.getPropertyValue("--dark-gray");

actions.appendChild(edit);
actions.appendChild(archive);
actions.appendChild(trash);


export {actions};