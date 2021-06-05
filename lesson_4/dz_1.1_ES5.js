'use strict';
function Product(name, price){
    this.name = name;
    this.price = price;
};

Product.prototype.make25PercentDiscount = function() {
    this.price = this.price - (this.price * 0.25);
};

let article1 = new Product('Ford Transit', 2264000);
let article2 = new Product('Audi A3', 2525000);

article1.make25PercentDiscount();
article2.make25PercentDiscount();

console.log(article1, article2);
