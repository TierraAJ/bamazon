var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
   database: "bamazon_db",
   host: "localhost",
   port: "3306",
   user: "root",
   password: "nmIP**886758**"
});

connection.connect(function(err){
    if (err){
        console.log(err);
    }
    else {
        console.log("connected");
        shop();
    }
});

function shop() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err){
            throw err,
            console.log(err);
        }
        else {
            console.table(res);
            customerOrder(res);
        }
    });
}

function customerOrder(inventory) {
    inquirer.prompt([
        {
            type: "integer",
            name: "item-id",
            message: "What is the item ID of the product you would like to purhase?",
            validate: function(val) {
                return !isNaN(val) || val.toLowerCase() === "q";
              }
        },
        {
            type: "integer",
            name: "quantity",
            message: "How many would you like?"   
        }
    ])
    .then(function(val) {
        // Check if the user wants to quit the program
        checkIfShouldExit(val.choice);
        var choiceId = parseInt(val.choice);
        var product = checkInventory(choiceId, inventory);
  
        // If there is a product with the id the user chose, prompt the customer for a desired quantity
        if (product) {
          // Pass the chosen product to promptCustomerForQuantity
          promptCustomerForQuantity(product);
        }
        else {
          // Otherwise let them know the item is not in the inventory, re-run loadProducts
          console.log("\nThat item is not in the inventory.");
          loadProducts();
        }
      });
}