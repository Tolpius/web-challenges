console.clear();

const productName = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

// Create elements
const productTeaser = document.createElement("article");
console.log({ productTeaser });
productTeaser.classList.add("product");
productTeaser.innerHTML = `
<section class="product__body">
        <div class="product__text-container">
          <h2 class="product__name">${productName}</h2>
          <ul class="product__categories">
            <li class="product__category">${category1}</li>
            <li class="product__category">${category2}</li>
            <li class="product__category">${category3}</li>
          </ul>
          <p class="product__description">
            ${description}
          </p>
        </div>
        <div class="product__image-container">
          <img
            class="product__image"
            src=${imageSrc}
            alt=""
          />
        </div>
      </section>
      <footer class="product__footer">
        <span class="product__price">${price}</span>
        <button type="button" class="product__buy-button">Buy</button>
      </footer>`;

// Append the product teaser to the body
document.body.appendChild(productTeaser);

const buttons = document.querySelectorAll(".product__buy-button");
console.log({ buttons });
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const porductPrice = button.previousElementSibling.textContent;
    const productName = button.parentElement.previousElementSibling.querySelector(".product__name").textContent;
    console.log(`Product name: ${productName} \n Product price: ${porductPrice}`);
    alert(`Product "${productName}" with price "${porductPrice}" has been added to the cart.`);
  });
});
