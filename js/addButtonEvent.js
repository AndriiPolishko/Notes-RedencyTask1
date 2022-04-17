import {createNote} from "./createRow.js";
import {deleteRow} from "./deleteRow.js";
import {countRows} from "./countRows.js";
import {changeName} from "./changeName.js";
import {noteContent} from "./noteContent.js";
import {archiveNote} from "./archiveNote.js";
import {renderSummaryTable} from "./renderSummaryTable.js";



const table = document.querySelector(".table>tbody");
const numberOfRows = {n:0};
let rows;

export const CATEGORIES = {
    "Default": {
        name: "Default",
        icon: ""
    },
    "Task": {
        name: "Task",
        icon: ["fa-solid", "fa-cart-shopping"]
    },
    "Random_Thought": {
        name: "Random_Thought",
        icon:["fa-solid", "fa-gear"]
    },
    "Idea": {
        name:"Idea",
        icon:["fa-solid", "fa-lightbulb"]
    },
};

const addButtonClickEventHandle = function() {

    let note = createNote(numberOfRows);
    table.appendChild(note);
    deleteRow();
    rows = countRows();
    changeName();
    noteContent();
    archiveNote();
    renderSummaryTable()
}
export  {addButtonClickEventHandle};