from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/run-python-code')
def run_python_code():
    
    output = "the motherfucking server works biotch!🥶🔥🗣"
    return jsonify({"output": output})

if __name__ == "__main__":
    app.run(debug=True, port=5000)