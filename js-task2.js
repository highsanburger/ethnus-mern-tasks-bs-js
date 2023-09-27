function alphabeticalSort(str) {
  const sorted = str.split('').sort().join('');
  return sorted;
}

const inp = 'webmaster';
const out = alphabeticalSort(inp);
console.log(out); 
