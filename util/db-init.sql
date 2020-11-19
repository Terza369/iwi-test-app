SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS iwi.users;
DROP TABLE IF EXISTS iwi.coordinates;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE IF NOT EXISTS iwi.users (
	id INT(10) NOT NULL AUTO_INCREMENT,
    username VARCHAR(50),
    email VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS iwi.coordinates (
	userId INT(10) NOT NULL,
	latitude DECIMAL(9,6),
    longitude DECIMAL(9,6),
    PRIMARY KEY (userId),
    FOREIGN KEY (userId) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO users(username, email) VALUES
('ana', 'ana@gmail.com'),
('marko', 'marko@gmail.com'),
('ivana', 'ivana@hotmail.com'),
('jasmina69', 'jas69@yohoo.com'),
('josipbabic', 'josipbabic992@gmail.com'),
('martina', 'marty42@gmail.com'),
('filip1', 'jafilip@gmail.com'),
('tomislav', 'tome2323@gmail.com'),
('zorana', 'zorka55@yahoo.com'),
('biserka', 'bisa@gmail.com');

INSERT INTO coordinates(userId, latitude, longitude) VALUES
(1, 45.813347, 15.976617),
(2, 45.813298, 15.976376),
(3, 45.813569, 15.979577),
(4, 45.814599, 15.978603),
(5, 45.805076, 15.978091),
(6, 45.810657, 15.987553),
(7, 45.815916, 15.992884),
(8, 45.826004, 16.108529),
(9, 45.824742, 16.036700),
(10, 45.824999, 16.021449);