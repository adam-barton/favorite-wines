module RatingsHelper

  def show_stars(rating)
    case rating.stars
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
    end
  end

end
