$(document).ready(function() {
    attachEventListeners();
});

function attachEventListeners() {
    $('#previous').on('click', () => previousGames(event));
}

function previousGames(event) {
    event.preventDefault();
}