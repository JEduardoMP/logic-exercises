function twoSums(numbs, target) {
  for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] + numbs[i+1] === target){
      return [i, i+1];
    }
    
  }
}

module.exports = twoSums;