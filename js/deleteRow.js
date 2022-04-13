export function deleteRow() {
    let deleteButtons = document.getElementsByClassName("fa-trash");
    const deleteNote = (e) => {
        const target = e.target;
        const row = target.closest(".note");
        
        row.remove();
    }
    for(const deleteButton of deleteButtons) {
        deleteButton.addEventListener('click',deleteNote)
    }
}