/**
 * Algorithme polynomial
 *
 * On calcule le n-ième terme de la suite de Fibonacci en mémorisant deux termes consécutifs de la suite.
 * On commence avec les deux premières valeurs a = 0 et b = 1,
 * puis on remplace répétitivement le premier nombre par le second, et le second nombre par la somme des deux.
 */

/**
 * Retourne le n-ième terme de la suite de Fibonacci
 * Utilisation de la fonction récursive
 * @param {Number} index
 * @returns
 */
function fibrec(index) {
  if (index < 2) return index;
  return fibrec(index - 1) + fibrec(index - 2);
}

console.log(fibrec(16));

/**
 * Retourne le n-ième terme de la suite de Fibonacci
 * Utilisation de la fonction itérative
 * @param {Number} index
 * @returns
 */
function fibit(index) {
  let a = 0;
  let b = 1;
  let sum = 0;
  for (let i = 2; i <= index; i++) {
    sum = a + b;
    a = b;
    b = sum;
  }
  return index ? b : a;
}

console.log(fibit(16));
