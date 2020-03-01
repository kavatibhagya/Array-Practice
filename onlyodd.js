function onlyodds(arr){
    for(var i=0; i<arr.length; i++){

    
        if(arr[i]%2==0)
        {
          arr.splice(i,1);
          i--;
        }
    }
   return arr;
}
var output = onlyodds([1, 2, 3, 3, 5, 6, 6, 7, 8, 9, 7, 8, 4, 3, 6]);
console.log(output);