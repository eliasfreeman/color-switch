const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  // console.log('hello there');
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * hex.length);
    hexColor += hex[randomNumber];
  }
  console.log(hexColor);
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
