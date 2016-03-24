

function addDigit(newDigit)
{
    if (document.getElementById("screen").value == 0)
    {
        document.getElementById("screen").value = newDigit;
    } else
    {
        document.getElementById("screen").value += newDigit;
    }
    
}
function flush()
{
    
    document.getElementById("screen").value = 0;
}
function calculate()
{
    
    var exp = document.getElementById("screen").value;
    document.getElementById("screen").value = eval(exp);
}