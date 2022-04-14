'use strict'
//the most important file
import {addButtonClickEventHandle} from "./addButtonEvent.js";

const addButton = document.querySelector(".addNote");
addButton.addEventListener('click',
    addButtonClickEventHandle);