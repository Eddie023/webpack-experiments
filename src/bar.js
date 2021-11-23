import { Button } from "@material-ui/core";

export function bar(){
  const button = document.createElement('button');
  button.innerText = 'hello'

  document.body.appendChild(button)

  return "called from bar func"
}

export function bar2(){
  return 's'
}

console.log('inside ba');
