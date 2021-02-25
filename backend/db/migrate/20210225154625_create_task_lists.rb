class CreateTaskLists < ActiveRecord::Migration[6.0]
  def change
    create_table :task_lists do |t|
      t.integer :user_id
      t.string :task_item

      t.timestamps
    end
  end
end
