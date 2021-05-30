const products = [
        {id: 3, price: 200,},
        {id: 4, price: 900,},
        {id: 1, price: 1000,},
    ];

for (let i = 0; i < products.length; i++) {
    products[i].discont = '15%';
    console.log(products[i]);
}