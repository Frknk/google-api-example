from flask import Flask, render_template, request, jsonify
import jwt

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/decode_token", methods=["POST"])
def decode_token():
    token = request.json["token"]
    try:
        decoded = jwt.decode(token, options={"verify_signature": False})
        return jsonify(decoded)
    except Exception as e:
        print(f"Error decoding token: {e}")
        return jsonify(error=str(e)), 400


if __name__ == "__main__":
    app.run()
