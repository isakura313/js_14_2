const new_arr = ['Дело 1', 'Дело 2', 'Дело 3'];

new_arr.push("Дело 4");
console.log(new_arr.length);
console.log(new_arr.pop()) // возвращает и удаляет последний элемент массива

console.log(new_arr.length);

for(let i = 0; i < new_arr.length; i++){
    console.log(`Вася взял ${new_arr[i]}`);
}

for(let deal of new_arr){
    console.log(deal)
}

let numbers = [1, 2, 4, 5, 6];
let numbers_square = numbers.map((el)=>{
    return el ** 2;
})
console.log(numbers_square);
