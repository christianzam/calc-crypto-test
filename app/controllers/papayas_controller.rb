# frozen_string_literal: true
require "json"
require "open-uri"
class PapayasController < ApplicationController
  def index

    url = "https://api.coingecko.com/api/v3/coins/"
    request = HTTParty.get(url + 'bitcoin')
    parsed_response = JSON.parse(request.body)
    @price = parsed_response.first[1].capitalize
  end
end
