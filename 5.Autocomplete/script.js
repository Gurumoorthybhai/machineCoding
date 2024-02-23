const suggestions = [
    'Web Development',
    'Web Development',
    'Web Development',
    'Web Development',
    'Web Development',
    'Web Development',
    'Web3 Technologies',
    'Open Source',
    'Block Chain',
    'Frontend Development',
    'Data Science'
];

const searchValue = document.querySelector('#search-field');

let resultBox = document.querySelector('.result-box');

function debounce(cb, delay) {

    let timer;

    return (...arg) => {

        clearTimeout(timerId);
    }
}

searchValue.onkeyup = () => {

    let results = [];
    const input = searchValue.value;

    if (input.length) {
        results = suggestions.filter(word => {
            return word.toLowerCase().includes(input.toLowerCase())
        });

        // resultBox.innerHTML = results;
        console.log(results);

    }
    if (!results.length) {
        return resultBox.innerHTML = ''
    }
    displayResult(results);

}

function displayResult(results) {

    let li = results.map((r, i) => {
        return `<li key=${i} onClick=selectedSuggestion(this)>${r}</li>`
    });


    resultBox.innerHTML = `<ul>${li.join(' ')}</ul>`

}

function selectedSuggestion(suggestion) {

    searchValue.value = suggestion.innerHTML;
    resultBox.innerHTML = '';

}