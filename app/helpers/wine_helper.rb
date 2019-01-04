module WineHelper

  def wine_name(wine)
    "#{wine.label}" +" "+ "#{wine.grape}" +" "+ "#{wine.year}"
  end



end
