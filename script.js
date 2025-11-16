

// if else 

// num  = 30;
// if(num % 2 === 0){
//     console.log("Even");
// }    

// else{
//     console.log('Odd');
// }


//2

//Grade
// 100 - A
// 90-99 - B
// 70-89 - C
// 50-69 - D
// below 50 - fail

num = 99;
if(num === 100) console.log('Grade A')
    else if(num >= 90 && num <= 99) console.log("Grade B")
    else if(num >= 50 && num <= 69) console.log("Grade D")
        else if(num >= 70 && num <= 89 ) console.log("Grade C")
         
        else if(num >= 100 || num <= 0) console.log("Wrong Entry")
        else{
            console.log("Fail")
            }

 

// condition EVEN ODD

num1 = 3;

if(num1 % 2 === 0){
    console.log("This is a EVEN Number")
}

else{
    console.log("This is ODD Number");
}


// Negative and Positive

const num3 = -200;
if(num3 > 0){
    console.log('This is a Positive Number')
}

else if(num3 === 0){
    console.log("Number is Nor Positive nor Negative")
}

else{
    console.log("This is a Negative Number")
}


//ternary operator  condition ? true : false
// const num = 10
// num > 0 ? console.log("Positive") : console.log("Negetive")
// num > 0 ? console.log("Positive") : num < 0 ? console.log("Negetive") : console.log("Zero")


const num4 = 22;
num4 > 0 ? console.log("Big Number") : console.log("Small Number");

const num5 = 51;
num5 > 90 && num5 <= 95 ? console.log("You Are Gread A") :
num5 > 50 ? console.log("This is a Pass Number") : num5 < 0 ? console.log("This is Not A valid Number") : console.log("You are Fail");
