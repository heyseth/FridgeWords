var words = ["about", "above", "ache", "ad", "after", "am", "apparatus", "arm", "ask", "away", "bare", "beat", "beauty", "bed", "beneath", "bitter", "black", "blood", "blow", "blue", "boil", "boy", "breast", "butt", "chant", "chocolate", "cool", "could", "crush", "cry", "d", "day", "death", "delirious", "diamond", "did", "dream", "dress", "drive", "drool", "drunk", "eat", "ed", "egg", "elaborate", "enormous", "er", "es", "est", "fast", "feet", "fiddle", "finger", "fluff", "forest", "frantic", "friend", "garden", "girl", "go", "goddess", "gorgeous", "gown", "hair", "he", "head", "heave", "her", "here", "him", "his", "honey", "hot", "how", "I", "ing", "juice", "lake", "language", "languid", "lather", "lazy", "less", "let", "lick", "lie", "life", "light", "like", "live", "love", "luscious", "lust", "ly", "mad", "man", "me", "mean", "meat", "men", "milk", "mist", "moan", "moon", "mother", "music", "must", "need", "never", "over", "pant", "peach", "petal", "picture", "pink", "play", "please", "pole", "pound", "puppy", "purple", "put", "r", "rain", "raw", "recall", "red", "repulsive", "rip", "rock", "rose", "run", "rust", "sad", "said", "sausage", "say", "scream", "sea", "see", "shadow", "she", "shine", "ship", "shot", "show", "sing", "sit", "skin", "sky", "sleep", "smear", "smell", "smooth", "so", "soar", "some", "sordid", "spray", "spring", "still", "stop", "storm", "suit", "summer", "sun", "sweat", "sweet", "swim", "symphony", "their", "there", "these", "they", "those", "though", "thousand", "through", "time", "tiny", "together", "tongue", "trudge", "TV", "ugly", "up", "urge", "use", "want", "watch", "water", "wax", "were", "what", "when", "whisper", "who", "why", "wind", "woman", "worship", "y", "yet", "absurd", "accept", "adamant", "add", "admit", "affect", "afford", "ago", "agree", "alarm", "album", "allow", "anatomy", "angle", "annoy", "answer", "anxious", "any", "ash", "attach", "average", "avoid", "awful", "bagel", "barefoot", "basic", "become", "bleed", "blow", "blush", "bolt", "bomb", "bridge", "bruise", "bubble", "build", "busy", "button", "calm", "camera", "cancer", "candy", "catsup", "cautious", "ceiling", "certain", "chalk", "channel", "chapter", "chase", "cheap", "choose", "clean", "clear", "clumsy", "cocktail", "collar", "contact", "continue", "copy", "cork", "cover", "crack", "craft", "create", "cruel", "curious", "current", "curtain", "cut", "cute", "daily", "damage", "danger", "deal", "deal", "deny", "design", "discreet", "dizzy", "drama", "drown", "dull", "dust", "eager", "early", "edit", "elegant", "elusive", "entire", "episode", "eulogy", "even", "evil", "exist", "faint", "fair", "faith", "fancy", "fast", "few", "film", "flag", "flame", "flat", "flimsy", "floor", "follow", "force", "fork", "fragile", "frail", "frank", "frantic", "fridge", "gamble", "glue", "graph", "gullible", "gun", "gut", "gym", "harass", "hate", "haunt", "hell", "history", "honest", "hug", "hum", "hurricane", "hurt", "hurt", "hypnotic", "ignore", "illusion", "imagine", "insomnia", "itch", "join", "just", "kick", "kind", "kite", "label", "lace", "lamp", "last", "latter", "lead", "legal", "limit", "linen", "lonely", "lotion", "loyal", "lullaby", "mail", "major", "mall", "meddle", "mellow", "memorize", "methane", "might", "modern", "mundane", "mushy", "neat", "neon", "nerd", "nervous", "news", "nice", "noise", "noodle", "notice", "novel", "obey", "obvious", "odd", "opinion", "order", "owl", "oxygen", "pajama", "panicky", "parallel", "patient", "peak", "photo", "pick", "pill", "pinch", "pocket", "popcorn", "praise", "pray", "press", "pressure", "print", "private", "prologue", "proud", "prove", "public", "pull", "purse", "push", "quiet", "random", "raspy", "reach", "real", "realize", "receive", "recent", "refuse", "regret", "repeat", "reply", "return", "river", "round", "rude", "scandal", "science", "scissors", "scribble", "secret", "seem", "sell", "send", "shall", "shallow", "shoulder", "shy", "sign", "silver", "simple", "sin", "sincere", "sing", "slap", "sniff", "social", "sofa", "solid", "somber", "sore", "sort", "spare", "speak", "spill", "splendid", "stand", "statue", "steady", "stiff", "street", "study", "stupid", "sudden", "suffer", "super", "symbol", "teach", "temple", "tequila", "test", "thief", "thread", "thrill", "thunder", "tidy", "tough", "tremble", "turn", "twist", "vanish", "venom", "vinyl", "visit", "vodka", "vote", "wake", "wallet", "warn", "wash", "wear", "weekend", "weird", "welcome", "whole", "worry", "yawn", "zip", "zoom"];

var common = ["the", "of", "and", "to", "a", "s", "in", "for", "is", "on", "that", "by", "this", "with", "i", "you", "it", "not", "or", "be", "are", "from", "at", "as", "your", "all", "have", "an", "was", "we", "will", "can", "us", "if", "my", "has", "but", "our", "one", "other", "do", "no"];

var hit1 = new Audio('res/hit.mp3');
var hit2 = new Audio('res/hit.mp3');

makeDiv = function(text) {
    magnet = "<div class = 'magnet'> " + text + "</div>";
    document.body.innerHTML += magnet;
};

createDivs = function() {
    var divs = "";
    for (var i = 0; i < 100; i++) {
        if (i % 5 === 0) {
            var magnet = "<div class = 'magnet'> " + common[i / 5] + "</div>";
        } else {
            var magnet = "<div class = 'magnet'> " + words[i] + "</div>";
        }
        divs += magnet;
    }
    document.body.innerHTML += divs;
};

// this code is super inefficient and hacky
// I plan to do a rewrite when the motivation finds me
randomizeDivs = function() {
    var i = 0;
    while (i < document.getElementsByClassName("magnet").length) {
        var spawnAttempts = 0;
        reposition(i);
        var touching = true;
        while (touching) {
            if (spawnAttempts > 50) {
                touching = false;
                while (i < document.getElementsByClassName("magnet").length) {
                    document.getElementsByClassName("magnet")[i].style.display = "none";
                    i++;
                }
                i = document.getElementsByClassName("magnet").length;
            } else {
                var currentTouch = false;
                var elem = document.getElementsByClassName("magnet")[i],
                    elems = document.getElementsByClassName('magnet'),
                    elemList = Array.prototype.slice.call(elems),
                    within = elemList.indexOf(elem),
                    touching = [];
                if (within !== -1) {
                    elemList.splice(within, 1);
                }
                for (var ii = 0; ii < elemList.length; ii++) {
                    if (detectOverlap(elem, elemList[ii])) {
                        spawnAttempts++;
                        reposition(i);
                        var currentTouch = true;
                    }
                }
                if (!currentTouch) {
                    touching = false;
                }
            }
        }
        i++;
    }
};

function reposition(i) {
    var x = Math.floor(Math.random() * width);
    var y = Math.floor(Math.random() * height);
    x = clamp(x, document.getElementsByClassName("magnet")[i].offsetWidth, (width - document.getElementsByClassName("magnet")[i].offsetWidth * 2));
    y = clamp(y, document.getElementsByClassName("magnet")[i].offsetHeight, (height - document.getElementsByClassName("magnet")[i].offsetHeight * 2));
    document.getElementsByClassName("magnet")[i].style.left = x + "px";
    document.getElementsByClassName("magnet")[i].style.top = y + "px";
}

newMagnet = function(inputVal) {
    if (inputVal != "") {
        document.getElementById("newMagnets").val('');
        makeDiv(inputVal);
    }
};

window.onload = function() {
    width = document.body.clientWidth;
    height = document.body.clientHeight;

    words = shuffle(words);
    createDivs();
    randomizeDivs();

    for (var i = 0; i < document.getElementsByClassName("magnet").length; i++) {
        dragElement(document.getElementsByClassName("magnet")[i]);
    }

    var modal = document.getElementById('overlay');
    var span = document.getElementsByClassName("close")[0];

    if (!localStorage.getItem('tutorialSeen')) {
        modal.style.display = "block";
    }
    localStorage.setItem('tutorialSeen', true);

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
};

var detectOverlap = (function() {
    function getPositions(elem) {
        var pos = elem.getBoundingClientRect();
        return [
            [pos.left - 2, pos.right + 2],
            [pos.top - 2, pos.bottom + 2]
        ];
    }

    function comparePositions(p1, p2) {
        var r1, r2;
        r1 = p1[0] < p2[0] ? p1 : p2;
        r2 = p1[0] < p2[0] ? p2 : p1;
        return r1[1] > r2[0] || r1[0] === r2[0];
    }

    return function(a, b) {
        var pos1 = getPositions(a),
            pos2 = getPositions(b);
        return comparePositions(pos1[0], pos2[0]) && comparePositions(pos1[1], pos2[1]);
    };
})();

function magnetDrop(e) {
    document.onmouseup = null;
    document.onmousemove = null;
    if (hit1.duration > 0 && !hit1.paused) {
        hit2.play();
    } else {
        hit1.play();
    }
    var elem = e.target,
        elems = document.getElementsByClassName('magnet'),
        elemList = Array.prototype.slice.call(elems),
        within = elemList.indexOf(elem),
        touching = [];
    if (within !== -1) {
        elemList.splice(within, 1);
    }
    for (var i = 0; i < elemList.length; i++) {
        if (detectOverlap(elem, elemList[i])) {
            elem.style.left = (parseInt(elemList[i].style.left.slice(0, -2)) + elemList[i].offsetWidth + 5) + "px";
            elem.style.top = elemList[i].style.top;
        }
    }
}

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
    elmnt.addEventListener('touchstart', function(event) {
        var touch = event.targetTouches[0];
        offsetX = touch.clientX - this.offsetLeft;
        offsetY = touch.clientY - this.offsetTop;

        for (var i = 0; i < document.getElementsByClassName("magnet").length; i++) {
            document.getElementsByClassName("magnet")[i].style.zIndex = 1;
        }
        this.style.zIndex = 10;
    }, {passive: true});
    elmnt.addEventListener('touchmove', function(event) {
        var touch = event.targetTouches[0];
        this.style.left = touch.clientX - offsetX + 'px';
        this.style.top = touch.clientY - offsetY + 'px';
        event.preventDefault();
    });
    elmnt.addEventListener("touchend", magnetDrop);

    function dragMouseDown(e) {
        for (var i = 0; i < document.getElementsByClassName("magnet").length; i++) {
            document.getElementsByClassName("magnet")[i].style.zIndex = 1;
        }
        this.style.zIndex = 10;

        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = magnetDrop;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
}