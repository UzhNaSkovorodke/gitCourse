let user = {
  name: "Кирилл",
  age: 20,
};

let clone = {};

Object.assign(clone, user);
console.log(user, clone);
