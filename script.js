/* Switch Statement - Alternative way of writing a complicated if / 
else statement - when all we want to do is compare one value to multiple 
different options */

/* Weekday variable -> each day -> different activity. map one activity
to each day */
const day = "Monday";

switch (day) {
  case "Monday": // day === Monday -> strict comparison
    console.log("Plan course structure");
    console.log("Go to coding meet up");
    /* need breaks cause  otherwise code carries on executing */
    break;
  case "Tuesday":
    console.log("Prepare videos");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Write code");
    break;
  case "Friday":
    console.log("Record Videos");
    break;
  case "Saturday":
  case "Sunday":
  default:
    console.log("Not a valid day!");
}
