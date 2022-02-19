const name1 = 'javaScript'
const name2 = 'Javascript'
if(name1.toLowerCase() == name2.toLowerCase()){
    console.log('these are same')
}

const products = [
    'dell 22 inch laptop',
    'Dell monitor with hd graphics',
    'Lg motor wala set',
    'symphony mobile with hd cemera',
    'best leptop is the Dell laptop'
]
// how to find array match element system1
/* const searching = 'dell'
const output = []
for(const product of products){
    if(product.indexOf(searching) != -1){
        output.push(product)
    }
}
 */
// console.log(output)

// how to find array match element system2
/* const output = []
for(const product of products){
    if(product.includes('dell')){
        output.push(product)
    }
}
console.log(output)
 */

// array find method3
const output = []
for(const product of products){
    if(product.toLowerCase().startsWith('dell'.toLowerCase())){
        output.push(product)
    }
}
console.log(output)
