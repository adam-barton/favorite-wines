class WinesController < ApplicationController

  # before_action :find_wine except: [:index, :new, :update]
  #
  # def find_wine
  #   @wine = Wine.find_by(id: params[:id])
  # end

  def index
    @wines = Wine.all
  end

  def show
    @wine = Wine.find_by(id: params[:id])
  end

  def new
    @wine = Wine.new
  end

  def creat

  end

  def edit
    @wine = Wine.find_by(id: params[:id])
  end

  def update

  end

end
