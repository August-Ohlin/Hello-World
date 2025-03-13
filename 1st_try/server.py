from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
import os

app = Flask(__name__)
CORS(app)

# Skapa OpenAI klienten med API-nyckeln från miljövariabeln
client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        user_message = data.get('message')
        
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": """Du är en expertassistent specialiserad på vår planet jorden och djurriket. 
                Du svarar på frågor relaterade till jorden, dess miljö, klimat, geografi, geologi, 
                atmosfär, hav och liknande ämnen. Du är också expert på djur och kan svara på frågor om 
                olika djurarter, deras beteende, habitat, evolution, och ekologi. Om någon ställer frågor 
                som inte är relaterade till jorden eller djurriket, påminner du dem vänligt om att du bara 
                kan svara på frågor om jorden och djur. Dina svar ska vara pedagogiska och anpassade för 
                alla åldrar. Svara alltid på svenska."""},
                {"role": "user", "content": user_message}
            ]
        )
        
        ai_response = response.choices[0].message.content
        return jsonify({"response": ai_response})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Lägg till en hälsningssida för API:et
@app.route('/api', methods=['GET'])
def hello():
    return jsonify({"message": "Välkommen till Earth & Animal AI API!"})

if __name__ == '__main__':
    app.run() 