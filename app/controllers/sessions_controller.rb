class SessionsController < ApplicationController
  skip_before_action :redirect_if_not_logged_in, only: [:new, :create]

  def new
  end

  def create
  end

  def destroy
       session.delete :user_id

       redirect_to root_path
   end

end
