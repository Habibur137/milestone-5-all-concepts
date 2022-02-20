const numbers = [2, 3, 4, 5, 6, 7, 8 ,9]
const num = x => x*x;
for(const number of numbers){
    // console.log(num(number))
}

const squire = numbers.map(number => number * number)
// console.log(squire)
const filter = numbers.filter(number => number > 3)
// console.log(filter)
const find = numbers.find(number => number*2 > 10)
console.log(find)

const products = [
    {id:1, name:'bottol', price:50, color:'black'},
    {id:2, name:'money bag', price:250, color:'gray'},
    {id:3, name:'pant', price:500, color:'black'},
    {id:4, name:'shirt', price:1000, color:'red'},
    {id:5, name:'panjabi', price:1500, color:'yellow'}
]

const map = products.map(product => product.name)
const price = products.map(product => product.price)
// console.log(map)
// console.log(price)

const filter2 = products.filter(product => product.price > 250)
const filter3 = products.filter(product => product.color == 'black')
// console.log(filter2)
// console.log(filter3)

const find2 = products.find(product => product.id > 3)
// console.log(find2)