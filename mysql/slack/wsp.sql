CREATE TABLE usuarios (
    usuario_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(70) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    creado_en DATE DEFAULT CURRENT_DATE 
)

CREATE TABLE contactos (
    contacto_id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL UNIQUE,
    contacto_usuario_id INT NOT NULL UNIQUE,
    creado_en DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id),
    FOREIGN KEY (contacto_usuario_id) REFERENCES usuarios(usuario_id)
)

CREATE TABLE contactos (
    chat_id INT PRIMARY KEY AUTO_INCREMENT,
    send_by_fk INT NOT NULL,
    recieved_by_fk INT NOT NULL,
    message TEXT NOT NULL,
    created_at DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (send_by_fk) REFERENCES usuers(user_id) ON DELETE CASCADE,
    FOREIGN KEY (recieved_by_fk) REFERENCES usuers(user_id) ON DELETE CASCADE
)