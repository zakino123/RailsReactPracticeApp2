// 1, 0の組み合わせを作成
function generateCombinations() {
  // ①
  // let combinations = [];

  // for (let a = 0; a <= 1; a++) {
  //   for (let b = 0; b <= 1; b++) {
  //     for (let c = 0; c <= 1; c++) {
  //       combinations.push([a, b, c]);
  //     }
  //   }
  // }

  // console.log(combinations);

  // ②
  let combinations = [];

  for (let i = 0; i < 8; i++) {
    const binaryNumber = i.toString(2).padStart(3, '0');
    const digitNumbers = binaryNumber.split('').map(Number);
    combinations.push(digitNumbers);
  }

  console.log(combinations);
}
