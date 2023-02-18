
var Value = 0;

document.querySelector('.value').innerHTML = Value;


const inc = () => {
    Value = Number(Value) + 1;
    document.querySelector('.value').innerHTML = Value
}

const reset = () => {
    Value = 0
    document.querySelector('.value').innerHTML = Value
}

const dec = () => {

    // if want to restrict value till 0 uncomment below line
    // if(value>0)
    Value = Number(Value) - 1;
    document.querySelector('.value').innerHTML = Value
}

