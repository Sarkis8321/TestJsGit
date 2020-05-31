let vremya = new Date();

vremya.setMinutes(0);
vremya.setSeconds(0);

let min = 0;
let sec = 0;

function chas(){
    console.clear();
    vremya.setMinutes(min);
    vremya.setSeconds(sec++);
    console.log(vremya.getMinutes(),' : ',vremya.getSeconds());
    
}


let interval = setInterval(chas,100);

setTimeout(clearInterval(interval), 10000);



