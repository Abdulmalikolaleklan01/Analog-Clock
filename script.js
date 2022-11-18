const secondHands=document.getElementById('seconds')
const hourHands=document.getElementById('hours')
const minuteHands=document.getElementById('minutes')


setInterval(function getTime(){
    const now=new Date()
    const seconds=now.getSeconds()
    const minutes=now.getMinutes()
    const hours=now.getHours()
    const timeInterval=6
    console.log(now)
    console.log(seconds)
    console.log(minutes)
    console.log(hours)

    secondHands.style.transform='rotate('+ (seconds * timeInterval) + 'deg)'
    minuteHands.style.transform='rotate('+ (minutes * timeInterval + seconds/10) + 'deg)'
    hourHands.style.transform='rotate('+ (hours * 30 + minutes/2) + 'deg)'

}, 1000)