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

  def creat

  end
end
