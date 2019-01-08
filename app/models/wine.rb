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

  scope :regions, -> (region) { where region: region }
   scope :year, -> (year) { where year: year }


  def full_name
    self.year + " " + self.label + " " + self.grape
  end

  def average_rating
    Rating.where(wine_id: self.id).average(:stars).to_i
  end

  def self.reverse_sort
    order(id: :desc)
  end

  def self.wine_regions
    where(:region)
  end

  # def popular
  #   self.average_rating >= 3
  #   self.ratings.count
  # end

end
