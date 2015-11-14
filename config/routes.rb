Rails.application.routes.draw do
  resources :posts
  resources :home
  root 'home#index'
end
