<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TE Cog</title>

    <link rel="stylesheet" href="css/bulma.css">
    <script src="js/jquery-3.4.1.min.js"></script>
</head>
<body>

<section class="hero is-dark is-fullheight">
    <div class="hero-body">

        <div class="container">

            <div class="columns is-centered is-bordered">
                <div class="column has-text-centered">
                    <h1 class="title" id="item">TE Cognitive</h1>
                </div>
            </div>
        </div>

    </div>
</section>

<script>

    item = Math.floor(Math.random() * 10);
    $("#item").text(item);

</script>

</body>
</html>