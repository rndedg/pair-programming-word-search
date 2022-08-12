const transpose = function(letters) {
  // Put your solution here
  let result = [];
  for (let i = 0; i < letters[0].length; i++) {
    let innerArr = [];
    for (let j = 0; j < letters.length; j++) {
      innerArr.push(letters[j][i]);
    }
    result.push(innerArr);
  }
  return result;
};



const wordSearch = (letters, word) => {
  const verticalWords = transpose(letters);
  const matrix = {
    horizontalJoin: letters.map(ls => ls.join('')),
    verticalJoin: verticalWords.map(ls => ls.join(''))

  };


  for (const searches in matrix) {
    for (const ltrs of matrix[searches]) {
      if (ltrs.includes(word)) {
        return true;
      }
    }

  }

  return false;
};





module.exports = wordSearch;