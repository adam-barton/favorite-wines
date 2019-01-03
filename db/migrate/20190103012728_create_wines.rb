class CreateWines < ActiveRecord::Migration[5.2]
  def change
    create_table :wines do |t|
      t.string :label
      t.string :type
      t.integer :year
    end
  end
end
