function getUserWines() {
    // alert("You've hit the new file.")
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
            // $(`#wine-ID-${thisWine.id}`).on('click', () => getWineDetail(thisWine))
        }
    });

}