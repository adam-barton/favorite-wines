class AddTastingNotesToRatings < ActiveRecord::Migration[5.2]
  def change
    add_column :ratings, :taste, :text
  end
end
