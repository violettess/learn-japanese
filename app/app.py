from flask import Flask, request, jsonify, render_template
import os
import numpy as np
import base64
import io
import joblib
from PIL import Image, ImageOps
 
app = Flask(__name__)
 
base_dir = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(base_dir, 'model', 'linear_svm_v3_calibrated.pkl')
 
model = joblib.load(model_path)
 
KANA_LABELS = {
    0:  "A (あ)",    1:  "I (い)",    2:  "U (う)",    3:  "E (え)",    4:  "O (お)",
    5:  "KA (か)",   6:  "KI (き)",   7:  "KU (く)",   8:  "KE (け)",   9:  "KO (こ)",
    10: "SA (さ)",   11: "SHI (し)",  12: "SU (す)",   13: "SE (せ)",   14: "SO (そ)",
    15: "TA (た)",   16: "CHI (ち)",  17: "TSU (つ)",  18: "TE (て)",   19: "TO (と)",
    20: "NA (な)",   21: "NI (に)",   22: "NU (ぬ)",   23: "NE (ね)",   24: "NO (の)",
    25: "HA (は)",   26: "HI (ひ)",   27: "FU (ふ)",   28: "HE (へ)",   29: "HO (ほ)",
    30: "MA (ま)",   31: "MI (み)",   32: "MU (む)",   33: "ME (め)",   34: "MO (も)",
    35: "YA (や)",   36: "YU (ゆ)",   37: "YO (よ)",
    38: "RA (ら)",   39: "RI (り)",   40: "RU (る)",   41: "RE (れ)",   42: "RO (ろ)",
    43: "WA (わ)",   44: "WI (ゐ)",   45: "WE (ゑ)",   46: "WO (を)",
    47: "N (ん)",
    48: "ゝ (iteration mark)"
}
 
@app.route("/")
def home():
    return render_template("write.html")
 
@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    if not data or "image" not in data:
        return jsonify({"error": "No image data provided"}), 400
 
    image_data = data["image"]
    if "," in image_data:
        image_data = image_data.split(",")[1]
 
    img_bytes = base64.b64decode(image_data)
    img = Image.open(io.BytesIO(img_bytes)).convert('L')
    img.save("debug_1_raw.png")
 
    img = ImageOps.invert(img)
    img.save("debug_2_inverted.png")
 
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
    img.save("debug_3_cropped.png")
 
    img = ImageOps.expand(img, border=20, fill=0)
    img = img.resize((36, 36))
    img.save("debug_4_final.png")
 
    img_array = np.array(img).flatten().reshape(1, -1) / 255.0
    print(f"Min: {img_array.min():.3f}, Max: {img_array.max():.3f}, Non-zero: {np.count_nonzero(img_array)}")
 
    prediction_index = int(model.predict(img_array)[0])
    label = KANA_LABELS.get(prediction_index, f"Unknown ({prediction_index})")
    print(f"Predicted index: {prediction_index} → {label}")
 
    return jsonify({"result": label})
 
if __name__ == "__main__":
    app.run(debug=True)