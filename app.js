const display = document.querySelector("#display");

function addToDisplay(value) {

    const patt = /[-*+.\/]/;
    
    if(display.value === 'Error') {
        display.value = value;
    } else {

        if (patt.test(display.value.slice(-1)) && patt.test(value)) {
            display.value = display.value.slice(0, -1) + value;
        } else {
            display.value += value;
        }
    }
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay(){
    display.value ='';
}

function deleteLastChar(){
    display.value = display.value.slice(0, -1);
}