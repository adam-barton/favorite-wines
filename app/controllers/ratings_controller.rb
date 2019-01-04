class RatingsController < ApplicationController

  def index
    if params[:wine_id]
      @wine = Wine.find(params[:wine_id])
      @ratings = @wine.ratings
    else
      @ratings = Ratings.all
    end
  end

  def show
      @rating = Rating.find(params[:id])
  end

  def new
    @rating = Rating.new
  end

  def create
  end

  def edit
    @rating = Rating.find_by(id: params[:id])
  end

  def update

  end
end
