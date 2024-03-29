// 
//Goal: Fetch weather
//1. Set up a call to fetch to fetch weather for Boston
//2. Get the parse JSON response
//    --if error property, print error
//3.  --if no error property, print location and forecast
//4. CHeck the browser and test your work

// fetch('http://localhost:3000/weather?address=!').then((response) => {
//   response.json().then((data) => {
//     if (data.error) {
//       console.log(data.error);
//     } else {
//       console.log(data.location);
//       console.log(data.forecast);
//     }
//   })
// })
/*
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')




weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
  response.json().then((data) => {
    if (data.error) {
      messageOne.textContent = data.error
    } else {
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
      
    }
  })
})
})

*/
//Deploying Node.js to Heroku

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')




weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch('/weather?address=' + location).then((response) => {
  response.json().then((data) => {
    if (data.error) {
      messageOne.textContent = data.error
    } else {
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
      
    }
  })
})
})

