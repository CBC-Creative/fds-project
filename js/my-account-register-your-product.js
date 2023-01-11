document.addEventListener('DOMContentLoaded', function () {

  document.getElementById('selectone').onchange = function () 
{
    if (this.value == '0') 
    {
        document.getElementById("selecttwo").disabled = true;
    }

    else 
    {
        document.getElementById("selecttwo").disabled = false;
    }
}
document.getElementById('selecttwo').onchange = function () 
{
    if (this.value == '0') 
    {
        document.getElementById("selectthree").disabled = true;
    }

    else 
    {
        document.getElementById("selectthree").disabled = false;
    }
}
document.getElementById('selectthree').onchange = function () 
{
    if (this.value == '0') 
    {
        document.getElementById("selectfour").disabled = true;
    }

    else 
    {
        document.getElementById("selectfour").disabled = false;
    }
}
document.getElementById('selectfour').onchange = function () 
{
    if (this.value == '0') 
    {
        document.getElementById("PurchaseDate").disabled = true;
    }

    else 
    {
        document.getElementById("PurchaseDate").disabled = false;
    }
}

});