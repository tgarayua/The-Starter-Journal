class CreateGratitudeItems < ActiveRecord::Migration[6.0]
  def change
    create_table :gratitude_items do |t|
      t.integer :user_id
      t.string :title

      t.timestamps
    end
  end
end
