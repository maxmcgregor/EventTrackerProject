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

COMMIT;

