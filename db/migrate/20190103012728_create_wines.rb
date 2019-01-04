class CreateWines < ActiveRecord::Migration[5.2]
  def change
    create_table :wines do |t|
      t.string :label
      t.string :category
      t.string :grape
      t.integer :year
      t.string :region
    end
  end
end
