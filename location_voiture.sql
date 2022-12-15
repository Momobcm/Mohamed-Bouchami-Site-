-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: 127.0.0.1
-- Généré le : Jeu 08 Décembre 2022 à 15:12
-- Version du serveur: 5.5.10
-- Version de PHP: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `location_voiture`
--

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

CREATE TABLE IF NOT EXISTS `clients` (
  `code_client` varchar(5) NOT NULL,
  `nom_prenom` varchar(20) NOT NULL,
  `date_naissance` date NOT NULL,
  `adresse` text NOT NULL,
  `ville` varchar(10) NOT NULL,
  `telephone` varchar(10) NOT NULL,
  `date_permis` date NOT NULL,
  `code postal` varchar(5) NOT NULL,
  `email` varchar(20) NOT NULL,
  PRIMARY KEY (`code_client`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `clients`
--

INSERT INTO `clients` (`code_client`, `nom_prenom`, `date_naissance`, `adresse`, `ville`, `telephone`, `date_permis`, `code postal`, `email`) VALUES
('12A', 'Remy P', '2002-12-19', '35 Allée Paul Leclerc', 'Paris', '0661033225', '2020-12-22', '95200', 'remy@gmail.com'),
('12F', 'Polo Momo', '1999-04-22', 'Rue du zizou', 'Zizou', '0661044949', '2018-12-13', '19980', 'zizou@gmail.com');

-- --------------------------------------------------------

--
-- Structure de la table `locations`
--

CREATE TABLE IF NOT EXISTS `locations` (
  `id_location` int(11) NOT NULL AUTO_INCREMENT,
  `date_location` date NOT NULL,
  `duree` int(11) NOT NULL,
  `code_client` varchar(10) NOT NULL,
  `immatriculation` varchar(10) NOT NULL,
  `prix_jour` int(11) NOT NULL,
  PRIMARY KEY (`id_location`),
  KEY `code_client` (`code_client`,`immatriculation`),
  KEY `immatriculation` (`immatriculation`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Contenu de la table `locations`
--

INSERT INTO `locations` (`id_location`, `date_location`, `duree`, `code_client`, `immatriculation`, `prix_jour`) VALUES
(12, '2022-12-01', 4, '12A', '12 TU 2422', 40),
(14, '2022-05-11', 6, '12F', 'TO UNS 233', 60);

-- --------------------------------------------------------

--
-- Structure de la table `reparations`
--

CREATE TABLE IF NOT EXISTS `reparations` (
  `num_reparation` int(11) NOT NULL,
  `date_reparation` date NOT NULL,
  `duree_reparation` int(11) NOT NULL,
  `cout_reparation` int(11) NOT NULL,
  `responsable_rep` text NOT NULL,
  `immatriculation` varchar(10) NOT NULL,
  PRIMARY KEY (`num_reparation`),
  KEY `immatriculation` (`immatriculation`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `reparations`
--


-- --------------------------------------------------------

--
-- Structure de la table `voitures`
--

CREATE TABLE IF NOT EXISTS `voitures` (
  `immatriculation` varchar(10) NOT NULL,
  `marque` varchar(10) NOT NULL,
  `couleur` varchar(10) NOT NULL,
  `kilometrage` int(11) NOT NULL,
  `annee_circulation` date NOT NULL,
  `modele` varchar(10) NOT NULL,
  PRIMARY KEY (`immatriculation`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `voitures`
--

INSERT INTO `voitures` (`immatriculation`, `marque`, `couleur`, `kilometrage`, `annee_circulation`, `modele`) VALUES
('12 TU 2422', 'Mercedes', 'noir', 23922, '2012-12-05', 'AMG'),
('TO UNS 233', 'Audi', 'blanc', 29428, '2005-06-16', 'TT');

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `locations`
--
ALTER TABLE `locations`
  ADD CONSTRAINT `locations_ibfk_2` FOREIGN KEY (`immatriculation`) REFERENCES `voitures` (`immatriculation`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `locations_ibfk_1` FOREIGN KEY (`code_client`) REFERENCES `clients` (`code_client`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `reparations`
--
ALTER TABLE `reparations`
  ADD CONSTRAINT `reparations_ibfk_1` FOREIGN KEY (`immatriculation`) REFERENCES `voitures` (`immatriculation`) ON DELETE CASCADE ON UPDATE CASCADE;
