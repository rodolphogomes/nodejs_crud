const mongoose = require("mongoose"); //chamando o mongoose

const Person = mongoose.model("Person", {
  name: String,
  salary: Number,
  approved: Boolean,
});

module.exports = Person; //exportando
