
function checkCardStartWith(cardNumber, cardName) {
 
  const stringCardNumber = cardNumber.join('').toString();
  const firstNumbers = {
    mastercard: ['51', '52', '53', '54', '55'],
    visa: ['4'],
    americanExpress: ['34', '37']
  };

  const checkFirstNumbers = firstNumbers[cardName].filter(num => {
    return stringCardNumber.startsWith(num);
  });

  return checkFirstNumbers.length ? cardName : 'Nieprawidłowy';
}

function getCardName(arrOfNumbers) {
  let checkCardStart;

  switch (arrOfNumbers.length) {
    case 16:
      checkCardStart =
        checkCardStartWith(arrOfNumbers, 'mastercard') ||
        checkCardStartWith(arrOfNumbers, 'visa');
      break;
    case 13:
      checkCardStart = checkCardStartWith(arrOfNumbers, 'visa');
      break;
    case 15:
      checkCardStart = checkCardStartWith(arrOfNumbers, 'americanExpress');
      break;
    default:
      checkCardStart = 'Nieprawidłowy';
  }

  return checkCardStart;
};

export default getCardName;
