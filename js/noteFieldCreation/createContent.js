export function forContent() {
  let contentContainer = document.createElement('td');
  contentContainer.className = 'content-container';
  let content = document.createElement('textarea');
  content.setAttribute('readonly', 'true');
  content.className = 'content';
  content.textContent = 'Click me';
  contentContainer.appendChild(content);
  return contentContainer;
}
