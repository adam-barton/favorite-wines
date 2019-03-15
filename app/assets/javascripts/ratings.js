$(document).ready(function() {
    attachEventListeners();
});

function getWines() {
    $.ajax({
        url: "/wines",
        method: 'get',
        dataType: 'json'
    }).done(function(data) {
        console.log(data)
        for (const wine of data) {
            let thisWine = new Wine(wine);
            let addHTML = thisWine.wineName();
            document.getElementById('newWineList').innerHTML += addHTML;
        }
    });
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
        <h2><a href="/wines/${this.id}" class="wineIndexList" data-id="${this.id}" onClick="wineDetail()">${this.name}</a></h2>
            <div></div>
        <hr>
    `)
}

function newWine() {
    event.preventDefault()
    console.log("Hello!!")

    alert("you've pressed a button")
}

// <p>${this.region}</p>
// <p>${this.year}</p>
// <p>${this.category}</p>

function wineDetail() {
    event.preventDefault();
    // alert(`Wine id ${$('.wineIndexList').attr('data-id')}`)
    console.log($('.wineIndexList').attr('data-id'))
}