function showSection(sectionId) {
    let sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    document.getElementById(sectionId).classList.remove('hidden');
}

// Show the summary section by default on page load
document.addEventListener("DOMContentLoaded", function() {
    showSection('summary');
});
