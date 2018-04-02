Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#index'
  post 'sendmail', to: 'welcome#sendmail'
  get 'privacy', to: 'welcome#privacy'
  get 'terms', to: 'welcome#terms'
end
