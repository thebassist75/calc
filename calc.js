// Variables
var x = document.getElementById("x");
var y = document.getElementById("y");
var z = document.getElementById("z");
var btAdd = document.getElementById("add");
var btSub = document.getElementById("sub");
var btMul = document.getElementById("mul");
var btDivd = document.getElementById("divd");

//Input Box
var Numb = "";

function storenum(){
  if(myTotal[1]=="="){
    Numb = "";
    myTotal[1]="";
  }
  Numb = Numb + this.innerHTML;
  document.getElementById("result").value = Numb;
}

//Table 2
var myTotal = [];

function add(){
  equals();
  myTotal[0] = Numb;
  myTotal[1] = '+';
  //myTotal[1] + Number(document.getElementById("result").innerHTML);
  //document.getElementById("result").innerHTML = myTotal;
}

function subtract(){
  myTotal = myTotal - Number(document.getElementById("result").innerHTML);
  document.getElementById("result").innerHTML = myTotal;
}

function multiply(){
  myTotal = myTotal * Number(document.getElementById("result").innerHTML);
  document.getElementById("result").innerHTML = myTotal;
}

function divide(){
  myTotal = myTotal / Number(document.getElementById("result").innerHTML);
  document.getElementById("result").innerHTML = myTotal;
}

function equals(){
  if (myTotal[1]== "+"){
    myTotal[0] = myTotal[1] + Numb;
    document.getElementById('result').value = myTotal[0];
    }
}
//Erase function
function erase(){
  document.getElementById('result').value = "";
  Numb = "";
}

//Event Listeners
x.addEventListener('click', storenum);
y.addEventListener('click', storenum);
z.addEventListener('click', storenum);
btAdd.addEventListener('click', add);
btSub.addEventListener('click', subtract);
btMul.addEventListener('click', multiply);
btDivd.addEventListener('click', divide);
