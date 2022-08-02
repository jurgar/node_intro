fetch("http://localhost:8080/")
  .then((resp) => resp.json())
  .then((response) => {
    console.log(response);
    const ul = document.createElement("ul");
    response.forEach((name) => {
      const li = document.createElement("li");
      li.textContent = name;
      ul.append(li);
    });
  })
  .catch((error) => console.error(error));
