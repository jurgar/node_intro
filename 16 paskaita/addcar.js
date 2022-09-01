const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const numberplateInput = document.querySelector("input[name=numberplate]");
  const titleInput = document.querySelector("input[name=title]");
 
  const addcarObject = {
    numberplate: numberplateInput.value,
    title: titleInput.value,
      
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(addcarObject),
  };

  fetch("http://localhost:3000/cars, options)
    .then((resp) => resp.json())
    .then((response) => {})
    .catch((error) =>  console.error(error))
});