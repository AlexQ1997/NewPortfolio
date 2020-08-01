// const firstName = document.getElementById('firstName')
// const lastName = document.getElementById('lastName')
// const email = document.getElementById('email')
// const form = document.getElementById('form')
// const errorElement = document.getElementById('error')

// form.addEventListener('submit' , (e) => {
//     let messages = []
//     if (firstName.value === '' || firstName.value == null) {
//         messages.push('First name is required')
//     }
//     if (lastName.value === '' || lastName.value == null) {
//         messages.push('Last name is required')
//     }

//     if (messages.length > 0) {
//         e.previousDefault()
//         errorElement.innerText = messages.join(', ')
//     }
   
// })

const email = document.getElementById("email");
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")

//Event Listener will check is anything has been inputed
email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
  } else {
    email.setCustomValidity("");
  }
});

form.addEventListener('submit', (e) =>  {
    if(firstName.value === null || lastName.value == ' ') {
        alert("Please input a name please")
    }
})
