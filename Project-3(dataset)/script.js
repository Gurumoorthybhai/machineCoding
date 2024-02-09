// const para = document.querySelectorAll('p');
// // const para1 = document.querySelector('#p1');

// // console.log(para1);

// // para.forEach((index, p) => console.log('Element ' + (index + 1) + p));
// console.log(Array.from(para));


// para.forEach(function (item, index) {
//     console.log('Element ' + (index + 1) + ':', item);
// });

// const p = document.querySelectorAll('p');

// name is of dot notation
// let p0 = p[0].getAttribute('data.type.food');

// let p1 = p[1].getAttribute('type.food');

// name is of type hypen(-)
// let p2 = document.querySelector('p[data-type-food="non-veg"]');


// let p3 = document.querySelector('p[data-type\\:food="veggie"]')


// console.log(p0);

// console.log(p1.dataset.typeFood);

// console.log(p[2].dataset.typeFood);

const p = document.querySelector('p');
console.log(p.dataset.typeFood);



