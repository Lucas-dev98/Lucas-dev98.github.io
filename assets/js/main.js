// ===== NAVEGAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  const navbarToggle = document.getElementById('navbar-toggle');
  const navbarMenu = document.getElementById('navbar-menu');
  const navbarItems = document.querySelectorAll('.navbar-item');

  // Toggle menu mobile
  navbarToggle.addEventListener('click', function() {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
  });

  // Fechar menu ao clicar em item (mobile)
  navbarItems.forEach(item => {
    item.addEventListener('click', () => {
      navbarToggle.classList.remove('active');
      navbarMenu.classList.remove('active');
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Active section highlight
  const sections = document.querySelectorAll('section[id]');
  
  function highlightActiveSection() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navbarItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('data-section') === sectionId) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightActiveSection);
  highlightActiveSection(); // Executar uma vez no carregamento
});

// ===== ANIMAÇÃO DE CONTAGEM =====
const metricValues = document.querySelectorAll('.metric-value');

const animateCount = () => {
  metricValues.forEach(metric => {
    const target = parseInt(metric.getAttribute('data-count'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const counter = setInterval(() => {
      current += step;
      if (current >= target) {
        clearInterval(counter);
        current = target;
      }
      metric.textContent = Math.floor(current);
    }, 16);
  });
};

// Disparar quando a seção estiver visível
const impactSection = document.querySelector('.impact-metrics');
if (impactSection) {
  new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateCount();
    }
  }).observe(impactSection);
}

// ===== ANIMAÇÕES DE SCROLL =====
function initScrollAnimations() {
  // Fallback: garantir que elementos sejam visíveis mesmo sem animação
  const allAnimateElements = document.querySelectorAll('.animate-on-scroll');
  
  // Timer de segurança - mostra elementos após 3 segundos se a animação falhar
  setTimeout(() => {
    allAnimateElements.forEach(el => {
      if (!el.classList.contains('animate')) {
        el.classList.add('animate');
      }
    });
  }, 3000);

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  // Observar elementos para animação
  allAnimateElements.forEach(el => observer.observe(el));
  
  // Mostrar elementos que já estão na viewport imediatamente
  allAnimateElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (isVisible) {
      el.classList.add('animate');
    }
  });

  // Animação específica para cards com delay
  const cards = document.querySelectorAll('.value-card, .project-card, .experience-card');
  cards.forEach((card, index) => {
    card.classList.add('animate-on-scroll');
    card.style.animationDelay = `${index * 0.1}s`;
  });

  // Animação para elementos de skills
  const skillCategories = document.querySelectorAll('.skill-category');
  skillCategories.forEach((category, index) => {
    category.classList.add('animate-on-scroll');
    category.style.animationDelay = `${index * 0.1}s`;
  });
}

// ===== EFEITOS DE HOVER AVANÇADOS =====
function initHoverEffects() {
  // Efeito parallax nos cards de projeto
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
  });

  // Efeito magnetic nos botões
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .contact-btn');
  
  buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translate(0px, 0px)';
    });
  });
}

// ===== EFEITOS DE CURSOR PERSONALIZADO =====
function initCustomCursor() {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  const cursorDot = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  document.body.appendChild(cursorDot);

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hover effects
  const hoverElements = document.querySelectorAll('a, button, .project-card, .value-card');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-hover');
    });
  });
}

// ===== LOADING ANIMATION =====
function initPageLoader() {
  const loader = document.createElement('div');
  loader.className = 'page-loader';
  loader.innerHTML = `
    <div class="loader-content">
      <div class="loader-text">Lucas Bastos</div>
      <div class="loader-progress"></div>
    </div>
  `;
  document.body.appendChild(loader);

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('loader-fade-out');
      setTimeout(() => {
        loader.remove();
      }, 500);
    }, 1000);
  });
}

// ===== OTIMIZAÇÕES DE PERFORMANCE =====
function initPerformanceOptimizations() {
  // Lazy loading avançado para imagens
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          img.classList.add('loaded');
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });

  // Preload de recursos importantes
  function preloadResource(url, type = 'image') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = type;
    document.head.appendChild(link);
  }

  // Preload das imagens dos projetos quando o usuário chegar próximo da seção
  const projectsSection = document.querySelector('#projects');
  if (projectsSection) {
    const projectsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const projectImages = [
          './projetos/AirQuality.png',
          './projetos/Spotify.jpg',
          './projetos/Pokemon.png',
          './projetos/XDevs.png',
          './projetos/FilhosDoLeao.png',
          './projetos/Vale.jpg'
        ];
        
        projectImages.forEach(img => preloadResource(img));
        projectsObserver.unobserve(projectsSection);
      }
    }, { rootMargin: '200px' });
    
    projectsObserver.observe(projectsSection);
  }

  // Otimização de scroll
  let isScrolling = false;
  window.addEventListener('scroll', () => {
    if (!isScrolling) {
      requestAnimationFrame(() => {
        // Suas funções de scroll aqui
        isScrolling = false;
      });
      isScrolling = true;
    }
  });
}

// ===== ACESSIBILIDADE =====
function initAccessibility() {
  // Detecção de preferência de movimento reduzido
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty('--animation-duration', '0s');
    document.body.classList.add('no-animations');
  }

  // Navegação por teclado melhorada
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });

  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
  });

  // Skip link para acessibilidade
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Pular para o conteúdo principal';
  skipLink.className = 'skip-link';
  document.body.insertBefore(skipLink, document.body.firstChild);
}

// ===== PWA SUPPORT =====
function initPWA() {
  // Service Worker registration
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  }

  // Install prompt
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Mostrar botão de instalação personalizado
    const installButton = document.createElement('button');
    installButton.textContent = 'Instalar App';
    installButton.className = 'install-button';
    installButton.addEventListener('click', () => {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        deferredPrompt = null;
        installButton.remove();
      });
    });
    
    document.body.appendChild(installButton);
  });
}

// ===== ANALYTICS E TRACKING =====
function initAnalytics() {
  // Tracking básico de eventos
  function trackEvent(category, action, label = null) {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label
      });
    }
  }

  // Track cliques em projetos
  document.querySelectorAll('.project-card').forEach((card, index) => {
    card.addEventListener('click', () => {
      trackEvent('Project', 'View', `Project ${index + 1}`);
    });
  });

  // Track cliques em contato
  document.querySelectorAll('.contact-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      trackEvent('Contact', 'Click', btn.textContent.trim());
    });
  });

  // Track tempo na página
  let startTime = Date.now();
  window.addEventListener('beforeunload', () => {
    const timeSpent = Date.now() - startTime;
    trackEvent('Engagement', 'Time on Page', Math.floor(timeSpent / 1000));
  });
}

// ===== SISTEMA DE TEMA =====
function initThemeSystem() {
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Definir tema inicial baseado na preferência do sistema ou localStorage
  const currentTheme = localStorage.getItem('theme') || 
    (prefersDarkScheme.matches ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  // Toggle de tema
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Animação suave na transição
      document.body.style.transition = 'all 0.3s ease';
      setTimeout(() => {
        document.body.style.transition = '';
      }, 300);
      
      // Analytics
      if (window.gtag) {
        window.gtag('event', 'theme_change', {
          event_category: 'UI',
          event_label: newTheme
        });
      }
    });
  }
  
  // Listener para mudanças na preferência do sistema
  prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  });
}

// ===== SISTEMA DE BLOG/ARTIGOS =====
function initBlogSystem() {
  let currentArticleId = null;

  function resolveArticle(articleId) {
    return window.getBlogArticle ? window.getBlogArticle(articleId) : null;
  }

  document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      const articleId = e.currentTarget.getAttribute('data-article');
      const article = resolveArticle(articleId);
      if (article) {
        currentArticleId = articleId;
        openArticleModal(article);
      }
    });
  });

  function openArticleModal(article) {
    const modal = document.getElementById('article-modal');
    document.getElementById('modal-category').textContent = article.category;
    document.getElementById('modal-title').textContent = article.title;
    document.getElementById('modal-date').textContent = article.date;
    document.getElementById('modal-reading-time').textContent = article.readingTime;
    document.getElementById('modal-tags').innerHTML = article.tags.map(tag =>
      `<span>${tag}</span>`
    ).join('');
    document.getElementById('modal-content').innerHTML = article.content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeArticleModal() {
    const modal = document.getElementById('article-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentArticleId = null;
  }

  document.getElementById('modal-close').addEventListener('click', closeArticleModal);
  document.getElementById('modal-close-btn').addEventListener('click', closeArticleModal);
  document.getElementById('modal-backdrop').addEventListener('click', closeArticleModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeArticleModal();
    }
  });

  document.addEventListener('portfolio-lang', () => {
    if (!currentArticleId) return;
    const article = resolveArticle(currentArticleId);
    if (article) openArticleModal(article);
  });

  document.querySelectorAll('.share-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const platform = e.target.closest('.share-btn').getAttribute('data-platform');
      const title = document.getElementById('modal-title').textContent;
      const url = window.location.href;
      let shareUrl = '';
      switch (platform) {
        case 'twitter':
          shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
          break;
        case 'linkedin':
          shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
          break;
        case 'whatsapp':
          shareUrl = `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`;
          break;
      }
      if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
      }
    });
  });
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
  // Garantir que elementos críticos sejam visíveis imediatamente
  const criticalElements = document.querySelectorAll('.animate-on-scroll');
  criticalElements.forEach(el => {
    // Elementos na viewport inicial devem aparecer imediatamente
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.top > -100) {
      el.classList.add('animate');
    }
  });
  
  initScrollAnimations();
  initHoverEffects();
  initCustomCursor();
  initPageLoader();
  initPerformanceOptimizations();
  initAccessibility();
  initPWA();
  initAnalytics();
  initThemeSystem();
  initBlogSystem();
  initGitHubStats();
});

function initGitHubStats() {
  const reposEl = document.getElementById('gh-repos');
  const followersEl = document.getElementById('gh-followers');
  const starsEl = document.getElementById('gh-stars');
  const langsEl = document.getElementById('gh-langs');
  if (!reposEl || !followersEl || !starsEl || !langsEl) return;

  const userUrl = 'https://api.github.com/users/Lucas-dev98';
  const reposUrl = 'https://api.github.com/users/Lucas-dev98/repos?per_page=100&sort=updated';

  Promise.all([
    fetch(userUrl).then((res) => (res.ok ? res.json() : Promise.reject(res))),
    fetch(reposUrl).then((res) => (res.ok ? res.json() : Promise.reject(res)))
  ])
    .then(([user, repos]) => {
      reposEl.textContent = user.public_repos ?? reposEl.textContent;
      followersEl.textContent = user.followers ?? followersEl.textContent;

      const stars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
      starsEl.textContent = String(stars);

      const counts = {};
      repos.forEach((repo) => {
        if (!repo.language || repo.fork) return;
        counts[repo.language] = (counts[repo.language] || 0) + 1;
      });

      const ranked = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5);
      if (!ranked.length) return;

      const max = ranked[0][1];
      langsEl.innerHTML = ranked
        .map(([name, count]) => {
          const width = Math.max(18, Math.round((count / max) * 100));
          return `<li><span>${name}</span><i style="width:${width}%"></i></li>`;
        })
        .join('');
    })
    .catch(() => {
      // Mantém os valores estáticos já renderizados no HTML.
    });
}

// Fallback adicional em caso de problemas com DOMContentLoaded
window.addEventListener('load', function() {
  setTimeout(() => {
    const hiddenElements = document.querySelectorAll('.animate-on-scroll:not(.animate)');
    hiddenElements.forEach(el => el.classList.add('animate'));
  }, 1000);
});