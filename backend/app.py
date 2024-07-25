from flask import Flask, render_template, request, jsonify, send_from_directory
from pymongo import MongoClient
from flask_cors import CORS
from bson import ObjectId
import os

# Flask app
# app = Flask(__name__)

app = Flask(__name__, static_folder='../frontend/build', static_url_path='')
# If your build directory is located somewhere else, adjust the paths accordingly.

# MongoDB connection
client = MongoClient('mongodb://localhost:27017/')

# if the database name does not exist, it will be created
db = client['survey_app'] # Database name

CORS(app) # Enable CORS - Cross Origin Resource Sharing - prevents blocking of requests from frontend

# Helper function to convert ObjectId to string
def objectIdToStr(item):
    if isinstance(item, dict):
        for key in item:
            item[key] = objectIdToStr(item[key])
    elif isinstance(item, list):
        item = [objectIdToStr(element) for element in item]
    elif isinstance(item, ObjectId):
        return str(item)
    return item

# Home route
# @app.route('/') 
# def index():
#     return render_template('index.html')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

# Old route for handling slider values
# @app.route('/slider_values', methods=['POST', 'GET'])
# def slider_values():
#     if request.method == 'POST':
#         body = request.json
#         db['slider_values'].insert_one(body)
#         return jsonify({'message': 'Data received successfully!', 'data': body})

#     if request.method == 'GET':
#         all_data = db['slider_values'].find()
#         dataJson = [{'id': str(data['_id']), **data} for data in all_data]
#         return jsonify(dataJson)

# New route for handling slider values
# Route for handling slider values
@app.route('/slider_values', methods=['POST', 'GET'])
def slider_values():
    if request.method == 'POST':
        body = request.json
        result = db['slider_values'].insert_one(body)
        # Convert ObjectId to string for JSON serialization
        body['_id'] = str(result.inserted_id)
        return jsonify({'message': 'Data received successfully!', 'data': body})

    elif request.method == 'GET':
        all_data = db['slider_values'].find()
        # Convert all ObjectIds to strings for JSON serialization
        dataJson = [objectIdToStr({'id': str(data['_id']), **data}) for data in all_data]
        return jsonify(dataJson)


if __name__ == '__main__':
    app.run(debug=True)
