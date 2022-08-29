import { contentModalWindowElements } from './contentModalWindowElements.js';

export function noteContent() {
  const contentBlocks = document.querySelector('tbody');

  contentBlocks.addEventListener('click', handleContentClick);
}

function handleContentSize(contentText) {
  if (contentText.length > 11) return `${contentText.slice(0, 9)}...`;
  return contentText;
}

function handleDates(contentText) {
  const dateRegEx = /\d{2}([\/.-])\d{2}\1\d{4}/g;
  const dates = contentText.match(dateRegEx);
  if (dates) {
    return dates.join(',');
  }
  return '';
}

const [modalContainer] = contentModalWindowElements();
document.body.appendChild(modalContainer);

let parentRowId;
let contentText;
let parentRow;

const handleContentClick = function (e) {
  if (e.target.className === 'content') {
    modalContainer.style.display = 'flex';

    parentRow = e.target.closest('.note');
    console.log(parentRow);
    parentRowId = parentRow.getAttribute('id');

    document.querySelector('.modalTextArea').value = sessionStorage.getItem(
      `${parentRowId}Content`
    );
  }
};

const closeModal = document.querySelector('.fa-xmark');

closeModal.addEventListener('click', (e) => {
  contentText = document.querySelector('.modalTextArea').value;
  sessionStorage.setItem(`${parentRowId}Content`, contentText);
  const content = parentRow.querySelector('.content');
  content.textContent = handleContentSize(contentText);
  const dates = parentRow.querySelector('.dates');
  dates.value = handleDates(contentText);
  modalContainer.style.display = 'none';
});
