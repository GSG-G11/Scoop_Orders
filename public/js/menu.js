const father = document.querySelector(".father");
const orders = document.querySelector(".Orders");

orders.addEventListener("click", () => {
  location.replace("/all_orders.html");
});
const createMenu = (data) => {
  while (father.firstChild) {
    father.removeChild(father.lastChild);
  }
  data.forEach((i) => {
    const id = document.createElement("input");
    id.type = "hidden";
    id.value = i.id;

    const menu = document.createElement("div");
    menu.classList.add("menu");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = i.name;

    const innerDiv = document.createElement("div");
    innerDiv.classList.add("inner-div");

    const price = document.createElement("h2");
    price.classList.add("price");
    price.textContent = i.price;

    const button = document.createElement("button");
    button.classList.add("btn-class");
    button.textContent = "Add";
    button.addEventListener("click", (e) => {
      fetch("/addOrder", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: i.id,
        }),
      });

      price.textContent;
      title.textContent;
    });

    father.appendChild(menu);
    menu.appendChild(title);
    menu.appendChild(innerDiv);
    innerDiv.appendChild(price);
    innerDiv.appendChild(button);
  });
};

fetch("/get-menu")
  .then((res) => res.json())
  .then((res) => createMenu(res));
