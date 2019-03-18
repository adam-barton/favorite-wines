function getUserWines() {
    let wineSpace = $(`#userWineList`);

    $.ajax({
        url: `${location.pathname}`,
        method: 'get',
        dataType: 'json'
    }).done(function(data) {
        for (const wine of data.wines) {
            let thisWine = new Wine(wine);
            let addWine = thisWine.wineName();
            $('#userWineList').append(addWine);
            $(`#wine-ID-${thisWine.id}`).on('click', () => getWineDetails(thisWine))
        }
    });
}

function getWineDetails(wine) {
    event.preventDefault();
    console.log(wine)
    let ratingSpace = $(`#wineDetail-${wine.id}`)
    ratingSpace.empty();

    $.ajax({
        url: `/wines/${wine.id}/ratings`,
        method: 'get',
        dataType: 'json'
    }).done(function(response) {
        for (const rating of response) {
            if (rating.user.id === parseInt(location.pathname.slice(-1))) {
                ratingSpace.html(`<p>Stars: ${rating.stars}</p>`)
            };
        };
    });
}