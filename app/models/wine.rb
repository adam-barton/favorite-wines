class Wine < ActiveRecord::Base

  validates :label, presence: true
  validates :grape, presence: true
  validates :year, presence: true
  validates :category, presence: true


end
