const removeFromArray = function (initialArray, ...removalList) {
  const finalArray = initialArray.filter((value) => !removalList.includes(value));
  return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
