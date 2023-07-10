function formatDate(date){
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();

  let formattedDate = `Today is ${currentDay} ${currrentMonth} ${currentDate}, ${currentYear}`;

  return formattedDate;
}

console.log(formatDate(currentTime));


let current = newDate();
console.log(current.getDate());

let h2 = document.querySelector("h2");

h2.innerHTML = "formatDate(new Date())"



function search(event){
  event.preventDefault();

  let searchCity = document.querySelector("#search-city");

  let h2  = document.querySelector("h2");
  h2.innerHTML = `Search ${searchCity.value}...`;
}

let form = document.querySelector("#search-form");

form.addEventListener("submit", search);