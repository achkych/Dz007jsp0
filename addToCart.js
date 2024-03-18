"use strict";

const itemContainerElement = document.querySelector(".item-container");

function addAndRemoveItems() {
	document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", function (event) {
      const addToCartButton = event.target;

      if (addToCartButton && addToCartButton.closest(".add-to-cart-button")) {
        const cartItem = document.createElement("div");
        cartItem.className = "item-box";

        cartItem.innerHTML = `
          <img class="item-img" src="img/item-img1.svg" alt="">
          <button class="item-btn" type="button" title="Delete"><i class="fa fa-close"></i></button>
          <div class="item-description">
            <p class="item-title">
              <span>MANGO PEOPLE</span><br><span>T-SHIRT</span>
            </p>
            <div class="item-description-parametrs">
              <p class="item-price">
                <span class="item-price-text">Price: <span class="item-price-value">$300</span></span>
              </p>
              <p class="item-color">
                <span class="item-color-text">Color: <span class="item-color-value">Red</span></span>
              </p>
              <p class="item-size">
                <span class="item-size-text">Size: <span class="item-size-value">Xl</span></span>
              </p>
              <p class="item-quantity">
                <span class="item-quantity-text">Quantity:</span><input
                  type="number" class="item-input" name="Quantity" value="1"
                  min="1" max="10">
              </p>
            </div>
          </div>
        `;

        // ƒобавление товаров
        if (itemContainerElement) {
          itemContainerElement.appendChild(cartItem);
          const cartItemsContainer =
            itemContainerElement.closest(".cart-items");
          if (cartItemsContainer) {
            cartItemsContainer.style.display = "flex";
          } else {
            throw new Error(`Ёлемент .cart-items не найден!`);
          }
        } else {
          throw new Error(`Ёлемент .item-container не найден!`);
        }

        const btnClose = cartItem.querySelector(".item-btn");

        // ”даление товаров
        if (btnClose) {
          btnClose.addEventListener("click", function () {
            if (cartItem) {
              cartItem.remove();
            }

            if (!document.querySelector(".item-box")) {
              if (itemContainerElement) {
                const cartItems = itemContainerElement.closest(".cart-items");
                if (cartItems) {
                  cartItems.style.display = "none";
                } else {
                  throw new Error(`Ёлемент .cart-items не найден!`);
                }
              } else {
                throw new Error(`Ёлемент .item-container не найден!`);
              }
            }
          });
        }
      }
    });
  });
}

try {
	addAndRemoveItems()
} catch (e) {
	console.log(e.message);
}