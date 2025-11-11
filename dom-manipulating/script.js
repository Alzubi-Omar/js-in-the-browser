// DOM Manipulation and Events practice:

// Select the first element with the class "welcome"
const welcome = document.getElementsByClassName("welcome")[0];

// Add a click event that shows an alert message
welcome.addEventListener("click", function () {
  alert("Welcome to Dom Events");
});

// Select the <h1> element
const heading = document.querySelector("h1");
console.log(heading); // Log the heading element to the console

// Change the text inside the <h1>
heading.textContent = "Dom Events Updated";

// Change the HTML content inside the <h1> (adds italics)
heading.innerHTML = "<em>Dom Events Updated with Italics</em>";

// Change the color and background of the heading
heading.style.color = "firebrick";
heading.style.backgroundColor = "lightgray";

// Add, remove, and toggle a CSS class on the heading
heading.classList.add("big-heading");
heading.classList.remove("big-heading");
heading.classList.toggle("big-heading");

// Log and update the value of an input field with id="myInput"
console.log(document.querySelector("#myInput").value);
console.log((document.querySelector("#myInput").value = "Hello World"));
console.log(document.querySelector("#myInput").value);

// Select the <img> element and update its attributes
const image = document.querySelector("img");
image.src = "https://www.w3schools.com/js/pic_bulbon.gif";
image.alt = "A bulb switched on";

// Add a click event to a button that logs input value
document.querySelector("#myBtn").addEventListener("click", function () {
  console.log(document.querySelector("#myInput").value);
});

// Get and log the current 'src' attribute of the image
console.log(image.getAttribute("src"));

// Change and log the 'alt' attribute of the image
image.setAttribute("alt", "A light bulb image");
console.log(image.getAttribute("alt"));

// Remove the 'alt' attribute and confirm it's gone
image.removeAttribute("alt");
console.log(image.getAttribute("alt"));

// Select the <ul> list
const list = document.querySelector("ul");

// Create a new <li> item and add it to the list
const newItem = document.createElement("li");
newItem.textContent = "New Item";
list.appendChild(newItem);

// Log the updated list content
console.log(document.querySelector("ul").innerHTML);

// Handle user input: log what the user types
const input = document.querySelector("#myInput");
input.addEventListener("input", function (e) {
  console.log(`User typed: ${e.target.value}`);
});

// Explore relationships between list items
const item = document.querySelector("li");
console.log(item.parentElement); // Parent element of the <li>
console.log(item.nextElementSibling); // Next sibling <li>
console.log(item.previousElementSibling); // Previous sibling <li>
console.log(item.children); // Children of the <li> (if any)

// Add a Bootstrap-style class to the button
document.querySelector("#myBtn").classList.add("btn-primary");
