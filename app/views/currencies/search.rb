class Search < ApplicationRecord

  def list_suggestions
    x = 1 
    list_suggested_result.each do |t|
      "#{x}" + ". " + "#{t}"  
       x += 1
    end
  end

  def crypto_name(coins)
    coins != nil ? coins.name : nil 
  end 

  def crypto_price(coins)
     coins != nil ? "$ #{coins.current_price.round(2)}" : nil
  end
end