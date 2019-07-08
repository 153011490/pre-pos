'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionC=[];
  var result=[];
  var arrLength=collectionA.length;
  var count=0;
  for(var i=0;i<arrLength;i++){
    if(i<arrLength-1&&collectionA[i].substr(0,1)==collectionA[i+1].substr(0,1)){
      if(collectionA[i].length>1){
        var str=collectionA[i];
        if(collectionA[i].indexOf("-")){
          count+=parseInt(str.substring(2));
          continue;
        }
      }else{
        count++;
      }
    }else{
      if(collectionA[i].length>1){
        if(collectionA[i].indexOf("-")){
          var str=collectionA[i];
          count+=parseInt(str.substring(2));
        }
      }else{
        count++;
      }
      var temp={key:'',count:0};
      temp.key=collectionA[i].charAt(0);
      temp.count=count;
      collectionC.push(temp);
      count=0;
    }
  }
  for(var i=0;i<collectionC.length;i++){
    var temp={key:"",count:0};
    for(var j=0;j<objectB.value.length;j++){
      if(collectionC[i].key==objectB.value[j]){
        if(collectionC[i].count>3){
          temp.key=collectionC[i].key;
          temp.count=collectionC[i].count-Math.floor(collectionC[i].count/3);
          break;
        }else{
          temp.key=collectionC[i].key;
          temp.count=collectionC[i].count-1;
          break;
        }
      }else if(j==objectB.value.length-1){
        var temp={key:"",count:0};
        temp.key=collectionC[i].key;
        temp.count=collectionC[i].count;
      }
    }
    result.push(temp);
  }
  return result;
}
