import bvb.constants as const
import os
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait


class Bvb(webdriver.Chrome):
    def __init__(self, driver_path=r"C:\SeleniumDrivers", teardown=False):
        self.driver_path = driver_path
        self.teardown = teardown
        os.environ["PATH"] += self.driver_path
        options = Options()

        # Hide Selenium (to not get blocked)
        options.add_argument("--disable-blink-features=AutomationControlled")

        # Add a user-agent to not get blocked
        options.add_argument(
            "user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
        )

        # Run Selenium in Headless mode
        options.add_argument("--headless=new")

        super(Bvb, self).__init__(options=options)
        self.implicitly_wait(15)
        self.maximize_window()

    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.teardown:
            self.quit()

    def land_first_page(self):
        self.get(const.BASE_URL)
        WebDriverWait(self, 10).until(
            EC.presence_of_element_located((By.ID, "modal_BAI"))
        )

    def accept_cookies(self):
        cookies_btn = self.find_element(By.ID, "cookie-bar-button")
        cookies_btn.click()

    def pass_pop_up(self):
        home_button = self.find_element(By.ID, "modal_BAI")
        home_button.click()

    def go_to_index_page(self):
        navbar_button = self.find_element(
            By.CSS_SELECTOR, "a[href='/FinancialInstruments']"
        )
        navbar_button.click()
        index_button = self.find_element(
            By.CSS_SELECTOR, "a[href='/FinancialInstruments/Indices/IndicesProfiles']"
        )
        index_button.click()

    def show_all_companies(self) -> dict:
        # Show all companies
        first_button = self.find_element(By.CSS_SELECTOR, "#gvC_length > label button")
        select_20_button = self.find_element(
            By.CSS_SELECTOR, "#gvC_length > label ul li[data-original-index='1'] a"
        )
        first_button.click()
        select_20_button.click()

        # Select all companies symbols
        companies_symbols = self.find_elements(
            By.CSS_SELECTOR, "#gvC > tbody > tr > td span a"
        )
        companies_symbols_list = [
            company_symbol.get_attribute("innerHTML")
            for company_symbol in companies_symbols
        ]

        # Select all companies names
        companies_names = self.find_elements(
            By.CSS_SELECTOR, "#gvC > tbody > tr > td:nth-child(2)"
        )
        companies_names_list = [
            company_name.get_attribute("innerHTML") for company_name in companies_names
        ]

        # Select all companies share prices
        companies_prices = self.find_elements(
            By.CSS_SELECTOR, "#gvC > tbody > tr > td:nth-child(4)"
        )
        companies_prices_list = [
            company_price.get_attribute("innerHTML")
            for company_price in companies_prices
        ]

        # Select all companies weights
        companies_weights = self.find_elements(
            By.CSS_SELECTOR, "#gvC > tbody > tr > td:nth-child(8)"
        )
        companies_weights_list = [
            company_weight.get_attribute("innerHTML")
            for company_weight in companies_weights
        ]

        # Build the list of dictionaries
        companies = {}
        for i in range(len(companies_symbols_list)):
            companies[companies_symbols_list[i]] = {
                "name": companies_names_list[i],
                "price": float(companies_prices_list[i].replace(",", ".")),
                "weight": float(companies_weights_list[i].replace(",", ".")),
            }
        return companies
