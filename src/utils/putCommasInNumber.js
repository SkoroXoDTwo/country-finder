export const putCommasInNumber = (number) => {
  number = String(number).split("").reverse();

  for (let i = 0; i < Math.floor(number.length / 4); i++) {
    number.splice(i * 4 + 3, 0, ",");
  }

  return number.reverse().join("");
};
