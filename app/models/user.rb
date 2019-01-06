class User < ActiveRecord::Base

  has_many :ratings
  has_many :wines, through: :ratings

  validates :name, presence: true
  validates :name, uniqueness: true

  has_secure_password

  def  users_ratings
      Rating.where(user_id: self.id)
  end

end
