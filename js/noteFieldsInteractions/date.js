const monthVariants = ["January","February","March",
    "April","May","June","July","August","September",
    "October","November","December"];

const today = new Date();

const day = today.getDate();

const month = monthVariants[today.getMonth()-1];

const year = today.getFullYear();

const suitableDayForm = month+" "+day+", "+year;

const suitableDayFormContainer = document.createElement("p");

suitableDayFormContainer.textContent = suitableDayForm;

export {suitableDayForm};