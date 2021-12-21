import { Sequelize } from "sequelize";

// Option 1: Passing a connection URI
const sequelize = new Sequelize("postgres://admin:admin@localhost:5432/cart"); // Example for postgres
console.log("before async");

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully");
} catch (error) {
  console.log("Unable to connection to db", error);
}


console.log("after async");
