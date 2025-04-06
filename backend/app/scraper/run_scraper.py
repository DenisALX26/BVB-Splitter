import sys, os

# Add the path to the system path
# This is necessary to import the Bvb class from the bvb module
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__))))

from bvb.bvb import Bvb
from json_utils import save_to_json


def run_scraper():
    with Bvb() as bot:
        # Parse the BVB page
        bot.land_first_page()
        bot.pass_pop_up()
        bot.accept_cookies()
        bot.go_to_index_page()

        # Get all companies
        list = bot.show_all_companies()

        # Save the data to the json file
        save_to_json(list)
