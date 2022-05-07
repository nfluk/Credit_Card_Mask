function maskify(cc) {
  let maskedString = '';
  const stringToMask = cc.length - 4;
  const endString = cc.slice(stringToMask);

  for (let i = 0; i < stringToMask; i++) {
    maskedString += '#';
  }
  return maskedString + endString;
}
