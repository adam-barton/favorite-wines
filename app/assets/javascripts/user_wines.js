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
                ratingSpace.append(`<p>Stars: ${rating.stars}</p>`)
            };
        };
    });
}



// const getWineRatings = (wine) => {
//     event.preventDefault()
//     let space = $('.wine-rating-space')
//     space.empty();
//     $.ajax({
//         url: "/wines/" + wine.id + "/ratings",
//         method: 'get',
//         dataType: 'json'
//     }).done(function(response) {
//         // debugger

//         // ratingSpace.empty();
//         for (const rating of response) {
//             let thisRating = new Rating(rating);
//             let addRating = thisRating.ratingDetails();
//             let ratingSpace = $(`#wine-ratings-${response[0].wine.id}`)
//             ratingSpace.append(addRating);
//             // $(`#wine-ratings-${thisRating.wine_id}`).append(addRating);
//         }
//     });
// } // -- end --