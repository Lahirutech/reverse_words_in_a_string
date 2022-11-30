var reverseWords = function (s) {
  const seperateW = s.split(" ");
  let reversed = seperateW.map((wd) => {
    return wd.split("").reverse().join("");
  });
  return reversed.join(" ");
};
module.exports = reverseWords;
