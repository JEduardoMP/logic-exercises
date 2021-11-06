function arrayOfMultiples (num, length) {
  let container = [];
  for (let i = 1; i <= length; i++) {
    container.push(i*num);
  }
  return container;
}

module.exports = arrayOfMultiples;