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
    // document.getElementById('result').value
    // console.log(expression.slice(0,-1));
expression=expression.slice(0,-1);
input.value=input.value.slice(0,-1);
    
}