fetch("http://localhost:8080/users")
  .then((resp) => resp.json())
  .then((response) => {
    console.log(response);
    const ul = document.createElement("ul");
    response.forEach((users) => {
      const li = document.createElement("li");
      li.textContent = users;
      ul.append(li);
    });

    document.body.append(ul);
  })
  .catch((error) => console.error(error));

fetch("http://localhost:8080/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(["Rima"]),
});
