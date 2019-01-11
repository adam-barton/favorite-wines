Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :wines do
    resources :ratings
  end

  resources :ratings

  resources :users, only: [:new, :create, :show]


  root 'welcome#home'

    get '/signin' => 'sessions#new'
    post '/signin' => 'sessions#create'
    post '/signout' => 'sessions#destroy'
    delete "/signout", to: "sessions#destroy"

    get '/auth/github/callback' => 'sessions#create'

    post '/filter' => "wines#filter"

end
