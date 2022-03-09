const container = document.querySelector("#container");
const orders = document.querySelector(".Orders");
const logout = document.querySelector(".logoutLi");

orders.addEventListener("click", () => {
  location.replace("/menu.html");
});

logout.addEventListener("click", () => {
  location.replace("/index.html");
});

const table = document.createElement("table");
const createName = (data) => {
  const tdTitle = document.createElement("td");
  tdTitle.textContent = "User Info";

  const tdName = document.createElement("td");
  tdName.textContent = data[0].row;

  table.appendChild(tdTitle);
  table.appendChild(tdName);
};
const createCart = (data) => {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }

  data.forEach((i) => {
    const tr = document.createElement("tr");
    tr.classList.add("p");

    const tdImg = document.createElement("td");
    tdImg.classList.add("image");
    const img = document.createElement("img");
    img.src = "../assets/275245472_500855048301279_823773588529135759_n.jpeg";

    const tdName = document.createElement("td");
    tdName.classList.add("name");
    tdName.textContent = i.name;

    const tdPrice = document.createElement("td");
    tdPrice.classList.add("price");
    tdPrice.textContent = i.price;

    container.appendChild(table);
    table.appendChild(tr);
    tr.appendChild(tdImg);
    tdImg.appendChild(img);
    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
  });
};

fetch("/get-users")
  .then((res) => res.json())
  .then((data) => createName(data));

fetch("/orders")
  .then((res) => res.json())
  .then((data) => createCart(data));
