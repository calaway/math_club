function notShared(people) {
  if (people >= 1) {
    return (365 - people + 1) * notShared(people - 1) / 365
  } else {
    return 1
  }
}

function percent(decimal) {
  return Math.round(decimal * 1000) / 10
}

var output = {}
for (let index = 1; index <= process.argv[2]; index++) {
  const result = notShared(index)
  output[index] = {
    'Odds Not Shared': percent(result),
    'Odds Shared': percent(1 - result),
  }
}

console.table(output)
