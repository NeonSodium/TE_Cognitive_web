<?php
include 'bd.php';

function getSeries($bdd)
{
    $req = $bdd->prepare("SELECT * FROM series");
    $req->execute();
    $series = $req->fetchAll();
    $req->closeCursor();
    return $series;
}