import time
from pymongo import MongoClient
from flask import Flask
from flask_cors import CORS
import pandas as pd


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Initialize MongoDB client
client = MongoClient('mongodb+srv://ramchandaninikhil01:zJ2LbWEugkYjdxwu@organism-data.hsllj.mongodb.net/?retryWrites=true&w=majority&appName=organism-data')
db = client['data']  # Replace with your database name
collection = db['merged']  # Replace with your collection name



@app.route('/species')
def get_species_of_interest():
    try:
        data = list(collection.find())
        species = sorted(set(item['Species of interest'] for item in data))  # Sort the unique species
        return {'species': species}
    except Exception as e:
        return {'error': str(e)}
    

@app.route('/data/<species>')
def get_temperature_and_ph_abbundance(species):
    try:
        data = list(collection.find({'Species of interest': species}))
        df = pd.DataFrame(data)
        df = df[['soilInWaterpH', 'percentage', 'pH_preference', 'temperature_preference','soilTemp','soilMoisture','soilInWaterpH','soilInCaClpH']]
        return df.to_dict(orient='records')
    
    except Exception as e:
        return {'error': str(e)}
    
    



if __name__ == '__main__':
    app.run(debug=True)