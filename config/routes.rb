Rails.application.routes.draw do

  devise_for :users, :skip => :registrations
  resources :posts do
    resources :comments
  end

  resources :home
  root 'home#index'
end
