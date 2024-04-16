const btn1 = document.getElementById('btn1');

console.log(btn1);

// btn1.onclick = () => {
//     console.log('Btn clicked');
    
// }

// function firstFn() {
//     console.log(' firstFn ');
    
// }

// function secondFn() {
//     console.log(' secondFn ');
    
// }

// btn1.addEventListener('click', firstFn);
// btn1.addEventListener('click', secondFn);
// btn1.addEventListener('click', fetchPromise);
/*
function doStep1(initialValue, cb) {

    const val = initialValue + 1;
    cb(val);
}


function doStep2(initialValue, cb) {

    const val = initialValue + 1;
    cb(val);
}

function doStep3(initialValue, cb) {
    const val = initialValue + 1;
    cb(val);
    
}

function operation() {

    const result = 0;
    doStep1(result, (result1) => {
        doStep2(result1, (result2) => {
            doStep3(result2, (result3) => {
                console.log(`doStep 3 - ${result3}`);
                
            })
        })
    })
}
*/
// https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json
// https://mdn.githudb.io/learning-area/javascript/apis/fetching-data/can-store/products.json

/*
function fetchCall() {

    try {
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascripts/apis/fetching-data/can-store/products.json');

fetchPromise
  .then((res) => {
    console.log('res - ', res);
    
    if (!res.ok) {
      console.error("HTTP Error");
      throw new Error(`HTTP Error ${res.status}`);
    }
    return res.json();
  })
  .then(data => console.log("Data - ", data))
  .catch(err => console.log(`Could not load the server - ${err.message}`));

    }
    catch(err) {
        console.log(' Err 2 ', err);
        
    }
// fetchPromise
// .then((res) => {
//     if(!res.ok) {
//         throw new Error("HTTP Error");
//     }
//     return res.json()
// })
// .then(data => console.log("Data - ", data))
// .catch(err => console.log(`Could not load the server - ${err.message}`));


}
*/

// async & await, async always returns promise

/*

async function fetchPromise() {

    try {

        const res = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    
        if(!res.ok) {
            throw new Error(`HTTP Error - ${res.status}`);
        }

        return await res.json();
    } catch(err) {
        console.log(`Error - ${err}`);
        // throw
        
    }
}

const result = fetchPromise();
result.then(d => console.log(' data - ', d)).catch(e => console.log(e))
console.log(" result - ", result);
console.log(" result ");

*/

const promise1 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
    res(" Promise 2 ")
}, 500)
});

const promise3 = new Promise((res, rej) => {
    setTimeout(() => {
    res(" Promise 3 ")
}, 1000)
});

Promise.all([promise1 ,promise2, promise3])
.then(res => {
    for (let p of res) {
        if(!p.ok) {
            throw new Error(`${p.status}`);
        }
        p.json().then(d => console.log(d));
        // console.log(promise);
    }
    
})
.catch(err => console.log(" Err - ", err));

