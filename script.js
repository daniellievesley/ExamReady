const levelNames = {
    "a": "A Level",
    "gcse": "GCSE"
};

const boardNames={
    "ocr": "OCR",
    "aqa": "AQA",
    "edexcel": "Edexcel"
};

const subjects={
    "compsci": "Computer Science",
    "geog": "Geography",
    "maths": "Mathematics"
};

const params = new URLSearchParams(window.location.search);
const subject = params.get("subject");

const parts = subject.split('-');
const level = levelNames[parts[0]];
const board = boardNames[parts[1]];
const subjName = subjects[parts.slice(2).join(" ")];
document.getElementById("subject-title").innerHTML = level + " " + board + " " + subjName;

document.getElementById("record-paper").href =
    `record-paper.html?subject=${subject}`;