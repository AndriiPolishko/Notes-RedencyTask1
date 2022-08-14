'use strict';

import { addButtonClickEventHandle } from './global/addButtonEvent.js'; //the most important file
import { showArchived } from './global/showArchived.js';
import { prepareSummaryTable } from './summaryTable/prepareSummaryTable.js';
import { deleteAllNotes } from './modifyNotes/deleteAllNotes.js';

const addButton = document.querySelector('.addNote');
addButton.addEventListener('click', addButtonClickEventHandle);

prepareSummaryTable();
showArchived();
deleteAllNotes();
