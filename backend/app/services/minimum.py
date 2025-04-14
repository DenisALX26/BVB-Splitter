from services.calculator import calculate_distribution


def calculate_minimum_amount(companies: dict) -> int:
    amount = 0
    while True:
        solution_found = True
        amount += 1
        result = calculate_distribution(companies, amount)
        # Check if all companies have a number of shares greater than 0
        for symbol, data in result.items():
            if data["number_of_shares"] <= 0:
                solution_found = False
                break
        if solution_found:
            return amount
