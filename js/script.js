document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("darkToggle");

    function updateIcon() {
        toggle.textContent = document.body.classList.contains("dark")
            ? "☀️"
            : "🌙";
    }

    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark");
    }

    updateIcon();

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        localStorage.setItem(
            "darkMode",
            document.body.classList.contains("dark")
        );
        updateIcon();
    });

    function checkQuiz() {
    const answers = {
        q1: "a",
        q2: "b",
        q3: "c",
        q4: "c",
        q5: "b"
    };

    let score = 0;
    let total = Object.keys(answers).length;

    for (let q in answers) {
        const user = document.querySelector(`input[name="${q}"]:checked`);
        if (user && user.value === answers[q]) {
            score++;
        }
    }

    const result = document.getElementById("quiz-result");

    let message = "";
    let emoji = "";

    if (score === total) {
        emoji = "🏆";
        message = "Perfetto! Hai una conoscenza eccellente di HTML.";
    } else if (score >= total * 0.7) {
        emoji = "👏";
        message = "Ottimo lavoro! Sei sulla strada giusta.";
    } else if (score >= total * 0.4) {
        emoji = "🙂";
        message = "Buon inizio, ma puoi migliorare.";
    } else {
        emoji = "📘";
        message = "Ti consiglio di ripassare le guide.";
    }

    result.innerHTML = `
        ${emoji} Hai risposto correttamente a <strong>${score}</strong> su <strong>${total}</strong>.<br>
        ${message}
    `;
}

});
