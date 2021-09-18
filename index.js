// You got this! 💫


// 💻 Work: 25 mins
// ☕️ Short break: 5 mins
// 🌯 Long break: 15 mins

/* 
    Work period 25min == 1500sec
    ShortBreak period 5min == 300sec
    Work period 15min == 900sec
*/
var timerType = '';
var timerStopTime = 0;
var timeUsed = 0;
var min = 0;
var sec = 0;
function StartTimer(breakType) {
//    alert(breakType);
console.log('timerType=', timerType);
console.log('timerStopTime=', timerStopTime);
console.log('timeUsed=', timeUsed);
console.log('min=', min);
console.log('sec=', sec);
    switch (breakType) {
        case 'Work': // 30sec
            timerType = 'Work';
            timerStopTime = 15; //1500
            document.getElementById('timer-type').innerText = 'Timer type: ' + 'Work';
            //alert('start Work');
            setTimeout(RunTimer('Work', 1000));
            break;
        case 'ShortBreak':
            timerType = 'ShortBreak';
            timerStopTime = 3; //300
             document.getElementById('timer-type').innerText = 'Timer type: ' + 'Short Break';
            //alert('start Work');
            setTimeout(RunTimer('Work', 1000));
           break;
        case 'LongBreak':
            timerType = 'LongBreak';
            timerStopTime = 9; //900
            document.getElementById('timer-type').innerText = 'Timer type: ' + 'Long Break';
            //alert('start Work');
            setTimeout(RunTimer('Work', 1000));
    }
}

/* Work period 25min == 1500sec, test 30*/
function RunTimer() {
    
    //increase time
    timeUsed += 1;
    
    // update time-display
    if (sec == '59') {
        min += 1;
        sec = 0;
    }
    else {
        sec += 1;
    }
    if (sec < 10) 
        secDisp = '0' + sec;
    else
        secDisp = sec;
    document.getElementById("time-display").innerHTML = min + ':' + secDisp;
    
    //set new timeout
    if (timeUsed < timerStopTime)
        setTimeout(RunTimer, 1000);
    else {
        document.getElementById('timer-type').innerText = 'Game over';
        // Save time worked into the localstorage
        if (timerType == 'Work')
            SaveTime('25', 'totalworktime');
        else if (timerType == 'ShortBreak')
            SaveTime('5', 'totalbreaktime');
        else
            SaveTime('15', 'totalbreaktime');
        LoadTime();
        timeUsed = 0;
        min = sec = 0;
    }
}

/*
    Save time worked into the localstorage
*/
function SaveTime(amountOfTime, timeType) {
    // Check browser support
    t = localStorage.getItem(timeType);
    
    console.log(parseInt(t) + parseInt(amountOfTime));
    localStorage.setItem(timeType, parseInt(t) + parseInt(amountOfTime));
}

function LoadTime() {
    // Retrieve
    document.getElementById("total-work-time").innerHTML = localStorage.getItem("totalworktime");
    document.getElementById("total-break-time").innerHTML = localStorage.getItem("totalbreaktime");
}

function DataStorage() {
// Check browser support
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("lastname", "Smith");
        // Retrieve
        document.getElementById("result").innerHTML = localStorage.getItem("lastname");
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}