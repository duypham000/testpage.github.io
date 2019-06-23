function newYearTime() {
        setTimeout(() => {
            $('.counting').fireworks({ opacity: 0.7, width: '100%', height: '100%' });
        }, 4500);
}
var clock = document.getElementById('clock');
var count = document.getElementById('count');

function hexClock() {
    var time = new Date();
    var hours = (time.getHours() % 12).toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();

    if (hours.length < 2) {
        hours = '0' + hours;
    }

    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }

    var clockStr = hours + ' : ' + minutes + ' : ' + seconds;
    clock.textContent = clockStr;
    if (clockStr == '11 : 59 : 57') {
        clock.style.display = 'none';   
        count.style.display = 'block';
        console.log('HAPPY NEW YEAR!!!!!!!!!!!!!!!!!!!!');
        newYearTime();
    }
}

hexClock();
setInterval(hexClock, 1000);
