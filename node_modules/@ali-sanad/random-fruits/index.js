const {fruits} = require('./assets/fruits-data');

const {
  generateRandomFruitListData,
  generateRandomNumber,
  ASCII_NUMBER_FOR_UPPER_CASE_A_LETTER,
  ASCII_NUMBER_FOR_UPPER_CASE_Z_LETTER,
} = require('./utils/helper');

const randomFruit = () => {
  const {fruitsList} = generateRandomFruitListData(fruits);
  return fruitsList[generateRandomNumber(fruitsList.length)];
};

const randomFruits = (numberOfFruits = 5) => {
  let {currentFruitAsciiNumber, currentFruitGroupLetter, fruitsList} =
    generateRandomFruitListData(fruits);

  while (fruitsList.length < numberOfFruits) {
    if (currentFruitAsciiNumber < ASCII_NUMBER_FOR_UPPER_CASE_Z_LETTER) {
      currentFruitAsciiNumber++;
    } else {
      currentFruitAsciiNumber = ASCII_NUMBER_FOR_UPPER_CASE_A_LETTER;
    }

    currentFruitGroupLetter = String.fromCharCode(currentFruitAsciiNumber);
    fruitsList = [...fruitsList, ...fruits[currentFruitGroupLetter]];
  }

  return fruitsList.slice(0, numberOfFruits);
};

module.exports = {
  randomFruit,
  randomFruits,
};
