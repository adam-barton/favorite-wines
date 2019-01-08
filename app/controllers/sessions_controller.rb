class SessionsController < ApplicationController
    # skip_before_action :current_user, only: [:create]
    skip_before_action :redirect_if_not_logged_in, only: [:new, :create]

  def new
    @user = User.new
  end

  def create
    if auth_hash = request.env["omniauth.auth"]
      oauth_email = request.env["omniauth.auth"]["info"]["email"]
      oauth_name = auth_hash["info"]["name"]
      if @user = User.find_by(email: oauth_email)
        session[:user_id] = @user.id
        redirect_to @user
      else
        @user = User.new(email: oauth_email, name: oauth_name, password: SecureRandom.hex)
          if @user.save
            session[:user_id] = @user.id
            redirect_to @user
          else
            flash[:message] = "You must have an email address."
            render new_user_path
          end
        end
    else
      @user = User.find_by(email: params[:user][:email])
        if @user && @user.authenticate(params[:user][:password])

            session[:user_id] = @user.id

            redirect_to @user
        else
            redirect_to root_path
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
