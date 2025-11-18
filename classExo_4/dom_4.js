// Get elements
let countryList = document.getElementById("countriesList")
let userInput = document.getElementById("userCountry")
let countries = countryList.getElementsByTagName("li")


// listen to input each type
userInput.addEventListener("input", () => {
    const userText = userInput.value.toLowerCase()
    //Go through each li element 
    for (let i = 0; i < countries.length ; i++) {
        const countriesNames = countries[i].textContent.toLocaleLowerCase()
    
        //show or hide depending of the user input
            if(countriesNames.includes(userText)) {
                countries[i].style.display = ""
            }else{
                countries[i].style.display = "none"
            }
    }
})



