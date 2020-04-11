<?php

function getBD()
{
    $serveur = 'localhost';
    $login = 'u485051925_cogueur';
    $mot_de_passe = 'Josiana34';
    $base_de_donnees = 'u485051925_tecog';

    $pdo = new PDO('mysql:host=' . $serveur . ';dbname=' . $base_de_donnees, $login, $mot_de_passe);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    $pdo->exec("SET CHARACTER SET utf8");
    return $pdo;
}