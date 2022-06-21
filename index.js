const test = 143
const bis = 219

console.log(test == bis)
console.log(test > bis)
console.log(test < bis)
console.log(test >= bis)
console.log(test <= bis)



const limit = 50
let score = 64

if (limit <= score){
  console.log("Ok good !")
} else {
  console.log("Oh nooo...")
}


const password = "azerty"

if (password.length < 5){
  console.log("password is not secured")
} else {
  console.log("Password is secured")
}



if (password.length > 5 && limit <= score){
  console.log("Everything is good")
}else if(password.length > 5 || limit <= score ){
  console.log("Something is good")
}else{
  console.log("Nothing is good")
}


const min = 1
const max = 6
const random = Math.floor(Math.random() * max) + min

if (random == 6){
  console.log("Yes I win !")
}else{
  console.log("So close...")
}


let month = "January"

switch (month) {
	case "January":
		console.log("Winter")
		break;
	case "February":
		console.log("Winter")
		break;
	case "March":
		console.log("spring")
		break;
	case "April":
		console.log("spring")
		break;
	case "May":
		console.log("spring")
		break;
	case "June":
		console.log("Summer")
		break;
	case "July":
		console.log("Summer")
		break;
	case "August":
		console.log("Summer")
		break;
  case "September":
		console.log("Fall")
		break;
  case "October":
		console.log("Fall")
		break;
  case "November":
		console.log("Fall")
		break;
  case "December":
		console.log("Fall")
		break;
	default:
		console.log("That's not a month")
}


let roundedNumber = 3.6

if (roundedNumber ){
  console.log(Math.ceil(roundedNumber))
}else{
  console.log(Math.floor(roundedNumber))
}


// let decimalPart = roundedNumber.toString().split(".")[1]

// if(decimalPart >= 5){
//   console.log(Math.ceil(roundedNumber))
// }else{
//   console.log(Math.floor(roundedNumber))
// }


// substringStart = roundedNumber.toString().indexOf('.')

// if(roundedNumber.toString().substring(parseInt(substringStart+1))>=5){
//   console.log(Math.ceil(roundedNumber))
// }else{
//   console.log(Math.floor(roundedNumber))
// }