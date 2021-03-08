class User < ApplicationRecord
    has_many :journal_post
    has_many :task
    has_many :gratitude_item
end
