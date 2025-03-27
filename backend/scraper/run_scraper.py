from bvb.bvb import BVB
import json
import os

with BVB() as bot:
    # Parse the BVB page
    bot.land_first_page()
    bot.pass_pop_up()
    bot.accept_cookies()
    bot.go_to_index_page()

    # Get all companies
    list = bot.show_all_companies()

    # Create the json file
    with open("companies.json", "w") as file:
        json.dump(list, file)
