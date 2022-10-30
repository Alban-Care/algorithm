/**
 * On veut écrire un algorithme qui décide si un mot est un palindrome.
 * Un mot est un palindrome si sa première lettre est identique à la dernière, sa deuxième à l'avantdernière etc
 * L'algorithme sera une fonction prenant en entrée une chaîne de caractères et renvoyant un booléen.
 */

/**
 *
 * @param {*} word
 * @returns
 */
function isPalindrome(word) {
  word = word.toLowerCase().replace(/ /g, "");
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("la mariee ira mal"));
console.log(isPalindrome("palindrome"));
console.log(isPalindrome("Elu par cette crapule"));
