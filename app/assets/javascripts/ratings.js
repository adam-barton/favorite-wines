$(document).ready(function() {
    attachEventListeners();
});

function getWines() {
    $.ajax({
        url: "/wines",
        method: 'get',
        dataType: 'json'
    }).done(function(data) {
        for (const wine of data) {
            let thisWine = new Wine(wine);
            let addName = thisWine.wineName();
            $('#newWineList').append(addName);
            $(`#wine-ID-${thisWine.id}`).on('click', () => getWineDetail(thisWine))
        }
    });
}

function getWineDetail(wine) {
    event.preventDefault();
    $(`#wineDetail-${wine.id}`).empty;
    $(`#wineDetail-${wine.id}`).html(wine.wineDetails())
}


function attachEventListeners() {
    // $('.previous').on('click', () => previousGames());
    $('#newWineSubmit').on('click', () => newWine());
}

function previousGames() {
    event.preventDefault();
    console.log(this)
    alert("Hello!")
}

class Rating {
    constructor(obj) {
        this.id = obj.id
        this.user_id = obj.user_id
        this.wine_id = obj.wine_id
        this.stars = obj.stars
        this.comments = obj.comments
        this.taste = obj.taste
    }
}

class Wine {
    constructor(obj) {
        this.id = obj.id
        this.name = obj.name
        this.label = obj.label
        this.year = obj.year
        this.category = obj.category
        this.grape = obj.grape
        this.region = obj.region
        this.ratings = obj.ratings
        this.users = obj.users
    }
}

// Rating.prototype.postHTML = function() {
//     return ( `
//         <p>${this.stars}</p>
//         <p>${this.comments}</p>
//         <p>${this.taste}</p>
//     ` )
// }

Wine.prototype.wineName = function() {
    return (`
        <h2><a href="#" id="wine-ID-${this.id}">${this.name}</a></h2>    
        <div id="wineDetail-${this.id}"></div>
        <hr>
    `)
}
Wine.prototype.wineName1 = function() {
    return this.name
}

Wine.prototype.wineDetails = function() {
    return (`
        <p>${this.region}</p>
        <p>${this.category}</p>
        <p>${this.ratings.length}</p>
    `)
}

function newWine() {
    event.preventDefault()
    console.log("Hello!!")

    alert("you've pressed a button")
}