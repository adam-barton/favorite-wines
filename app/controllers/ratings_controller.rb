class RatingsController < ApplicationController

  def index
    if params[:wine_id]
      @wine = Wine.find(params[:wine_id])
    else
      @ratings = Rating.all
    end
  end

  def show
      @rating = Rating.find_by(id: params[:id])
  end

  def new
    if params[:wine_id] && !Wine.exists?(params[:wine_id])
      redirect_to wines_path, flash[:message] = "Wine not found."
   else
      @wine = Wine.find_by(id: params[:wine_id])
        if @rating = Rating.find_by(wine_id: @wine.id, user_id: current_user.id)
           flash[:message] = "You've already reviewed this wine."
          redirect_to wine_rating_path(@wine, @rating)
        end
      @rating = Rating.new(:wine_id => @wine.id, :user_id => current_user.id)
    end
  end

  def create
    @wine = Wine.find_by(id: params[:wine_id])
    @rating = @wine.ratings.create(rating_params)
      
    redirect_to wine_rating_path(@wine, @rating)
  end

  def edit
    @wine = Wine.find_by(id: params[:wine_id])
    @rating = Rating.find_by(id: params[:id])
    if @rating.user_id != current_user.id
      redirect_to wines_path
    end
  end

  def update
    @wine = Wine.find_by(id: params[:wine_id])
    @rating = @wine.ratings.update(
      stars: params[:rating][:stars],
      taste: params[:rating][:taste],
      comments: params[:rating][:comments]
    )

    redirect_to wine_rating_path(@wine, @rating)
  end

private

  def rating_params
    params.require(:rating).permit(:stars, :taste, :comments, :wine_id, :user_id)
  end


end
