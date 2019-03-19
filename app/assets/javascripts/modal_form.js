function addRating(wine) {
    event.preventDefault();

    // Get the modal
    let modal = document.getElementById('myModal');

    // Get the button that opens the modal
    let btn = document.getElementById(`add-rating-${wine.id}`);

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // btn.onclick = function() {
    modal.style.display = "block";
    let form = createModal(wine)
    let bodyArea = $('.modal-content');
    bodyArea.html(form)


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}



function createModal(data) {
    return (`
    <div class="modal-header">
      <h2>New Rating for ${data.name}</h2>
    </div>
    <div class="modal-body">
    <form class="new_rating" id="new_rating" action="/ratings" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="8UVbZ1DA/xq/QsaWd64Cu7/lgW3pV3DogFANIDW1HFTTwfw4rTwx+kC+gUZmHn5gb4N4+V45iRtYKLPGI98bNQ==">
      <div>
        <input type="hidden" name="rating[wine_id]" id="rating_wine_id" value="${data.id}">
      </div>
<br>
    <div>  
      <label for="rating_stars">Stars</label>
        <select name="rating[stars]" id="rating_stars"><option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option></select>
    </div>
    <br>
    <div>
      <label for="rating_Tasting Notes">Tasting notes</label>
      <div> 
        <textarea name="rating[taste]" id="rating_taste"></textarea>
      </div>
    </div>
    <br>
    <div>
      <label for="rating_comments">Comments</label>
      <div> 
        <textarea name="rating[comments]" id="rating_comments"></textarea>
      </div>
    </div>
    <br>
      <div>
        <input type="submit" name="commit" value="Create Rating" id="modalRatingSubmit">
      </div>
    </form>
    <br>
    <div class="modal-footer">
        <p></p>
    </div>

    <script type="text/javascript" charset="utf-8">
  $(function () {
    $('form').submit(function(event) {
      event.preventDefault();
      let values = $(this).serialize();
      let postRating = $.post('/ratings', values, function(response) {
        getWineRatings(response.wine)
        document.getElementById('myModal').style.display = "none";
      });
    });
  });
</script>
    `)
}