class CreateGratitudeLists < ActiveRecord::Migration[6.0]
  def change
    create_table :gratitude_lists do |t|
      t.integer :user_id
      t.string :gratitude_item

      t.timestamps
    end
  end
end
