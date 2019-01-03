class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.integer :user_id
      t.integer :wine_id
      t.integer :stars
    end
  end
end
