const products = [
    {id: 3, price: 127, photos: ["1.jpg", "2.jpg",]},
    {id: 5, price: 499, photos: []},
    {id: 10, price: 26, photos: ["3.jpg"]},
    {id: 8, price: 78,},
];

//часть 1;
let images = products.filter(function(element) {
    // return "photos" in element;
    if ("photos" in element && element.photos.length > 0){
        return element;
    }
});
console.log(images);

//Часть 2;
images = products.sort(function (a, b) {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price) {
        return -1;
    }
    return 0;
})
console.log(images);