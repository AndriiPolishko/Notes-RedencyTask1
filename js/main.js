'use strict'

import {addButtonClickEventHandle} from "./addButtonEvent.js";//the most important file
import {showArchived} from "./showArchived.js";
import {prepareSummaryTable} from "./prepareSummaryTable.js";
import {deleteAllNotes} from "./deleteAllNotes.js";

const addButton = document.querySelector(".addNote");
addButton.addEventListener('click',
    addButtonClickEventHandle);

prepareSummaryTable();
showArchived();
deleteAllNotes();