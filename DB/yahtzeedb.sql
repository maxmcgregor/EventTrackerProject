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
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `game`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `game` ;

CREATE TABLE IF NOT EXISTS `game` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `grand_total` INT(11) NOT NULL,
  `winner` TINYINT(1) NOT NULL,
  `aces` INT(11) NOT NULL,
  `twos` INT(11) NOT NULL,
  `threes` INT(11) NOT NULL,
  `fours` INT(11) NOT NULL,
  `fives` INT(11) NOT NULL,
  `sixes` INT(11) NOT NULL,
  `bonus` INT(11) NOT NULL,
  `3_of_a_kind` INT(11) NOT NULL,
  `4_of_a_kind` INT(11) NOT NULL,
  `full_house` INT(11) NOT NULL,
  `sm_straight` INT(11) NOT NULL,
  `lg_straight` INT(11) NOT NULL,
  `yahtzee` INT(11) NOT NULL,
  `chance` INT(11) NOT NULL,
  `yahtzee_bonus` INT(11) NOT NULL,
  `player_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_game_player_idx` (`player_id` ASC),
  CONSTRAINT `fk_game_player1`
    FOREIGN KEY (`player_id`)
    REFERENCES `player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 20
DEFAULT CHARACTER SET = utf8;

SET SQL_MODE = '';
DROP USER IF EXISTS yahtzeeuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'yahtzeeuser'@'localhost' IDENTIFIED BY 'yahtzeeuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'yahtzeeuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
