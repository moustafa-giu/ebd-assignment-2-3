export function readForm() {
  const nameInput = document.querySelector("#name");
  const priceInput = document.querySelector("#price");

  return {
    name: nameInput.value.trim(),
    price: Number(priceInput.value),
  };
}

export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

export function renderList(items) {
  const list = document.querySelector("#list");
  list.textContent = "";

  for (const item of items) {
    const card = document.createElement("li");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = item.name;

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = `${item.price} EGP`;

    card.append(title, price);
    list.append(card);
  }
}

export function wireForm() {
  const form = document.querySelector("#product-form");
  const priceInput = document.querySelector("#price");
  const errorLine = document.querySelector("#error");
  const products = [];

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const item = readForm();

    if (!item.name) {
      errorLine.textContent = "Give the product a name.";
      return;
    }

    if (!priceInput.value || Number.isNaN(item.price) || item.price <= 0) {
      errorLine.textContent = "Give the product a price.";
      return;
    }

    errorLine.textContent = "";
    products.push(item);
    renderList(products);
    clearForm();
  });
}