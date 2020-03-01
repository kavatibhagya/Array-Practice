var n;
var even = [];
 var odd = [];
function evenOrOdd(n)
{
    for( var i=0; i<=n; i++)
    {
        if(i%2==0)
        {
          even.push(i);
        }
        else {
           odd.push(i);
        }
    }
}
evenOrOdd(10);
 console.log(even);
 console.log(odd);