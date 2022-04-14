'use strict'
import {createNote} from "./createRow.js";
import {deleteRow} from "./deleteRow.js";
import {changeName} from "./changeName.js";
import {countRows} from "./countRows.js";

const addButton = document.querySelector(".addNote");
export const table = document.querySelector(".table>tbody");

const numberOfRows = {n:0};
let rows;

const addButtonClickEventHandle = function() {
    let note = createNote(numberOfRows);
    table.appendChild(note);
    deleteRow();
    rows = countRows();
    changeName();
}

addButton.addEventListener('click', addButtonClickEventHandle)




