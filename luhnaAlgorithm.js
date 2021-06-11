const sumScore = arr => {
  if (!arr.length) return [];
  return arr.reduce((prev, next) => Number(prev) + Number(next));
};

function luhnaAlgorithm(nums) {
  const evenArr = [];
  const oddArr = [];

  nums.forEach((num, i) => {
    const evenNumberCondition = i % 2;
    evenNumberCondition ? oddArr.push(num) : evenArr.push(num);
  });

  const evenConcat = evenArr.reverse().map(num => {
    let splitNum = (num * 2).toString().split('');

    return splitNum.length > 1
      ? (splitNum = sumScore(splitNum))
      : (splitNum = Number(splitNum));
  });

  const even = sumScore(evenConcat);
  const odd = sumScore(oddArr);
  const result = (even + odd) % 10;

  return result === 0 ? true : false;
}

export default luhnaAlgorithm;
