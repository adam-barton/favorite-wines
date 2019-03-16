$(document).ready(function() {
    attachEventListeners();
});


// ADDS WINE INDEX
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
} // -- end --


// ADDS WINE SHOW DETAILS
function getWineDetail(wine) {
    event.preventDefault();
    $(`#wineDetail-${wine.id}`).empty;
    $(`#wineDetail-${wine.id}`).html(wine.wineDetails())
    $(`#ratings-${wine.id}`).on('click', () => getWineRatings(wine));
    $(`#add-rating-${wine.id}`).on('click', () => addRating(wine));
} // -- end --


// ADDS WINE RATINGS INDEX 
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
} // -- end --


// NEW RATING FORM
function newRating() {
    event.preventDefault();
    alert(`Hello`)
    console.log($(this).serialize());
    debugger
    // let ratingForm = $(`/wines/${wine.id}/ratings/new`)

    // $(`#wine-ratings-${wine.id}`).append(newRatingForm());
} // -- end --


// // FORM CREATOR
// function newRatingForm() {
//     return `<%= render partial: 'form ' %>`
// } // -- end --


// ADDS EVENT LISTENERS AT Document.ready
function attachEventListeners() {
    // $('.previous').on('click', () => previousGames());
    $('#newRatingSubmit').on('submit', () => newRating());
} // -- end --


// CREATES RATING OBJECT
class Rating {
    constructor(obj) {
        this.id = obj.id
        this.user_id = obj.user.id
        this.wine_id = obj.wine.id
        this.stars = obj.stars
        this.comments = obj.comments
        this.taste = obj.taste
    }
} // -- end --


// CREATES WINE OBJECT
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
} // -- end --

// ADDS RATING INDEX AND SHOW DETAILS
Rating.prototype.ratingDetails = function() {
        return (`
        <div id="individual-rating">
        <p>Stars: ${this.stars}</p>
        <p><strong>Comments: ${this.comments}</strong></p>
        <p>Tasting notes: ${this.taste}</p>
        </div>
    `)

    } // -- end --

// ADDS WINE NAME - FOR INDEX VIEW
Wine.prototype.wineName = function() {
        return (`
        <h2><a href="#" id="wine-ID-${this.id}">${this.name}</a></h2>    
        <div id="wineDetail-${this.id}"></div>
        <hr>
    `)
    } // -- end --

// ADDS WINE SHOW DETAILS
Wine.prototype.wineDetails = function() {
        return (`
        <p>${this.region}</p>
        <p>Category: ${this.category}</p>
        <p>Ratings: ${this.ratings.length}</p>
        <a href=#" id="ratings-${this.id}">See ratings</a> | <a href=#" id="add-rating-${this.id}">Add a rating</a>
        <div id="wine-ratings-${this.id}"></div>
    `)
    } // -- end --