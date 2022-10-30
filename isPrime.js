/*
Nombres premiers
Étape 1
Calculer et afficher les nombres premiers compris entre 0 et 1000
Rappel : Un nombre premier est un nombre qui a exactement 2 diviseurs distincts entiers et positifs (0 et 1 ne sont donc
pas premiers)
Étape 2
Paramétrer la limite de recherche des nombres premiers (au lieu de 1000 dans l'exercice précédent)
*/

function isPrime(n) {
  if (n < 2) return false;
  for(let i = n - 1; i > 1; i--) if (n % i === 0) return false
  return true;
}

// Étape 1
for (let i = 0; i <= 1000; i++) if (isPrime(i)) console.log(i)

// Étape 2
function optimistPrime(max) {
  for (let i = 0; i <= max; i++) if (isPrime(i)) console.log(i)
}