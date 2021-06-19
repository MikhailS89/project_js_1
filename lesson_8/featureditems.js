'use strict';

let pathImages = 'images/featured';
let featuresItemsClass = document.querySelector('.featuredItems');

function getFeaturedItem(product){
    return `
    <div class="featuredItem">

            <div class="featuredImgWrap">
                <img src="${pathImages}/${product.image}" alt="${product.name}">
                <div class="featuredImgDark">
                    <button data-productId="${product.id}">
                        <img src="images/cart.svg" alt="">
                        Add to Cart
                    </button>
                </div>
            </div>

            <div class="featuredData">
                <div class="featuredName">
                    ${product.name}
                </div>
                <div class="featuredText">
                    ${product.description}
                </div>
                <div class="featuredPrice">
                    $${product.price}
                </div>
            </div>

        </div>
    `;
}

function createFeaturedItem(products,featuresItemsClass){
    let createCard = '';
    for ( let card of products){
        createCard = createCard + getFeaturedItem(card);
    }
    featuresItemsClass.insertAdjacentHTML('afterbegin', createCard);
    return createCard;
}


function clickAllButtons() {
    const clickAll = document.querySelectorAll('button[data-productId]');
    clickAll.forEach(function (button) {
        button.addEventListener('click', clickOnlyButton);
    })
}

function clickOnlyButton(event){
    let productId = event.currentTarget.getAttribute('data-productId');
    addProductIntoBasket(productId);
}


createFeaturedItem(products, featuresItemsClass);
clickAllButtons();
