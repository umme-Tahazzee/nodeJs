const generateRandomNumber = max => Math.floor(Math.random() * max);

const ASCII_NUMBER_FOR_UPPER_CASE_A_LETTER = 65;
const ASCII_NUMBER_FOR_UPPER_CASE_Z_LETTER = 90;
const ALPHAPETIC_NUMBERS = 26;

const generateRandomFruitListData = list => {
  let currentFruitAsciiNumber =
    ASCII_NUMBER_FOR_UPPER_CASE_A_LETTER +
    generateRandomNumber(ALPHAPETIC_NUMBERS);
  let currentFruitGroupLetter = String.fromCharCode(currentFruitAsciiNumber);
  let fruitsList = list[currentFruitGroupLetter];

  return {
    currentFruitAsciiNumber,
    currentFruitGroupLetter,
    fruitsList,
  };
};

module.exports = {
  generateRandomNumber,
  generateRandomFruitListData,
  ALPHAPETIC_NUMBERS,
  ASCII_NUMBER_FOR_UPPER_CASE_A_LETTER,
  ASCII_NUMBER_FOR_UPPER_CASE_Z_LETTER,
};
