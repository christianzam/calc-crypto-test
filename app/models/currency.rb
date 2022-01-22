require "json"
require "open-uri"

class Currency < ApplicationRecord

  def calculate_value(amount)
    (current_price.to_f * amount.to_f).round(4)
  end

  def current_price
    url = "https://api.coingecko.com/api/v3/coins/"
    request = HTTParty.get(url + self.slug)
    parsed_response = JSON.parse(request.body)
    parsed_response.dig('tickers').nil? ? '0.00' : parsed_response.dig('tickers')&.first&.dig('last')
  end

  def current_name
    url = "https://api.coingecko.com/api/v3/coins/"
    request = HTTParty.get(url + 'bitcoin')
    parsed_response = JSON.parse(request.body)
    name = parsed_response.first[1].capitalize
  end
end
