import data from "./data.js"

const getCardHtml = () => {
    let cardHtml = "";

    data.forEach(item => {
        let btnTextColor = "";
        if (item.isSedans) {
            btnTextColor = "sedans-btn";
        } else if (item.isSuvs) {
            btnTextColor = "suvs-btn";
        } else if (item.isLuxury) {
            btnTextColor = "luxury-btn";
        };

        cardHtml += `
        <div class="card--container ${item.background}">
            <img class="card__icon" src="${item.icon}" alt="${item.attribute}" />
            <h2 class="card__title">${item.title}</h2>
            <p class="card__description">
                ${item.description}
            </p>
            <button class="learn-more-btn ${btnTextColor}">Learn More</button>
        </div>
        `
    })
    return cardHtml
}

const render = () => {
    document.getElementById("card-section").innerHTML = getCardHtml()
}
render()