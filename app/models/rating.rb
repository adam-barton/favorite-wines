class Rating < ActiveRecord::Base

  belongs_to :user
  belongs_to :wine


  validates :stars, presence: true
  validates :wine_id, presence: true


  def list_with_names
    "Wine: #{self.wine.name} "
  end

end
