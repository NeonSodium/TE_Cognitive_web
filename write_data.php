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

#print_r($data);

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

