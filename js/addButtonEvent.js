import {createNote} from "./createRow.js";
import {deleteRow} from "./deleteRow.js";
import {countRows} from "./countRows.js";
import {changeName} from "./changeName.js";
import {noteContent} from "./noteContent.js";
import {archiveNote} from "./archiveNote.js";


const table = document.querySelector(".table>tbody");
const numberOfRows = {n:0};
let rows;

const addButtonClickEventHandle = function() {
    let note = createNote(numberOfRows);
    table.appendChild(note);
    deleteRow();
    rows = countRows();
    changeName();
    noteContent();
    archiveNote();
}
export  {addButtonClickEventHandle};