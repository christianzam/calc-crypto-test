class CurrenciesController < ApplicationController
  helper_method :coin_name, :coin_price, :coin_sym, :coin_supply, :today_date

  def index
  end

  def show
  end

  def today_date
    mytime = DateTime.now
    mytime.strftime("#{mytime.day.ordinalize} %B %Y")
  end

  def coin_name(crypto_name)
    array = Currency.all
    name = array.select { |x| return x.name.to_s if x.name == crypto_name.to_s }
    name.to_s
  end

  def coin_price(crypto_name)
    array = Currency.all
    price = array.select { |x| return x.current_price if x.name == crypto_name.to_s }
    price.to_s
  end

  def coin_sym(crypto_name)
    array = Currency.all
    sym = array.select { |x| return x.currency_symbol.to_s if x.name == crypto_name.to_s }
    sym.to_s
  end

  def coin_supply(crypto_name)
    array = Currency.all
    supply = array.select { |x| return x.max_supply.to_f.to_s if x.name == crypto_name.to_s }
    supply.to_s
  end

  def search_suggestions
    return unless params[:crypto_search].present?

    @currencies = Currency.where('LOWER(name) LIKE ?', "%#{params[:crypto_search].downcase}%")
    @currencies.collect(&:name)
  end

  def search
    @currencies = Currency.where('LOWER(name) LIKE ?', "%#{params[:search].downcase}%")
    render json: {currencies: @currencies}
  end

  def calculate
    amount = params[:amount]
    render json: {
      currency: currency,
      current_price: currency.current_price,
      amount: amount,
      value: currency.calculate_value(amount)
    }
  end

  private

  def currency
    @currency ||= Currency.find(params[:id])
  end
end
