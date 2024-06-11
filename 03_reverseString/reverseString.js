const reverseString = function (strToReverse) {
  if (strToReverse === '')
    return '';
  else {
    arrayFormOfStr = strToReverse.split("");
    arrayFormOfStr.reverse();
    let reversedStr = arrayFormOfStr.join("");
    return reversedStr;
  }
};

// Do not edit below this line
module.exports = reverseString;
