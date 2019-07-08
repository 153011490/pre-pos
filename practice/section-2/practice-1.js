'use strict';

function countSameElements(collection) {
  const result=[];
  var arrLength=collection.length;
  var count=0;
  for(var i=0;i<arrLength;i++){
    if(i<arrLength-1&&collection[i]==collection[i+1]){
      count++;
    }else{
      count++;
      var temp={key:'',count:0};
      temp.key=collection[i];
      temp.count=count;
      result.push(temp);
      count=0;
    }
  }
  return result;
}
