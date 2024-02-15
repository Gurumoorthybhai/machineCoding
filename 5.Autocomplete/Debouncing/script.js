const inputField = document.getElementById('input-field');
const normal = document.getElementById('normal');
const debounce = document.getElementById('debounce');
const throttle = document.getElementById('throttle');

inputField.addEventListener('keyup', (e) => {
    let value = e.target.value;
    // handleKeyUp(value)
    // handleWithDebounce(value)
    handleWithThrottle(value);
});

const handleKeyUp = (text) => {
    normal.textContent = text;
    // console.log(' Key value -', text);
};

const handleWithDebounce = DebounceHandleKeyUp((text) => {
    debounce.textContent = text;
    console.log(' Key value -', text);
}, 1000);

function DebounceHandleKeyUp(func, delay) {

    let timer;

    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay);

    }
}


const throttleHandleKeyUp = (cb, delay) => {

    let shouldWait = false;
    let waitingArg;
    let timoutFun = () => {
        if (waitingArg == null) {
            shouldWait = false;
        } else {
            cb.apply(this, waitingArg);
            waitingArg = null;
            setTimeout(timoutFun, delay);
        }
    };

    return (...args) => {

        if (shouldWait) {
            waitingArg = args;
            return;
        }
        cb.apply(this, args);
        shouldWait = true;

        setTimeout(timoutFun, delay);
    }
}

const handleWithThrottle = throttleHandleKeyUp((text) => {
    console.log(' throttle ', text);
    throttle.textContent = text;
}, 1000);
