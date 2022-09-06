const findDivisors = (n) => {
  const divisors = []
  for (let trialDivisor = 1; trialDivisor <= n; trialDivisor++) {
    if (n % trialDivisor === 0) {
      divisors.push(trialDivisor)
    }
  }
  return divisors
}

const findHighlyDivisibleNumbers = (upTo) => {
  let highWaterMark = 0
  const highlyDivisibleNumbers = {}
  for(let n = 1; n <= upTo; n++) {
    const divisors = findDivisors(n)
    const divisorCount = divisors.length
    if (divisorCount > highWaterMark) {
      console.log(n, divisorCount)
      console.log(divisors)
      // highlyDivisibleNumbers[n] = [divisorCount, divisors]
      highWaterMark = divisorCount
    }
  }
  return highlyDivisibleNumbers
}

// console.log(findDivisors(process.argv[2]));
findHighlyDivisibleNumbers(process.argv[2]);
