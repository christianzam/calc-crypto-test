Rails.application.routes.draw do
  root to: 'currencies#index'
  get 'currencies/show', to: 'currencies#show'
end
