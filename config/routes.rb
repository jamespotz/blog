Rails.application.routes.draw do

  devise_for :users, :skip => :registrations
  resources :posts do
    resources :comments
  end

  resources :home
  get "/download-resume" => "home#download_resume"
  post '/send-mail' => 'home#send_mail'
  root 'home#index'
end
