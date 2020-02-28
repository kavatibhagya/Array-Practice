var arr1 = [1,2,3];
var arr2 = [4,5,6];

 var out =[];

function sum(arr1, arr2){

     for(i=0; i<arr1.length; i++){
           
        
        var s = arr1[i]+ arr2[i];
          out.push(s);

     }
     return out;
}
var sss = sum(arr1, arr2);
const result2 = document.getElementById('result2');


result2.innerText =  ' Result is = ' +sss;

