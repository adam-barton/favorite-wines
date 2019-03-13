class WineSerializer < ActiveModel::Serializer
  attributes :id, :name, :label, :category, :grape, :year, :region
  has_many :ratings
  has_many :users
end
