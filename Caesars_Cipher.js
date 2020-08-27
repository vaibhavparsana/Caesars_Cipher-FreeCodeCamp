function rot13(str) {
  //console.log();
  var arrForAtoM = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
  var arrForNtoZ = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var newStr = "";
  var index = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i].match(/\s/)) {
      newStr += " ";
    }
    else if (arrForAtoM.includes(str[i])) {
      index = arrForAtoM.indexOf(str[i]);
      newStr += arrForNtoZ[index];
    }
    else if (arrForNtoZ.includes(str[i])) {
      index = arrForNtoZ.indexOf(str[i]);
      newStr += arrForAtoM[index];
    } else if (str[i].match(/\W/)) {
      newStr += str[i];
    }
  }
  console.log(newStr)
  return newStr;
}

rot13("SERR PBQR PNZC!");
