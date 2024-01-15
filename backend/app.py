from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from config import Config
from models.user import User
from openai_integration.openai_client import OpenAIClient
from skincare_api.normalize_data import NormalizeDataDermAI

# Bad practice 
@app.route('/register', method=['POST'])
def register():
    data = request.get_json()
    user = User(name=data['name'], age=data['age'], gender=data['gender'], weight=data['weight'], height=data['height']) 
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'User created successfully!'})

# Bad practice 
@app.route('/login', method=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(name=data['name']).first()
    if user:
        return jsonify({'message': 'User logged in successfully!'})
    else:
        return jsonify({'message': 'User not found!'})



app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)


if __name__ == '__main__':
    app.run(debug=True)

