const crypto = require('crypto');

// ข้อความที่ต้องการแฮช
// const message = 'admin101';

const targetString = '6b71dfdc4c5603272482f5b80db96a0a';

for(let i=0; i<12; i++){
 findMatch(targetString, i);
}

function findMatch(target, maxLength) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
  let count = 0;
  const results = {};

  function search(currentString) {
    if (currentString.length > maxLength) {
      return null;
    }

    for (let i = 0; i < characters.length; i++) {
      const newString = currentString + characters[i];
      const formattedMd5 = crypto.createHash('md5').update(newString).digest('hex');
      count++;

      // เก็บค่าในออบเจกต์
      results[newString] = formattedMd5;

      console.log(results);

      if (formattedMd5 === target) {
        return { string: newString, hash: formattedMd5, count };
      }

      const result = search(newString);
      if (result) {
        return result;
      }
    }
    return null;
  }

  const result = search('');
  if (result) {
    console.log(`Match found: ${result.string}, Hash: ${result.hash}, Iterations: ${result.count}`);
  } else {
    console.log('No match found');
  }

  // แสดงผลทั้งหมดที่เก็บ
  console.log('All results:', results);

  return result ? result.count : -1;
}

// const targetString = '6b71dfdc4c5603272482f5b80db96a0a';
// const iterations = findMatch(targetString);
console.log(`Number of iterations: ${iterations} : ${targetString}`);



// function findMatch(target, maxLength = 5) {
//   const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
//   let count = 0;
//   const results = {};

//   function search(currentString) {
//     if (currentString.length > maxLength) {
//       return null;
//     }

//     for (let i = 0; i < characters.length; i++) {
//       const newString = currentString + characters[i];
//       const formattedMd5 = crypto.createHash('md5').update(newString).digest('hex');
//       count++;
      
//       results[newString] = formattedMd5;  // เก็บค่าในออบเจกต์
      
//       if (formattedMd5 === target) {
//         return { string: newString, hash: formattedMd5, count };
//       }
      
//       const result = search(newString);
//       if (result) {
//         return result;
//       }
//     }
//     return null;
//   }

//   const result = search('');
//   if (result) {
//     console.log(`Match found: ${result.string}, Hash: ${result.hash}, Iterations: ${result.count}`);
//   } else {
//     console.log('No match found');
//   }

//   console.log('All results:', results);  // แสดงผลทั้งหมดที่เก็บ
//   return result ? result.count : -1;
// }

// const targetString = '6b71dfdc4c5603272482f5b80db96a0a';
// const iterations = findMatch(targetString);
// console.log(`Number of iterations: ${iterations} : ${targetString}`);



// สร้างแฮช MD5
// const md5Hash = crypto.createHash('md5').update(message).digest('hex');

// console.log(md5Hash);
