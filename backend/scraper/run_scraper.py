from bvb.bvb import BVB
from json_utils import save_to_json


with BVB() as bot:
    # Parse the BVB page
    bot.land_first_page()
    bot.pass_pop_up()
    bot.accept_cookies()
    bot.go_to_index_page()

    # Get all companies
    list = bot.show_all_companies()

    # Save the data to the json file
    save_to_json(list)
