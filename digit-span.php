<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TE Cog</title>

    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/bulma.css">
    <link rel="stylesheet" href="css/custom.css">
    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/fonctions.js"></script>
</head>
<body>

<section class="hero is-dark is-fullheight">
    <div class="hero-body">

        <div class="container">

            <div class="columns is-centered is-bordered">
                <div class="column has-text-centered">

                    <h1 class="title">Serie n° <span id="num_serie"></span> (<span id="longueur"></span>)</h1>

                    <p id="item">TE Cognitive</p>

                    <p id="items"></p>

                </div>
            </div>

        </div>

    </div>
</section>

<?php
include 'fonctions.php';
$bdd = getBD();
$series = getSeries($bdd);
#print_r($series)

for ($i = 0; $i < count($series); $i++) {
    echo $series[$i][1] . ", ";
}

?>

<script>

    var series = [
        <?php
        for ($i = 0; $i < count($series); $i++) {
            echo $series[$i][1] . ", ";
        }
        ?>
    ];


    var num_serie = <?php echo $_GET["s"] ?> -1;
    var longueur = <?php echo $series[$_GET["s"] - 1][1] ?>;

    $("#num_serie").text(num_serie + 1);
    $("#longueur").text(longueur);
    var delai = 1500;
    items = creer_items(longueur);
    for (i = 0; i < longueur; i++) {
        setTimeout(change_item, delai * i, items[i]);
    }


    //$("#item").text(items[0]);
    //setTimeout(change_item, delai, items[1]);
    //setTimeout(change_item, delai * 2, items[2]);


</script>

</body>
</html>