class WinesController < ApplicationController

  def index
    @wines = Wine.reverse_sort
  end

  def show
    @wine = Wine.find_by(id: params[:id])
  end

  def new
    @wine = Wine.new
    @wine_regions = Wine.wine_regions
  end

  def create
    raise params.inspect
     @wine = Wine.find_or_create_by(wine_params)
    if @wine.valid?
      @wine.save
      redirect_to @wine
    else
      render :new
    end
  end

  def edit
    @wine = Wine.find_by(id: params[:id])
  end

  def update
    @wine = Wine.find_by(id: params[:id])
      @wine.update(wine_params)
      redirect_to @wine
  end

  # def filter
  #   raise params.inspect
  #
  #   # @filter = params[:filter]
  #   @wine = Wine.filters
  #
  # end

  private


  def wine_params
      params.require(:wine).permit(:label, :category, :grape, :year, :region)
  end

end
