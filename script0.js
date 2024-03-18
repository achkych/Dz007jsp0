"use strict";

async function getDataFromFile(filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error("Ошибка при загрузке файла");
    }
    return await response.json();
  } catch (error) {
    console.error("Произошла ошибка:", error);
    throw error;
  }
}

const cardsData = "cards.json"; 
const cardContainer = document.querySelector(".card-box-container");

getDataFromFile(cardsData)
  .then((data) => {
    if (cardContainer) {
      data.forEach((card) => {
        const cardHtml = `
        <div class="card-box">
          <div class="card-img-container">
            <img src="${card.photoSrc}" alt="${card.cardTitle}" class="card-img">
            <button type="button" class="add-to-cart-button">Add to Cart</button>
          </div>
          <div class="card-text">
            <span class="card-title">${card.cardTitle}</span>
            <span class="card-description">${card.cardDescription}</span>
            <span class="card-price">$${card.cardPrice}.00</span>
          </div>
        </div>
        `;
        cardContainer.insertAdjacentHTML("beforeend", cardHtml);
      });
    } else {
      console.log("Элемент .card-box-container не найден.");
    }
  })