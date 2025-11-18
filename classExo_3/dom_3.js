// Get Elements
let chosenImageDisplayer = document.getElementById("chosenImage")

// images 

const thumbnails = [
document.getElementById("img1"),
document.getElementById("img2"),
document.getElementById("img3"),
document.getElementById("img4")
]


//Attach click listeners to each thumbnail

 thumbnails.forEach(img => {
    if (img) { // Safety check
        img.addEventListener("click", () => {
            chosenImageDisplayer.src = img.src;
        });
    }
});
