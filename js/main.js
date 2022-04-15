'use strict'
//the most important file
import {addButtonClickEventHandle} from "./addButtonEvent.js";
import {showArchived} from "./showArchived.js";

const addButton = document.querySelector(".addNote");
addButton.addEventListener('click',
    addButtonClickEventHandle);

showArchived();