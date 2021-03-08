class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email

  has_many :task
  has_many :journal_post
  has_many :gratitude_item
end
