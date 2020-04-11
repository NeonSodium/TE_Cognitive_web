<?php
include 'bd.php';

function insert_raw($bdd, $data)
{
    $req = $bdd->prepare("INSERT INTO data_raw (data) VALUES (:d)");
    $req->bindParam(":d", $data);
    $req->execute();
    $req->closeCursor();
}