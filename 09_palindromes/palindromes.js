const alphanumeric = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

const palindromes = function (str) {
  str = str.toLowerCase().split('').filter((char) => {
    return alphanumeric.includes(char);
  })
    .join('');
  if (str === str.split('').toReversed().join(''))
    return true;
  else return false;
};

// Do not edit below this line
module.exports = palindromes;
