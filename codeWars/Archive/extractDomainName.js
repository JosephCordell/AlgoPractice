function domainName(url) {
  let domain = url.match(
    /(((http[s]?|ftp):\/\/(\w*\.)?)|([w]{3}\.))(\w*-?\w*)/
  );

  if (typeof domain[4] === String) return domain[4];
  return domain[6];
}

console.log(domainName('http://google.com'));
console.log(domainName('http://www.te8u820qohzw.com/archive/'));
console.log(domainName('https://youtube.com'));
