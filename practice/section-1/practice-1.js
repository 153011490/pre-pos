'use strict';

function collectSameElements(collectionA, collectionB) {
  const result=[];
  for(var ch in collectionA ){
    for(var ch2 in collectionB){
      if(collectionA[ch]==collectionB[ch2]){
        result.push(collectionA[ch]);
        break;
      }
    }
  }
  return result;
}
