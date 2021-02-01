const alphabet = "abcdefghijklmnopqrstuvwxyz"

function solve(s) {
  for (let i = 0; i <= s.length / 2; i++) {
    const letterA = alphabet.indexOf(s[i])
    const letterB = alphabet.indexOf(s[s.length - 1 - i])
    const diffLetter = Math.abs(letterA - letterB)
    if (diffLetter > 2 || diffLetter === 1) return false
  }
  return true
}

console.log(solve('afha'))