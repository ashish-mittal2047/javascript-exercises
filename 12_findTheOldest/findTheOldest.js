const findTheOldest = function (people) {
  people.sort((person1, person2) => {
    let age1;
    if ('yearOfDeath' in person1) {
      age1 = person1.yearOfDeath - person1.yearOfBirth;
    }
    else {
      let curYear = new Date().getFullYear();
      age1 = curYear - person1.yearOfBirth;
    }
    let age2;
    if ('yearOfDeath' in person2) {
      age2 = person2.yearOfDeath - person2.yearOfBirth;
    }
    else {
      let curYear = new Date().getFullYear();
      age2 = curYear - person2.yearOfBirth;
    }
    return age1 - age2;
  });
  return people.pop();
};

// Do not edit below this line
module.exports = findTheOldest;
