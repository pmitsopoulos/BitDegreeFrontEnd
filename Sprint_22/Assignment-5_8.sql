-- Step 1
USE BEST_SHOP;


-- Step 2
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
    title TEXT,
    description TEXT,
    price DECIMAL(10,2),
    stock INT
);

-- Step 3
INSERT INTO products(title,description,price,stock) VALUES
('Pencil','Writting Tool', 0.50, 150),
('Pen', 'Writting Tool', 1.20, 200),
('Notebook', 'Note Taking Tool', 0.80, 200),
('Scissors', 'A tool to cut paper', 3.00, 200),
('Bookmark', 'A tool to keep track of your progress or a book', 0.10, 5000),
('Tape', 'Tool to repair a torn paper', 1, 50),
('Rubber Eraser', 'A tool to erase a pencil written mistake', 0.30, 500),
('Blank Paper', 'A paper to use on a printer', 0.05, 20000),
('Ruler', 'A tool to draw straight lines or to measure a distance on paper', 0.80, 70),
('Highlighter', 'A tool to Highlight important bits of information on paper', 2.00, 5000);

-- Step 4
SELECT * FROM products;

-- Step 5
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
    name TEXT,
    surname TEXT,
    email TEXT,
    occupation TEXT
);

-- Step 6
INSERT INTO employees(name,surname,email,occupation) VALUES
('John', 'Doe', 'jdoe@mail.com', 'Salesperson'),
('Jane', 'Foster', 'jfoster@mail.com', 'Marketing Manager'),
('Luke', 'Duke', 'lduke@mail.com', 'IT Manager'),
('James', 'Pond', 'jpond@mail.com', 'Developer'),
('Diana', 'King', 'dking@mail.com', 'Developer');

-- Step 7
SELECT * FROM employees;