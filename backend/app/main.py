from fastapi import FastAPI
from api.routes import router
from scraper.run_scraper import run_scraper
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow CORS for all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

run_scraper()
