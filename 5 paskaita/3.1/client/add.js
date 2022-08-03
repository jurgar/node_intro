const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInput = document.querySelector("input[name=name]");
  console.log(nameInput.value);

  const nameObject = { name: nameInput.value };
  console.log(nameObject);

  const headers = {
    method: "POST",
    body: JSON.stringify(nameObject),
    "Content-type": "application/json",
  };

  fetch("http://localhost:8080/names", headers)
    .then((resp) => resp.json())
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.error(error));
});
