// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// if
let isLightison = false;

if(isLightison == false) {
  console.log("Light is off")
} else {
  console.log("Light is on")
}

// if else
let myname = 'kathir';

if(myname == 'kumaran') {
  console.log("your name is kumaran") 
} else {
  console.log('your name is kathir')
}

// else if

let mymark = 20;

// 30 > pass
// 30 < fail
// 80 > firstclass
// 60 <= second class

// if(mymark >= 30) {
//   console.log("pass")
// } else if(mymark >= 30 &&  mymark >= 80) { 
//   console.log("Pass and firstclass")
// } else if(mymark <= 60) {
//   console.log("pass and second class")
// }
// else { 
//   console.log('fail')
// }


if(mymark >= 80) {
  console.log("Pass and firstclass")
} else if(mymark >= 60) {
  console.log("pass and second class")
} else if(mymark >= 30) {
  console.log("pass")
} else {
  console.log('fail')
}
