# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
DATA = {
  :wine_keys =>
    ["label", "category", "grape", "year", "region"],
  :wines => [
      ["Yorkville Cellars", "Red", "Merlot", 2016, "Mendocino County, CA"],
      ["Yorkville Cellars", "Red Blend", "Richard the Lion Heart", 2016, "Mendocino County, CA"],
      ["Kunde", "Red Blend", "Red Dirt Red", 2017, "Sonoma County, CA"],
      ["Kim Crawford", "White", "Sauvignon Blanc", 2017, "Marlborough"],
      ["Restless Earth", "Red", "Petit Sirah", 2017, "Santa Barbara County, CA"]
    ]
}


def make_wines
  DATA[:wines].each do |wine|
    new_wine = Wine.new
    wine.each_with_index do |attribute, i|
      new_wine.send(DATA[:wine_keys][i]+"=", attribute)
    end
    new_wine.save
  end
end

make_wines
