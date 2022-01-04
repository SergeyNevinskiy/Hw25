
function genArray() {
  const numberArray = [];

  function numbersGen() {
    if (numberArray.length === 100) return numberArray;

    const randomNum = Math.round(Math.random() * 100);

    for (let i = 0; i < 100; i++) {
      if (numberArray.includes(randomNum) || randomNum === 0) {
        return numbersGen();
      } else {
        numberArray.push(randomNum);
      }
    }
    return numberArray;
  }
  return numbersGen;
}

let result = genArray();
console.log(result()); 