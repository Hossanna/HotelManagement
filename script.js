// alert ("connected")

let fullName = document.getElementById("fname")
let address = document.getElementById("address")
let phone = document.getElementById("phone")
let email = document.getElementById("email")
let checkIn = document.getElementById("checkIn")
let checkOut = document.getElementById("checkOut")
let roomType = document.getElementById("roomType")
let numOfPersons = document.getElementById("numOfPersons")
let submitButton = document.getElementById("submit-btn")
const maxPersons = 3;

function validateName(){
    if (fullName.value == ""){
        fullName.style.borderColor = 'red'
        // alert('Please enter your name')
        return false
    }
    else{

    }
}
function validateAddress(){
    if (address.value == ""){
        address.style.borderColor = 'red'
        // alert('Please enter your address')
        return false

    }
    else{

    }
}
function validatePhone(){
    if (phone.value == ""){
        phone.style.borderColor = 'red'
        // alert('Please enter your phone number')
        return false

    }
    else{

    }
}
function validateEmail(){
    if (email.value == ""){
        email.style.borderColor = 'red'
        // alert('Please enter your email')
        return false

    }
    else{

    }
}
function validateCheckIn(){
    if (checkIn.value == ""){
        checkIn.style.borderColor = 'red'
        // alert('Please enter your checkIn date')
        return false

    }
    else{

    }
}
function validateCheckOut(){
    if (checkOut.value == ""){
        checkOut.style.borderColor = 'red'
        // alert('Please enter your checkOut date')
        return false

    }
    else{

    }
}
function calcNumOfDays(){

    let date1 = new Date(checkIn.value)
    let date2 = new Date(checkOut.value)
    
    // console.log(checkIn.value, checkOut.value);
    // console.log(date1, date2);

    let diffInMs = date2 - date1
    let diffInDays = Math.floor(diffInMs / (1000*60*60*24))
    // console.log(diffInDays);
    return diffInDays
}
function validateRoomType(){
    if (roomType.value == ""){
        roomType.style.borderColor = 'red'
        // alert('Please enter your prefered room type')
        return false

    }
    else if(roomType.value == "duplex"){
        let price = 150000
        return price

    }
    else if(roomType.value == "royale"){
        let price = 100000
        return price

    }
    else if(roomType.value == "supreme"){
        let price = 50000
        return price

    }
}
function validatenumOfPersons(){
    if (numOfPersons.value == "" ){
        numOfPersons.style.borderColor = 'red'
        // alert('Please enter the number of persons to stay in the room')
        return false

    }
    else if(numOfPersons.value > maxPersons){
        numOfPersons.style.borderColor = 'red'
        alert("Room cannot take more than 3 persons")
        return false
    }
}

function validateForm(){
    // validateName()
    // validateAddress()
    // validatePhone()
    // validateEmail()
    // validateCheckIn()
    // validateCheckOut()
    // calcNumOfDays()
    // alert (numOfDays)
    // validateRoomType()
    // validatenumOfPersons()

    if (validateName() == false || validateAddress() == false || validatePhone() == false ||  validateEmail() == false || validateCheckIn() == false || validateCheckOut() == false ||  validateRoomType() == false ||  validatenumOfPersons() == false){

        alert("Please fill all fields correctly")
    }

    else{
        let numOfDays = calcNumOfDays();
        let price = validateRoomType()
        let totalPrice = price * numOfDays
        alert(`Congratulations, you have booked ${numOfDays} nights and your bill is ${totalPrice}`)
    }


}
