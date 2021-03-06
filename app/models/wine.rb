class Wine < ActiveRecord::Base

  has_many :ratings
  has_many :users, through: :ratings

  validates :label, :grape, :year, :category, presence: true
  validates :year,
    numericality: { only_integer: true },
    inclusion: { in: 1900..Time.current.year },
    format: {
    with: /(19|20)\d{2}/i,
    message: "should be a four-digit year"
  }


  def full_name
    "#{self.year}" + " " + "#{self.label}" + " " + "#{self.grape}"
  end

  def self.reverse_sort
    order(id: :desc)
  end

  def average_rating
    Rating.where(wine_id: self.id).average(:stars).to_i
  end


  def popularity_rating
        self.average_rating + self.ratings.count
  end

  def popular?
    if self.average_rating >= 3
       "#{self.full_name}" + " " + "#{self.popularity_rating}"
    end
  end

  def self.popularity

    Wine.all.sort_by do |wine|
      wine.average_rating
    end.reverse
  end

  

end
