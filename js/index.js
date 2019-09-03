// Your code goes here
//Event 1: Mouseover
let mouseAction = document.querySelectorAll('a');
mouseAction.forEach(item => {
    item.addEventListener('mouseover', (e) => {
        item.style.border = "1px solid black";
        item.style.borderRadius = "5px";
        item.style.width = "70px"
        item.style.textAlign = "center"
            // preventDefault();


    });
})
mouseAction.forEach(item => {
        item.addEventListener('mouseleave', (e) => {
            item.style.border = "";
            item.style.borderRadius = "";
            // preventDefault();


        });
    })
    //Event 2 and 3: doubleClick single click plus append 
var button = document.createElement('button'); // Create a <li> node
var textnode = document.createTextNode(" Click for Fun"); // Create a text node
button.appendChild(textnode); // Append the text to <li>
document.querySelector(".intro").appendChild(button);

let doubleClick = document.querySelector('.intro button');
doubleClick.addEventListener('dblclick', (e) => {
    document.querySelector('.intro img').src = "img/funbus.gif"
    button.textContent = "Hahahahahahah"
})
let singleClick = document.querySelector('.intro button');
doubleClick.addEventListener('click', (e) => {
    document.querySelector('.intro img').src = "img/funbus2.gif"
    button.textContent = "Double Click for more fun"
})


//Event 4 scroll
var isScrolling;

// Listen for scroll events
window.addEventListener('scroll', function(event) {
    let color = document.querySelector('.home');
    color.style.backgroundColor = "#483D8B"
    color.style.color = "white"
        // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function() {

        // Run the callback
        let color = document.querySelector('.home');
        color.style.backgroundColor = ""
        color.style.color = ""
    }, 66);

}, false);