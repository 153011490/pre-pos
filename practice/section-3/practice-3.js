'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionC=[];
  var result=[];
  var arrLength=collectionA.length;
  var count=0;
  for(var i=0;i<arrLength;i++){
    if(i<arrLength-1&&collectionA[i]==collectionA[i+1]){
      count++;
    }else{
      count++;
      var temp={key:'',count:0};
      temp.key=collectionA[i];
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
