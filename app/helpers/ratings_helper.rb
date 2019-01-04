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
    "No ratings yet. Be the first?  🌠"
    end
  end

end
