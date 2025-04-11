/ Datos de los proyectos con emojis
const projects = [
    {
        title: "📋 Planificación Web",
        description: "📌 Gestor de tareas y proyectos con tablero Kanban, calendario y planificación visual. Ideal para organización personal y profesional.",
        image: "https://raw.githubusercontent.com/SircRehnas/Planificacion_Web/main/screenshot.jpg",
        tags: ["Web", "Productividad"],
        technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
        demoUrl: "https://sircrehnas.github.io/Planificacion_Web/",
        codeUrl: "https://github.com/SircRehnas/Planificacion_Web",
        status: "🛠️ En desarrollo",
        filter: "web"
    },
    {
        title: "📔 Diario Personal Web",
        description: "✨ Aplicación web completa para organizar tu vida con calendario, blogs, marcadores y notas adhesivas. Con autenticación y temas personalizables.",
        image: "https://raw.githubusercontent.com/SircRehnas/DiarioApp_Web/main/screenshot.jpg",
        tags: ["Web", "Organización"],
        technologies: ["HTML5", "CSS3", "JavaScript", "Font Awesome"],
        demoUrl: "https://sircrehnas.github.io/DiarioApp_Web/",
        codeUrl: "https://github.com/SircRehnas/DiarioApp_Web",
        status: "🛠️ En desarrollo",
        filter: "web"
    },
    {
        title: "🎫 TicketApp Android",
        description: "📱 Aplicación Android para gestión de tickets con OCR, geolocalización y registro digital de gastos. Desarrollada en Kotlin.",
        image: "https://raw.githubusercontent.com/SircRehnas/TicketApp_Android/main/screenshot.jpg",
        tags: ["Mobile", "Productividad"],
        technologies: ["Kotlin", "Android Studio", "OCR"],
        demoUrl: "#",
        codeUrl: "https://github.com/SircRehnas/TicketApp_Android",
        status: "🧪 Alpha",
        filter: "mobile"
    },
    {
        "title": "🎮 Laberinto de Monedas Unity",
        "description": "🕹️ Juego 3D de laberintos con enemigos, láseres y cubos magnéticos. Recolecta monedas y corazones en tres niveles de dificultad. ¡Supera el modo Difícil!",
        "image": "https://raw.githubusercontent.com/SircRehnas/LaberintoMonedas_Unity/main/Laberinto/Assets/Textures/android/mipmap-xxxhdpi/ic_launcher_laberintoCoins.png",
        "tags": ["3D", "Unity", "Juego"],
        "technologies": ["C#", "Unity 6", "Shader Graph"],
        "demoUrl": "#",
        "codeUrl": "https://github.com/SircRehnas/LaberintoMonedas_Unity",
        "status": "🛠️ En Desarrollo",
        "filter": "game"
    }
];


// Función para renderizar proyectos
function renderProjects(filter = "all") {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.filter === filter);
    
    filteredProjects.forEach((project, index) => {
        const projectEl = document.createElement('div');
        projectEl.className = 'project-card';
        projectEl.style.animationDelay = `${index * 0.1}s`;
        
        projectEl.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <span class="project-badge">${project.status}</span>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.demoUrl !== '#' ? `<a href="${project.demoUrl}" class="btn btn-primary" target="_blank">🌐 Demo</a>` : '<span></span>'}
                    <a href="${project.codeUrl}" class="btn btn-secondary" target="_blank">👨‍💻 Código</a>
                </div>
            </div>
        `;
        
        container.appendChild(projectEl);
    });
}

// Filtrado de proyectos
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.dataset.filter);
    });
});

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    
    // Animación para los elementos al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    // Revisar periódicamente para nuevos elementos
    setInterval(() => {
        document.querySelectorAll('.project-card').forEach(card => {
            observer.observe(card);
        });
    }, 500);
});
