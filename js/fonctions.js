function digitSpan(nb) {
    var items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var items_3 = jsPsych.randomization.sampleWithoutReplacement(items, 3);
    var items_4 = jsPsych.randomization.sampleWithoutReplacement(items, 4);
    var items_5 = jsPsych.randomization.sampleWithoutReplacement(items, 5);
    var items_6 = jsPsych.randomization.sampleWithoutReplacement(items, 6);
    var items_7 = jsPsych.randomization.sampleWithoutReplacement(items, 7);
    var items_8 = jsPsych.randomization.sampleWithoutReplacement(items, 8);
    var items_9 = jsPsych.randomization.sampleWithoutReplacement(items, 9);

    // --PRESENTATION DES ITEMS--
    // Definir les items a presenter
    if (nb === 3) {
        var span_stimulus = [
            {stimulus: items_3[0], data: {test_part: 'item_3_1', correct_response: items_3[0]}},
            {stimulus: items_3[1], data: {test_part: 'item_3_2', correct_response: items_3[1]}},
            {stimulus: items_3[2], data: {test_part: 'item_3_3', correct_response: items_3[2]}},
        ];
        var rep_stimulus = [
            {stimulus: "Réponse :", data: {test_part: 'rep_3_1', correct_response: items_3[0]}},
            {stimulus: "Réponse :", data: {test_part: 'rep_3_2', correct_response: items_3[1]}},
            {stimulus: "Réponse :", data: {test_part: 'rep_3_3', correct_response: items_3[2]}},
        ];
    }
    if (nb === 4) {
        var span_stimulus = [
            {stimulus: items_4[0], data: {test_part: 'item_4_1', correct_response: items_4[0]}},
            {stimulus: items_4[1], data: {test_part: 'item_4_2', correct_response: items_4[1]}},
            {stimulus: items_4[2], data: {test_part: 'item_4_3', correct_response: items_4[2]}},
            {stimulus: items_4[3], data: {test_part: 'item_4_4', correct_response: items_4[3]}},
        ];
    }
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
    };

    // --REPONSES--
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
    };

    var digit = [span_procedure, rep_procedure]

    return digit;
}