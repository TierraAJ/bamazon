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
            message: "What is the item ID of the product you would like to purhase?"
        },
        {
            type: "integer",
            name: "quantity",
            message: "How many would you like?"   
        }
    ])
    .then(function(res){
        console.log(res);
    });
}