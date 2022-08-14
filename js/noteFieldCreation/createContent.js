export function forContent() {
  let contentContainer = document.createElement('td');
  let content = document.createElement('textarea');
  content.setAttribute('readonly', 'true');
  content.className = 'content';
  content.textContent = 'Click me';
  contentContainer.appendChild(content);
  return contentContainer;
}
