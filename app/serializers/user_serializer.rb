class UserSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :ratings
  has_many :wines
end
