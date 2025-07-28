const sentences = [
    "Always write clean, readable, and well-commented code to make future updates and team collaboration easier.",
    "Learn and follow semantic HTML to improve accessibility and SEO.",
    "Master responsive design so your websites look great on all screen sizes.",
    "Use version control like Git to track changes and collaborate effectively.",
    "Optimize website performance by minimizing assets, lazy-loading, and using efficient code.",
    "Stay updated with modern tools and frameworks to remain competitive in the industry.",
    "Prioritize user experience (UX) by making interfaces intuitive and accessible.",
    "Test your code across multiple browsers to ensure consistent behavior.",
    "Write secure code to prevent common vulnerabilities like XSS and SQL injection.",
    "Never stop learning, because web development is always evolving."
];

let sentenceIndex = 0;
let charIndex = 0;

function writeText() {
    const currentSentence = sentences[sentenceIndex];
    document.body.innerText = currentSentence.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentSentence.length) {
        // Pause before showing next sentence
        clearInterval(typing);
        setTimeout(() => {
            charIndex = 0;
            sentenceIndex = (sentenceIndex + 1) % sentences.length;
            typing = setInterval(writeText, 200);
        }, 2000); // 2-second pause at end of each sentence
    }
}

let typing = setInterval(writeText, 200);
