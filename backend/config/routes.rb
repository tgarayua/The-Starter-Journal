Rails.application.routes.draw do
  resources :journal_posts
  resources :task_lists
  resources :gratitude_lists
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
