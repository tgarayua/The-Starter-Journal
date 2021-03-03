class User < ApplicationRecord
    has_many :journal_posts
    has_many :task_lists
    has_many :gratitude_lists
end
