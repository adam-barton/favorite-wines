$(document).ready(function() {
    attachEventListeners();
});

function attachEventListeners() {
    $('.previous').on('click', () => previousGames());
}

function previousGames() {
    event.preventDefault();
    console.log(this)
    alert("Hello!")
}

// class Rating {
//     constructor(obj) {
//         this.id = obj.id
//         this.user_id = obj.user_id
//         this.wine_id = obj.wine_id
//         this.stars = obj.stars
//         this.comments = obj.comments
//         this.taste = obj.taste
//     }
// }

// Rating.prototype.postHTML = function() {
//     return { `
//         <p>${this.stars}</p>
//         <p>${this.comments}</p>
//         <p>${this.taste}</p>
//     ` }
// }