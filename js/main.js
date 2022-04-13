'use strict'
import {createNote} from "./createRow.js";
import {deleteRow} from "./deleteRow.js";

const addButton = document.querySelector(".addNote");
export const table = document.querySelector(".table>tbody");



addButton.addEventListener('click', (e)=> {
    let note = createNote();
    table.appendChild(note);
    deleteRow();
})

