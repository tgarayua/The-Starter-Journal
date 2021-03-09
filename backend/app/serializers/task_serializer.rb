class TaskSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title, :complete
end
