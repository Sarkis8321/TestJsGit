let user = {
    name: "Oleg",
    age: 45,
    "Размер головы": 30,
    head: {
        cvetVolos: "#red",
    },
    agePlus: function(){
        return this.age + 1;
    }
}

//user["Размер головы"]
//user['agePlus']();


for(let key123 in user){
    console.log(key123,' ',user[key123]);
}

//console.log(user.head.cvetVolos);
//console.log(window.innerWidth);

/*
let mas = ["Россия","Украина","Белоруссия","Армения"];

for(let i = 0; i < 5; i++ ){
    let country = prompt('Введите страну','Россия');
    mas.push(country);
}


for(let i = 0;i < mas.length;i++){
    console.log(mas[i]);
}*/


