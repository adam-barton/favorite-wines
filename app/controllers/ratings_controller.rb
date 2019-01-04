class RatingsController < ApplicationController

  def index
    if params[:wine_id]
      @ratings = Wine.find(params[:wine_id]).ratings
    else
      @ratings = Ratings.all
    end
  end

  def show
    @rating = Rating.find(params[:id])
  end

end
