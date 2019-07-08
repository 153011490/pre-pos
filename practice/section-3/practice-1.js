'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result=[];
  for(var i=0;i<collectionA.length;i++){
    var temp={key:"",count:0};
    for(var j=0;j<objectB.value.length;j++){
      if(collectionA[i].key==objectB.value[j]){
        temp.key=collectionA[i].key;
        temp.count=collectionA[i].count-1;
        break;
      }else if(j==objectB.value.length-1){
        var temp={key:"",count:0};
        temp.key=collectionA[i].key;
        temp.count=collectionA[i].count;
      }
    }
    result.push(temp);
  }
  return result;
}
