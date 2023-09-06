from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/run-python-code')
def run_python_code():
    # Call your Python functions here
    output = "Sample output from Python"
    return jsonify({"output": output})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
