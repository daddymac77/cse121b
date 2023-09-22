/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let fullName = "Mc-Coy Crisanto";
// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector());
const nameElement = document.getElementById("name");
nameElement.innerHTML = `<strong>${fullName}</strong>`;

// Step 3: declare and instantiate a variable to hold the current year
const currentYear = new Date().getFullYear();
// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").innerText = currentYear;
// Step 5: declare and instantiate a variable to hold the name of your picture
const myPicture = "images/mypics.jpg";
// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img").setAttribute("src", myPicture);


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favoriteFoods = ["Chorizo", "Tokwa", "Lettuce", "Bread"]


// Step 2: place the values of the favorite foods variable into the HTML file
// Retrieve the foodElement
// Retrieve the foodElement
const foodElement = document.getElementById("food");

// Declare and instantiate a variable for the new favorite food
const newFavoriteFood = ["rice", "cheese", "peanut butter"]; // Replace with your favorite food item

// Add the new favorite food to the favoriteFoods array
favoriteFoods.push(newFavoriteFood);

// Update the foodElement to display the updated favorite foods with line breaks
foodElement.innerHTML = favoriteFoods.join("<br>");


