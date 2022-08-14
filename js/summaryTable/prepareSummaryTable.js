import { CATEGORIES } from '../global/addButtonEvent.js';

export function prepareSummaryTable() {
  let currentCategories = Object.getOwnPropertyNames(CATEGORIES);
  const summaryTableBody = document.querySelector('.summary-table > tbody');

  for (let i = 0; i < currentCategories.length; i++) {
    const category = currentCategories[i];

    const categoryRow = document.createElement('tr');
    categoryRow.id = CATEGORIES[category].name;
    categoryRow.className = 'note';

    const noteCategory = document.createElement('td');
    noteCategory.className = 'noteCategory';
    const noteCategoryContainer = document.createElement('section');

    noteCategoryContainer.className = 'nameContainer';
    let circle = document.createElement('div');
    circle.className = 'circle';
    const icon = document.createElement('i');
    if (CATEGORIES[category].icon)
      icon.className = CATEGORIES[category].icon.join(' ');
    circle.appendChild(icon);
    noteCategoryContainer.appendChild(circle);

    const categoryTypeName = document.createElement('span');
    categoryTypeName.textContent = CATEGORIES[category].name;
    noteCategoryContainer.appendChild(categoryTypeName);
    noteCategory.appendChild(noteCategoryContainer);

    const numberOfActiveContainer = document.createElement('td');
    numberOfActiveContainer.className = 'numberOfActiveContainer';
    const numberOfActive = document.createElement('span');
    numberOfActive.className = 'number';
    numberOfActive.textContent = '0';
    numberOfActiveContainer.appendChild(numberOfActive);

    const numberOfArchivedContainer = document.createElement('td');
    numberOfArchivedContainer.className = 'numberOfArchivedContainer';
    const numberOfArchived = document.createElement('span');
    numberOfArchived.className = 'number';
    numberOfArchived.textContent = '0';
    numberOfArchivedContainer.appendChild(numberOfArchived);

    categoryRow.appendChild(noteCategory);
    categoryRow.appendChild(numberOfActiveContainer);
    categoryRow.appendChild(numberOfArchivedContainer);

    summaryTableBody.appendChild(categoryRow);
  }
}
