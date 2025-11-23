// even odd checker 

const input = document.querySelector('.evenoddinput'); // input field
const checkBtn = document.querySelector('.evenodd_check'); //  button
const checkoutput = document.querySelector('.oden_output'); // output area

function checker(){
    let userinput = Number(input.value);
    if(input.value === ''){
        checkoutput.innerHTML = 'Please Enter Any Number'
    }
    else if(userinput === 0){
        checkoutput.innerHTML = ' is a ZERO NUMBER'
    }

    else if(userinput < 0){
        checkoutput.innerHTML = "We Don't show Minus Number"
    }

    else if(userinput % 2 === 0){
        checkoutput.innerHTML = userinput + ' is EVEN NUMBER'
    }
   
    else{
        checkoutput.innerHTML = userinput + ' is ODD Number'
    }
}

checkBtn.addEventListener('click',checker);



// cuard js
const output = document.querySelector('.countoutput')
const increase = document.querySelector('.increase_btn');
const decrease = document.querySelector('.decrease_btn');
const resetbtn = document.querySelector('.reset_btn');

let count = 0;

function inc(){
    count = count + 1;
    output.innerHTML = count;
    countercolor();
}

function dec(){
    count = count - 1;
    output.innerHTML = count;
    countercolor();
}

function reset(){
    count = 0;
    output.innerHTML = count;
    countercolor();
}


function countercolor(){
    if(count === 0){
        output.style.color = 'grey';
    }
    else if(count > 0){
        output.style.color = 'green';
    }
    else{
        output.style.color = 'red';
    }
    
}

increase.addEventListener('click' , inc);
decrease.addEventListener('click', dec);
resetbtn.addEventListener('click', reset);

