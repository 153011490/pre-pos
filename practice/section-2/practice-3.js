'use strict';

function countSameElements(collection) {
  var result=[];
  var arrLength=collection.length;
  var count=0;
  for(var i=0;i<arrLength;i++){
    if(i<arrLength-1&&collection[i].substr(0,1)==collection[i+1].substr(0,1)){
      if(collection[i].length>1){
        var str=collection[i];
        if(collection[i].indexOf("-")){
          count+=parseInt(str.substring(2));
          continue;
        }
        if(collection[i].indexOf("[")){
          count+=parseInt(str.substring(2,str.length-1));
          continue;
        }
      }else{
        count++;
      }
    }else{
      if(collection[i].length>1){
        if(collection[i].indexOf("-")||collection[i].indexOf(":")){
          var str=collection[i];
          count+=parseInt(str.substring(2));
        }
      }else{
        count++;
      }
      var temp={name:'',summary:0};
      temp.name=collection[i].charAt(0);
      temp.summary=count;
      result.push(temp);
      count=0;
    }
  }
  return result;
}
