'use strict';
function Post(author, text, date){
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(text){
    this.text = text;
}

let post1 = new Post('Mikhail','Hello', new Date().getDate());
post1.edit('Привет!');
console.log(post1);

function AttachedPost(author, text, date){
    Post.call(this,author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.makeTextHighlighted = function(){
    this.highlighted = true;
}
let AttPost1 = new AttachedPost('Li','Hello', new Date().getDate());
AttPost1.makeTextHighlighted();
AttPost1.edit('Нихао');
console.log(AttPost1);

