/**
 * Defining a few constants
 */

//#region Search Boxes
const webContent = document.getElementById("results-section");
const searchBox = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
//#endregion

//#region All Users
const listOfElements = {
    // website
    "NETPOL": "netpol/netpol.html",
    // users
}

/**
 * Defining a few variables
 */

let searchRequest = "";

/**
 * Defining a few functions
 */

function getSearchInput() {
    searchRequest = searchBox.value;
    searchInput();
}
function searchInput() {
    for (const [key, value] of Object.entries(listOfElements)) {
        if (key == searchRequest) {
            window.location.href = value;
        }
    }
}
/**
 * Defining logic
 */

searchButton.onclick = getSearchInput;
