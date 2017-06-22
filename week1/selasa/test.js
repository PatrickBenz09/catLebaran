// Ensure all of the Social Security numbers use dashes for delimiters.
// Example: 480.01.4430 and 480014430 would both be 480-01-4430.
const format_nomor = (string) => {
  let okay = 0;
  string = string.replace(/[!\-@#$%^&*()+=/|.,;]/g, '').split(' ');
  for (i in string) {
    string[i] = string[i].replace(/(\d{3})(\d{2})(\d{4})/g, '$1-$2-$3');
    if (string[i].match(/\d{3}-\d{2}-\d{4}/g)) okay++;
  }
  if (okay > 0) return string.join(', ');
  else return string.join(' ');
}

console.log('format_nomor finds and reformat any nomor KTP in the string')
console.log(format_nomor('234601422, 350.80.0744, 013-60-8762') === '234-60-1422, 350-80-0744, 013-60-8762') // true

console.log('format_nomor does not alter a string without nomor KTP in it')

let formatString = 'please confirm your identity: 44211422'
console.log(format_nomor(formatString) === formatString) // true