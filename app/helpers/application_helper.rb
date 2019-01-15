module ApplicationHelper

  def current_user_path
    if session[:user_id]
      user_path(session[:user_id])
    else
      root_path
    end
  end

  def login_with_github
   link_to image_tag('home/github_signin.png'), '/auth/github', class: "btn-github"
  end

end
