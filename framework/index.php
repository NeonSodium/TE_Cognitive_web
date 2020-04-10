<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PsychJS</title>
    <script src="jspsych.js"></script>
    <link rel="stylesheet" href="css/jspsych.css">

    <script src="plugins/jspsych-html-keyboard-response.js"></script>
    <script src="plugins/jspsych-image-keyboard-response.js"></script>
</head>
<body>
</body>

<script>
    var timeline = [];
    var welcome = {
        type: "html-keyboard-response",
        stimulus: "Bienvenue sur mon expérience de test pour le framework JSPsych, appuyez sur une touche de votre clavier pour continuer."
    };
    timeline.push(welcome);

    var instructions = {
        type: "html-keyboard-response",
        stimulus: "<p>Dans cette expérience, un cercle apparaitra au centre de l'écran.</p>\n" +
            "<p>Si le cercle est <strong>bleu</strong>, appuyez sur la touche F du clavier aussi vite que possible.</p>\n" +
            "<p>Si le cercle est <strong>orange</strong>, appuyez sur la touche J du clavier aussi vite que possible.</p>\n" +
            "<div style='width: 700px;'>\n" +
            "    <div style='float: left;'>\n" +
            "        <img src='img/blue.png'>\n" +
            "        <p class='small'><strong>Appuyez sur la touche F</strong></p></div>\n" +
            "    <div class='float: right;'>\n" +
            "        <img src='img/orange.png'>\n" +
            "        <p class='small'><strong>Appuyez sur la touche J</strong></p></div>\n" +
            "</div>\n" +
            "<p>Appuyez sur n'importe quelle touche pour continuer.</p>"
    };
    timeline.push(instructions);

    var blue_trial = {
        type: 'image-keyboard-response',
        stimulus: 'img/blue.png',
        choices: ['f', 'j']
    };
    var orange_trial = {
        type: 'image-keyboard-response',
        stimulus: 'img/orange.png',
        choices: ['f', 'j']
    };
    timeline.push(blue_trial, orange_trial);

    var test_stimuli = [
        {stimulus: "img/blue.png", data: {test_part: 'test', correct_response: 'f'}},
        {stimulus: "img/orange.png", data: {test_part: 'test', correct_response: 'j'}},
    ];
    var fixation = {
        type: 'html-keyboard-response',
        stimulus: '<div style="font-size:60px;">+</div>',
        choices: jsPsych.NO_KEYS,
        trial_duration: 1000,
        data: {test_part: 'fixation'},
    };
    var test = {
        type: "image-keyboard-response",
        stimulus: jsPsych.timelineVariable('stimulus'),
        choices: ['f', 'j'],
        data: jsPsych.timelineVariable('data'),
        on_finish: function(data){
            data.correct = data.key_press === jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
        }
    };
    var test_procedure = {
        timeline: [fixation, test],
        timeline_variables: test_stimuli,
        randomize_order: true,
        repetitions: 5,
    };
    timeline.push(test_procedure);

    jsPsych.init({
        timeline: timeline,
        on_finish: function () {
            jsPsych.data.displayData();
        }
    });
</script>

</html>