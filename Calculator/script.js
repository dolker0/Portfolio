const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const percentBtn = document.getElementById("percent");
const divideBtn = document.getElementById("divide");
const multiplyBtn = document.getElementById("mutilply");
const subtractBtn = document.getElementById("subtract");
const addBtn = document.getElementById("add");
const equalBtn = document.getElementById("equal");
const oneBtn = document.getElementById("one");
const twoeBtn = document.getElementById("two");
const threeBtn = document.getElementById("three");
const fourBtn = document.getElementById("four");
const fiveBtn = document.getElementById("five");
const sixBtn = document.getElementById("six");
const sevenBtn = document.getElementById("seven");
const eightBtn = document.getElementById("eight");
const nineBtn = document.getElementById("nine");
const zeroBtn = document.getElementById("zero");
const dotBtn = document.getElementById("dot");
const button = document.querySelectorAll(".btn")
const textArea = document.getElementById("input");

let noInput = "";

const clearDisplay = () =>{
    textArea.innerText = "0"; 
}

button.forEach((button)=>{
    button.addEventListener("click",()=>{
        clearDisplay();
        noInput += button.innerText;
        textArea.innerText = noInput;
        console.log(noInput)
    })
})

const calculate  = ()=>{
    clearDisplay();
    var result = eval(noInput);
    textArea.innerText = result;
    noInput="";
}

equalBtn.addEventListener("click",calculate);

clearBtn.addEventListener("click",()=>{
    clearDisplay();
    noInput="";
});

deleteBtn.addEventListener("click",()=>{
    noInput=noInput.slice(0,-1);
    textArea.innerText=noInput;
    console.log(noInput);
})

