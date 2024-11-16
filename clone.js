// script.js

// Select all FAQ questions
const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;


        // Toggle the answer's maxHeight to show/hide it
        answer.style.maxHeight = answer.style.maxHeight ? null : `${answer.scrollHeight}px`;

        // Reset background color for all questions
        questions.forEach(q => {
            // If the question is the one clicked, change the background to blue
            if (q === question) {
                q.style.background = "#FA7116";
            } else {
                q.style.background = "#d7d7d7e9"; // Reset others to grey
            }

            // Close other open answers
            if (q !== question && q.nextElementSibling.style.maxHeight) {
                q.nextElementSibling.style.maxHeight = null;
            }
        });
    });
});
