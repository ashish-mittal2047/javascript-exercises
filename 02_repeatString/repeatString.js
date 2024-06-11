const repeatString = function (inputStr, repeatCount) {
  if (repeatCount === 0) {
    return '';
  }
  else if (repeatCount < 0) {
    return 'ERROR';
  }
  else {
    let outputStr = '';
    for (let i = 0; i < repeatCount; i++) {
      outputStr += inputStr;
    }
    return outputStr;
  }
};

// Do not edit below this line
module.exports = repeatString;
