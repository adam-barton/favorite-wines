class Rating < ActiveRecord::Base

  belongs_to :user
  belongs_to :wine


  validates :stars, presence: true
  
end
