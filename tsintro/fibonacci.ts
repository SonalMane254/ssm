var var1 = 0;
var var2 = 1;
var var3;

var num = 20;

console.log(var1);
console.log(var2);

for(var i=3; i <= num;i++)
{
    var3 = var1 + var2;
    var1 = var2;
    var2 = var3;

    console.log(var3);
}