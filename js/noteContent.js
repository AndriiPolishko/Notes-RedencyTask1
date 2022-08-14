import {contentModalWindowElements} from "./contentModalWindowElements.js";


export function noteContent() {
    const contentBlocks = document.querySelectorAll(".content");

    contentBlocks.forEach((content) => {
        content.addEventListener('click',handleContentClick)
    })
}

function handleContentSize(contentText) {
    if (contentText.length > 11)
        return `${contentText.slice(0, 9)}...`
    return contentText;
}

function handleDates(contentText) {
    const dateRegEx = /\d{2}([\/.-])\d{2}\1\d{4}/g;
    const dates = contentText.match(dateRegEx);
    if(dates) {
        return dates.join(',');
    }
    return "";
}

let [modalContainer] = contentModalWindowElements();

const handleContentClick = function (e) {
    modalContainer.style.display = "flex";
    document.body.appendChild(modalContainer);

    const parentRow = e.target.closest(".note");
    const parentRowId = parentRow.getAttribute("id");

    document.querySelector(".modalTextArea").value = sessionStorage.getItem(`${parentRowId}Content`);

    let contentText = document.querySelector(".modalTextArea").value;

    const closeModal = document.querySelector(".fa-xmark");
        closeModal.addEventListener('click', (e) => {
            console.log(parentRowId);
            sessionStorage.setItem(`${parentRowId}Content`, contentText)
            const content = parentRow.querySelector(".content");
            content.textContent = handleContentSize(contentText);
            const dates = parentRow.querySelector(".dates");
            dates.value = handleDates(contentText);
            modalContainer = e.target.closest(".modalContainer");
            modalContainer.style.display = "none";
    })

};