<?php
include 'fonctions.php';
$bdd = getBD();
insert_raw($bdd, $_POST['dataJSON']);

$json = $_POST['dataJSON'];
$data = json_decode($json);

echo 'Saved.';