const findIntersection = (strArr) => {
  var outputArray = [];
  stringArray1 = strArr[0].split(",");
  stringArray2 = strArr[1].split(",");
  var intersection = [];
  const intersectionArray = (stringArray1, stringArray2) => {
    for (i = 0; i < stringArray1.length; i++) {
      if (stringArray2.includes(stringArray1[i])) {
        intersection.push(stringArray1[i]);
      }
    }
  };
  intersectionArray(stringArray1, stringArray2);
  return intersection;
};

var intersectionNumbers = findIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]);
console.log("intersection: " + intersectionNumbers);

intersectionNumbers = findIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]);
console.log("intersection: " + intersectionNumbers);

const usernameValidation = (str) => {
  var valid = true;
  var letters = /^[A-Za-z]+$/;
  var validChars = /^[A-Za-z0-9_]+$/;
  if (str.length < 4 || str.length > 25) {
    valid = false;
  }
  else if (!str[0].match(letters)) {
    valid = false;
  }
  else if (!str.match(validChars)) {
    valid = false;
  }
  else if (String(str).endsWith("_")) {
    valid = false;
  }
  return valid;
};

validUserName = (usernameValidation("aa_"));
console.log("valid username? " + validUserName);

validUserName = (usernameValidation("u__hello_world123"));
console.log("valid username? " + validUserName);

const longestWord = (sen) => {
  inputStringArray = sen.split(" ");
  var longest = "";
  var longestLength = 0;
  for (word of inputStringArray) {
    var newWord = word.replace(/[^0-9a-z]/gi, '');
    if (newWord.length > longestLength) {
      longestLength = newWord.length;
      longest = newWord;
    };
  };
  return longest;
};

var longest = longestWord("fun&!! time");
console.log("longest: " + longest);

var longest = longestWord("I love dogs");
console.log("longest: " + longest);

const firstFactorial = (num) => {
  var output = num;
  while (num != 1) {
    num = num - 1;
    output = output * num;
  }
  return output;
};

var firstfactorial = firstFactorial(4);
console.log("firstfactorial: " + firstfactorial);

var firstfactorial = firstFactorial(8);
console.log("firstfactorial: " + firstfactorial);

const checkPalindrome = (input) => {
  inputString = String(input);
  var length = inputString.length;
  var isPalindrome = true;
  temp = Math.floor(length / 2);
  if (length % 2 == 0) {
    for (i = 0; i <= temp; i++) {
      var j = length - 1;
      if (inputString[i] != inputString[j]) {
        isPalindrome = false;
      }
    }
  }
  else {
    for (i = 0; i < temp; i++) {
      var j = length - 1;
      if (inputString[i] != inputString[j]) {
        isPalindrome = false;
      }
    }
  }
  return isPalindrome;
};

var isPalindrome = checkPalindrome(121);
console.log("isPalindrome: " + isPalindrome);

var isPalindrome = checkPalindrome(-121);
console.log("isPalindrome: " + isPalindrome);

var isPalindrome = checkPalindrome(10);
console.log("isPalindrome: " + isPalindrome);

var isPalindrome = checkPalindrome(-101);
console.log("isPalindrome: " + isPalindrome);
