class AddNameToWine < ActiveRecord::Migration[5.2]
  def change
    add_column :wines, :name, :string
  end
end
