class Currency < ApplicationRecord
  def calculate_value(amount)
    (current_price.to_f * amount.to_f).round(4)
  end
  
  def current_price
    url = "https://api.coincap.io/v2/assets/" #'https://api.coinmarketcap.com/v1/tickers/'
    request = HTTParty.get(url + self.slug)
    response = JSON.parse(request.body).dig('data', 'priceUsd').to_f
  end

  def current_name
    url = "https://api.coincap.io/v2/assets/" 
    request = HTTParty.get(url + self.slug)
    response = JSON.parse(request.body).dig('data', 'name').to_s
  end
end
