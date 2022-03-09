fetch("/get-menu")
  .then(res => res.json())
//   .then(data => console.log(data))
  .then(users => {
    const table = document.getElementById("users-table");
    users.forEach(user => {
        const row = document.createElement("tr");
      const name = document.createElement("td");
      name.textContent = user.name;
      row.appendChild(name);
      const price = document.createElement("td");
      price.textContent = user.price;
      row.appendChild(price);
      table.appendChild(row);
    });
  });