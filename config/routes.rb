Rails.application.routes.draw do
  root to: 'currencies#index'
  get 'currencies/show', to: 'currencies#show'
  post 'search', to: 'currencies#search'
  post 'calculate', to: 'currencies#calculate'
end
