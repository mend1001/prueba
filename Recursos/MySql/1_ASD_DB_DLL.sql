
DROP TABLE  t_mutantes ;

CREATE TABLE   t_mutantes (
  mutid SERIAL,
  mutnom VARCHAR(100) ,
  mutapodo VARCHAR(100) ,
  mutactivo TINYINT ,
  conid INT ,
  rolid INT ,
  vehid INT ,
  paiid INT ,
  podmutid INT ,
  mutimg VARCHAR(700) ,
  PRIMARY KEY (mutid))
;


DROP TABLE  t_rol ;

CREATE TABLE   t_rol (
  rolid SERIAL,
  rolafinidad VARCHAR(45) ,
  PRIMARY KEY (rolid))
;

DROP TABLE  t_poder ;

CREATE TABLE   t_poder (
  podid SERIAL,
  podtipo VARCHAR(200) ,
  poddescripcion VARCHAR(600) ,
  PRIMARY KEY (podid))
;


DROP TABLE  t_vehiculo ;

CREATE TABLE   t_vehiculo (
  vehid SERIAL,
  vehnom VARCHAR(45) ,
  vehdescripcion VARCHAR(700) ,
  vehcodigo VARCHAR(3) ,
  vehimg VARCHAR(700),
  vehactivo INT,
  PRIMARY KEY (vehid))
;

DROP TABLE  t_condicion ;

CREATE TABLE   t_condicion (
  conid SERIAL,
  connom VARCHAR(45) ,
  PRIMARY KEY (conid))
;


DROP TABLE  t_pais ;

CREATE TABLE   t_pais (
  paiid SERIAL ,
  paicod VARCHAR(2) ,
  painom VARCHAR(200) ,
  PRIMARY KEY (paiid))
;


DROP TABLE  t_poder_mutante ;

CREATE TABLE   t_poder_mutante (
  podmutid SERIAL,
  podid INT(11) ,
  mutid INT(11) ,
  PRIMARY KEY (podmutid))
;


