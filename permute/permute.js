function permute(str) {
 if (str.length <= 1) return [str];

 const result = [];
 for (let i = 0; i < str.length; i++) {
   const char = str[i];
   const remainingString = str.slice(0, i) + str.slice(i + 1);
   for (let subPermute of permute(remainingString)) {
     result.push(char + subPermute);
   }
 }
 return result;
}

const permutations = permute("abcd");
console.log(`Total permutations: ${permutations.length}`);
console.log(permutations);

// function permute2(str){
//  if(str.length <= 1) return [str];

//  const result = [];
//  for(let i=0; i <= str.length; i++){
//   const char = str[i];
//   for(let j=1; j <= str.length; j++){
//    char + str[j];
//   }
//   for(let b=2; b <= str.length; b++){
//    char + str[b];
//   }
//   result.push(char);
//  }
//  return result;
// }


// console.log(permute2("abcd"));