'use strict'
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z']
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const base62 = [...lowerCase, ...upperCase, ...numbers]

const sample = (acc, l) => {
  if (l === 0) return
  acc.push(base62[Math.floor(Math.random() * base62.length)])
  if (l === 1) {
    return acc.join('')
  }
  return sample(acc, l - 1)
}

/* 
  Implementation can be as per below, will generate random characters from
  let keyString = sample([], 6)
  console.log(keyString)
*/
