import { renderSummaryTable } from '../summaryTable/renderSummaryTable.js';

export function deleteRow() {
  let deleteButtons = document.getElementsByClassName('deleteRow');
  const deleteNote = (e) => {
    const target = e.target;
    const row = target.closest('.note');
    row.remove();
    renderSummaryTable();
  };
  for (const deleteButton of deleteButtons) {
    deleteButton.addEventListener('click', deleteNote);
  }
}
