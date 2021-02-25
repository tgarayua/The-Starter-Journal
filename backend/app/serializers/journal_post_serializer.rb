class JournalPostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title, :content
end
