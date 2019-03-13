class RatingSerializer < ActiveModel::Serializer
  attributes :id, :stars, :comments, :taste
  belongs_to :user, :wine
end