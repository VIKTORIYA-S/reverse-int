module.exports = function reverse (n) {
  n = Math.abs(n);
  let num = n.toString().split('').reverse().join('');
  console.log(+num);
  return +num;
}
