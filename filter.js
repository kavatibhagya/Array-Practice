const arr = [3, 5, 7, 9, 12, 15];


const threeMultiples = arr.filter(function(numbers){
     if(numbers%3==0){
         return true;

     }
});
console.log(threeMultiples);