function nameTooLongHelper(innerText) {
    if(innerText.length > 11) {
        innerText = `${innerText.slice(0,9)}...`
    }
    return innerText;
}

function nameReducedHelper(innerText) {
    const threeDotsRegex = /...$/
    return threeDotsRegex.test(innerText)
}

const changeHandle = function (e) {
    let innerText = e.target.value;
    const parentRow = e.target.closest(".note");
    const parentRowId = parentRow.getAttribute('id');
    sessionStorage.setItem(parentRowId,innerText);
    e.target.value = nameTooLongHelper(innerText);
}

const clickHandle = function(e) {
    const parentRow = e.target.closest(".note");
    const parentRowId = parentRow.getAttribute('id');
    if(nameReducedHelper(e.target.value))
        e.target.value = sessionStorage.getItem(parentRowId);
}

export function changeName() {
    let names = document.querySelectorAll(".name")
    names.forEach((name) => {
        name.addEventListener('change', changeHandle);
        name.addEventListener('click', clickHandle);
    })
}

