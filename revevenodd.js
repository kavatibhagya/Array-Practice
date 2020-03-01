var n;
function revEvenOrOdd(n){
    var even = [];
    var odd = [];
    for(i=0; i<=n; i++)
    {
        if(i%2==0) 
        {
            even.unshift(i);

        }
        else{
            odd.unshift(i);

        }
    }
    


    console.log(even);
    console.log(odd);
}
revEvenOrOdd(10);
