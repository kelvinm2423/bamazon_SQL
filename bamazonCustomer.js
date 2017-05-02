//Requiring NPM Packages
var inquirer = require('inquirer');
var mysql = require('mysql');

//Connect SQL
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",

	password: "",
	database: "bamazon"
});

connection.connection(function(err) {
	if (err) throw err;
});
//First prompt to pick a product ID
var start = function() {
	inquirer.prompt({
		name: "Product_ID"
		type: "rawList",
		message: "Please pick a product id."
		choices: [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	}).then(function(answer) {
		if(answer.Product_ID() === 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
			quantity();
	}
});

//Second prompt choosing how much they want
var quantity = function () {
	inquirer.prompt([
		{
			name: "Quantity_Amount",
			type
			message: "How many would you like?"
			choices: []
		}
	]).then(function(answer){
		connection.query(
			"insert into stock_quantity set ?",
			{
				stock_quantity: answer.Quantity_Amount,
			},
			function(err) {
				if(err) throw err;
				console.log("Insufficent quantity!");

				start();
			}
		);
	});
}


start();