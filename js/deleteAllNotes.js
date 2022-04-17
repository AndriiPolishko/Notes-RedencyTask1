import {renderSummaryTable} from "./renderSummaryTable.js";
export function deleteAllNotes() {
    const deleteAllNotesButtons = document.querySelectorAll(".deleteAllNotes");
    deleteAllNotesButtons.forEach( (button)=> {
        button.addEventListener('click',() => {
            const table = button.closest(".notes");
            const tableBody = table.querySelector("tbody");
            tableBody.innerHTML = "";
            renderSummaryTable();
        } )

    })
}