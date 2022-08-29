export function forDates() {
  const datesContainer = document.createElement('td');
  datesContainer.className = 'datesContainer';
  const dates = document.createElement('textarea');
  dates.className = 'dates';
  dates.style.color = 'rgba(96, 96, 97,0.8)';
  dates.setAttribute('readonly', 'true');
  datesContainer.appendChild(dates);
  return datesContainer;
}
