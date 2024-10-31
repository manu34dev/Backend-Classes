CREATE TABLE carts (
    cart_id INT PRIMARY KEY AUTO_INCREMENT,
    buyer_id_fk INT NOT NULL UNIQUE,
    create_at DATE DEFAULT CURRENT_DATE, 
    FOREIGN KEY (buyer_id_fk) REFERENCES buyer(user_id)
)