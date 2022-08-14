export function contentModalWindowElements() {
    const modalContainer = document.createElement("div");
    modalContainer.className = "modalContainer";

    const modalInner = document.createElement("div");
    modalInner.className = "modalInner";

    const closeIcon = document.createElement("i");
    closeIcon.className = "fa-solid fa-xmark";

    const modalTextArea = document.createElement("textarea")
    modalTextArea.className = "modalTextArea";

    modalInner.appendChild(closeIcon);
    modalInner.appendChild(modalTextArea);
    modalContainer.appendChild(modalInner);
    return [modalContainer];
}