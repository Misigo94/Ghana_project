function reset() {
    document.getElementById("user_form").reset();
}

function userForm() {
    let gender = document.getElementById("this_gender").value;
    let birthday = document.getElementById("user_date").value;
    console.log(birthday);
    console.log(gender);
   if (gender == "") {
       alert("You must choose a gender");
   }
   if(birthday == "") {
       alert("You must pick a date");
   
    }

const dayArray = [
    ["Sunday", "Kwasi", "Akosua"],
    ["Monday", "Kwadwo", "Adwoa"],
    ["Tuesday", "Kwabena", "Abenaa"],
    ["Wednesday", "Kwaku", "Akua"],
    ["Thursday", "Yaw", "Yaa"],
    ["Friday", "Kofi", "Afua"],
    ["Saturday", "Kwame", "Ama"],
];

// check for the day
const d = new Date(birthday);
let day = d.getDay();
let year = d.getFullYear();

let week_day = dayArray[day][0];
let male_Name = dayArray[day][1];
let female_Name = dayArray[day][2];
const output = document.getElementById("text");

if (gender == "male") {
    output.innerHTML = "You were born in a  " + week_day +
    " and your Akan name is " + male_Name;
}
    else if (
        gender == "female"
    ) {
        output.innerHTML = "You were born in a  " + week_day +
        " and your Akan name is " + female_Name
    }

if (year >2022) {
    alert("Choose a valid year")
}
    else if ( year < 1940) {
        alert("Choose a valid year")
    }

if (day < 0) {
    
}



 reset();
 
}
