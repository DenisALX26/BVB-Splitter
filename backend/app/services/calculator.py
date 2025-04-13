import math


def calculate_distribution(companies: dict, amount: int) -> dict:
    result = {}
    commission = 0.0043
    orders_commission = 30
    amount_without_commission = (amount - orders_commission) / (1 - commission)

    for symbol, company in companies.items():
        # Calculate the number of shares to buy
        number_of_shares = int(
            company["weight"] * amount_without_commission / company["price"] / 100
        )

        # Calculate the total investment for this company
        total_investment = number_of_shares * company["price"]

        # Calculate the commission for this company
        company_commission = round(total_investment * commission, 2)

        # Calculate the total investment including commission
        total_investment_with_commission = total_investment + company_commission + 1.5

        result[symbol] = {
            "name": company["name"],
            "price_per_share": company["price"],
            "bet_weight": company["weight"],
            "number_of_shares": number_of_shares,
            "commission": round(company_commission + 1.5, 2),
            "total_investment": round(total_investment_with_commission, 2),
        }
    return result
