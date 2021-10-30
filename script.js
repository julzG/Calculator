const btn = document.querySelectorAll('button');

const display = document.querySelector('.display');

btn.forEach(function(button) {
  button.addEventListener('click', answer);
});

function answer(event) {
  const keypadValue = event.target.value;

  if (keypadValue === '=') {
    if (display.value !== '') {
      display.value = eval(display.value);
    }
  } else if (keypadValue === 'C') {
    display.value = '';
  } else {
    display.value += keypadValue;
  }
}