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

 #  def unique_bottle
 #    @wine = Wine.
 #    self.label.downcase + self.grape.downcase + self.year
 #  end
 #
 #  def expiration_date_cannot_be_in_the_past
 #   if expiration_date.present? && expiration_date < Date.today
 #     errors.add(:expiration_date, "can't be in the past")
 #   end
 # end

end
