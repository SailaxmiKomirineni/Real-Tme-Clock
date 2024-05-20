let hours = document.getElementById('hour')
let minutes = document.getElementById('minute')
let seconds = document.getElementById('second')

setInterval(()=>{
    let currentDate = new Date()
    console.log(currentDate.getSeconds());
    hours.style.transform = `translate(-50%, -50%) rotate(${currentDate.getHours()*30}deg)`
    minutes.style.transform = `translate(-50%, -50%) rotate(${currentDate.getMinutes()*6}deg)`
    seconds.style.transform = `translate(-50%, -50%) rotate(${currentDate.getSeconds()*6}deg)`
    
}, 1000)
