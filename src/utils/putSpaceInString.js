export const putSpaceInString = (str) => {
  str = str.split("");
  let res = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === str[i] && i!== 1 ) {
      res.push(` ${str[i]}`)
    }
    else {
      res.push(str[i])
    }
  }

  return res.join("");
};
