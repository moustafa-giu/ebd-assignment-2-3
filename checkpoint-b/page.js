// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.
//
// The data is given to you:
import { items } from "./items.js";

// Export renderItems(list), matching() and start(), as the spec describes.
// Nothing is started for you. Everything you need is in modules 00 to 13.
import { items } from "./items.js";

export function renderItems(list) {
  const listElement = document.querySelector("#list");
  listElement.textContent = "";

  for (const item of list) {
    const listItem = document.createElement("li");
    listItem.classList.add("listing");
    listItem.textContent = `${item.name} - ${item.price} EGP`;
    listElement.append(listItem);
  }
}

export function matching() {
  return items.filter((item) => item.inStock === false);
}

export function start() {
  renderItems(items);

  const button = document.querySelector("#pick");
  button.addEventListener("click", () => {
    renderItems(matching());
  });
}

