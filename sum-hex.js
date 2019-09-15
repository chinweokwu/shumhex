function highestSum(Y, N) {
  // write your code...
  if (Y.length < N) {
    return 0;
  }
  const obj = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
  }
  let counter = 0;
  let maxSum = 0;
  let currentSum = 0;
  Y.toLowerCase().split('').forEach(function(el) {
    const numOrString = isNaN(Number(el)) ? obj[el] : Number(el);
    counter++;
    if (counter < N) {
      currentSum += numOrString;
    } else {
      if (counter === N) {
      currentSum += numOrString;
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
        counter = 0;
        currentSum = 0;
      }
    }
  });
  return maxSum;
  
}

module.exports = highestSum;