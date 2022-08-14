export function forDates() {
  const datesContainer = document.createElement('td');
  datesContainer.className = 'datesContainer';
  const dates = document.createElement('textarea');
  dates.className = 'dates';
  dates.setAttribute('readonly', 'true');
  datesContainer.appendChild(dates);
  return datesContainer;
}
