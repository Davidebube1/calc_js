const no1 = prompt("Please enter first Number");
const operator = prompt("Please select an opertor: +, -, *, /");
const no2 = prompt("Please enter the second number");

let result = 0;
 
if(isNaN(no1) || isNaN(no2)){
    alert("Wrong input, please reload your page");
}
else{
    if(operator == "+"){
        result = Number(no1) + Number(no2);
    }
    else if(operator == "-"){
        result = Number(no1) - Number(no2);
    }
    else if(operator == "*"){
        result = Number(no1) * Number(no2);
    }
    else if(operator == "/"){
        result = Number(no1) / Number(no2);
    }
    alert(Number(no1) + "" + operator + "" + Number(no2)+ " =" + result)
}

