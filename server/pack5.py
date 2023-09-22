import json

building_jet = "C:\Program Files (x86)\Steam\steamapps\common\The Jackbox Party Pack 5\games\RapBattle\content\RapBattleBuilding.jet"

def update_json_with_txt(json_filename, txt_filename):
    with open(json_filename, 'r') as json_file:
        data = json.load(json_file)
    data['content'] = [entry for entry in data['content'] if not ("002" <= entry['id'] <= "027")]
    last_id = int(data['content'][-1]['id'])
    with open(txt_filename, 'r') as txt_file:
        for line in txt_file:
            last_id += 1
            new_entry = {
                "id": f"{last_id:03}", # ids must be 3 digits or less or the game shits itself
                "name": line.strip(),
                "giveTrophy": False
            }
            data['content'].append(new_entry)
    with open(json_filename, 'w') as json_file:
        json.dump(data, json_file, indent=4)
txt_file_path = input("Please provide the path to your .txt file: ")

update_json_with_txt(building_jet, txt_file_path)
