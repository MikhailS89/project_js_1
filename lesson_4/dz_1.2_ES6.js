'use strict';
class Post{
    constructor (author, text, date){
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit = function(text){
        this.text = text;
    }
};

let post1 = new Post('Mikhail','Hello', new Date().getDate());
post1.edit('Привет!');
console.log(post1);

class AttachedPost extends Post{
    constructor (author, text, date){
        super (author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted = function(){
        this.highlighted = true;
    }
}
let AttPost1 = new AttachedPost('Li','Hello', new Date().getDate());
AttPost1.makeTextHighlighted();
AttPost1.edit('Нихао');
console.log(AttPost1);