var repeat = require("./repeat").repeat;
var yellow = require("./exclaim").exclaim;


if (yellow(repeat, "hi") !== "hi!!!!!") {
  throw new Error("Exclaiming hi should equal hi!!!!!");
} else {
  console.log("Good");
}
