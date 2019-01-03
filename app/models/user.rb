class User < ActiveRecord::Base

  validates :name, presence: true
  validates :name, uniqueness: true

  has_secure_password

end
