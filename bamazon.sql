create database bamazon;

use bamazon;

create table products (
	item_id integer(10) auto_increment,
    product_name varchar(30) not null,
    department_name varchar(50) not null,
    price integer(7) not null,
    stock_quantity integer(20) not null,
    primary key (item_id)
);

use bamazon;

insert into products (product_name, department_name, price, stock_quantity)
values ('mock_product1', 'mock_department1', 15.00, 100),

('mock_product2', 'mock_department1', 25.00, 110),

('mock_product3', 'mock_department1', 30.00, 120),

('mock_product4', 'mock_department1', 40.00, 130),

('mock_product5', 'mock_department1', 35.00, 145),

('mock_product6', 'mock_department1', 45.00, 150),

('mock_product7', 'mock_department1', 50.00, 170),

('mock_product8', 'mock_department1', 75.00, 180),

('mock_product9', 'mock_department1', 60.00, 200),

('mock_product10', 'mock_department1', 20.00, 90),


