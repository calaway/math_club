function bigIntSqrt(square) {
  function iteration(square, guess0) {
    const guess1 = (guess0 + (square / guess0)) / 2n
    if (guess1 === guess0 || guess1 === (guess0 - 1n)) {
      return guess1
    }
    return iteration(square, guess1)
  }
  return iteration(square, 1n)
}

function isPrime1(trialPrime) {
  console.time('time')
  for (let trialDivisor = 2n; trialDivisor < trialPrime; trialDivisor += 1n) {
    if (trialPrime % trialDivisor == 0n) {
      console.timeEnd('time')
      return trialDivisor
    }
  }
  console.timeEnd('time')
  return true
}

function isPrime2(trialPrime) {
  console.time('time')
  if (trialPrime % 2n == 0n) {
    console.timeEnd('time')
    return 2n
  }
  for (let trialDivisor = 2n; trialDivisor < trialPrime; trialDivisor += 2n) {
    if (trialPrime % trialDivisor == 0n) {
      console.timeEnd('time')
      return trialDivisor
    }
  }
  console.timeEnd('time')
  return true
}

function isPrime3(trialPrime) {
  console.time('time')
  if (trialPrime % 2n == 0n) {
    console.timeEnd('time')
    return 2n
  }
  let counter = 1
  const limit = bigIntSqrt(trialPrime)
  console.log('limit:', limit);
  for (let trialDivisor = 3n; trialDivisor <= limit; trialDivisor += 2n) {
    if (trialPrime % trialDivisor == 0n) {
      console.timeEnd('time')
      return trialDivisor
    }
    if (trialDivisor > 10 ** counter) {
      console.log(`checked through 10^${counter}`)
      counter++
    }
  }
  console.timeEnd('time')
  return true
}

module.exports = {
  isPrime1,
  isPrime2,
  isPrime3
}

// 1000000000000066600000000000001
// const prime = require('./prime.js')
// 1000000000000033n
