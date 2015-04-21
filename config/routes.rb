Rails.application.routes.draw do
  resources :widgets, defaults: {format: :json}

  #root to: 'visitors#index'

  root 'application#index'
  get '*path' => 'application#index'

  devise_for :users
  resources :users
end
