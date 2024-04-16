// const company = {
//     sales: [
//         {
//             name: 'Sales Person 1',
//             salary: 100
//         },
//         {
//             name: 'Sales Person 2',
//             salary: 200
//         },
//         {
//             name: 'Sales Person 3',
//             salary: 300
//         },
//     ],
//     development: {
//     internal: [
//         {
//             name: 'Internal Person 1',
//             salary: 400
//         },
//         {
//             name: 'Internal Person 2',
//             salary: 500
//         }],
//     outside: [    
//         {
//             name: 'Outside Person 1',
//             salary: 600
//         },
//         {
//             name: 'Outside Person 2',
//             salary: 700
//         },
//     ]
//     }
// };

// const obj = company.sales;
// // for (let obj Object.fromEntries(company)) {
// //     console.log(obj);
    
// // }

// const sum = obj.reduce((accumulated, currentValue) => {
//     return accumulated + currentValue.salary;
// }, 0);


// console.log(sum);

// new Date().getTime() returns current time in milli seconds /1000 to make seconds 

const seconds = new Date().getTime()/1000;

setTimeout(() => {
    console.log(`Delay of ${new Date().getTime()/1000 - seconds} seconds`);
    
}, 1000);

while(true) {

    if(new Date().getTime()/1000 - seconds > 2) {
        console.log("Hold the callback queue for 2 seconds");
        break;
    }
}

while(true) {

    if(new Date().getTime()/1000 - seconds > 4) {
        console.log("Hold the callback queue next 2 seconds");
        break;
    }
}
