'use strict';
class ProductObject {
    constructor (id, image, name, description, price) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}

const products = [
    new ProductObject (
        0,
        '1.jpg',
        "ELLERY X M'O CAPSULE",
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        52.00,
    ),
    new ProductObject(
        1,
        '2.jpg',
        "ELLERY X M'O CAPSULE",
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        52.00,
    ),
    new ProductObject(
        2,
        '3.jpg',
        "ELLERY X M'O CAPSULE",
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        52.00,
    ),
    new ProductObject(
        3,
        '4.jpg',
        "ELLERY X M'O CAPSULE",
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        52.00,
    ),
    new ProductObject(
        4,
        '5.jpg',
        "ELLERY X M'O CAPSULE",
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        52.00,
    ),
    new ProductObject(
        5,
        '6.jpg',
        "ELLERY X M'O CAPSULE",
        'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        52.00,
    ),
];