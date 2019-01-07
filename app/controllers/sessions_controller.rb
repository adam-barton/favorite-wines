class SessionsController < ApplicationController
  #   skip_before_action :current_user, only: [:create]
   skip_before_action :redirect_if_not_logged_in, only: [:new, :create]

  def new
    @user = User.new
  end

  def create
    if auth_hash = request.env["omniauth.auth"]

    else
      @user = User.find_by(email: params[:user][:email])
        if @user && @user.authenticate(params[:user][:password])

            session[:user_id] = @user.id

            redirect_to @user
        else
            redirect_to signin_path
        end
    end
  end

  def destroy
       session.delete :user_id

       redirect_to root_path
   end

   private

   def auth
     request.env['omniauth.auth']
   end

end
