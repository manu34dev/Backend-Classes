CREATE TABLE Cart_Products (
    cart_products_id INT PRIMARY KEY AUTO_INCREMENT,
    cart_id_fk INT NOT NULL,
    product_id_fk INT NOT NULL,
    amount INT NOT NULL,
    create_at DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (cart_id_fk) REFERENCES carts (cart_id),
    FOREIGN KEY (product_id_fk) REFERENCES products (product_id)
)