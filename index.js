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
        //alert('Work / break time over');
        document.getElementById('timer-type').innerText = '';
        timeUsed = 0;
        min = 0;
        sec = 0;
    }

}