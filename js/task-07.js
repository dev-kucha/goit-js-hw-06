/* Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span> */

const fontSizeControl = document.querySelector('#font-size-control');
const indicatorText = document.querySelector('#text');

fontSizeControl.addEventListener('input', onChangeFontSizeValue);

function onChangeFontSizeValue(event) {
  indicatorText.style.fontSize = `${fontSizeControl.value}px`;
}
