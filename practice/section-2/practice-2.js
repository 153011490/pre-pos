'use strict';

function countSameElements(collection) {
  var result=[];
  var arrLength=collection.length;
  var count=0;
  for(var i=0;i<arrLength;i++){
    if(i<arrLength-1&&collection[i].substr(0,1)==collection[i+1].substr(0,1)){
      if(collection[i].length>1){
        if(collection[i].indexOf("[")){
          var str=collection[i];
          count+=parseInt(str.substring(2,str.length-2));
        }
      }else{
        count++;
      }
    }else{
      if(collection[i].length>1){
        if(collection[i].indexOf("-")){
          var str=collection[i];
          count+=parseInt(str.substring(2));
        }
      }else{
        count++;
      }
      var temp={key:'',count:0};
      temp.key=collection[i].charAt(0);
      temp.count=count;
      result.push(temp);
      count=0;
    }
  }
  return result;
}
