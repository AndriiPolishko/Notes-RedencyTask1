import {renderSummaryTable} from "./renderSummaryTable.js";

const handleArchive = function(e) {
    const curTable = e.target.closest("#active")
    if(curTable) {
        const parentRow = e.target.closest(".note");
        const archiveBody = document.querySelector(".archiveBody");
        archiveBody.appendChild(parentRow);
        renderSummaryTable()
    }
    else {
        const parentRow = e.target.closest(".note");
        const activeBody = document.querySelector(".activeBody");
        activeBody.appendChild(parentRow);
        renderSummaryTable()
    }
};

export function archiveNote() {
    const archiveButtons = document.querySelectorAll(".fa-box-archive");
    archiveButtons.forEach((button)=> {
        button.addEventListener('click',handleArchive);

    })
}