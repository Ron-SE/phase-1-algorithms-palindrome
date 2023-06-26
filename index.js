function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord= reversing(word);

  if (word === reversedWord){
    return true;
  }else{
    return false;
  }
}
const reversing = (word)=>{
  const wordArray =  word.split('');

  //Reversing the array
  const reverseWordArray = wordArray.reverse();

  //Join the reversed array to create a string
  const reversedWord = reverseWordArray.join('');

  return reversedWord;
}



/* 
  

*/

/*
 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
