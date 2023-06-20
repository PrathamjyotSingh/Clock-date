


 setInterval(()=>{
    let hours = new Date().getHours()
let mins = new Date().getMinutes()
let sec = new Date().getSeconds()
let day = new Date().getDate()
let month = new Date().getMonth()
let year = new Date().getFullYear()

let time = `${hours}:${mins}:${sec}`
let date = `${day}-${month}-${year}`

let element = document.getElementById('time')
element.innerHTML  = time

let element1 = document.getElementById('Date')
element1.innerHTML = date

 },1000)