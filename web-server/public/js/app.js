const x = console.log;


console.log('Client side javascript file is loaded!')



const weatherForm = document.querySelector('form') // accessing the form
const search = document.querySelector('input') // accessing the input
const text1 = document.querySelector('#text1') // accessing the <p> tag for the error by id
const text2 = document.querySelector('#text2') // accessing the <p> tag for the for successful response by id


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault() // This will prevent the default property of forms; reloading after 'submit',
   
    const city = search.value
    text1.textContent = 'Please wait ...' 
    text2.textContent = '' 

    fetch('http://localhost:3000/weather?city=' + city).then((response) => {
    response.json().then((data) => {
        if(data.err) {

            text1.textContent = data.err

        } else{

            text1.textContent = data.city
            text2.textContent = data.forecast

            console.log(data.location)
            x(data.forecast)
        }
    })
})
})