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
    $(`#ratings-${wine.id}`).on('click', () => getWineRatings(wine));
    $(`#add-rating-${wine.id}`).on('click', () => addRating(wine));
}

function getWineRatings(wine) {
    event.preventDefault()
    $.ajax({
        url: "/wines/" + wine.id + "/ratings",
        method: 'get',
        dataType: 'json'
    }).done(function(response) {
        for (const rating of response) {
            let thisRating = new Rating(rating);
            let addRating = thisRating.ratingDetails();
            $(`#wine-ratings-${thisRating.wine_id}`).append(addRating);
        }
    });
}

function addRating(wine) {
    event.preventDefault();
    alert(`No form yet for ${wine.name}. Try again tomorrow.`)

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
        this.user_id = obj.user.id
        this.wine_id = obj.wine.id
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

Rating.prototype.ratingDetails = function() {
    return (`
        <div id="individual-rating">
        <p>Stars: ${this.stars}</p>
        <p><strong>Comments: ${this.comments}</strong></p>
        <p>Tasting notes: ${this.taste}</p>
        </div>
    `)

}

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
        <p>Category: ${this.category}</p>
        <p>Ratings: ${this.ratings.length}</p>
        <a href=#" id="ratings-${this.id}">See ratings</a> | <a href=#" id="add-rating-${this.id}">Add a rating</a>
        <div id="wine-ratings-${this.id}"></div>
    `)
}


function newWine() {
    event.preventDefault()
    console.log("Hello!!")

    alert("you've pressed a button")
}