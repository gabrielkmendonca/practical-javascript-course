console.log("JavaScript Date Objects let us work with dates (year, month, day, hours, minutes, seconds)")

const d = new Date()
d.getFullYear // 
d.getMonth //
d.getDay //
d.getHours //
d.getMinutes //


console.log("Creating Date Objects")

console.log("Date objects are created with the new Date() constructor. There are 9 ways to create a new date object")
//JavaScript Date months goes from 0 to 11

new Date() //creates a date object with the current date and time
new Date("October 13, 2014 11:13:00") //creates a date object from a date string 
new Date(2018, 11) //2 numbers specify year and month
new Date(2018, 11, 24) //3 numbers specify year, month, and day
new Date(2018, 11, 24, 10) //4 numbers specify year, month, day, and hour
new Date(2018, 11, 24, 10, 33) //5 numbers specify year, month, day, hour, and minute
new Date(2018, 11, 24, 10, 33, 30) //6 numbers specify year, month, day, hour, minute, and second
new Date(2018, 11, 24, 10, 33, 30, 0) //7 numbers specify year, month, day, hour, minute, second, and milliseconds
new Date(10000000000000) //creates a new date object as milliseconds plus zero time


console.log("Date Methods")

d.toString() //string representation of the date, including the time zone. By default when displaied on HTML
d.toDateString() //converts a date to a more readable format
d.toUTCString() //converts a date to a string using the UTC standard
d.toISOString() //converts a date to a string using the ISO standard


console.log("Date Formats")

const iso = new Date("2015-03-25") //ISO Dates (YYYY-MM-DD)
const isoDT = new Date("2015-03-25T12:00:00Z") //ISO Dates Date-Time (YYYY-MM-DDTHH:MM:SSZ) — date and time separate by T, and UTC is defined with Z
const short = new Date("03/25/2015") //Short Dates (YYYY/MM/DD) — may produce error in some browsers
const long = new Date("Mar 25 2015") //Long Dates (MMM DD YYYY) — may produce error in some browsers — month and day can change order 
let msec = Date.parse("March 21, 2012") //returns the number of milliseconds between the date and January 1, 1970 — use "const d = new Date(msec);" to convert the milliseconds to a date
