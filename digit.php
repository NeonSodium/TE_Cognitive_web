<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TE Cog</title>

    <link rel="stylesheet" href="framework/css/jspsych.css">
    <link rel="stylesheet" href="css/custom.css">
    <script src="js/jquery-3.4.1.min.js"></script>

    <script src="framework/jspsych.js"></script>
    <script src="framework/plugins/jspsych-html-keyboard-response.js"></script>
    <script src="framework/plugins/jspsych-animation.js"></script>
    <script src="framework/plugins/jspsych-instructions.js"></script>

    <script src="js/fonctions.js"></script>
</head>
<body>

</body>

<script>

    // Message de bienvenue
    var timeline = [];
    var welcome = {
        type: "html-keyboard-response",
        stimulus: "<h1>Digit Span</h1>",
        prompt: "Appuyez sur une touche pour commencer.",
    };
    timeline.push(welcome);

    var instruction = {
        type: 'instructions',
        pages: [
            "<p>Une série de chiffres va s'afficher au centre de l'écran, " +
            "à la fin de la série il vous sera demandé de restituer la série de chiffres dans l'ordre.</p>",

            "<p>Lorsque \"Réponse :\" s'affiche vous devez taper les chiffres en utilisant votre clavier. </p>" +
            "<p>Seule la ligne de chiffres est compatible (vous n'avez pas besoin d'utiliser la touche \"maj\").</p>" +
            "<p><img src='assets/clavier.png' alt='' id='clavier'></p>",

            'This is the final page.',
        ],
        show_clickable_nav: true
    };
    timeline.push(instruction);

    // --GENERATION SERIES DIGIT SPAN--
    var ds1 = digitSpan(1);
    var ds2 = digitSpan(2);
    var ds3 = digitSpan(3);
    var ds4 = digitSpan(4);
    var ds5 = digitSpan(5);
    var ds6 = digitSpan(6);
    var ds7 = digitSpan(7);
    var ds8 = digitSpan(8);
    var ds9 = digitSpan(9);
    var ds10 = digitSpan(10);
    var ds11 = digitSpan(11);
    var ds12 = digitSpan(12);
    var ds13 = digitSpan(13);
    var ds14 = digitSpan(14);

    var welc_ds1 = {
        type: "html-keyboard-response",
        stimulus: "<h1>Série de 3</h1>",
        trial_duration: 1500,
        choices: jsPsych.NO_KEYS,
    };
    timeline.push(welc_ds1);
    timeline.push(ds1[0]);
    timeline.push(ds1[1]);

    var welc_ds2 = {
        type: "html-keyboard-response",
        stimulus: "<h1>Série de 4</h1>",
        trial_duration: 1500,
        choices: jsPsych.NO_KEYS,
    };
    timeline.push(welc_ds2);
    timeline.push(ds2[0]);
    timeline.push(ds2[1]);


    var welc_ds3 = {
        type: "html-keyboard-response",
        stimulus: "<h1>Série de 5</h1>",
        trial_duration: 1500,
        choices: jsPsych.NO_KEYS,
    };
    timeline.push(welc_ds3);
    timeline.push(ds3[0]);
    timeline.push(ds3[1]);
/*

    var welc_ds4 = {
        type: "html-keyboard-response",
        stimulus: "<h1>Série de 6</h1>",
        trial_duration: 1500,
        choices: jsPsych.NO_KEYS,
    };
    timeline.push(welc_ds4);
    timeline.push(ds4[0]);
    timeline.push(ds4[1]);

    var welc_ds5 = {
        type: "html-keyboard-response",
        stimulus: "<h1>Série de 7</h1>",
        trial_duration: 1500,
        choices: jsPsych.NO_KEYS,
    };
    timeline.push(welc_ds5);
    timeline.push(ds5[0]);
    timeline.push(ds5[1]);

    var welc_ds6 = {
        type: "html-keyboard-response",
        stimulus: "<h1>Série de 7</h1>",
        trial_duration: 1500,
        choices: jsPsych.NO_KEYS,
    };
    timeline.push(welc_ds6);
    timeline.push(ds6[0]);
    timeline.push(ds6[1]);

    var welc_ds7 = {
        type: "html-keyboard-response",
        stimulus: "<h1>Série de 6</h1>",
        trial_duration: 1500,
        choices: jsPsych.NO_KEYS,
    };
    timeline.push(welc_ds7);
    timeline.push(ds7[0]);
    timeline.push(ds7[1]);

    var welc_ds8 = {
        type: "html-keyboard-response",
        stimulus: "<h1>Série de 7</h1>",
        trial_duration: 1500,
        choices: jsPsych.NO_KEYS,
    };
    timeline.push(welc_ds8);
    timeline.push(ds8[0]);
    timeline.push(ds8[1]);

    var welc_ds9 = {
        type: "html-keyboard-response",
        stimulus: "<h1>Série de 7</h1>",
        trial_duration: 1500,
        choices: jsPsych.NO_KEYS,
    };
    timeline.push(welc_ds9);
    timeline.push(ds9[0]);
    timeline.push(ds9[1]);

    var welc_ds10 = {
        type: "html-keyboard-response",
        stimulus: "<h1>Série de 8</h1>",
        trial_duration: 1500,
        choices: jsPsych.NO_KEYS,
    };
    timeline.push(welc_ds10);
    timeline.push(ds10[0]);
    timeline.push(ds10[1]);

    var welc_ds11 = {
        type: "html-keyboard-response",
        stimulus: "<h1>Série de 8</h1>",
        trial_duration: 1500,
        choices: jsPsych.NO_KEYS,
    };
    timeline.push(welc_ds11);
    timeline.push(ds11[0]);
    timeline.push(ds11[1]);

    var welc_ds12 = {
        type: "html-keyboard-response",
        stimulus: "<h1>Série de 9</h1>",
        trial_duration: 1500,
        choices: jsPsych.NO_KEYS,
    };
    timeline.push(welc_ds12);
    timeline.push(ds12[0]);
    timeline.push(ds12[1]);

    var welc_ds13 = {
        type: "html-keyboard-response",
        stimulus: "<h1>Série de 9</h1>",
        trial_duration: 1500,
        choices: jsPsych.NO_KEYS,
    };
    timeline.push(welc_ds13);
    timeline.push(ds13[0]);
    timeline.push(ds13[1]);

    var welc_ds14 = {
        type: "html-keyboard-response",
        stimulus: "<h1>Série de 8</h1>",
        trial_duration: 1500,
        choices: jsPsych.NO_KEYS,
    };
    timeline.push(welc_ds14);
    timeline.push(ds14[0]);
    timeline.push(ds14[1]);
*/


    // LA FIN
    jsPsych.init({
        timeline: timeline,
        on_finish: function () {
            var data = jsPsych.data.get().filter({stimulus: 'Réponse :'}).csv();
            var dataJSON = jsPsych.data.get().filter({stimulus: 'Réponse :'}).json();
            console.log(dataJSON);
            jsPsych.data.displayData('csv');
            var form = $("<form action='write_data.php' method='post'>" +
                "<input type='hidden' name='data' value='" + data + "'>" +
                "<input type='hidden' name='dataJSON' value='" + dataJSON + "'>" +
                "</form>");
            $('body').append(form);
            form.submit();
        }
    });
</script>

</html>