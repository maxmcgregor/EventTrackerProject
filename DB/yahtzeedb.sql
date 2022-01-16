-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema yahtzeedb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `yahtzeedb` ;

-- -----------------------------------------------------
-- Schema yahtzeedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `yahtzeedb` DEFAULT CHARACTER SET utf8 ;
USE `yahtzeedb` ;

-- -----------------------------------------------------
-- Table `player`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `player` ;

CREATE TABLE IF NOT EXISTS `player` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `game`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `game` ;

CREATE TABLE IF NOT EXISTS `game` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `grand_total` INT NOT NULL,
  `winner` TINYINT(1) NOT NULL,
  `aces` INT NOT NULL,
  `twos` INT NOT NULL,
  `threes` INT NOT NULL,
  `fours` INT NOT NULL,
  `fives` INT NOT NULL,
  `sixes` INT NOT NULL,
  `bonus` INT NOT NULL,
  `3_of_a_kind` INT NOT NULL,
  `4_of_a_kind` INT NOT NULL,
  `full_house` INT NOT NULL,
  `sm_straight` INT NOT NULL,
  `lg_straight` INT NOT NULL,
  `yahtzee` INT NOT NULL,
  `chance` INT NOT NULL,
  `yahtzee_bonus` INT NOT NULL,
  `player_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_game_player_idx` (`player_id` ASC),
  CONSTRAINT `fk_game_player1`
    FOREIGN KEY (`player_id`)
    REFERENCES `player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS yahtzeeuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'yahtzeeuser'@'localhost' IDENTIFIED BY 'yahtzeeuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'yahtzeeuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `player`
-- -----------------------------------------------------
START TRANSACTION;
USE `yahtzeedb`;
INSERT INTO `player` (`id`, `name`) VALUES (1, 'Max');
INSERT INTO `player` (`id`, `name`) VALUES (2, 'Carla');

COMMIT;


-- -----------------------------------------------------
-- Data for table `game`
-- -----------------------------------------------------
START TRANSACTION;
USE `yahtzeedb`;
INSERT INTO `game` (`id`, `grand_total`, `winner`, `aces`, `twos`, `threes`, `fours`, `fives`, `sixes`, `bonus`, `3_of_a_kind`, `4_of_a_kind`, `full_house`, `sm_straight`, `lg_straight`, `yahtzee`, `chance`, `yahtzee_bonus`, `player_id`) VALUES (1, 180, 0, 2, 2, 12, 12, 0, 24, 0, 28, 26, 25, 30, 0, 0, 20, 0, 1);
INSERT INTO `game` (`id`, `grand_total`, `winner`, `aces`, `twos`, `threes`, `fours`, `fives`, `sixes`, `bonus`, `3_of_a_kind`, `4_of_a_kind`, `full_house`, `sm_straight`, `lg_straight`, `yahtzee`, `chance`, `yahtzee_bonus`, `player_id`) VALUES (DEFAULT, 250, 1, 3, 4, 12, 8, 15, 24, 35, 23, 12, 25, 30, 40, 0, 20, 0, 2);
INSERT INTO `game` (`id`, `grand_total`, `winner`, `aces`, `twos`, `threes`, `fours`, `fives`, `sixes`, `bonus`, `3_of_a_kind`, `4_of_a_kind`, `full_house`, `sm_straight`, `lg_straight`, `yahtzee`, `chance`, `yahtzee_bonus`, `player_id`) VALUES (DEFAULT, 385, 1, 2, 0, 9, 12, 15, 24, 0, 28, 30, 25, 30, 40, 50, 20, 100, 1);
INSERT INTO `game` (`id`, `grand_total`, `winner`, `aces`, `twos`, `threes`, `fours`, `fives`, `sixes`, `bonus`, `3_of_a_kind`, `4_of_a_kind`, `full_house`, `sm_straight`, `lg_straight`, `yahtzee`, `chance`, `yahtzee_bonus`, `player_id`) VALUES (DEFAULT, 254, 0, 0, 6, 12, 8, 15, 18, 0, 26, 0, 25, 30, 40, 50, 24, 0, 2);
INSERT INTO `game` (`id`, `grand_total`, `winner`, `aces`, `twos`, `threes`, `fours`, `fives`, `sixes`, `bonus`, `3_of_a_kind`, `4_of_a_kind`, `full_house`, `sm_straight`, `lg_straight`, `yahtzee`, `chance`, `yahtzee_bonus`, `player_id`) VALUES (DEFAULT, 209, 0, 1, 4, 12, 12, 20, 24, 35, 18, 8, 25, 30, 0, 0, 24, 0, 1);
INSERT INTO `game` (`id`, `grand_total`, `winner`, `aces`, `twos`, `threes`, `fours`, `fives`, `sixes`, `bonus`, `3_of_a_kind`, `4_of_a_kind`, `full_house`, `sm_straight`, `lg_straight`, `yahtzee`, `chance`, `yahtzee_bonus`, `player_id`) VALUES (DEFAULT, 273, 1, 2, 2, 12, 12, 10, 18, 0, 26, 29, 25, 30, 40, 50, 22, 0, 2);
INSERT INTO `game` (`id`, `grand_total`, `winner`, `aces`, `twos`, `threes`, `fours`, `fives`, `sixes`, `bonus`, `3_of_a_kind`, `4_of_a_kind`, `full_house`, `sm_straight`, `lg_straight`, `yahtzee`, `chance`, `yahtzee_bonus`, `player_id`) VALUES (DEFAULT, 257, 1, 2, 2, 0, 12, 15, 18, 0, 28, 27, 25, 30, 40, 50, 18, 0, 1);
INSERT INTO `game` (`id`, `grand_total`, `winner`, `aces`, `twos`, `threes`, `fours`, `fives`, `sixes`, `bonus`, `3_of_a_kind`, `4_of_a_kind`, `full_house`, `sm_straight`, `lg_straight`, `yahtzee`, `chance`, `yahtzee_bonus`, `player_id`) VALUES (DEFAULT, 149, 0, 1, 8, 12, 0, 10, 12, 0, 27, 0, 25, 30, 0, 0, 24, 0, 2);
INSERT INTO `game` (`id`, `grand_total`, `winner`, `aces`, `twos`, `threes`, `fours`, `fives`, `sixes`, `bonus`, `3_of_a_kind`, `4_of_a_kind`, `full_house`, `sm_straight`, `lg_straight`, `yahtzee`, `chance`, `yahtzee_bonus`, `player_id`) VALUES (DEFAULT, 194, 0, 3, 4, 9, 12, 10, 24, 0, 14, 24, 0, 30, 40, 0, 24, 0, 1);
INSERT INTO `game` (`id`, `grand_total`, `winner`, `aces`, `twos`, `threes`, `fours`, `fives`, `sixes`, `bonus`, `3_of_a_kind`, `4_of_a_kind`, `full_house`, `sm_straight`, `lg_straight`, `yahtzee`, `chance`, `yahtzee_bonus`, `player_id`) VALUES (DEFAULT, 281, 1, 2, 6, 0, 16, 15, 24, 35, 20, 21, 0, 30, 40, 50, 22, 0, 2);
INSERT INTO `game` (`id`, `grand_total`, `winner`, `aces`, `twos`, `threes`, `fours`, `fives`, `sixes`, `bonus`, `3_of_a_kind`, `4_of_a_kind`, `full_house`, `sm_straight`, `lg_straight`, `yahtzee`, `chance`, `yahtzee_bonus`, `player_id`) VALUES (DEFAULT, 220, 1, 3, 4, 9, 12, 15, 18, 0, 25, 16, 25, 30, 40, 0, 23, 0, 1);
INSERT INTO `game` (`id`, `grand_total`, `winner`, `aces`, `twos`, `threes`, `fours`, `fives`, `sixes`, `bonus`, `3_of_a_kind`, `4_of_a_kind`, `full_house`, `sm_straight`, `lg_straight`, `yahtzee`, `chance`, `yahtzee_bonus`, `player_id`) VALUES (DEFAULT, 211, 0, 1, 6, 9, 16, 5, 24, 0, 21, 0, 25, 30, 0, 50, 24, 0, 2);
INSERT INTO `game` (`id`, `grand_total`, `winner`, `aces`, `twos`, `threes`, `fours`, `fives`, `sixes`, `bonus`, `3_of_a_kind`, `4_of_a_kind`, `full_house`, `sm_straight`, `lg_straight`, `yahtzee`, `chance`, `yahtzee_bonus`, `player_id`) VALUES (DEFAULT, 237, 1, 0, 4, 9, 16, 20, 12, 0, 16, 29, 25, 30, 0, 50, 26, 0, 2);
INSERT INTO `game` (`id`, `grand_total`, `winner`, `aces`, `twos`, `threes`, `fours`, `fives`, `sixes`, `bonus`, `3_of_a_kind`, `4_of_a_kind`, `full_house`, `sm_straight`, `lg_straight`, `yahtzee`, `chance`, `yahtzee_bonus`, `player_id`) VALUES (DEFAULT, 215, 0, 1, 4, 9, 16, 5, 12, 0, 25, 18, 25, 30, 0, 50, 20, 0, 1);
INSERT INTO `game` (`id`, `grand_total`, `winner`, `aces`, `twos`, `threes`, `fours`, `fives`, `sixes`, `bonus`, `3_of_a_kind`, `4_of_a_kind`, `full_house`, `sm_straight`, `lg_straight`, `yahtzee`, `chance`, `yahtzee_bonus`, `player_id`) VALUES (DEFAULT, 202, 1, 3, 4, 0, 0, 10, 18, 0, 27, 0, 25, 30, 40, 50, 20, 0, 2);
INSERT INTO `game` (`id`, `grand_total`, `winner`, `aces`, `twos`, `threes`, `fours`, `fives`, `sixes`, `bonus`, `3_of_a_kind`, `4_of_a_kind`, `full_house`, `sm_straight`, `lg_straight`, `yahtzee`, `chance`, `yahtzee_bonus`, `player_id`) VALUES (DEFAULT, 172, 0, 2, 6, 6, 8, 15, 24, 0, 21, 14, 25, 30, 0, 0, 21, 0, 1);
INSERT INTO `game` (`id`, `grand_total`, `winner`, `aces`, `twos`, `threes`, `fours`, `fives`, `sixes`, `bonus`, `3_of_a_kind`, `4_of_a_kind`, `full_house`, `sm_straight`, `lg_straight`, `yahtzee`, `chance`, `yahtzee_bonus`, `player_id`) VALUES (DEFAULT, 227, 1, 1, 0, 12, 12, 10, 24, 0, 23, 26, 25, 30, 40, 0, 24, 0, 2);
INSERT INTO `game` (`id`, `grand_total`, `winner`, `aces`, `twos`, `threes`, `fours`, `fives`, `sixes`, `bonus`, `3_of_a_kind`, `4_of_a_kind`, `full_house`, `sm_straight`, `lg_straight`, `yahtzee`, `chance`, `yahtzee_bonus`, `player_id`) VALUES (DEFAULT, 164, 0, 1, 6, 6, 16, 15, 18, 0, 27, 0, 25, 30, 0, 0, 20, 0, 1);

COMMIT;

