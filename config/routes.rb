Rails.application.routes.draw do
  #root to: 'visitors#index'

  root 'application#index'
  get '*path' => 'application#index'

  devise_for :users
  resources :users
end
