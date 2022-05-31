
// Get the modal
var modal = document.getElementsByClassName('modal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closes");

// When the user clicks the button, open the modal 
btn[0].onclick = function () {
    modal[0].style.display = "block";
}
// When the user clicks on <span> (x), closesthe modal
span[0].onclick = function () {
    modal[0].style.display = "none";
}









// When the user clicks on <span> (x), closesthe modal

// When the user clicks anywhere outside of the modal, closesit
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}