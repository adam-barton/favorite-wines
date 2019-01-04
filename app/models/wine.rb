class Wine < ActiveRecord::Base

  has_many :ratings
  has_many :user, through: :ratings

  validates :label, :grape, :year, :category, presence: true
  validates :year,
    numericality: { only_integer: true },
    length: { is: 4 },
    inclusion: { in: 1900..Time.current.year },
    format: {
    with: /(19|20)\d{2}/i,
    message: "should be a four-digit year"
  }

  def full_name
    self.year + " " + self.label + " " + self.grape
  end

  def average_rating
    Rating.where(wine_id: self.id).average(:stars).to_i
  end

end
