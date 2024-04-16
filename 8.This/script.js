const arrowFn = () => console.log("This is a ", this);

function arrowFn1() {
    console.log("This is a ", this);
}


const obj = {
    arrFn: arrowFn,
    arrFn1: arrowFn1
}

arrowFn()
arrowFn1()
// obj.arrFn()
// obj.arrFn1()