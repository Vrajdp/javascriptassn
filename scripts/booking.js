/********* create variables *********/
// Variables initialization
let cost_per_day = 35; 
let number_of_days = 0;
let total_cost = 0;

// Day button elements
const mon_button_element = document.getElementById("monday");
const tue_button_element = document.getElementById("tuesday");
const wed_button_element = document.getElementById("wednesday");
const thu_button_element = document.getElementById("thursday");
const fri_button_element = document.getElementById("friday");

// Other elements on the screen
const full_day_span_element = document.getElementById("full");
const half_day_span_element = document.getElementById("half");
const clear_button_element = document.getElementById("clear-button");
const calculated_cost_span_element = document.getElementById("calculated-cost");

// Function to recalculate total cost
function recalculate() {
    total_cost = cost_per_day * number_of_days;             
    calculated_cost_span_element.innerText = total_cost;   
}

/********* colour change days of week *********/
// Function to handle day button clicks
// It applies the "clicked" class, updates relevant variables, and recalculates the total cost
// Added challenge: Don't update the dayCounter if the same day is clicked more than once.
// Hint: .classList.contains() might be helpful here!
function handle_button(a_button) {
    if (a_button.classList.contains("clicked")){
        a_button.classList.remove("clicked");
        number_of_days = number_of_days - 1;
    } else {
        a_button.classList.add("clicked");
        number_of_days = number_of_days + 1;
    }
    recalculate();
}

// Event listeners for day buttons
mon_button_element.addEventListener('click', function() {
    handle_button(this);
});
tue_button_element.addEventListener('click', function() {
    handle_button(this);
});
wed_button_element.addEventListener('click', function() {
    handle_button(this);
});
thu_button_element.addEventListener('click', function() {
    handle_button(this);
});
fri_button_element.addEventListener('click', function() {
    handle_button(this);
});

/********* clear days *********/
// Function to reset all days
// It removes the "clicked" class from all days, resets relevant variables, and sets the calculated cost to 0
function reset_all() {
    mon_button_element.classList.remove("clicked");
    tue_button_element.classList.remove("clicked");
    wed_button_element.classList.remove("clicked");
    thu_button_element.classList.remove("clicked");
    fri_button_element.classList.remove("clicked");
    full_day_span_element.classList.add("clicked");
    half_day_span_element.classList.remove("clicked");
    cost_per_day = 35;
    number_of_days = 0;
    total_cost = 0;
    recalculate();
}

// Event listener for the clear button
clear_button_element.addEventListener('click', function() {
    reset_all();
});

/********* change rate *********/
// Event listener for half-day button
// It sets the daily rate to $20, adds the "clicked" class to the "half" element, removes it from the "full" element, and recalculates the total cost
half_day_span_element.addEventListener('click', function() {
    half_day_span_element.classList.add("clicked");
    full_day_span_element.classList.remove("clicked");
    cost_per_day = 20;
    recalculate();
});

// Event listener for full-day button
// It sets the daily rate back to $35, adds the "clicked" class to "full" and removes it from "half", and recalculates the total cost
full_day_span_element.addEventListener('click', function() {
    full_day_span_element.classList.add("clicked");
    half_day_span_element.classList.remove("clicked");
    cost_per_day = 35;
    recalculate();
});
