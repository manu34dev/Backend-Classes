INSERT INTO usuers (`username`, `email`, `password_hash`) VALUES ('pepesito', 'pepesito@gmail.com', 'pepesito123')

Varios usuarios 

INSERT INTO usuers (`username`, `email`, `password_hash`) VALUES
('Santos', 'MSantos@gmail.com', 'SantosM123'),
('Lampone', 'PLampone@gmail.com', 'LamponeP123')


// chat

INSERT INTO chats ('send_by_fk', 'recieve_by_fk', message ) VALUES
(2, 3, "hola"),
(3, 2, "como estas?")

//DELETE

DELETE FROM usuers WHERE username = "pepesito".

INSERT INTO usuers (`username`, `email`, `password_hash`) VALUES 
('leonel', 'leonel55@gmail.com', 'leonel123'),
('juan', 'juancillo32@gmail.com', 'juancillo123'),
('carlita', 'carlita22@gmail.com', 'carlitaal123')

DELETE FROM usuers WHERE user_id = 6.

UPDATE usuers 
SET username = 'carlota' WHERE user_id = 7

//alterar
Alter TABLE usuers RENAME TO users
