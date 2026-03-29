// ===== KANA DATA =====
const KANA_DATA = {
    "A (あ)":    { char: "あ", reading: "A",   pronunciation: "like 'A' in 'father'",     desc: "One of the most fundamental hiragana characters. Used in countless Japanese words." },
    "I (い)":    { char: "い", reading: "I",   pronunciation: "like 'EE' in 'feet'",       desc: "A simple two-stroke character that appears very frequently in Japanese." },
    "U (う)":    { char: "う", reading: "U",   pronunciation: "like 'OO' in 'food' (short)", desc: "Pronounced with lips barely rounded, shorter than English 'oo'." },
    "E (え)":    { char: "え", reading: "E",   pronunciation: "like 'E' in 'bed'",          desc: "A mid-front vowel sound used in many common Japanese words." },
    "O (お)":    { char: "お", reading: "O",   pronunciation: "like 'O' in 'ore'",          desc: "A rounded back vowel, one of the five core Japanese vowels." },
    "KA (か)":   { char: "か", reading: "KA",  pronunciation: "like 'CA' in 'car'",         desc: "Formed from two strokes. Appears in words like かお (face) and かみ (paper)." },
    "KI (き)":   { char: "き", reading: "KI",  pronunciation: "like 'KI' in 'key'",         desc: "A four-stroke character. Appears in きれい (beautiful) and きく (to listen)." },
    "KU (く)":   { char: "く", reading: "KU",  pronunciation: "like 'CU' in 'cute'",        desc: "One of the simplest hiragana, written in a single curved stroke." },
    "KE (け)":   { char: "け", reading: "KE",  pronunciation: "like 'KE' in 'keg'",         desc: "A three-stroke character found in words like けむり (smoke)." },
    "KO (こ)":   { char: "こ", reading: "KO",  pronunciation: "like 'CO' in 'cord'",        desc: "Two horizontal strokes. Appears in こころ (heart) and ここ (here)." },
    "SA (さ)":   { char: "さ", reading: "SA",  pronunciation: "like 'SA' in 'salad'",       desc: "A three-stroke character used in さくら (cherry blossom) and さかな (fish)." },
    "SHI (し)":  { char: "し", reading: "SHI", pronunciation: "like 'SHE'",                 desc: "A single curved stroke resembling a hook. Used in しろ (white) and しあわせ (happy)." },
    "SU (す)":   { char: "す", reading: "SU",  pronunciation: "like 'SUE'",                  desc: "Looks like a looping swirl. Found in すし (sushi) and すき (to like)." },
    "SE (せ)":   { char: "せ", reading: "SE",  pronunciation: "like 'SE' in 'set'",          desc: "Appears in せかい (world) and せんせい (teacher)." },
    "SO (そ)":   { char: "そ", reading: "SO",  pronunciation: "like 'SO' in 'solo'",         desc: "Resembles a flowing Z shape. Used in そら (sky) and そと (outside)." },
    "TA (た)":   { char: "た", reading: "TA",  pronunciation: "like 'TA' in 'taco'",         desc: "A four-stroke character. Appears in たべる (to eat) and たかい (tall/expensive)." },
    "CHI (ち)":  { char: "ち", reading: "CHI", pronunciation: "like 'CHE' in 'cheese'",      desc: "A looping character. Used in ちかい (close) and ちず (map)." },
    "TSU (つ)":  { char: "つ", reading: "TSU", pronunciation: "like 'TSU' in 'tsunami'",     desc: "A single curved stroke. Appears in つき (moon) and つめたい (cold)." },
    "TE (て)":   { char: "て", reading: "TE",  pronunciation: "like 'TE' in 'ten'",          desc: "Resembles a fishhook. Used in てがみ (letter) and てんき (weather)." },
    "TO (と)":   { char: "と", reading: "TO",  pronunciation: "like 'TO' in 'tone'",         desc: "Looks like a vertical line with a curved hook. Appears in とり (bird) and とても (very)." },
    "NA (な)":   { char: "な", reading: "NA",  pronunciation: "like 'NA' in 'nap'",          desc: "A complex four-stroke character. Used in なまえ (name) and なつ (summer)." },
    "NI (に)":   { char: "に", reading: "NI",  pronunciation: "like 'NI' in 'knee'",         desc: "Resembles two horizontal bars with a hook. Used in にほん (Japan)." },
    "NU (ぬ)":   { char: "ぬ", reading: "NU",  pronunciation: "like 'NU' in 'new'",          desc: "A looping character sometimes confused with め. Appears in ぬの (cloth)." },
    "NE (ね)":   { char: "ね", reading: "NE",  pronunciation: "like 'NE' in 'net'",          desc: "Resembles ぬ but with a different loop. Used in ねこ (cat) and ねる (to sleep)." },
    "NO (の)":   { char: "の", reading: "NO",  pronunciation: "like 'NO' in 'note'",         desc: "A simple loop stroke. Also used as the possessive particle の in Japanese grammar." },
    "HA (は)":   { char: "は", reading: "HA",  pronunciation: "like 'HA' in 'happy'",        desc: "Also used as the topic particle は (wa). Appears in はな (flower) and はやい (fast)." },
    "HI (ひ)":   { char: "ひ", reading: "HI",  pronunciation: "like 'HI' in 'heat'",         desc: "A single flowing stroke. Used in ひと (person) and ひかり (light)." },
    "FU (ふ)":   { char: "ふ", reading: "FU",  pronunciation: "like blowing out a candle",   desc: "A soft bilabial fricative — unique to Japanese. Used in ふゆ (winter) and ふね (boat)." },
    "HE (へ)":   { char: "へ", reading: "HE",  pronunciation: "like 'HE' in 'help'",         desc: "The simplest hiragana — a single angled stroke. Also used as the direction particle へ." },
    "HO (ほ)":   { char: "ほ", reading: "HO",  pronunciation: "like 'HO' in 'home'",         desc: "A detailed four-stroke character. Used in ほん (book) and ほし (star)." },
    "MA (ま)":   { char: "ま", reading: "MA",  pronunciation: "like 'MA' in 'mama'",         desc: "A three-stroke character. Appears in まち (town) and まど (window)." },
    "MI (み)":   { char: "み", reading: "MI",  pronunciation: "like 'ME' in 'meet'",         desc: "A flowing two-stroke character. Used in みず (water) and みせ (shop)." },
    "MU (む)":   { char: "む", reading: "MU",  pronunciation: "like 'MOO' (short)",           desc: "A complex looping character. Appears in むし (insect) and むずかしい (difficult)." },
    "ME (め)":   { char: "め", reading: "ME",  pronunciation: "like 'ME' in 'met'",           desc: "A two-loop character sometimes confused with ぬ. Used in め (eye) and めがね (glasses)." },
    "MO (も)":   { char: "も", reading: "MO",  pronunciation: "like 'MO' in 'more'",          desc: "A three-stroke character also meaning 'also/too' as a particle. Used in もり (forest)." },
    "YA (や)":   { char: "や", reading: "YA",  pronunciation: "like 'YA' in 'yard'",          desc: "A three-stroke character. Used in やま (mountain) and やさしい (kind/easy)." },
    "YU (ゆ)":   { char: "ゆ", reading: "YU",  pronunciation: "like 'YOU'",                   desc: "Resembles a fish. Used in ゆき (snow) and ゆめ (dream)." },
    "YO (よ)":   { char: "よ", reading: "YO",  pronunciation: "like 'YO' in 'yoga'",          desc: "A two-stroke character. Used in よる (night) and よむ (to read)." },
    "RA (ら)":   { char: "ら", reading: "RA",  pronunciation: "flap R, between R and L",      desc: "Japanese R is unique — a flap between English R and L. Used in らいねん (next year)." },
    "RI (り)":   { char: "り", reading: "RI",  pronunciation: "flap R + I",                   desc: "Two vertical strokes. Appears in りんご (apple) and りょこう (travel)." },
    "RU (る)":   { char: "る", reading: "RU",  pronunciation: "flap R + U",                   desc: "A looping stroke. Used in verb endings — e.g. たべる (to eat)." },
    "RE (れ)":   { char: "れ", reading: "RE",  pronunciation: "flap R + E",                   desc: "Resembles れ a flowing two-part character. Used in れきし (history)." },
    "RO (ろ)":   { char: "ろ", reading: "RO",  pronunciation: "flap R + O",                   desc: "Like る but without the final hook. Used in ろうか (hallway)." },
    "WA (わ)":   { char: "わ", reading: "WA",  pronunciation: "like 'WA' in 'water'",         desc: "Also used as the topic particle は (wa). Appears in わたし (I/me)." },
    "WI (ゐ)":   { char: "ゐ", reading: "WI",  pronunciation: "archaic 'WI' sound",           desc: "An obsolete hiragana rarely used in modern Japanese. Mainly seen in historical texts." },
    "WE (ゑ)":   { char: "ゑ", reading: "WE",  pronunciation: "archaic 'WE' sound",           desc: "An obsolete hiragana, no longer used in modern standard Japanese." },
    "WO (を)":   { char: "を", reading: "WO",  pronunciation: "like 'O' in modern usage",     desc: "Used exclusively as the direct object particle を in modern Japanese grammar." },
    "N (ん)":    { char: "ん", reading: "N",   pronunciation: "nasal N, varies by context",   desc: "The only standalone consonant in Japanese. Its pronunciation shifts depending on surrounding sounds." },
    "ゝ (iteration mark)": { char: "ゝ", reading: "—", pronunciation: "repeats previous kana", desc: "A repetition mark used in some older or stylized texts to repeat the preceding kana." }
};
 
// ===== INIT =====
window.onload = function () {
    paper.setup('drawingCanvas');
 
    let path;
    let undoStack = [];
    let redoStack = [];
    let timeout = null;
 
    let tool = new paper.Tool();
 
    tool.onMouseDown = function (event) {
        path = new paper.Path();
        path.strokeColor = 'black';
        path.strokeWidth = 5;
        path.strokeCap = 'round';
        path.strokeJoin = 'round';
        path.add(event.point);
    };
 
    tool.onMouseDrag = function (event) {
        path.add(event.point);
    };
 
    tool.onMouseUp = function (event) {
        path.simplify();
        undoStack.push(path);
        redoStack = [];
        triggerPredict();
    };
 
    window.undo = function () {
        if (undoStack.length > 0) {
            let last = undoStack.pop();
            redoStack.push(last);
            last.remove();
            paper.view.update();
            triggerPredict();
        }
    };
 
    window.redo = function () {
        if (redoStack.length > 0) {
            let item = redoStack.pop();
            undoStack.push(item);
            paper.project.activeLayer.addChild(item);
            paper.view.update();
            triggerPredict();
        }
    };
 
    window.clearCanvas = function () {
        paper.project.activeLayer.removeChildren();
        undoStack = [];
        redoStack = [];
        paper.view.update();
        resetCard();
    };
 
    function triggerPredict() {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            window.predict();
        }, 500);
    }
 
    function resetCard() {
        document.getElementById("kanaChar").className = "kana-char placeholder";
        document.getElementById("kanaChar").innerText = "?";
        document.getElementById("predictionName").className = "prediction-name placeholder";
        document.getElementById("predictionName").innerText = "Draw a character to begin";
        document.getElementById("readingRow").style.display = "none";
        document.getElementById("pronunciationRow").style.display = "none";
        document.getElementById("descRow").style.display = "none";
        document.getElementById("loadingDots").classList.remove("active");
    }
 
    function showResult(label) {
 
        const info = KANA_DATA[label];
 
        // Big character
        const charEl = document.getElementById("kanaChar");
        charEl.className = "kana-char";
        charEl.innerText = info ? info.char : label;
 
        // Title
        const nameEl = document.getElementById("predictionName");
        nameEl.className = "prediction-name";
        nameEl.innerText = label;
 
        if (info) {
            document.getElementById("readingValue").innerText = info.reading;
            document.getElementById("pronunciationValue").innerText = info.pronunciation;
            document.getElementById("descValue").innerText = info.desc;
            document.getElementById("readingRow").style.display = "flex";
            document.getElementById("pronunciationRow").style.display = "flex";
            document.getElementById("descRow").style.display = "flex";
        }
    }
 
    window.predict = function () {
        let sourceCanvas = paper.view.element;
        let ctx = sourceCanvas.getContext("2d");
        let pixelData = ctx.getImageData(0, 0, sourceCanvas.width, sourceCanvas.height).data;
        let isEmpty = !pixelData.some((val, i) => i % 4 === 3 && val > 0);
 
        if (isEmpty) {
            resetCard();
            return;
        }
 
        // Offscreen canvas with white background
        let offscreen = document.createElement("canvas");
        offscreen.width = sourceCanvas.width;
        offscreen.height = sourceCanvas.height;
        let offCtx = offscreen.getContext("2d");
        offCtx.fillStyle = "white";
        offCtx.fillRect(0, 0, offscreen.width, offscreen.height);
        offCtx.drawImage(sourceCanvas, 0, 0);
 
        let dataURL = offscreen.toDataURL("image/png");
 
        fetch("/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ image: dataURL })
        })
        .then(res => res.json())
        .then(data => {
            showResult(data.result);
        })
        .catch(err => {
            console.error("Prediction error:", err);
        });
    };
};