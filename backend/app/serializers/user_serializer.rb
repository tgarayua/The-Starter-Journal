class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email

  has_many :tasks
  has_many :journal_posts
  has_many :gratitude_items
end
