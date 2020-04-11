-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  sam. 11 avr. 2020 à 15:04
-- Version du serveur :  5.7.26
-- Version de PHP :  7.2.18

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
-- Structure de la table `data_raw`
--

DROP TABLE IF EXISTS `data_raw`;
CREATE TABLE IF NOT EXISTS `data_raw` (
  `id_raw` int(11) NOT NULL AUTO_INCREMENT,
  `data` text COLLATE utf8_unicode_ci NOT NULL,
  `date_raw` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_raw`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `data_raw`
--

INSERT INTO `data_raw` (`id_raw`, `data`, `date_raw`) VALUES
(1, '\"rt\",\"stimulus\",\"key_press\",\"test_part\",\"correct_response\",\"trial_type\",\"trial_index\",\"time_elapsed\",\"internal_node_id\"\r\n\"453.0349999840837\",\"Réponse :\",\"5\",\"rep_3_1\",\"5\",\"html-keyboard-response\",\"5\",\"5656\",\"0.0-3.0-0.0\"\r\n\"267.8600000217557\",\"Réponse :\",\"6\",\"rep_3_2\",\"6\",\"html-keyboard-response\",\"6\",\"5927\",\"0.0-3.0-0.1\"\r\n\"254.04500000877306\",\"Réponse :\",\"9\",\"rep_3_3\",\"9\",\"html-keyboard-response\",\"7\",\"6184\",\"0.0-3.0-0.2\"\r\n\"460.88999998755753\",\"Réponse :\",\"9\",\"rep_4_1\",\"9\",\"html-keyboard-response\",\"13\",\"12172\",\"0.0-6.0-0.0\"\r\n\"294.29000001982786\",\"Réponse :\",\"8\",\"rep_4_2\",\"8\",\"html-keyboard-response\",\"14\",\"12468\",\"0.0-6.0-0.1\"\r\n\"496.3500000012573\",\"Réponse :\",\"6\",\"rep_4_3\",\"6\",\"html-keyboard-response\",\"15\",\"12966\",\"0.0-6.0-0.2\"\r\n\"252.9799999902025\",\"Réponse :\",\"2\",\"rep_4_4\",\"2\",\"html-keyboard-response\",\"16\",\"13222\",\"0.0-6.0-0.3\"\r\n', '2020-04-11 16:59:17');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
