<?php
include 'bd.php';


function insertRaw($bdd, $data)
{
    $req = $bdd->prepare("INSERT INTO data_raw (data) VALUES (:d)");
    $req->bindParam(":d", $data);
    $req->execute();
    $req->closeCursor();
}

function insertDigit($bdd, $id, $serie, $test_part, $trial, $item, $correct, $key_press, $correct_response, $rt, $time_elapsed)
{
    $req = $bdd->prepare("INSERT INTO digit (id_sujet, serie, test_part, trial, item, correct, key_press, correct_response, rt, time_elapsed) VALUES (:id, :serie, :test_part, :trial, :item, :correct, :key_press, :correct_response, :rt, :time_elapsed)");
    $req->bindParam(":id", $id);
    $req->bindParam(":serie", $serie);
    $req->bindParam(":test_part", $test_part);
    $req->bindParam(":trial", $trial);
    $req->bindParam(":item", $item);
    $req->bindParam(":correct", $correct);
    $req->bindParam(":key_press", $key_press);
    $req->bindParam(":correct_response", $correct_response);
    $req->bindParam(":rt", $rt);
    $req->bindParam(":time_elapsed", $time_elapsed);
    $req->execute();
    $req->closeCursor();
}

function insertSujet($bdd, $code)
{
    $req = $bdd->prepare("INSERT INTO sujets (code_sujet) VALUES (:code)");
    $req->bindParam(":code", $code);
    $req->execute();
    $LAST_ID = $bdd->lastInsertId();
    $req->closeCursor();
    return $LAST_ID;
}