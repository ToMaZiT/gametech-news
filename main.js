const techNews = [
  {
    title: 'Apple anuncia su nuevo chip M4X',
    desc: 'La nueva arquitectura mejora un 40% el rendimiento gráfico en comparación con el M3...',
    link: 'noticias/noticia-m4x.html',
    image: 'images/Apple-M4-chip-badge-240507_big.jpg.large.jpg',
    date: '2025-05-22T09:00:00-03:00' // Hoy, hace 44 minutos
  },
  {
    title: 'Windows 12 se filtra con diseño renovado',
    desc: 'El nuevo sistema operativo trae funciones potenciadas por IA y un menú de inicio flotante...',
    link: 'noticias/noticia-windows12.html',
    image: 'images/requisitos-de-Windows-12.jpg',
    date: '2025-05-21T15:30:00-03:00' // Ayer, hace ~18 horas
  },
  {
    title: 'Samsung presenta pantalla OLED plegable de 8K',
    desc: 'La nueva tecnología permite resoluciones ultra altas en dispositivos compactos, ideal para tablets...',
    link: 'noticias/noticia-samsung-oled.html',
    image: 'images/samsung-oled.webp',
    date: '2025-05-20T10:00:00-03:00' // Hace 2 días
  },
  {
    title: 'Intel lanza procesadores Core Ultra 9',
    desc: 'Los nuevos chips prometen un salto en eficiencia energética y rendimiento para gaming y edición...',
    link: 'noticias/noticia-intel-core9.html',
    image: 'images/intel-core9.webp',
    date: '2025-05-19T14:20:00-03:00' // Hace 3 días
  },
  {
    title: 'Google anuncia Gemini 2.0 para IA generativa',
    desc: 'La nueva versión de su modelo de IA mejora la creación de contenido y la interacción en tiempo real...',
    link: 'noticias/noticia-gemini2.html',
    image: 'images/gemini2.png',
    date: '2025-05-18T09:00:00-03:00' // Hace 4 días
  },
  {
    title: 'NVIDIA RTX 5090: rumores de lanzamiento',
    desc: 'Filtraciones sugieren que la nueva GPU de NVIDIA podría llegar a finales de 2025 con soporte para 16K...',
    link: 'noticias/noticia-rtx5090.html',
    image: 'images/rtx5090.jpg',
    date: '2025-05-17T16:45:00-03:00' // Hace 5 días
  },
  {
    title: 'Microsoft integra Copilot en todas las apps de Office',
    desc: 'La IA de Microsoft ahora estará disponible en Word, Excel y PowerPoint para todos los usuarios...',
    link: 'noticias/noticia-copilot-office.html',
    image: 'images/copilot-office.jpg',
    date: '2025-05-16T11:10:00-03:00' // Hace 6 días
  }
];

const gamingNews = [
  {
    title: 'GTA VI confirmado para 2025',
    desc: 'Rockstar publicó un tráiler mostrando gameplay y confirmando su salida para consolas de nueva generación...',
    link: 'noticias/noticia-gta6.html',
    image: 'images/gta6.jpg',
    date: '2025-05-22T08:30:00-03:00' // Hoy, hace 1 hora y 14 minutos
  },
  {
    title: 'Steam lanza su evento de ofertas de invierno',
    desc: 'Con descuentos de hasta el 90%, los jugadores ya están aprovechando para ampliar su biblioteca...',
    link: 'noticias/noticia-steam-invierno.html',
    image: 'images/steam.jpg',
    date: '2025-05-21T12:00:00-03:00' // Ayer, hace ~22 horas
  },
  {
    title: 'Nintendo Switch 2: primeras especificaciones',
    desc: 'Se filtran detalles de la nueva consola de Nintendo, que incluirá soporte para 4K y retrocompatibilidad...',
    link: 'noticias/noticia-switch2.html',
    image: 'images/switch2.webp',
    date: '2025-05-20T09:15:00-03:00' // Hace 2 días
  },
  {
    title: 'Elden Ring 2 anunciado oficialmente',
    desc: 'FromSoftware confirma la secuela de su aclamado RPG, con un mundo aún más vasto y nuevas mecánicas...',
    link: 'noticias/noticia-eldenring2.html',
    image: 'images/eldenring2.jpg',
    date: '2025-05-19T17:00:00-03:00' // Hace 3 días
  },
  {
    title: 'PlayStation 6 podría llegar en 2027',
    desc: 'Sony comparte planes a largo plazo, incluyendo soporte para realidad virtual mejorada en su próxima consola...',
    link: 'noticias/noticia-ps6.html',
    image: 'images/ps6.jpg',
    date: '2025-05-18T13:25:00-03:00' // Hace 4 días
  },
  {
    title: 'Cyberpunk 2077 recibe expansión gratuita',
    desc: 'CD Projekt Red lanza una nueva expansión con misiones adicionales y mejoras en Night City...',
    link: 'noticias/noticia-cyberpunk-expansion.html',
    image: 'images/cyberpunk-expansion.jpg',
    date: '2025-05-17T10:30:00-03:00' // Hace 5 días
  },
  {
    title: 'Xbox Game Pass añade 20 títulos indie',
    desc: 'El servicio de suscripción de Microsoft amplía su catálogo con juegos independientes premiados...',
    link: 'noticias/noticia-gamepass-indie.html',
    image: 'images/gamepass-indie.png',
    date: '2025-05-16T08:00:00-03:00' // Hace 6 días
  }
];

// Función para calcular el tiempo transcurrido
const getTimeSince = (newsDate) => {
  const now = new Date('2025-05-22T09:44:00-03:00'); // Fecha actual
  const date = new Date(newsDate);
  const diffMs = now - date; // Diferencia en milisegundos

  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays > 0) {
    return `Hace ${diffDays} día${diffDays > 1 ? 's' : ''}`;
  } else if (diffHours > 0) {
    return `Hace ${diffHours} hora${diffHours > 1 ? 's' : ''}`;
  } else if (diffMinutes > 0) {
    return `Hace ${diffMinutes} minuto${diffMinutes > 1 ? 's' : ''}`;
  } else {
    return `Hace ${diffSeconds} segundo${diffSeconds !== 1 ? 's' : ''}`;
  }
};

const renderNews = (data, containerId) => {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  if (data.length === 0) {
    container.innerHTML = '<p>No se encontraron resultados.</p>';
    return;
  }
  data.forEach(news => {
    const timeSince = getTimeSince(news.date);
    container.innerHTML += `
      <article class="news-card">
        <img src="${news.image}" alt="${news.title}">
        <h3>${news.title}</h3>
        <p class="news-meta">${timeSince}</p>
        <p>${news.desc}</p>
        <a href="${news.link}">Leer más</a>
      </article>
    `;
  });
};

const filterNews = (query) => {
  const lower = query.toLowerCase();
  const filteredTech = techNews.filter(n => n.title.toLowerCase().includes(lower) || n.desc.toLowerCase().includes(lower));
  const filteredGaming = gamingNews.filter(n => n.title.toLowerCase().includes(lower) || n.desc.toLowerCase().includes(lower));
  renderNews(filteredTech, 'tech-news');
  renderNews(filteredGaming, 'gaming-news');
};

document.getElementById('search').addEventListener('input', (e) => {
  filterNews(e.target.value);
});

renderNews(techNews, 'tech-news');
renderNews(gamingNews, 'gaming-news');

// A PARTIR DE AQUÍ, SE ELIMINA EL PRIMER BLOQUE DE CÓDIGO DEL FORMULARIO
// document.getElementById('contact-form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const message = document.getElementById('message').value;
//   console.log({ name, email, message }); // Simula envío
//   alert('Mensaje enviado con éxito');
//   e.target.reset();
// });

document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  document.getElementById('theme-toggle').innerHTML = isLight ? `<i class="bi bi-moon"></i>` : `<i class="bi bi-moon-fill"></i>`;
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    document.getElementById('theme-toggle').textContent = 'Modo Oscuro';
  }
});


//form
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  fetch("https://formsubmit.co/ajax/rainbow85612@gmail.com", {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success === "true") {
      document.getElementById('success-message').style.display = 'block';
      form.reset();
    } else {
      alert("❌ Hubo un error al enviar el mensaje.");
    }
  })
  .catch(error => {
    console.error(error);
    alert("❌ Error inesperado. Intentalo más tarde.");
  });
});