var arr1 = [1,2,3];
var arr2 = [4,5,6];
  
var output = [];
 
 function sum(arr1, arr2){
      

    for(i= 0; i<arr1.length; i++){
      
    var s = arr1[i]+arr2[arr1.length-1];
     output.push(s);
 }
 
return output;
}


 var ss = sum(arr1, arr2);
 
   const result3 = document.getElementById('result3');

result3.innerText = 'Result is ' +ss; 