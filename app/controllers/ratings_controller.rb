class RatingsController < ApplicationController

  before_action :find_rating, only: [:show, :edit, :update]

  def index
    if params[:wine_id]
      @ratings = Wine.find(params[:wine_id]).ratings
    else
      @ratings = Rating.all
    end
  end

  def show
      # @rating = Rating.find_by(id: params[:id])
  end

  def new
    if params[:wine_id] && !Wine.exists?(params[:wine_id])
      redirect_to wines_path, flash[:message] = "Wine not found."
   else
      @rating = Rating.new(:wine_id => params[:wine_id], :user_id => current_user.id)
    end
  end

  def create
    if @rating = Rating.find_by(user_id: current_user.id, wine_id: params[:rating][:wine_id]) 
      flash[:message] = "You've already reviewed this wine."
      redirect_to wine_rating_path(@rating.wine_id, @rating)
    else
      @rating = Rating.new(rating_params)
        if @rating.save
        redirect_to wine_rating_path(@rating.wine, @rating)
        else
          render :new
        end
    end
  end

  def edit
    @wine = Wine.find_by(id: params[:wine_id])
    # @rating = Rating.find_by(id: params[:id])
    if @rating.user_id != current_user.id
      redirect_to wines_path
    end
  end

  def update
    # @rating = Rating.find_by(id: params[:id])
    @rating.update(rating_params)

    redirect_to wine_rating_path(@rating.wine, @rating)
  end

private

  def rating_params
    params.require(:rating).permit(:stars, :taste, :comments, :wine_id, :user_id)
  end

  def find_rating
    @rating = Rating.find_by(id: params[:id])
  end


end
