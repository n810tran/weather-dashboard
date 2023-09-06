// define global variables
const apiKey = b47d74ce9a54bff7e09646af224622e6;
const searchFormEl = document.querySelector("#search");
const userInputEl = document.querySelector("#user-input");

let pastSearches = [];

//define functions
let formSubmit = function(event){
    event.preventDefault();
    let city = searchFormEl.value.trim();
    if (city){
        getWeather(city);
        getFiveWeather(city);
        pastSearches.unshift('pastSearches');
        userInputEl.value = '';
    } else {
        return;
    }
    saveSearch();
    pastSearch(city);
    
}

let saveSearch = function () {
    localStorage.setItem('pastSearches', JSON.stringify(pastSearches));
};

let pastSearch = function (pastSearch){

}

let getWeather = function (city) {
    let apiURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit={limit}&appid=${apiKey}`
    fetch (apiURL)
    .then(function(response){
        response.json()
        .then(function(data){
            displayWeather(data, city);
        })
    })
};


//processes