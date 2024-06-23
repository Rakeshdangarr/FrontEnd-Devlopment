let expression;
const input=document.getElementById('result');
console.log(input);

// clear when click on C button
function clr(){
    input.value='';
}

// when press on button its vales get in result

function getResult(val){
 input.value+=val;
 expression=expression+input.value; 
}

// when press on backspace its clear or slice one-one values
function clrSlice(){
expression=expression.slice(0,-1);
input.value=input.value.slice(0,-1);  
}

// get all airthmatic result
function getFinalResult(){
     // get final result eval() => all airthmatic operators evaluate here
     var x = input.value;
     var y = eval(x);
     input.value=+y;
}

// function for a squre root

function sqrtResult(){
    var number=parseInt(input.value);
    var res=Math.sqrt(number);
    input.value=res;
   } 

//    math function for calculate squre

function sqrResult (){
    var number=parseInt(input.value);
    var res=Math.pow(number,2);
    var res=input.value=res;
}