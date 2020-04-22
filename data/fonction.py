def scoring(dfsujet):

    score = []

    if dfsujet.xs(1)['correct'].sum() == 3:
        score.append(1)
    else:
        score.append(0)

    if dfsujet.xs(2)['correct'].sum() == 4:
        score.append(1)
    else:
        score.append(0)

    if dfsujet.xs(3)['correct'].sum() == 5:
        score.append(1)
    else:
        score.append(0)

    if dfsujet.xs(4)['correct'].sum() == 6:
        score.append(1)
    else:
        score.append(0)

    if dfsujet.xs(5)['correct'].sum() == 7:
        score.append(1)
    else:
        score.append(0)

    if dfsujet.xs(6)['correct'].sum() == 7:
        score.append(1)
    else:
        score.append(0)

    if dfsujet.xs(7)['correct'].sum() == 6:
        score.append(1)
    else:
        score.append(0)

    if dfsujet.xs(8)['correct'].sum() == 7:
        score.append(1)
    else:
        score.append(0)

    if dfsujet.xs(9)['correct'].sum() == 7:
        score.append(1)
    else:
        score.append(0)

    if dfsujet.xs(10)['correct'].sum() == 8:
        score.append(1)
    else:
        score.append(0)

    if dfsujet.xs(11)['correct'].sum() == 8:
        score.append(1)
    else:
        score.append(0)

    if dfsujet.xs(12)['correct'].sum() == 9:
        score.append(1)
    else:
        score.append(0)

    if dfsujet.xs(13)['correct'].sum() == 9:
        score.append(1)
    else:
        score.append(0)

    if dfsujet.xs(14)['correct'].sum() == 8:
        score.append(1)
    else:
        score.append(0)

    return score