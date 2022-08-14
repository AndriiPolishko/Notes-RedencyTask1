import { CATEGORIES } from '../global/addButtonEvent.js';
import { renderSummaryTable } from '../summaryTable/renderSummaryTable.js';

export function forCategory() {
  const icon = document.createElement('i');

  const createElement = (selector, text = '', options = {}) => {
    const element = document.createElement(selector);
    element.innerHTML = text;
    for (const key in options) {
      element[key] = options[key];
    }
    return element;
  };

  const changeIcon = (icon, classNames, e) => {
    icon.classList.remove(...icon.classList); //чистимо класи іконки
    for (const className of classNames) {
      icon.classList.add(className);
    }
    let note = e.target.closest('.note');
    let circle = note.querySelector('.circle');
    circle.appendChild(icon);
  };

  const renderCategories = (parent, categories) => {
    for (const category in categories) {
      const child = createElement('option', category, {
        value: category,
      });
      parent.appendChild(child);
    }
  };

  const categoryChangeHandler = (e) => {
    const value = e.target.value;
    changeIcon(icon, CATEGORIES[value].icon, e);
    renderSummaryTable();
  };

  let select = document.createElement('select');
  select.className = 'category';
  select.setAttribute('name', 'categories');

  renderCategories(select, CATEGORIES);
  select.addEventListener('change', categoryChangeHandler);
  let category = document.createElement('td');
  category.className = 'categoryContainer';
  category.appendChild(select);

  return category;
}
