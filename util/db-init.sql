SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `heroku_7c819fe7f578379`.users;
DROP TABLE IF EXISTS `heroku_7c819fe7f578379`.coordinates;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE IF NOT EXISTS `heroku_7c819fe7f578379`.users (
	id INT(10) NOT NULL AUTO_INCREMENT,
    username VARCHAR(50),
    email VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS `heroku_7c819fe7f578379`.coordinates (
	userId INT(10) NOT NULL UNIQUE,
	latitude DECIMAL(9,6),
    longitude DECIMAL(9,6),
    FOREIGN KEY (userId) REFERENCES `heroku_7c819fe7f578379`.users (id)
);

INSERT INTO `heroku_7c819fe7f578379`.users(username, email) VALUES
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

INSERT INTO `heroku_7c819fe7f578379`.coordinates(userId, latitude, longitude) VALUES
(1, 45.813347, 15.976617),
(11, 45.813298, 15.976376),
(21, 45.813569, 15.979577),
(31, 45.814599, 15.978603),
(41, 45.805076, 15.978091),
(51, 45.810657, 15.987553),
(61, 45.815916, 15.992884),
(71, 45.826004, 16.108529),
(81, 45.824742, 16.036700),
(91, 45.824999, 16.021449);