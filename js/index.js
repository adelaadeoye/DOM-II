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