export function countRows() {
    let rowsIds = [];
    let rows = document.querySelectorAll(".note");
    for(let i = 0; i < rows.length; i++) {
        rowsIds.push(rows.item(i).getAttribute("id"));
    }
    return rowsIds;
}