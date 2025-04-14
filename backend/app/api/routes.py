from fastapi import APIRouter
from scraper.json_utils import load_from_json
import json
from pathlib import Path
from services.calculator import calculate_distribution
from services.minimum import calculate_minimum_amount
from models.company import InvestmentAmount, Company

router = APIRouter()


@router.get("/")
def get_companies():
    return load_from_json()


@router.post("/results", response_model=dict[str, dict])
def show_distribution(request: InvestmentAmount):
    companies_path = Path(__file__).parent.parent / "data" / "companies.json"
    with open(companies_path, "r") as file:
        companies = json.load(file)
    result = calculate_distribution(companies, request.amount)
    return result


@router.get("/minimum", response_model=int)
def show_minimum():
    companies_path = Path(__file__).parent.parent / "data" / "companies.json"
    with open(companies_path, "r") as file:
        companies = json.load(file)
    result = calculate_minimum_amount(companies)
    return result
