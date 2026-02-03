// Toggle menu function

// Toggle hamburger menu
function toggleMenu() {
    const links = document.getElementById("navLinks");
    if (links) {
        links.classList.toggle("active");
    }
}

// Function to load the external header and footer files
async function loadComponent(id, file) {
    const element = document.getElementById(id);
    if (!element) return; 

    try {
        // We use a relative path. 
        // If your HTML files are in the root, 'footer.html' is correct.
        const response = await fetch(file); 
        if (!response.ok) throw new Error(`Could not find ${file}`);
        
        const html = await response.text();
        element.innerHTML = html;
    } catch (error) {
        console.warn("Component load failed:", error);
    }
}

// Initialize on Load (tell browser to run these functions as soon as page opens)
window.addEventListener('DOMContentLoaded', () => {
    loadComponent('nav-placeholder', 'header.html');
    loadComponent('footer-placeholder', 'footer.html');
});