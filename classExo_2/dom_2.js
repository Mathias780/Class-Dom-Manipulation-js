// Get Doc Elements

const numberOne = document.getElementById("number1")
const numberTwo = document.getElementById("number2")

const buttonCalc = document.getElementById("calculate")
const resultDisplay = document.getElementById("result")

// Code calculator


buttonCalc.addEventListener("click", (event) => {
   //get and trim values

   let userNumberOne = numberOne.value.trim()
   let userNumberTwo = numberTwo.value.trim()

   //transfom into numbers
   
   let num1 = parseFloat(userNumberOne)
   let num2 = parseFloat(userNumberTwo)

   //Validate inputs 
   if(isNaN(num1) || isNaN(num2)) {
    resultDisplay.textContent = "Bro Please enter real numbers -_-"
    resultDisplay.style.color = "red"
    return
   }

   //Exemple addition 
   let sum = num1 + num2

   // Display result 
   resultDisplay.textContent = `Result: ${sum}`
   resultDisplay.style.color = "green"
})