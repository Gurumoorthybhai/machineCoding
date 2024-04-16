/*
function parent() {
    
    let a = 10;
    child();
    // block scope
    // {
        
    //     var a = 10;
    //     let b = 20;
    // }


    // let a = 10;
    // let a;

    function child() {
        console.log(`Child ${a}`);
         
    }

    console.log(`a - ${a}`);
    // console.log(`b - ${b}`);        // reference error: b is not defined
    // child();
}

// function child() {
//         console.log(`Child ${a}`);   // reference error: a is not defined
         
//     }

// console.log(`a - ${a}, b - ${b}`);

parent();

*/

/*
function api() {
try {
    return new Promise((resolve, reject) => {
        resolve("1");
    });
} catch (error) {
    
}
}

const apiPromise = api();
// console.log(apiPromise.then(d => console.log(d)
// ));

apiPromise.then(d => {
    console.log(`data - `,d);

}).catch(e => {
    console.log(` error - ${e}`);

})
// console.log(`API - `, api());
*/

// promise chaining

async function firstAsyncPromise() {


    return new Promise((res, rej) => {

        setTimeout(() => {
            res("First Promise");
        }, 100);
    });
}


async function secondAsyncPromise(data) {

    return new Promise((res, rej) => {
        
            setTimeout(() => {
                console.log(`In secondAsyncPrimise - ${data}`);
                try {
                // res("Second Promise");
                throw new Error(" Unknown error occured");
                } catch(e) {
                    console.log(" error handling : ", e);
                    rej(e);
                }
            }, 10);
         
    });
}

async function thirdAsyncPromise(data) {

    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(`In thirdAsyncPromise - ${data}`);
            res("third Promise");
        }, 10);
    });
}

/*
firstAsyncPromise()
.then((data) => secondAsyncPromise(data))       
.then((data) => thirdAsyncPromise(data))
.then((data) => console.log(`End - ${data}`))
.catch(e => console.log(`Error -${e.message}`));
*/

// in case of error in 2nd then, 1st block then executed, console the error stoped the code

// async function executeFn() {
// try {
//     const firstPromiseData = await firstAsyncPromise();
//     const secondPromiseData = await secondAsyncPromise(firstPromiseData);
//     const ThirdPromiseData = await thirdAsyncPromise(secondPromiseData);
//     console.log(` ThirdPromiseData - ${ThirdPromiseData}`);

// } catch(e) {
//     console.log(` Error - ${e}`);
// }
// }
// executeFn();

// how to manage array of async fn

const task = [
    () => firstAsyncPromise(),
    (data) => secondAsyncPromise(data),
    (data) => thirdAsyncPromise(data)
];

// reduce method

// Array.reducer receives a callback, initial value (optional)

// accumulator - holds the prev result
// callback runs aganist all the elements

// const arr = [1, 2, 3, 4, 5];

// const sum = arr.reduce((acc, val) => {
//     return acc + val;
// }, 0);

// console.log(`Sum - ${sum}`);

const sequentialChaining = task.reduce((prevPromise, CurrentTask) => {
    // console.log(prevPromise);
    
    return prevPromise.then((data) => CurrentTask(data))
}, Promise.resolve());

sequentialChaining.then(finalData => {
    console.log(`Final Data - ${finalData}`);
    
}).catch(err => {
    console.log(`Error Catch ${err.message}`);
    
})
