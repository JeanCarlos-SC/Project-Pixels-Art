const colorElemet = document.getElementsByClassName('color');
const palletColor = document.getElementById('color-palette');
const board = document.getElementById('pixel-board');
const pixel = document.getElementsByClassName('pixel');
const size = document.getElementById('board-size');

const generateColor = () => {
  const r = Math.floor(Math.random() * 254);
  const g = Math.floor(Math.random() * 254);
  const b = Math.floor(Math.random() * 254);

  return `rgba(${r},${g},${b})`;
};

const paintPanel = (element) => {
  for (let index = 1; index < element.length; index += 1) {
    const backColor = element;
    backColor[index].style.backgroundColor = generateColor();
  }
};

const createBoard = (sizee) => {
  for (let index = 0; index < sizee; index += 1) {
    const div = document.createElement('div');
    div.classList.add('row');
    for (let i = 0; i < sizee; i += 1) {
      const divChild = document.createElement('div');
      divChild.classList.add('pixel');
      div.appendChild(divChild);
    }
    board.appendChild(div);
  }
};

const selectColor = () => {
  palletColor.addEventListener('click', (event) => {
    const evento = event.target;
    if (evento.classList.contains('color')) {
      const selcted = document.getElementsByClassName('selected')[0];
      selcted.classList.remove('selected');
      evento.classList.add('selected');
    }
  });
};

const changeColor = () => {
  board.addEventListener('click', (event) => {
    const evento = event.target;
    if (evento.classList.contains('pixel')) {
      const color = document.getElementsByClassName('selected')[0].style.backgroundColor;
      evento.style.backgroundColor = color;
    }
  });
};

const clearBoard = () => {
  const butano = document.getElementById('clear-board');
  for (let index = 0; index < pixel.length; index += 1) {
    butano.addEventListener('click', () => { pixel[index].style.backgroundColor = 'white'; });
  }
};

const resetBoard = () => {
  const childs = document.getElementsByClassName('row');
  const otherButton = document.getElementById('generate-board');
  for (let index = 0; index < childs.length; index += 1) {
    const remove = childs[index];
    otherButton.addEventListener('click', () => {
      if (size.value !== '') {
        board.removeChild(remove);
      }
    });
  }
};

const changeBoard = () => {
  const vqv = document.getElementById('generate-board');
  vqv.addEventListener('click', () => {
    if (size.value === '') {
      alert('Board inválido!');
    } else if (size.value < 5) {
      createBoard(5);
      resetBoard();
      clearBoard();
    } else if (size.value > 50) {
      createBoard(50);
      resetBoard();
      clearBoard();
    } else {
      createBoard(size.value);
      resetBoard();
      clearBoard();
    }
  });
};

paintPanel(colorElemet);
createBoard(5);
selectColor();
changeColor();
clearBoard();
resetBoard();
changeBoard();
