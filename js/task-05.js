/* Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous". */

const inputName = document.querySelector('#name-input');
const outputNameIndicator = document.querySelector('#name-output');

inputName.addEventListener('input', e => {
  outputNameIndicator.textContent = inputName.value;
  console.log(inputName.value);
  if (inputName.value === '') {
    outputNameIndicator.textContent = 'Anonimus';
  }
});
