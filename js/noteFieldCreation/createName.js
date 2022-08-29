export function forName() {
  let name = document.createElement('td');
  let container = document.createElement('section');
  container.className = 'nameContainer';
  let circle = document.createElement('div');
  circle.className = 'circle';
  container.appendChild(circle);
  let nameText = document.createElement('textarea');
  nameText.className = 'name';
  nameText.setAttribute('contentEditable', 'true');
  nameText.textContent = 'Click me';
  nameText.style.color = 'rgba(96, 96, 97,0.8)';
  container.appendChild(nameText);
  name.appendChild(container);
  return name;
}
