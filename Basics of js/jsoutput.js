function rightclick() {

    // <!-- USING INNER HTML-- >
    document.getElementById('displays').innerHTML = "The para is changeds";
    // document.write
    // Using document.write() after an HTML document is loaded, will delete all existing HTML:
    document.write("It is displayed using document.write view console log too");

    console.log('This is written in console log')


}

//   using alert
document.querySelector('body').addEventListener('click', function () {
    window.alert('Using window alert')
});

// using innerhtml and query querySelector
const btn = document.querySelector('span').innerHTML = "span changed";