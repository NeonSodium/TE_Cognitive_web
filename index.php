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

    // --PRESENTATION DES ITEMS--
    // Definir les items a presenter
    /*var span_stimulus = [
        {stimulus: items_3[0], data: {test_part: 'item_3_1', correct_response: items_3[0]}},
        {stimulus: items_3[1], data: {test_part: 'item_3_2', correct_response: items_3[1]}},
        {stimulus: items_3[2], data: {test_part: 'item_3_3', correct_response: items_3[2]}},
    ];
    // Definir le delai avec quels items
    var span = {
        type: "html-keyboard-response",
        stimulus: jsPsych.timelineVariable('stimulus'),
        data: jsPsych.timelineVariable('data'),
        trial_duration: 1000,
        choices: jsPsych.NO_KEYS,
    };
    // Definir la procedure
    var span_procedure = {
        timeline: [span],
        timeline_variables: span_stimulus,
        randomize_order: false,
        repetitions: 1,
    };*/

    var ds3 = digitSpan(3);

    timeline.push(ds3[0]);

    // --REPONSES--
    /*var rep_stimulus = [
        {stimulus: "Réponse :", data: {test_part: 'rep_3_1', correct_response: items_3[0]}},
        {stimulus: "Réponse :", data: {test_part: 'rep_3_2', correct_response: items_3[1]}},
        {stimulus: "Réponse :", data: {test_part: 'rep_3_3', correct_response: items_3[2]}},
    ];
    var rep = {
        type: "html-keyboard-response",
        stimulus: jsPsych.timelineVariable('stimulus'),
        choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        data: jsPsych.timelineVariable('data'),
        on_finish: function(data){
            data.key_press = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press);
        }
    };
    var rep_procedure = {
        timeline: [rep],
        timeline_variables: rep_stimulus,
        randomize_order: false,
        repetitions: 1,
    };*/

    timeline.push(ds3[1]);

    jsPsych.init({
        timeline: timeline,
        on_finish: function () {
            jsPsych.data.displayData('csv');
        }
    });
</script>

</html>