const sumAll = function (startingNum, endingNum) {
  if ((typeof startingNum) !== 'number' || (typeof endingNum) !== 'number') {
    return "ERROR";
  }
  if (startingNum < 0 || endingNum < 0) {
    return "ERROR";
  }
  let finalSum = 0;
  if (startingNum > endingNum) {
    let tempVar = startingNum;
    startingNum = endingNum;
    endingNum = tempVar;
  }
  for (let i = startingNum; i <= endingNum; i++) {
    finalSum += i;
  }
  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
