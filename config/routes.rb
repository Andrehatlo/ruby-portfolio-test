Rails.application.routes.draw do  get 'home/index'

  devise_for :users #, :controllers => {sessions: 'sessions'}

  # resources :articles

  # authenticated :user do
  #   root "articles#index", as: "authenticated_root"
  # end

  root to: 'visitors#index'
end
