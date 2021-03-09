Rails.application.routes.draw do
  resources :journal_post

  resources :task
  resources :gratitude_item
  resources :user
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
