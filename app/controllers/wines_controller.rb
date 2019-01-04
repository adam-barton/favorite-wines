class WinesController < ApplicationController

  def index
    @wines = Wine.all
  end

  def show
    @wine = Wine.find_by(id: params[:id])
  end

  def new
    @wine = Wine.new
  end

  def create
     @wine = Wine.find_or_create_by(wine_params)
    if @wine
      redirect_to @wine
    else
      render new
    end
  end

  def edit
    @wine = Wine.find_by(id: params[:id])
  end

  def update

  end

  private


  def wine_params
      params.require(:wine).permit(:label, :category, :grape, :year, :region)
  end

end
