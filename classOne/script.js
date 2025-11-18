// Prend le premier élément
const firstItem = document.querySelector('.list-item')
const lastItem = document.querySelector('.list-item:last-child')
// console.log(firstItem)
// console.log(lastItem)

//NAVIGATION DANS LE DOM

const fruits = document.getElementById('list')

//Afficher les éléments enfants
console.log(fruits.children)

//Afficher le premier enfant
//console.log(fruits.firstChild)

// Afficher premier élément enfant
// console.log(fruits.firstElementChild)

// Afficher l'élément parent
// console.log(firstItem.parentElement)

// Afficher des éléments du même niveau
// console.log(firstItem.nextElementSibling)
// console.log(lastItem.previousElementSibling)

// ATTIBUT

const link = document.getElementById('link')

//Récupérer un attribut
// console.log(link.getAttribute('id'))

//Modifier un attribut
link.setAttribute('class', 'my-link')
//link.setAttribute('href', 'https://www.codingame.com'/)
//Récupérer le contenu textuel d'un élément

const firstListItem = document.querySelector('.list-item')
firstListItem.textContent = 'Kiwi'
// console.log(firstListItem.textContent)

//liste de calsses sur un élément
console.log(firstListItem.classList)


// Ajouter une classe
firstListItem.classList.add('fruit')

//Vérifier si un élément à une classe
console.log(firstListItem.classList.contains('fruit')) //true

// Supprimer une classe
firstListItem.classList.remove('fruit')
firstListItem.classList.add('text-blue')

// Créer un élément
const paragraph = document.createElement('p')
paragraph.textContent = 'Lorem ipsum'
document.body.appendChild(paragraph)


const newItem = document.createElement('li')
newItem.textContent = 'Cerise'
list.appendChild(newItem)

const img = document.createElement("img")
img.setAttribute("src", "https://piscum.photos/200")

document.body.insertBefore(img, paragraph)

//remlacer un élément
const title2 = document.createElement("h1")
title2.textContent = "Titre modifié"

document.body.replaceChild(title2, title)

//supprimer un élément 
link.remove()

//ajouter du HTML à l'intérieur d'un élément
const container = document.createElement("div")
document.body.append(container)

container.innerHTML = "<p>Text ajouté</p>"

// Modifier le style d'un élément
title2.style.color = "red"
img.style.margin = "2rem"

//console.log(title2.style)


// Les évenements 

const button = document.createElement("button")
button.textContent = "Click me"
document.body.append(button)

// Ecouter les évenements 

button.addEventListener("click" ,() => {
        alert("You clicked me!")
        //paragraph.classList.add("text-green")
        if(firstListItem.classList.contains("text-blue")) {
            firstListItem.classList.remove("text-blue")
            firstListItem.classList.add("text-green")
        }else if(firstListItem.classList.contains("text-green")) {
            firstListItem.classList.remove("text-green")
            firstListItem.classList.add("text-blue")
        }
})

// Autres évenements de souris 
button.addEventListener("mousedown", () =>{
    console.log("bouton cliqué")
})

//Des évenements du clavier

const input = document.createElement("input")
input.style.marginTop = "1.2rem"
input.style.display = "block"

document.body.append(input)

input.addEventListener("keyup", (event) => {
    //console.log(input.value)
    console.log(event.target.value)
})

list[0].addEventListener("click", (event) => {
    console.log(event.type)
    console.log(event.target)
    console.log(event.currentTarget)
})
