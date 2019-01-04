class AddCommentsToRatings < ActiveRecord::Migration[5.2]
  def change
      add_column :ratings, :comments, :text
  end
end
