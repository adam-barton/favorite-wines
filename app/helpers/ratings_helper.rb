module RatingsHelper

  def show_stars(rating)
    case rating
    when 5
      "⭐️""⭐️""⭐️""⭐️""⭐️"
    when 4
      "⭐️""⭐️""⭐️""⭐️"
    when 3
      "⭐️""⭐️""⭐️"
    when 2
      "⭐️""⭐️"
    when 1
      "⭐️"
    else
    "No ratings yet. Be the first?"
    end
  end
  
  def wine_id_field(rating)
     if rating.wine.nil?
       select_tag "ratings[:wine_id]", options_from_collection_for_select(Wine.all, :id, :name), :prompt => "Select a wine"
    else
      "#{rating.wine.name}"
      hidden_field_tag :wine_id, rating.wine.id
    end
  end



end
