import os
from flask import Flask, jsonify, request
from flask_cors import CORS
import random
import shutil
from actions import format_jet_file, find_template, add_new_object, select_dir
import tkinter as tk
from tkinter import filedialog
import json

app = Flask(__name__)
CORS(app)

CORS(app, resources={r"/pack2earwax": {"origins": "http://localhost:3000"}})
@app.route('/pack2earwax', methods=['POST'])
def pack_2_earwax():
    root = tk.Tk()
    root.withdraw()
    folder_selected = filedialog.askdirectory()
    BASE_EARWAX = folder_selected
    root.destroy()
    BASE_EARWAX_AUDIO_DIR = r"/content/EarwaxAudio/Audio/"
    BASE_EARWAX_JET_FILE = r"/content/EarwaxAudio.jet"
    BASE_EARWAX_SPECTRUM_DIR = r"/content/EarwaxAudio/Spectrum/"
    TEMPLATE_SPECTRUM = r"/content/EarwaxAudio/Spectrum/Template.jet"
    # earwax_dir = "C:\Program Files (x86)\Steam\steamapps\common\The Jackbox Party Pack 2\games\Earwax"
    # earwax_audio_jet = "C:\Program Files (x86)\Steam\steamapps\common\The Jackbox Party Pack 2\games\Earwax\content\EarwaxAudio.jet"
    # earwax_audio_dir = "C:\Program Files (x86)\Steam\steamapps\common\The Jackbox Party Pack 2\games\Earwax\content\EarwaxAudio\Audio"
    # format that disgusting ass file NOW!
    format_jet_file(f"{BASE_EARWAX}{BASE_EARWAX_JET_FILE}")
    if request.method == 'POST':
        uploaded_files = request.files.getlist('oggFiles')
    
    list_of_sources = [] # in case you wanna build a table or some shit
    num_files = 0
    for file in uploaded_files:
        if file.filename.endswith('.ogg'):
            num_files = num_files + 1

        # Step 1: Rename .ogg files with a unique ID and place them in the Audio folder
        unique_id = random.randint(50000, 80000)
        while os.path.exists(os.path.join(f"{BASE_EARWAX}{BASE_EARWAX_AUDIO_DIR}", f"{unique_id}.ogg")):
            unique_id = random.randint(50000, 80000)
        file.save(os.path.join(f"{BASE_EARWAX}{BASE_EARWAX_AUDIO_DIR}", f"{unique_id}.ogg"))
        # list_of_sources.append(f"{unique_id}.ogg")
        print(f"Uploaded file: {file.filename} as {unique_id}.ogg")

        # Step 2: Create a .jet file for each .ogg, name it with the same ID, and place it in the Spectrum folder
        if not find_template(f"{BASE_EARWAX}{BASE_EARWAX_SPECTRUM_DIR}"):
            original_template = f"{BASE_EARWAX}{BASE_EARWAX_SPECTRUM_DIR}22740.jet"
            target = f"{BASE_EARWAX}{BASE_EARWAX_SPECTRUM_DIR}Template.jet"
            try:
                shutil.copy(f"{original_template}", target)
            except Exception as error:
                print({error})
        target = f"{BASE_EARWAX}{BASE_EARWAX_SPECTRUM_DIR}{unique_id}.jet"
        try:
            shutil.copy(f"{BASE_EARWAX}{TEMPLATE_SPECTRUM}", target)
        except Exception as error:
            print({error})

        # Step 3: Append the file's .json data to the master file EarwaxAudio.jet
        add_new_object(f"{BASE_EARWAX}{BASE_EARWAX_JET_FILE}", os.path.splitext(file.filename)[0], unique_id, "cartoon")
        # Done!
    output = f"{num_files} file(s) added successfully!"
    return jsonify({"output": "Modded successfully!"})

CORS(app, resources={r"/pack5madversecity": {"origins": "http://localhost:3000"}})
@app.route('/pack5madversecitybuilding', methods=['GET'])
def pack_5_madversecitybuilding():
    building_jet = "C:\Program Files (x86)\Steam\steamapps\common\The Jackbox Party Pack 5\games\RapBattle\content\RapBattleBuilding.jet"
    root = tk.Tk()
    root.withdraw()
    txt_file = filedialog.askopenfilename(filetypes=[('Text files', '*.txt')], defaultextension=".txt")
    root.destroy()

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

    update_json_with_txt(building_jet, txt_file)
    success = "Modded successfully!"
    return jsonify({"output": success})

CORS(app, resources={r"/pack5madversecitytickergag": {"origins": "http://localhost:3000"}})
@app.route('/pack5madversecitytickergag', methods=['GET'])
def pack_5_madversecitytickergag():
    building_jet = "C:\Program Files (x86)\Steam\steamapps\common\The Jackbox Party Pack 5\games\RapBattle\content\RapBattleTickerGag.jet"
    root = tk.Tk()
    root.withdraw()
    txt_file = filedialog.askopenfilename(filetypes=[('Text files', '*.txt')], defaultextension=".txt")
    root.destroy()

    def update_json_with_txt(json_filename, txt_filename):
        with open(json_filename, 'r') as json_file:
            data = json.load(json_file)
        data['content'] = [entry for entry in data['content'] if not ("002" <= entry['id'])]
        last_id = int(data['content'][-1]['id'])
        with open(txt_filename, 'r') as txt_file:
            for line in txt_file:
                last_id += 1
                new_entry = {
                    "id": f"{last_id:03}", # ids must be 3 digits or less or the game shits itself
                    "text": line.strip(),
                }
                data['content'].append(new_entry)
        with open(json_filename, 'w') as json_file:
            json.dump(data, json_file, indent=4)

    update_json_with_txt(building_jet, txt_file)
    success = "Modded successfully!"
    return jsonify({"output": success})

if __name__ == "__main__":
    app.run(debug=True, port=5000)