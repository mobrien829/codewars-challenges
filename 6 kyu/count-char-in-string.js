function count(string) {
  const stringObject = {};
  const stringChars = string.split("");
  stringChars.forEach((char) => {
    if (stringObject[char]) {
      stringObject[char] = stringObject[char] + 1;
    } else {
      stringObject[char] = 1;
    }
  });
  return stringObject;
}
