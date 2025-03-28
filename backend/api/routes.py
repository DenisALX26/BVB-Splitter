from fastapi import APIRouter
from scraper.json_utils import load_from_json

router = APIRouter()

@router.get("/")
def get_companies():
    return load_from_json()