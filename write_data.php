<?php
include 'fonctions.php';
$bdd = getBD();

$sujet = insertSujet($bdd, 'test');
insertRaw($bdd, $_POST['dataJSON']);

$json = $_POST['dataJSON'];
$data = json_decode($json);

for ($i = 0; $i < count($data); $i++) {
    echo ($data[$i]->{'test_part'});
    echo "<br>";
    insertDigit($bdd, $sujet, $data[$i]->{'test_part'}, $data[$i]->{'correct'}, $data[$i]->{'key_press'}, $data[$i]->{'correct_response'}, $data[$i]->{'rt'}, $data[$i]->{'time_elapsed'});
}