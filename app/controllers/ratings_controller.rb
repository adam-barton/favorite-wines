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
    @wine = Wine.find_by(id: params[:wine_id])
    @rating = Rating.new
  end

  def create
    @wine = Wine.find_by(params[:wine_id])
    @rating = @wine.ratings.create(user_id: current_user.id,
       wine_id: @wine.id,
       stars: params[:rating][:stars],
       comments: params[:rating][:comments]
      )
    redirect_to wine_rating_path(@wine, @rating)
    # @rating = Rating.new
    # @rating.user_id = current_user.id
    # @rating.wine_id = params[:wine_id]
    # @rating.stars = params[:rating][:stars]
    # @rating.comments = params[:rating][:comments]
    #   if @rating.save
    #     redirect_to rating_path(@rating)
    #   else
    #     render :new
    #   end
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
