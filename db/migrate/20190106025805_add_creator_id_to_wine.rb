class AddCreatorIdToWine < ActiveRecord::Migration[5.2]
  def change
    add_column :wines, :creator_id, :integer
  end
end
