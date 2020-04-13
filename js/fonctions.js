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
    if (nb === 1) {
        var span_stimulus = [
            {
                stimulus: "<p style='font-size: 4em'>" + items_3[0] + "</p>",
                data: {test_part: 'trial_1_1', correct_response: items_3[0]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_3[1] + "</p>",
                data: {test_part: 'trial_1_2', correct_response: items_3[1]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_3[2] + "</p>",
                data: {test_part: 'trial_1_3', correct_response: items_3[2]}
            },
        ];
        var rep_stimulus = [
            {stimulus: "Réponse :", data: {test_part: 'trial_1_1', correct_response: items_3[0]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_1_2', correct_response: items_3[1]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_1_3', correct_response: items_3[2]}},
        ];
    }
    if (nb === 2) {
        var span_stimulus = [
            {
                stimulus: "<p style='font-size: 4em'>" + items_4[0] + "</p>",
                data: {test_part: 'trial_2_1', correct_response: items_4[0]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_4[1] + "</p>",
                data: {test_part: 'trial_2_2', correct_response: items_4[1]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_4[2] + "</p>",
                data: {test_part: 'trial_2_3', correct_response: items_4[2]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_4[3] + "</p>",
                data: {test_part: 'trial_2_4', correct_response: items_4[3]}
            },
        ];
        var rep_stimulus = [
            {stimulus: "Réponse :", data: {test_part: 'trial_2_1', correct_response: items_4[0]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_2_2', correct_response: items_4[1]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_2_3', correct_response: items_4[2]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_2_4', correct_response: items_4[3]}},
        ];
    }
    if (nb === 3) {
        var span_stimulus = [
            {
                stimulus: "<p style='font-size: 4em'>" + items_5[0] + "</p>",
                data: {test_part: 'trial_3_1', correct_response: items_5[0]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_5[1] + "</p>",
                data: {test_part: 'trial_3_2', correct_response: items_5[1]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_5[2] + "</p>",
                data: {test_part: 'trial_3_3', correct_response: items_5[2]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_5[3] + "</p>",
                data: {test_part: 'trial_3_4', correct_response: items_5[3]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_5[4] + "</p>",
                data: {test_part: 'trial_3_5', correct_response: items_5[4]}
            },
        ];
        var rep_stimulus = [
            {stimulus: "Réponse :", data: {test_part: 'trial_3_1', correct_response: items_5[0]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_3_2', correct_response: items_5[1]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_3_3', correct_response: items_5[2]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_3_4', correct_response: items_5[3]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_3_5', correct_response: items_5[4]}},
        ];
    }
    if (nb === 4) {
        var span_stimulus = [
            {
                stimulus: "<p style='font-size: 4em'>" + items_6[0] + "</p>",
                data: {test_part: 'trial_4_1', correct_response: items_6[0]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_6[1] + "</p>",
                data: {test_part: 'trial_4_2', correct_response: items_6[1]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_6[2] + "</p>",
                data: {test_part: 'trial_4_3', correct_response: items_6[2]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_6[3] + "</p>",
                data: {test_part: 'trial_4_4', correct_response: items_6[3]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_6[4] + "</p>",
                data: {test_part: 'trial_4_5', correct_response: items_6[4]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_6[5] + "</p>",
                data: {test_part: 'trial_4_6', correct_response: items_6[5]}
            },
        ];
        var rep_stimulus = [
            {stimulus: "Réponse :", data: {test_part: 'trial_4_1', correct_response: items_6[0]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_4_2', correct_response: items_6[1]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_4_3', correct_response: items_6[2]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_4_4', correct_response: items_6[3]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_4_5', correct_response: items_6[4]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_4_6', correct_response: items_6[5]}},
        ];
    }
    if (nb === 5) {
        var span_stimulus = [
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[0] + "</p>",
                data: {test_part: 'trial_5_1', correct_response: items_7[0]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[1] + "</p>",
                data: {test_part: 'trial_5_2', correct_response: items_7[1]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[2] + "</p>",
                data: {test_part: 'trial_5_3', correct_response: items_7[2]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[3] + "</p>",
                data: {test_part: 'trial_5_4', correct_response: items_7[3]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[4] + "</p>",
                data: {test_part: 'trial_5_5', correct_response: items_7[4]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[5] + "</p>",
                data: {test_part: 'trial_5_6', correct_response: items_7[5]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[6] + "</p>",
                data: {test_part: 'trial_5_7', correct_response: items_7[6]}
            },
        ];
        var rep_stimulus = [
            {stimulus: "Réponse :", data: {test_part: 'trial_5_1', correct_response: items_7[0]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_5_2', correct_response: items_7[1]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_5_3', correct_response: items_7[2]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_5_4', correct_response: items_7[3]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_5_5', correct_response: items_7[4]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_5_6', correct_response: items_7[5]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_5_7', correct_response: items_7[6]}},
        ];
    }
    if (nb === 6) {
        var span_stimulus = [
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[0] + "</p>",
                data: {test_part: 'trial_6_1', correct_response: items_7[0]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[1] + "</p>",
                data: {test_part: 'trial_6_2', correct_response: items_7[1]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[2] + "</p>",
                data: {test_part: 'trial_6_3', correct_response: items_7[2]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[3] + "</p>",
                data: {test_part: 'trial_6_4', correct_response: items_7[3]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[4] + "</p>",
                data: {test_part: 'trial_6_5', correct_response: items_7[4]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[5] + "</p>",
                data: {test_part: 'trial_6_6', correct_response: items_7[5]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[6] + "</p>",
                data: {test_part: 'trial_6_7', correct_response: items_7[6]}
            },
        ];
        var rep_stimulus = [
            {stimulus: "Réponse :", data: {test_part: 'trial_6_1', correct_response: items_7[0]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_6_2', correct_response: items_7[1]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_6_3', correct_response: items_7[2]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_6_4', correct_response: items_7[3]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_6_5', correct_response: items_7[4]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_6_6', correct_response: items_7[5]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_6_7', correct_response: items_7[6]}},
        ];
    }
    if (nb === 7) {
        var span_stimulus = [
            {
                stimulus: "<p style='font-size: 4em'>" + items_6[0] + "</p>",
                data: {test_part: 'trial_7_1', correct_response: items_6[0]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_6[1] + "</p>",
                data: {test_part: 'trial_7_2', correct_response: items_6[1]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_6[2] + "</p>",
                data: {test_part: 'trial_7_3', correct_response: items_6[2]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_6[3] + "</p>",
                data: {test_part: 'trial_7_4', correct_response: items_6[3]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_6[4] + "</p>",
                data: {test_part: 'trial_7_5', correct_response: items_6[4]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_6[5] + "</p>",
                data: {test_part: 'trial_7_6', correct_response: items_6[5]}
            },
        ];
        var rep_stimulus = [
            {stimulus: "Réponse :", data: {test_part: 'trial_7_1', correct_response: items_6[0]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_7_2', correct_response: items_6[1]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_7_3', correct_response: items_6[2]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_7_4', correct_response: items_6[3]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_7_5', correct_response: items_6[4]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_7_6', correct_response: items_6[5]}},
        ];
    }
    if (nb === 8) {
        var span_stimulus = [
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[0] + "</p>",
                data: {test_part: 'trial_8_1', correct_response: items_7[0]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[1] + "</p>",
                data: {test_part: 'trial_8_2', correct_response: items_7[1]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[2] + "</p>",
                data: {test_part: 'trial_8_3', correct_response: items_7[2]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[3] + "</p>",
                data: {test_part: 'trial_8_4', correct_response: items_7[3]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[4] + "</p>",
                data: {test_part: 'trial_8_5', correct_response: items_7[4]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[5] + "</p>",
                data: {test_part: 'trial_8_6', correct_response: items_7[5]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[6] + "</p>",
                data: {test_part: 'trial_8_7', correct_response: items_7[6]}
            },
        ];
        var rep_stimulus = [
            {stimulus: "Réponse :", data: {test_part: 'trial_8_1', correct_response: items_7[0]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_8_2', correct_response: items_7[1]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_8_3', correct_response: items_7[2]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_8_4', correct_response: items_7[3]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_8_5', correct_response: items_7[4]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_8_6', correct_response: items_7[5]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_8_7', correct_response: items_7[6]}},
        ];
    }
    if (nb === 9) {
        var span_stimulus = [
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[0] + "</p>",
                data: {test_part: 'trial_9_1', correct_response: items_7[0]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[1] + "</p>",
                data: {test_part: 'trial_9_2', correct_response: items_7[1]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[2] + "</p>",
                data: {test_part: 'trial_9_3', correct_response: items_7[2]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[3] + "</p>",
                data: {test_part: 'trial_9_4', correct_response: items_7[3]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[4] + "</p>",
                data: {test_part: 'trial_9_5', correct_response: items_7[4]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[5] + "</p>",
                data: {test_part: 'trial_9_6', correct_response: items_7[5]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_7[6] + "</p>",
                data: {test_part: 'trial_9_7', correct_response: items_7[6]}
            },
        ];
        var rep_stimulus = [
            {stimulus: "Réponse :", data: {test_part: 'trial_9_1', correct_response: items_7[0]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_9_2', correct_response: items_7[1]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_9_3', correct_response: items_7[2]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_9_4', correct_response: items_7[3]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_9_5', correct_response: items_7[4]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_9_6', correct_response: items_7[5]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_9_7', correct_response: items_7[6]}},
        ];
    }
    if (nb === 10) {
        var span_stimulus = [
            {
                stimulus: "<p style='font-size: 4em'>" + items_8[0] + "</p>",
                data: {test_part: 'trial_10_1', correct_response: items_8[0]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_8[1] + "</p>",
                data: {test_part: 'trial_10_2', correct_response: items_8[1]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_8[2] + "</p>",
                data: {test_part: 'trial_10_3', correct_response: items_8[2]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_8[3] + "</p>",
                data: {test_part: 'trial_10_4', correct_response: items_8[3]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_8[4] + "</p>",
                data: {test_part: 'trial_10_5', correct_response: items_8[4]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_8[5] + "</p>",
                data: {test_part: 'trial_10_6', correct_response: items_8[5]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_8[6] + "</p>",
                data: {test_part: 'trial_10_7', correct_response: items_8[6]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_8[7] + "</p>",
                data: {test_part: 'trial_10_8', correct_response: items_8[7]}
            },
        ];
        var rep_stimulus = [
            {stimulus: "Réponse :", data: {test_part: 'trial_10_1', correct_response: items_8[0]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_10_2', correct_response: items_8[1]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_10_3', correct_response: items_8[2]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_10_4', correct_response: items_8[3]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_10_5', correct_response: items_8[4]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_10_6', correct_response: items_8[5]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_10_7', correct_response: items_8[6]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_10_8', correct_response: items_8[7]}},
        ];
    }
    if (nb === 11) {
        var span_stimulus = [
            {
                stimulus: "<p style='font-size: 4em'>" + items_8[0] + "</p>",
                data: {test_part: 'trial_11_1', correct_response: items_8[0]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_8[1] + "</p>",
                data: {test_part: 'trial_11_2', correct_response: items_8[1]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_8[2] + "</p>",
                data: {test_part: 'trial_11_3', correct_response: items_8[2]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_8[3] + "</p>",
                data: {test_part: 'trial_11_4', correct_response: items_8[3]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_8[4] + "</p>",
                data: {test_part: 'trial_11_5', correct_response: items_8[4]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_8[5] + "</p>",
                data: {test_part: 'trial_11_6', correct_response: items_8[5]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_8[6] + "</p>",
                data: {test_part: 'trial_11_7', correct_response: items_8[6]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_8[7] + "</p>",
                data: {test_part: 'trial_11_8', correct_response: items_8[7]}
            },
        ];
        var rep_stimulus = [
            {stimulus: "Réponse :", data: {test_part: 'trial_11_1', correct_response: items_8[0]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_11_2', correct_response: items_8[1]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_11_3', correct_response: items_8[2]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_11_4', correct_response: items_8[3]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_11_5', correct_response: items_8[4]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_11_6', correct_response: items_8[5]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_11_7', correct_response: items_8[6]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_11_8', correct_response: items_8[7]}},
        ];
    }
    if (nb === 12) {
        var span_stimulus = [
            {
                stimulus: "<p style='font-size: 4em'>" + items_9[0] + "</p>",
                data: {test_part: 'trial_12_1', correct_response: items_9[0]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_9[1] + "</p>",
                data: {test_part: 'trial_12_2', correct_response: items_9[1]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_9[2] + "</p>",
                data: {test_part: 'trial_12_3', correct_response: items_9[2]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_9[3] + "</p>",
                data: {test_part: 'trial_12_4', correct_response: items_9[3]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_9[4] + "</p>",
                data: {test_part: 'trial_12_5', correct_response: items_9[4]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_9[5] + "</p>",
                data: {test_part: 'trial_12_6', correct_response: items_9[5]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_9[6] + "</p>",
                data: {test_part: 'trial_12_7', correct_response: items_9[6]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_9[7] + "</p>",
                data: {test_part: 'trial_12_8', correct_response: items_9[7]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_9[8] + "</p>",
                data: {test_part: 'trial_12_9', correct_response: items_9[8]}
            },
        ];
        var rep_stimulus = [
            {stimulus: "Réponse :", data: {test_part: 'trial_12_1', correct_response: items_9[0]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_12_2', correct_response: items_9[1]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_12_3', correct_response: items_9[2]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_12_4', correct_response: items_9[3]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_12_5', correct_response: items_9[4]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_12_6', correct_response: items_9[5]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_12_7', correct_response: items_9[6]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_12_8', correct_response: items_9[7]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_12_9', correct_response: items_9[8]}},
        ];
    }
    if (nb === 13) {
        var span_stimulus = [
            {
                stimulus: "<p style='font-size: 4em'>" + items_9[0] + "</p>",
                data: {test_part: 'trial_13_1', correct_response: items_9[0]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_9[1] + "</p>",
                data: {test_part: 'trial_13_2', correct_response: items_9[1]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_9[2] + "</p>",
                data: {test_part: 'trial_13_3', correct_response: items_9[2]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_9[3] + "</p>",
                data: {test_part: 'trial_13_4', correct_response: items_9[3]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_9[4] + "</p>",
                data: {test_part: 'trial_13_5', correct_response: items_9[4]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_9[5] + "</p>",
                data: {test_part: 'trial_13_6', correct_response: items_9[5]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_9[6] + "</p>",
                data: {test_part: 'trial_13_7', correct_response: items_9[6]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_9[7] + "</p>",
                data: {test_part: 'trial_13_8', correct_response: items_9[7]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_9[8] + "</p>",
                data: {test_part: 'trial_13_9', correct_response: items_9[8]}
            },
        ];
        var rep_stimulus = [
            {stimulus: "Réponse :", data: {test_part: 'trial_13_1', correct_response: items_9[0]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_13_2', correct_response: items_9[1]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_13_3', correct_response: items_9[2]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_13_4', correct_response: items_9[3]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_13_5', correct_response: items_9[4]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_13_6', correct_response: items_9[5]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_13_7', correct_response: items_9[6]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_13_8', correct_response: items_9[7]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_13_9', correct_response: items_9[8]}},
        ];
    }
    if (nb === 14) {
        var span_stimulus = [
            {
                stimulus: "<p style='font-size: 4em'>" + items_8[0] + "</p>",
                data: {test_part: 'trial_14_1', correct_response: items_8[0]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_8[1] + "</p>",
                data: {test_part: 'trial_14_2', correct_response: items_8[1]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_8[2] + "</p>",
                data: {test_part: 'trial_14_3', correct_response: items_8[2]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_8[3] + "</p>",
                data: {test_part: 'trial_14_4', correct_response: items_8[3]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_8[4] + "</p>",
                data: {test_part: 'trial_14_5', correct_response: items_8[4]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_8[5] + "</p>",
                data: {test_part: 'trial_14_6', correct_response: items_8[5]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_8[6] + "</p>",
                data: {test_part: 'trial_14_7', correct_response: items_8[6]}
            },
            {
                stimulus: "<p style='font-size: 4em'>" + items_8[7] + "</p>",
                data: {test_part: 'trial_14_8', correct_response: items_8[7]}
            },
        ];
        var rep_stimulus = [
            {stimulus: "Réponse :", data: {test_part: 'trial_14_1', correct_response: items_8[0]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_14_2', correct_response: items_8[1]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_14_3', correct_response: items_8[2]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_14_4', correct_response: items_8[3]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_14_5', correct_response: items_8[4]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_14_6', correct_response: items_8[5]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_14_7', correct_response: items_8[6]}},
            {stimulus: "Réponse :", data: {test_part: 'trial_14_8', correct_response: items_8[7]}},
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
        on_finish: function (data) {
            data.key_press = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(data.key_press);
            data.correct = data.key_press == data.correct_response;
            console.log(data.correct);
            console.log(data.key_press);
            console.log(data.correct_response);
        }
    };
    var rep_procedure = {
        timeline: [rep],
        timeline_variables: rep_stimulus,
        randomize_order: false,
        repetitions: 1,
    };

    var digit = [span_procedure, rep_procedure];

    return digit;
}

