function filterByTerm(inputArray, searchTerm) {
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  if (!inputArray.length) throw Error("inputArray cannot be empty");

  // Case insensitive regular expression
  // i.e. an expression that matches regardless of the string’s case
  const regex = new RegExp(searchTerm, "i");
  return inputArray.filter(arrayElement => arrayElement.url.match(regex));
}

module.exports = filterByTerm;