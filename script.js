const sizes = [7, 8, 9, 10, 11];

function changeImage(imageSrc) {
  document.getElementById("mainImage").src = imageSrc;

  const thumbnails = document.querySelectorAll(".thumbnails img");
  thumbnails.forEach((img) => img.classList.remove("selected"));

  const selectedImage = Array.from(thumbnails).find((img) =>
    img.src.includes(imageSrc)
  );
  if (selectedImage) {
    selectedImage.classList.add("selected");
  }
}

function createSizeButtons() {
  const sizeButtonsContainer = document.getElementById("size-buttons");
  sizes.forEach((size) => {
    const button = document.createElement("button");
    button.innerHTML = size;
    button.onclick = () => selectSize(size);
    sizeButtonsContainer.appendChild(button);
  });
}

function selectSize(size) {
  const sizeButtons = document.querySelectorAll("#size-buttons button");
  sizeButtons.forEach((button) => button.classList.remove("selected"));
  event.target.classList.add("selected");
  console.log(`Selected size: ${size}`);
}

function changeQuantity(amount) {
  const quantityInput = document.getElementById("quantity");
  let currentQuantity = parseInt(quantityInput.value);
  currentQuantity = Math.max(1, currentQuantity + amount);
  quantityInput.value = currentQuantity;
}

function addToCart() {
  const selectedSizeButton = document.querySelector("#size-buttons .selected");
  const size = selectedSizeButton ? selectedSizeButton.innerHTML : null;
  const quantity = document.getElementById("quantity").value;

  if (size) {
    alert(
      `Added ${quantity} pair(s) of size ${size} Islander Slippers to the cart.`
    );
  } else {
    alert("Please select a size before adding to cart.");
  }
}

window.onload = createSizeButtons;
document.querySelector(".thumbnails img").classList.add("selected");
