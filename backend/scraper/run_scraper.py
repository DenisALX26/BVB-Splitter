from bvb.bvb import BVB
import pprint

with BVB() as bot:
    # Parse the BVB page
    bot.land_first_page()
    bot.accept_cookies()
    bot.go_to_index_page()

    # Get all companies
    list = bot.show_all_companies()
    pprint.pprint(list)