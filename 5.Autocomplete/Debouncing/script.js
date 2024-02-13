const inputField = document.getElementById('input-field');


inputField.addEventListener('keyup', (e) => {
    let value = e.target.value;
    handleKeyUp(value)
});

const handleKeyUp = DebounceHandleKeyUp((text) => {
    console.log(' Key value -', text);
}, 1000)

function DebounceHandleKeyUp(func, delay) {

    let timer;

    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay);

    }
}

