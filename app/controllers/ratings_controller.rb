class RatingsController < ApplicationController

  def index
    if params[:wine_id]
      @wine = Wine.find(params[:wine_id])
      @ratings = @wine.ratings
    else
      @ratings = Rating.all
    end
  end

  def show
      @rating = Rating.find(params[:id])
  end

  def new
    @rating = Rating.new(wine_id: params[:wine_id])
  end

  def create
  end

  def edit
    @rating = Rating.find_by(id: params[:id])
  end

  def update

  end

private

  def rating_params
    params.require(:rating).permit(:user_id, :wine_id, :stars, :comments)
  end
end
