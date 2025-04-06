from fastapi import FastAPI
from api.routes import router
from scraper.run_scraper import run_scraper

app = FastAPI()

app.include_router(router)

run_scraper()
