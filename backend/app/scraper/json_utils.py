import os, json

# Set the path to the backend directory
backend_diretory_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "../data"))

# Set the path to the json file
json_file_path = os.path.join(backend_diretory_path, "companies.json")


# Save the data to the json file
def save_to_json(data: dict):
    with open(json_file_path, "w") as file:
        json.dump(data, file)


# Load the data from the json file
def load_from_json():
    try:
        with open(json_file_path, "r") as file:
            return json.load(file)
    except FileNotFoundError:
        return {}
