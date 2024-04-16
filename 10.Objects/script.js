/*
function sortBy(arr, key) {
for(let i=0;i<arr.length-1;i++) {
    for(let j=0;j<arr.length-1;j++) {
        
        if(arr[j][key] > arr[j+1][key]) {
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
            }
        }
        // console.log(arr);
}
return arr;
}

const arr = [
    {name:'John', age:20},
    {name:'Ben', age:25},
    {name:'Peter', age:21},
    {name:'Ben', age:22},
    {name:'Peter', age:24},
    {name:'Abi', age:23}
];

console.log(sortBy(arr, 'age'));

//  function sortByKey(arr, key) {
//         return arr.slice().sort((a, b) => {
//             return a[key]-b[key];
            
//             // a[key] > b[key]
//         });
//     }

// console.log(arr);
// console.log(sortByKey(arr, 'age'));



// function sortByKey(arr) {
//     arr.sort(a, b => a);
// }


// for (let obj in arr) console.log(obj);

// const arr1 = [1,2,3,4,5];

/*
function uniqueObjects(obj) {

    let uniqueObj = [];
    let obj1 = {}
    for (let obj of arr) {
    
        let key = obj['name'];

        if(!obj1[key]) {
            obj1[key] = obj;
            uniqueObj.push(obj);
        }
            
        }
        console.log(uniqueObj);
        
    }

uniqueObjects(arr)
*/


// let arr = [6, 1, 2, 4, 8, 0];

function groupByGrade(arr) {

let obj1 = {};
    for(let obj of arr) {
            let {name, grade} = obj;
        if(obj1[grade]) {
            console.log(obj1[grade]);
            
            // obj1[grade].push(name);
        } else {
            obj1[grade] = [name]
        }
    }

    // console.log(obj1);
    
}

const students = [
    { name: 'Alice', grade: 'A' },
    { name: 'Bob', grade: 'B' },
    { name: 'Charlie', grade: 'A' },
    { name: 'David', grade: 'C' },
    { name: 'Eve', grade: 'B' },
    { name: 'Frank', grade: 'A' }
  ];

console.log(groupByGrade(students));
