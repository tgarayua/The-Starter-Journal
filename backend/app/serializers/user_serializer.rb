class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email

  has_many :task_lists
  has_many :journal_posts
  has_many :gratitude_lists
end
