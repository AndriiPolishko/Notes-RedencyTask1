const handleEdit = function(e) {

}

export function editTheRow() {
    const editButtons = document.querySelectorAll(".fa-pen");
    editButtons.forEach( (button) => {
        button.addEventListener("click", handleEdit)
    })
}