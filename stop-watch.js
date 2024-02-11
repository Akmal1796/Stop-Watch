const stopwatchElement = JSON.parse(localStorage.getItem('stopwatchElement')) || {
    hourElement: 0,
    minuteElement: 0,
    secondElement: 0
};

let checkStopWatch = false;
let intervalId;

updateSecond();

function updateSecond() {

    if(!checkStopWatch) {

        intervalId = setInterval( () => {
            stopwatchElement.secondElement += 1;
            document.querySelector('.second').innerHTML = String(stopwatchElement.secondElement).padStart(2, '0');
            
            if(stopwatchElement.secondElement === 60) {
                stopwatchElement.secondElement = 0

                if(stopwatchElement.secondElement === 0) {
                    document.querySelector('.second').innerHTML = String(stopwatchElement.secondElement).padStart(2, '0');
                    stopwatchElement.minuteElement += 1;
                    document.querySelector('.minute').innerHTML = String(stopwatchElement.minuteElement).padStart(2, '0');

                    if(stopwatchElement.minuteElement === 60) {

                        stopwatchElement.minuteElement = 0;

                        if(stopwatchElement.minuteElement === 0) {
                            document.querySelector('.minute').innerHTML = String(stopwatchElement.minuteElement).padStart(2, '0');
                            stopwatchElement.hourElement += 1;
                            document.querySelector('.hour').innerHTML = String(stopwatchElement.hourElement).padStart(2, '0');
                        }
                    }
                }
            }
            localStorage.setItem('stopwatchElement', JSON.stringify(stopwatchElement));

        }, 1000);

        checkStopWatch = true;

        setTimeout( () => {
            document.querySelector('.start-button').innerHTML = 'Stop';
            localStorage.setItem('stopwatchElement', JSON.stringify(stopwatchElement));
        }, 1000);
    }

    else {
        clearInterval(intervalId);
        checkStopWatch = false;

        setTimeout ( () => {
            document.querySelector('.start-button').innerHTML = 'Start';
            localStorage.setItem('stopwatchElement', JSON.stringify(stopwatchElement));
        }, 500);
    }     
}



function resetUpdate() {

    if(!checkStopWatch) {
        stopwatchElement.hourElement = 0;
        stopwatchElement.minuteElement = 0;
        stopwatchElement.secondElement = 0;
        localStorage.removeItem('stopwatchElement');
    
        document.querySelector('.second').innerHTML = String(stopwatchElement.secondElement).padStart(2, '0');
    
        document.querySelector('.minute').innerHTML = String(stopwatchElement.minuteElement).padStart(2, '0');
    
        document.querySelector('.hour').innerHTML = String(stopwatchElement.hourElement).padStart(2, '0');
        
        localStorage.setItem('stopwatchElement', JSON.stringify(stopwatchElement));
        checkStopWatch = true;
    }

    else {
        setTimeout ( () => {
            document.querySelector('.start-button').innerHTML = 'Start';
            localStorage.setItem('stopwatchElement', JSON.stringify(stopwatchElement));
        }, 500);

        stopwatchElement.hourElement = 0;
        stopwatchElement.minuteElement = 0;
        stopwatchElement.secondElement = 0;
        localStorage.removeItem('stopwatchElement');
    
        document.querySelector('.second').innerHTML = String(stopwatchElement.secondElement).padStart(2, '0');
    
        document.querySelector('.minute').innerHTML = String(stopwatchElement.minuteElement).padStart(2, '0');
    
        document.querySelector('.hour').innerHTML = String(stopwatchElement.hourElement).padStart(2, '0');
        
        localStorage.setItem('stopwatchElement', JSON.stringify(stopwatchElement));
}

    updateSecond();
}
