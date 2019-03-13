class UserSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :wines
  has_many :ratings
end
