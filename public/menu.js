const father = document.querySelector(".father");

const createMenu = (data) => {
  while (father.firstChild) {
    father.removeChild(father.lastChild);
  }
  data.forEach((i) => {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const title = document.createElement("h1");
    title.classList.add("title");
    // title.name = "title"
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
      fetch('/go-to-order', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({title: title.textContent, price: price.textContent})
  });
     price.textContent
      title.textContent
    });
    // const titles =document.createElement("input")
    // titles.name = ('name')
    // titles.textContent = title 

    // const prices =document.createElement("input")
    // prices.name = ('price')
    // prices.textContent = price 



    father.appendChild(menu);
    menu.appendChild(title);
    menu.appendChild(innerDiv);
    innerDiv.appendChild(price);
    innerDiv.appendChild(button);
  });
};
const data = [];
fetch("/get-menu")
  .then((res) => res.json())
  .then((res) => createMenu(res));
