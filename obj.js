
const user = {
    // name: "Vasya",
    // surname: "Semenov",
    sayName: function(){
        console.log(`${this.name} ${this.surname}`)
    }
}

const user_2 = new Object();
user_2.name = "Semen";
console.log(user_2.surname);


user.name = "Вася";
user.surname = "Васильев";

console.log(user.name);

user.name = "Иван";

user.sayName();
