
var min = 0;
var sec = 0;
var milisec = 0;

var min_id = document.getElementById('min')
var sec_id = document.getElementById('sec')
var milisec_id = document.getElementById('milisec')
var interval;

function start() {
    interval = setInterval(timer,10)
    document.getElementById('start').setAttribute('disabled',true)
    document.getElementById('pause').removeAttribute('disabled')
    document.getElementById('lap').removeAttribute('disabled')
    document.getElementById('reset').removeAttribute('disabled')
}

function timer() {
    milisec++;
    milisec_id.innerHTML = milisec;
    if (milisec >= 99) {
        sec++
        sec_id.innerHTML = sec;
        milisec = 0;
    }
    else if (sec == 60){
        min++;
        sec = 0
        min_id.innerHTML = min;
    }
}

function reset(){
min = 0;
sec = 0;
milisec = 0;
sec_id.innerHTML = sec;
min_id.innerHTML = min;
milisec_id.innerHTML = milisec;
pause()
document.getElementById('start').removeAttribute('disabled')
document.getElementById('pause').setAttribute('disabled',true)
document.getElementById('lap').setAttribute('disabled',true)
document.getElementById('reset').setAttribute('disabled',true)
lap_element.innerHTML = ''
}

function pause(){
    clearInterval(interval)
document.getElementById('start').removeAttribute('disabled')
}


var lap_element = document.getElementById('lap_data')

function lap() {

    var lap_child = document.createElement('li')
    var lap_text = document.createTextNode(min + ' :  ' +sec+' : '+milisec)
    lap_child.appendChild(lap_text);

    lap_element.appendChild(lap_child);
} 