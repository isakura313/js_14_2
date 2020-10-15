const first__arr = [1, 2, 3, 4];
const second_arr = [2, 4, 6, 8];
const all = first__arr.concat(second_arr);
// concat в современном коде не так часто встречается

const all_of = [...first__arr, ...second_arr];
//  хочу отрезать кусочек - первые 3 элемента
console.log(all_of.slice(0, 3))
// последний аргумент slice - не включется в вырез
console.log(all_of.indexOf(6, 0))
// вернет вам место по индексу
console.log(all_of)
