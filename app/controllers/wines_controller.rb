class WinesController < ApplicationController

  def index
    @new_wine = Wine.new
    @wines = Wine.reverse_sort
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @wines}
    end
  end

  def show
    @wine = Wine.find_by(id: params[:id])
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @wine}
    end
  end

  def new
    @wine = Wine.new
  end

  def create
     @wine = Wine.find_or_create_by(wine_params)
     @wine.creator_id = current_user.id
    if @wine.valid?
      @wine.name = @wine.full_name
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

  def filter
    @wines = Wine.reverse_sort.popularity

    render :index
    end

    def category_filter

      @wines = Wine.where(category: params[:category])

      render :index

    end

  private


  def wine_params
      params.require(:wine).permit(:label, :category, :grape, :year, :region)
  end

end
