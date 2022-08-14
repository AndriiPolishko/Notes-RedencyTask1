import { suitableDayForm } from '../date.js';

export function forCreated() {
  const createdCeil = document.createElement('td');
  createdCeil.className = 'createContainer';
  const createdData = document.createElement('span');
  createdData.textContent = suitableDayForm;
  createdCeil.appendChild(createdData);
  return createdCeil;
}
