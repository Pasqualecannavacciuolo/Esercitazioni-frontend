let dayField = document.getElementById('day');
let hourField = document.getElementById('hour');
let minuteField = document.getElementById('minute');
let secondField = document.getElementById('second');

let endDate = new Date("Jan 1, 2023 00:00:00");

let intervallo;

// Converto tutto in millisecondi dato che le date sono in millisecondi
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const output = () => {
    
    everySecond = setInterval(output, second)
    everyMinute = setInterval(output, minute)
    everyHour = setInterval(output, hour) 

    let startDate = new Date();
    let tempoTrascorso = endDate-startDate;

    const days = Math.floor(tempoTrascorso / day)
    const hours = Math.floor((tempoTrascorso % day) / hour)
    const minutes = Math.floor((tempoTrascorso % hour) / minute)
    const seconds = Math.floor((tempoTrascorso % minute) / second)

    console.log(days + ":" + hours + ":" + minutes + ":" + seconds)


    dayField.innerHTML = days
    hourField.innerHTML = hours
    minuteField.innerHTML = minutes
    secondField.innerHTML = seconds
}

intervallo = setInterval(output, second);