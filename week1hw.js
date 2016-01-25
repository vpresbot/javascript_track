/*Problem 0*/
var children = "0";
var partner = "Dan";
var geo_location = "Miami";
var job = "student";

alert("You will be a " + job + " in " + geo_location + ", and married to " + partner + " with " + children + " kids.");

/*Problem 1*/
var current_year = "2016";
var last_year = "2015";
var birth_year = prompt("What year were you born?");
var old_age = last_year - birth_year;
var new_age = current_year - birth_year;
alert("They are either " + old_age + " or " + new_age + ".");

/*Problem 2*/
var current_age = "28";
var max_age = "100";
var amount = "7";
var eat_total = (amount * 365) * (max_age - current_age);
alert("You will need " + eat_total + " to last you until the ripe old age of " + max_age + ".");

/*Problem 3*/
var radius = "4";
var  circum = Math.PI * 2*radius;
alert("The circumference is " + circum + ".");
var area = Math.PI * radius*radius;
alert("The area is " + area + ".");

/*Problem 4*/
var celcius = "20";
var ctof = (celcius*9)/5 + 32;
alert(celcius + "C is " + ctof + "F.");
var faren = "80";
var ftoc = ((faren - 32)*5) / 9;
alert(faren + "F is " + ftoc + "C.");
