function display(value){
    document.getElementById("result").value += value;
}

function clearResult(){
    document.getElementById("result").value = "";
}

function calculate(){
    var result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
}

// eval = The eval() function is a built-in JavaScript function 
//         that takes a string argument and interprets (evaluates) 
//         it as JavaScript code. In this case, it evaluates the string    
//         obtained from the input field. 
//         This allows the code to perform mathematical calculations or 
//         execute JavaScript expressions that are represented as strings.