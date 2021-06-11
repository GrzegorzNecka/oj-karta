import getCardName from './getCardName ';
import luhnaAlgorithm from './luhnaAlgorithm';

const createArrOfCardNum = cardNumber => {
  return cardNumber.split('').map(num => Number(num));
};

const checkCardNumber = cardNumber => {
  const arrOfCardNum = createArrOfCardNum(cardNumber);
  const CardName = getCardName(arrOfCardNum);
  const luhnaPattern = luhnaAlgorithm(arrOfCardNum);

  if (!luhnaPattern) return 'Nieprawidłowy';

  return CardName;
};

export default checkCardNumber;
