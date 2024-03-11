CREATE TABLE CartItems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    productId INT,
    quantity INT,
    FOREIGN KEY (productId) REFERENCES Products(id)
);
CREATE TABLE Products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    productName VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    shippingCost DECIMAL(10, 2) NOT NULL,
    productImage TEXT
);
