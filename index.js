// Scroll Animation
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.1, // Trigger when 10% of the section is visible
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});

// Modal Functionality
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("certificateModal");
    const modalImage = document.getElementById("certificateImage");
    const closeBtn = document.querySelector(".close");

    // Open modal when a card is clicked
    const cards = document.querySelectorAll("#internships .card");
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            const certificatePath = card.getAttribute("data-certificate");
            modalImage.src = certificatePath;
            modal.style.display = "flex";
        });
    });

    // Close modal when the close button is clicked
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const educationCards = document.querySelectorAll(".education-card");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const animationClass = entry.target.getAttribute("data-animation");
                    entry.target.classList.add("animate__animated", animationClass);
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        },
        { threshold: 0.3 } // Trigger animation when 30% of the element is visible
    );

    educationCards.forEach((card) => observer.observe(card));
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    // Toggle navigation menu
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    // Close menu when clicking a link
    navLinks.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            navLinks.classList.remove("show");
        }
    });
});
    const resumeButton = document.getElementById("resume");
    // Open Resume PDF in a new tab
    resumeButton.addEventListener("click", function () {
        window.open("varsh_resume.pdf", "_blank"); // Ensure "resume.pdf" is in the same folder
    });


    document.addEventListener("DOMContentLoaded", function () {
        const projectCards = document.querySelectorAll("#projects .card, #hobbies .card");
    
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const animationClass = entry.target.getAttribute("data-animation");
                        entry.target.classList.add("animate__animated", animationClass);
                        observer.unobserve(entry.target); // Stop observing after animation
                    }
                });
            },
            { threshold: 0.3 } // Trigger animation when 30% of the element is visible
        );
    
        projectCards.forEach((card) => observer.observe(card));
    });