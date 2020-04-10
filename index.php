<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TE Cog</title>

    <link rel="stylesheet" href="framework/css/jspsych.css">
    <script src="js/jquery-3.4.1.min.js"></script>

    <script src="framework/jspsych.js"></script>
    <script src="framework/plugins/jspsych-html-keyboard-response.js"></script>
    <script src="framework/plugins/jspsych-animation.js"></script>

    <script src="js/fonctions.js"></script>
</head>
<body></body>

<script>

    // Creation des listes d'items
    var items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var items_3 = jsPsych.randomization.sampleWithoutReplacement(items, 3);
    var items_4 = jsPsych.randomization.sampleWithoutReplacement(items, 4);
    var items_5 = jsPsych.randomization.sampleWithoutReplacement(items, 5);

    // Message de bienvenue
    var timeline = [];
    var welcome = {
        type: "html-keyboard-response",
        stimulus: "<h1>Digit Span</h1>",
        prompt: "Appuyez sur une touche pour commencer.",
    };
    timeline.push(welcome);

    // --GENERATION DIGIT SPAN--
    var ds3 = digitSpan(3);
    var ds4 = digitSpan(4);

    timeline.push(ds3[0]);
    timeline.push(ds3[1]);

    timeline.push(ds4[0]);
    timeline.push(ds4[1]);

    jsPsych.init({
        timeline: timeline,
        on_finish: function () {
            var data = jsPsych.data.get().filter({stimulus: 'Réponse :'}).csv();
            console.log(data);
            jsPsych.data.displayData('csv');
        }
    });
</script>

</html>