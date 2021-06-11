import './style.css';
import checkCardNumber from './checkCardNumber';

const form = document.getElementById('form');

const getValInput = e => {
  e.preventDefault();
  const cardNumber = e.target.querySelector('input').value;
  const output = e.target.querySelector('output');
  const result = checkCardNumber(cardNumber);

  output.innerText = `nazwa karty: ${result} `;
};

form.addEventListener('submit', getValInput);
