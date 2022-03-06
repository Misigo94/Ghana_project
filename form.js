function reset() {
    document.getElementById("user_form").reset();
}

function userForm() {
    let gender = document.getElementById("this_gender").value;
    let bithday = document.getElementById("user_date").value;
   if (this_gender == "") {
       console.log("You must choose a gender");
   }
   if(user_date == "") {
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
const d = new Date(user_date);
let day = d.getDate();
let year = d.getFullYear();

let week_day = dayArray[day][0];
let male_Name = dayArray[day][1];
let female_Name = dayArray[day][2];
const output = document.getElementById("text");

if (gender == "male") {
    output.innerHTML = "You were born in a " + dayArray +
    "and your Akan name is " + male_Name;
}
    else if (
        output.innerHTML = "You were born in a " + dayArray +
        "and your Akan name is " + female_Name
    )

 reset();
 userForm();
}
