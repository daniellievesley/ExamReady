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

if (subject) {
    const parts = subject.split("-");
    const level = levelNames[parts[0]];
    const board = boardNames[parts[1]];
    const subjName = subjects[parts.slice(2).join(" ")];
    const subjectTitle = document.getElementById("subject-title");

    if (subjectTitle) {
        subjectTitle.textContent = `${level} ${board} ${subjName}`;
    }

    const recordPaperLink = document.getElementById("record-paper");

    if (recordPaperLink) {
        recordPaperLink.href = `record-paper.html?subject=${subject}`;
    }
}
