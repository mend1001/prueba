- -----------------------------------------------------
-- Schema ASD_PRUEBA
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ASD_PRUEBA
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ASD_PRUEBA` DEFAULT CHARACTER SET utf8 ;
USE `ASD_PRUEBA` ;

-- -----------------------------------------------------
-- Table `ASD_PRUEBA`.`t_mutantes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ASD_PRUEBA`.`t_mutantes` ;

CREATE TABLE IF NOT EXISTS `ASD_PRUEBA`.`t_mutantes` (
  `mutid` INT NOT NULL AUTO_INCREMENT,
  `mutnom` VARCHAR(70) NOT NULL,
  `mutapodo` VARCHAR(70) NOT NULL,
  `mutactivo` TINYINT NOT NULL,
  `conid` INT NOT NULL,
  `rolid` INT NOT NULL,
  `vehid` INT NULL,
  `paiid` INT NULL,
  `podmutid` INT NOT NULL,
  `mutimg` VARCHAR(50) NULL,
  PRIMARY KEY (`mutid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ASD_PRUEBA`.`t_rol`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ASD_PRUEBA`.`t_rol` ;

CREATE TABLE IF NOT EXISTS `ASD_PRUEBA`.`t_rol` (
  `rolid` INT NOT NULL AUTO_INCREMENT,
  `rolafinidad` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`rolid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ASD_PRUEBA`.`t_poder`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ASD_PRUEBA`.`t_poder` ;

CREATE TABLE IF NOT EXISTS `ASD_PRUEBA`.`t_poder` (
  `podid` INT NOT NULL AUTO_INCREMENT,
  `podtipo` VARCHAR(45) NOT NULL,
  `poddescripcion` VARCHAR(600) NULL,
  PRIMARY KEY (`podid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ASD_PRUEBA`.`t_vehiculo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ASD_PRUEBA`.`t_vehiculo` ;

CREATE TABLE IF NOT EXISTS `ASD_PRUEBA`.`t_vehiculo` (
  `vehid` INT NOT NULL AUTO_INCREMENT,
  `vehnom` VARCHAR(45) NOT NULL,
  `vehdescripcion` VARCHAR(250) NOT NULL,
  `vehcodigo` VARCHAR(3) NOT NULL,
  PRIMARY KEY (`vehid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ASD_PRUEBA`.`t_condicion`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ASD_PRUEBA`.`t_condicion` ;

CREATE TABLE IF NOT EXISTS `ASD_PRUEBA`.`t_condicion` (
  `conid` INT NOT NULL AUTO_INCREMENT,
  `connom` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`conid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ASD_PRUEBA`.`t_pais`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ASD_PRUEBA`.`t_pais` ;

CREATE TABLE IF NOT EXISTS `ASD_PRUEBA`.`t_pais` (
  `paiid` INT NOT NULL AUTO_INCREMENT,
  `paicod` VARCHAR(2) NOT NULL,
  `painom` VARCHAR(45) NULL,
  PRIMARY KEY (`paiid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ASD_PRUEBA`.`t_poder_mutante`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ASD_PRUEBA`.`t_poder_mutante` ;

CREATE TABLE IF NOT EXISTS `ASD_PRUEBA`.`t_poder_mutante` (
  `podmutid` INT NOT NULL AUTO_INCREMENT,
  `podid` INT(11) NOT NULL,
  `mutid` INT(11) NOT NULL,
  PRIMARY KEY (`podmutid`))
ENGINE = InnoDB;

ALTER TABLE `asd_prueba`.`t_vehiculo` 
ADD COLUMN `vehimg` `vehimg` VARCHAR(700) NULL DEFAULT NULL ;

ALTER TABLE `asd_prueba`.`t_vehiculo` 
ADD COLUMN `vehactivo` TINYINT NOT NULL AFTER `vehimg`