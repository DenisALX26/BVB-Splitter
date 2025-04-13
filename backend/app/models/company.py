from pydantic import BaseModel


# User Investment Amount
class InvestmentAmount(BaseModel):
    amount: float


# Company Structure
class Company(BaseModel):
    symbol: str
    name: str
    price_per_share: float
    bet_weight: float
    number_of_shares: int
    commission: float
    total_investment: float


# Minimum Investment Amount
class MinimumInvestment(BaseModel):
    amount: float
