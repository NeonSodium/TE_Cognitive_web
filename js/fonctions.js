function creer_items(nb_item) {
    var items = [];
    for (i = 0; i < nb_item; i++) {
        items.push(Math.floor(Math.random() * 10))
    }
    return items
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function change_item(item) {
    $("#item").text(item);
}