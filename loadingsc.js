document.addEventListener('DOMContentLoaded', function () {
    const NUM_PARTICLES = 50;
    const particles = document.querySelector('.particles');

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = `${Math.random() * 10}px`;
        particle.style.height = `${Math.random() * 10}px`;
        particle.style.left = `${Math.random() * window.innerWidth}px`;
        particle.style.top = `${Math.random() * window.innerHeight}px`;

        // Add animation for controlled movement
        const duration = 5000 + Math.random() * 5000;
        particle.style.transition = `transform ${duration}ms linear`;
        const xMovement = (Math.random() - 0.5) * 100;
        const yMovement = (Math.random() - 0.5) * 100;
        setTimeout(() => {
            particle.style.transform = `translate(${xMovement}px, ${yMovement}px)`;
        }, 0);

        particles.appendChild(particle);

        // Remove particle after animation 
        setTimeout(() => {
            particles.removeChild(particle);
        }, duration); // Match the animation duration
    }

    function generateParticles() {
        for (let i = 0; i < NUM_PARTICLES; i++) {
            createParticle();
        }
    }

    // Generate initial particles
    generateParticles();

    // Generate more particles every second 
    setInterval(generateParticles, 1000);

    // Set dark mode as the default
    document.body.classList.add('dark-mode');
    document.getElementById('dark-mode-slider').checked = true;

    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        document.getElementById('dark-mode-slider').checked = true;
    }
});

// Dark mode toggle function
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Toggle content visibility on entering site
function enterSite() {
    const content = document.querySelector('.content');
    const enterMessage = document.querySelector('#enter-message');
    content.style.display = 'flex';
    enterMessage.style.display = 'none';
}

// Event listener for click to enter
document.getElementById('enter-message').addEventListener('click', enterSite);

// Event listener for dark mode toggle
document.getElementById('dark-mode-slider').addEventListener('change', toggleDarkMode);
