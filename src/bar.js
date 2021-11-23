export function bar() {
  const button = document.createElement('button');
  button.innerText = 'hello';

  document.body.appendChild(button);

  return;
}
