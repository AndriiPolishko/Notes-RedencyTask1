const handleArchiveTableButton = function(e) {
    const activeTable = document.querySelector("#active");
    activeTable.style.display = "none";

    const archiveTable = document.querySelector("#archived");
    archiveTable.style.display = "flex";
}

const handleUnarchivedButton = function(e) {
    const activeTable = document.querySelector("#active");
    activeTable.style.display = "flex";

    const archiveTable = document.querySelector("#archived");
    archiveTable.style.display = "none";
}

export function showArchived() {
    const showArchivedButton = document.querySelector(".fa-box");
    showArchivedButton.addEventListener('click', handleArchiveTableButton);
    const showUnarchivedButton = document.querySelector(".fa-box-open");
    showUnarchivedButton.addEventListener('click', handleUnarchivedButton);
}