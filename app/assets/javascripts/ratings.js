$(document).ready(function() {
    attachEventListeners();
    getWines()
});

function getWines() {
    $.ajax({
        url: "/wines",
        method: 'get',
        dataType: 'json'
    }).done(function(data) {
        console.log(data)
        let thisWine = new Wine(data[0]);
        debugger
        let addHTML = thisWine.postHTML();
        document.getElementById('newWineList').innerHTML = addHTML;
    });
}

function attachEventListeners() {
    $('.previous').on('click', () => previousGames());
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
        this.category = obj.category
        this.grape = obj.grape
        this.region = obj.region
        this.ratings = obj.ratings
        this.users = obj.users
    }
}

// Rating.prototype.postHTML = function() {
//     return { `
//         <p>${this.stars}</p>
//         <p>${this.comments}</p>
//         <p>${this.taste}</p>
//     ` }
// }