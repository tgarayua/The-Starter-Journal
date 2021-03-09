class User < ApplicationRecord
    has_many :journal_posts
    has_many :tasks
    has_many :gratitude_items
end
