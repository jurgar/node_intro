const casual = require("casual");

console.log("Jurga Ra");
console.log(casual.city, casual.integer((from = 0)), (to = 99));

const randomNumber = casual.integer((from = 1), (to = 10));
console.log(randomNumber);

const randomPersonName = () => {
  return `${casual.name_prefix} ${casual.first_name} ${casual.last_name}`;
};

console.log(randomPersonName());

const sex = ["male", "female", "other"];
const randomSex = sex[casual.integer((from = 0), (to = 2))];
casual.define("user", () => ({
  firstName: casual.first_name,
  lastName: casual.last_name,
  sex: randomSex,
  address: {
    country: casual.country,
    city: casual.city,
    street: casual.street,
  },

  email: casual.email,
  password: casual.password,
  age: casual.integer((from = 0), (to = 99)),
  month: casual.month_name,
  color: casual.color_name,
}));

console.log(casual.user);

casual.define("user", function () {
  return {
    firstname: casual.first_name,
    lastname: casual.last_name,
    gender: casual.gender,
    address: casual.country,
    password: casual.password,
    email: casual.email,
    year: casual.year,
    month: casual.month_number,
    color: casual.color_name,
  };
});

console.log(casual.user);

console.log(
  casual.name_suffix + " " + casual.first_name + " " + casual.last_name
);
