
arr1 = [1,2,3];
arr2 = [4,5,6];


function sum(arr1, arr2){
      var s = 0;
      for( var i=0; i<arr1.length; i++){
      s = s + arr1[i];
      }
      for(var j=0; j<arr2.length; j++){
          s = s + arr2[j];
      }
      return s;
}
var sss = sum(arr1, arr2);
const result = document.getElementById('result');

result.innerText =  ' Result is = ' +sss;
