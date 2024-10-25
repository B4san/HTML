document.querySelector('#header').innerHTML = "estoy leyendo el documento extraFunctionality.js"

function sortArrayAscending(arr) {
    return arr.sort((a, b) => a - b);
}

function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}

function displaySortedArray(arr) {
    alert("Sorted array: " + arr.join(", "));
}

let array = [5, 3, 8, 1, 2];
let sortedArray;

let sortOrder = prompt("Enter 'asc' for ascending order or 'desc' for descending order:");

if (sortOrder === 'asc') {
    sortedArray = sortArrayAscending(array);
} else if (sortOrder === 'desc') {
    sortedArray = sortArrayDescending(array);
} else {
    alert("Invalid input. Please enter 'asc' or 'desc'.");
}

displaySortedArray(sortedArray);
