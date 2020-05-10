-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  Dim 10 mai 2020 à 11:32
-- Version du serveur :  10.4.10-MariaDB
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `te_cog`
--

-- --------------------------------------------------------

--
-- Structure de la table `calcul`
--

DROP TABLE IF EXISTS `calcul`;
CREATE TABLE IF NOT EXISTS `calcul` (
  `id_sujet` int(11) NOT NULL,
  `calc_part` int(11) NOT NULL,
  `calc_id` int(11) NOT NULL,
  `calc_correct` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  KEY `calcul_ibfk_1` (`id_sujet`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `data_raw`
--

DROP TABLE IF EXISTS `data_raw`;
CREATE TABLE IF NOT EXISTS `data_raw` (
  `id_raw` int(11) NOT NULL AUTO_INCREMENT,
  `data` longtext COLLATE utf8_unicode_ci NOT NULL,
  `date_raw` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id_raw`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `digit`
--

DROP TABLE IF EXISTS `digit`;
CREATE TABLE IF NOT EXISTS `digit` (
  `id_sujet` int(11) NOT NULL,
  `serie` int(11) NOT NULL,
  `trial` int(11) DEFAULT NULL,
  `item` int(11) DEFAULT NULL,
  `correct` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `key_press` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `correct_response` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `rt` float NOT NULL,
  `time_elapsed` int(11) NOT NULL,
  `test_part` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  KEY `digit_ibfk_1` (`id_sujet`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `sujets`
--

DROP TABLE IF EXISTS `sujets`;
CREATE TABLE IF NOT EXISTS `sujets` (
  `id_sujet` int(11) NOT NULL AUTO_INCREMENT,
  `code_sujet` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_sujet`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `calcul`
--
ALTER TABLE `calcul`
  ADD CONSTRAINT `calcul_ibfk_1` FOREIGN KEY (`id_sujet`) REFERENCES `sujets` (`id_sujet`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `digit`
--
ALTER TABLE `digit`
  ADD CONSTRAINT `digit_ibfk_1` FOREIGN KEY (`id_sujet`) REFERENCES `sujets` (`id_sujet`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
