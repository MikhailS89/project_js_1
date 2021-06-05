'use strict';
class Product{
    constructor (name, price){
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount(){
        this.price = this.price - (this.price * 0.25);
    }
}
let article1 = new Product('Ford Transit', 2264000);
article1.make25PercentDiscount();

let article2 = new Product('Audi A3', 2525000);
article2.make25PercentDiscount();

console.log(article1);
console.log(article2);