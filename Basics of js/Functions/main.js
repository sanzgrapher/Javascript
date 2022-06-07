// sum();
// function sum () {
    
//     console.log(3 + 2);

// }

// function showMessage(text) {
//     // ...

//     if (text === undefined) { // if the parameter is missing
//         text = 'empty message';
//     }

//     console.log(text);
// }


function showCount(count) {
    // if count is undefined or null, show "unknown"
    console.log(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown