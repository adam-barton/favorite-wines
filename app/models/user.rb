class User < ActiveRecord::Base

  has_many :ratings
  has_many :wines, through: :ratings

  validates :name, presence: true
  validates :email, presence: true
  validates :email, uniqueness: true

  has_secure_password

  def  users_ratings
      Rating.where(user_id: self.id)
  end

  def self.find_or_create_by_omniauth(auth_hash)
    where(:email => auth_hash["info"]["email"]).first_or_create do  |user|
      user.name = auth_hash["info"]["name"]
      user.password = SecureRandom.hex
    end
  end

end
