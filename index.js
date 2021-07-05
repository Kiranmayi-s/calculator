var div1 = document.createElement('div');
var text1 = document.createElement('input');
var heading = document.createElement('span');
heading.innerHTML="JS CALCULATOR";

text1.setAttribute('id','result');
text1.setAttribute('onkeyup','fun()');

div1.append(heading, text1);

var div2 = document.createElement('div');
var table = document.createElement('table');

var tr = document.createElement('tr');
var td1= createtrth('button','1');
td1.setAttribute('onclick','display(1)');
var td2= createtrth('button','2');
td2.setAttribute('onclick','display(2)');
var td3= createtrth('button','3');
td3.setAttribute('onclick','display(3)');
var td4= createtrth('button','/');
td4.setAttribute('onclick','display("/")');
tr.append(td1,td2,td3,td4);

var tr1 = document.createElement('tr');
var td5= createtrth('button','4');
td5.setAttribute('onclick','display(4)');
var td6= createtrth('button','5');
td6.setAttribute('onclick','display(5)');
var td7= createtrth('button','6');
td7.setAttribute('onclick','display(6)');
var td8= createtrth('button','-');
td8.setAttribute('onclick','display("-")');
tr1.append(td5,td6,td7,td8);

var tr2 = document.createElement('tr');
var td9= createtrth('button','7');
td9.setAttribute('onclick','display(7)');
var td10= createtrth('button','8');
td10.setAttribute('onclick','display(8)');
var td11= createtrth('button','9');
td11.setAttribute('onclick','display(9)');
var td12= createtrth('button','+');
td12.setAttribute('onclick','display("+")');

tr2.append(td9,td10,td11,td12);

var tr3 = document.createElement('tr');
var td13= createtrth('button','.');
td13.setAttribute('onclick','display(".")');
var td14= createtrth('button','0');
td14.setAttribute('onclick','display(0)');
var td15= createtrth('button','=');
td15.setAttribute('onclick','equate()');
var td16= createtrth('button','*');
td16.setAttribute('onclick','display("*")');
tr3.append(td13,td14,td15,td16);

var tr4 = document.createElement('tr');
var td17= createtrth('button','  C  L a E  A  R  ');
td17.setAttribute('onclick','clr()');
var td18= createtrth('button','%');
td18.setAttribute('onclick','display("%")');
tr4.append(td17,td18);

table.append(tr,tr1,tr2,tr3,tr4);
div1.append(table);
document.body.append(div1);

function fun(){
  var a = document.getElementById('result').value;
  var y = a.split(""); let arr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for(let i=0;i<y.length;i++)
  if(arr.includes(y[i])){
    alert("Only numbers are allowed");
  }
}

function createtrth(elementname, value=" "){
  var td=document.createElement(elementname);
  td.innerHTML=value;
  return td;
}
function clr(){
  document.getElementById("result").value ="";
}
function display(val){
 document.getElementById("result").value += val;
}
function equate(){
let  x = document.getElementById("result").value;
let y = eval(x);
document.getElementById("result").value = y;
}
