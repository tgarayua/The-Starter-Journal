class CreateJournalPosts < ActiveRecord::Migration[6.0]
  def change
    create_table :journal_posts do |t|
      t.integer :user_id
      t.string :title
      t.string :content

      t.timestamps
    end
  end
end
