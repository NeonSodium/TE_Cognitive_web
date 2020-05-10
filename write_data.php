<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/bulma.css">
    <link rel="stylesheet" href="css/custom.css">
    <title>TE COG</title>
</head>
<body>

<?php
include 'fonctions.php';
$bdd = getBD();

$sujet = insertSujet($bdd, 'test');
insertRaw($bdd, $_POST['dataJSON']);

$json = $_POST['dataJSON'];
$data = json_decode($json);
$calc_1 = $_POST['dataCalc_1'];
$calc_2 = $_POST['dataCalc_2'];
$calc_3 = $_POST['dataCalc_3'];
#print_r($data);

# --CALCUL--

# Calc 1
$dataCalcRaw_1 = explode(",", $calc_1);
$dataCalc_1 = [];
for ($i = 0; $i < count($dataCalcRaw_1); $i++) {
    if ($dataCalcRaw_1[$i] == 'true') {
        array_push($dataCalc_1, 1);
    } else {
        array_push($dataCalc_1, 0);
    }
}
#print_r($dataCalc_1);
for ($i = 0; $i < count($dataCalc_1); $i++) {
    insertCalcul($bdd, $sujet, 1, $i+1, $dataCalc_1[$i]);
}

# Calc 2
$dataCalcRaw_2 = explode(",", $calc_2);
$dataCalc_2 = [];
for ($i = 0; $i < count($dataCalcRaw_2); $i++) {
    if ($dataCalcRaw_2[$i] == 'true') {
        array_push($dataCalc_2, 1);
    } else {
        array_push($dataCalc_2, 0);
    }
}
#print_r($dataCalc_2);
for ($i = 0; $i < count($dataCalc_2); $i++) {
    insertCalcul($bdd, $sujet, 2, $i+1, $dataCalc_2[$i]);
}

# Calc 3
$dataCalcRaw_3 = explode(",", $calc_3);
$dataCalc_3 = [];
for ($i = 0; $i < count($dataCalcRaw_3); $i++) {
    if ($dataCalcRaw_3[$i] == 'true') {
        array_push($dataCalc_3, 1);
    } else {
        array_push($dataCalc_3, 0);
    }
}
#print_r($dataCalc_3);
for ($i = 0; $i < count($dataCalc_3); $i++) {
    insertCalcul($bdd, $sujet, 3, $i+1, $dataCalc_3[$i]);
}


# --TEST--

for ($i = 0; $i < count($data); $i++) {
    #echo($data[$i]->{'test_part'});
    #echo "<br>";

    $part = $data[$i]->{'test_part'};
    $partexp = (explode("_", $part));
    #print_r($partexp);

    insertDigit($bdd, $sujet, intval($partexp[1]), $data[$i]->{'test_part'}, intval($partexp[2]), intval($partexp[3]), $data[$i]->{'correct'}, $data[$i]->{'key_press'}, $data[$i]->{'correct_response'}, $data[$i]->{'rt'}, $data[$i]->{'time_elapsed'});

}
?>

<section class="hero is-dark is-fullheight">
    <div class="hero-body">
        <div class="container has-text-centered">
            <h1 class="title">Merci !</h1>

            <h2 class="subtitle">Votre identifiant : <?php echo $sujet; ?></h2>

        </div>
    </div>
</section>

</body>
</html>

