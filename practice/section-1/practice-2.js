'use strict';

function collectSameElements(collectionA, collectionB) {
  const result=[];
  for(var ch in collectionA ){
    for(var ch2 in collectionB[0]){
      if(collectionA[ch]==collectionB[0][ch2]){
        result.push(collectionA[ch]);
        break;
      }
    }
  }
  return result;
}
