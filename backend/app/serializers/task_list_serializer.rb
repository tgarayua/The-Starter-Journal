class TaskListSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :task_item
end
