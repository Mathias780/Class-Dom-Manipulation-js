//-----------Get Elements---------------//
let inputText = document.getElementById("inputText")
let responseToUser = document.getElementById("responseUser")
let submitInput = document.getElementById("submitInput")

//Our code

submitInput.addEventListener("click", (event) => {
    event.preventDefault() // Stop from acutally submiting

    const value = inputText.value.trim() // remove extra space

    if(value === "hello") {
        responseToUser.textContent = "Have a good day sir"
        responseToUser.style.color = "green"
    }else if (value === "goodbye") {
        responseToUser.textContent = "Well see you around buddy !"
        responseToUser.style.color = "green"
    }else {
        responseToUser.textContent = "Not what i expected from you. You disapoint me :("
        responseToUser.style.color = "red"
    }
})