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
    let detailSpace = $(`#wineDetail-${wine.id}`);
    detailSpace.empty();
    $(`#wineDetail-${wine.id}`).html(wine.wineDetails())
        // $(`#ratings-${wine.id}`).on('click', () => getWineRatings(wine));
    $(`#add-rating-${wine.id}`).on('click', () => addRating(wine));
    getWineRatings(wine)
} // -- end --


// ADDS WINE RATINGS INDEX 
const getWineRatings = (wine) => {
        event.preventDefault()
        let space = $('.wine-rating-space')
        space.empty();
        $.ajax({
            url: "/wines/" + wine.id + "/ratings",
            method: 'get',
            dataType: 'json'
        }).done(function(response) {
            for (const rating of response) {
                let thisRating = new Rating(rating);
                let addRating = thisRating.ratingDetails();
                let ratingSpace = $(`#wine-ratings-${response[0].wine.id}`)
                ratingSpace.append(addRating);
            }
        });
    } // -- end --



// ADDS EVENT LISTENERS AT Document.ready
function attachEventListeners() {
    // $('.previous').on('click', () => previousGames());
    // $('#newRatingSubmit').on('click', () => newRating());
} // -- end --


// CREATES RATING OBJECT
class Rating {
    constructor(obj) {
        this.id = obj.id
        this.user = obj.user
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
        <div class="individual-rating">
        <p>Stars: ${this.stars}</p>
        <p><strong>Comments: ${this.comments}</strong></p>
        <p>Tasting notes: ${this.taste}</p>
        <p>By: ${this.user.name}</p>
        </div>
    `)

    } // -- end --

// ADDS WINE NAME - FOR INDEX VIEW
Wine.prototype.wineName = function() {
        return (`
        <h3><a href="#" id="wine-ID-${this.id}">${this.name}</a></h3> 
        <div id="wineDetail-${this.id}"></div>
        <hr>
    `)
    } // -- end --

// ADDS WINE SHOW DETAILS
Wine.prototype.wineDetails = function() {
        return (`
        <p>Region: ${this.region}</p>
        <p>Category: ${this.category}</p>
        <p>Ratings: ${this.ratings.length}</p>
        <a href=#" id="ratings-${this.id}">See ratings</a> | <a href="#" id="add-rating-${this.id}" data-id="wine-${this.id}">Add a rating</a>
        <div> 
        <div class="wine-rating-space" id="wine-ratings-${this.id}"></div>
        </div>
    `)
    } // -- end --