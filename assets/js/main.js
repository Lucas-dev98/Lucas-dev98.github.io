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
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  animateElements.forEach(el => observer.observe(el));

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
  // Dados dos artigos com conteúdo completo
  const articles = {
    'clean-architecture': {
      category: 'Desenvolvimento',
      title: 'Implementando Clean Architecture em React',
      date: '2025',
      readingTime: '5 min de leitura',
      tags: ['React', 'Clean Code', 'Arquitetura'],
      content: `
        <p>A Clean Architecture, proposta por Robert C. Martin (Uncle Bob), é um padrão arquitetural que visa criar sistemas mais organizados, testáveis e independentes de frameworks.</p>

        <h2>Por que Clean Architecture em React?</h2>
        <p>Aplicações React tendem a crescer rapidamente em complexidade. Sem uma arquitetura sólida, é comum encontrarmos:</p>
        <ul>
          <li>Componentes com muitas responsabilidades</li>
          <li>Lógica de negócio misturada com apresentação</li>
          <li>Dificuldade para testar funcionalidades</li>
          <li>Acoplamento forte entre camadas</li>
        </ul>

        <h2>Estrutura das Camadas</h2>
        <h3>1. Entities (Entidades)</h3>
        <p>São os objetos de negócio da aplicação. Contêm as regras de negócio mais críticas e são independentes de qualquer framework.</p>
        <pre><code>// entities/User.js
export class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  isValid() {
    return this.name && this.email && this.email.includes('@');
  }
}</code></pre>

        <h3>2. Use Cases (Casos de Uso)</h3>
        <p>Contêm as regras de negócio específicas da aplicação. Orquestram o fluxo de dados entre entidades e interfaces.</p>
        <pre><code>// usecases/CreateUser.js
export class CreateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(userData) {
    const user = new User(null, userData.name, userData.email);
    
    if (!user.isValid()) {
      throw new Error('Dados inválidos');
    }

    return await this.userRepository.save(user);
  }
}</code></pre>

        <h3>3. Interface Adapters</h3>
        <p>Convertem dados entre casos de uso e interfaces externas (UI, banco de dados, APIs).</p>
        <pre><code>// adapters/UserController.js
export class UserController {
  constructor(createUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  async handleCreateUser(request) {
    try {
      const user = await this.createUserUseCase.execute(request.body);
      return { status: 201, data: user };
    } catch (error) {
      return { status: 400, error: error.message };
    }
  }
}</code></pre>

        <h2>Implementação em React</h2>
        <p>Para implementar essa arquitetura em React, criamos uma estrutura de pastas clara:</p>
        <pre><code>src/
├── entities/
├── usecases/
├── adapters/
│   ├── controllers/
│   ├── presenters/
│   └── repositories/
├── frameworks/
│   ├── web/
│   │   ├── components/
│   │   ├── pages/
│   │   └── hooks/
│   └── api/
└── main.js</code></pre>

        <h2>Benefícios Práticos</h2>
        <ul>
          <li><strong>Testabilidade:</strong> Cada camada pode ser testada independentemente</li>
          <li><strong>Manutenibilidade:</strong> Mudanças em uma camada não afetam outras</li>
          <li><strong>Flexibilidade:</strong> Fácil troca de frameworks ou bibliotecas</li>
          <li><strong>Escalabilidade:</strong> Estrutura que suporta crescimento da aplicação</li>
        </ul>

        <p>A implementação da Clean Architecture em React requer um investimento inicial maior, mas os benefícios a longo prazo são significativos, especialmente em aplicações complexas.</p>
      `
    },
    
    'nodejs-performance': {
      category: 'Performance',
      title: 'Otimização de Performance em Node.js',
      date: '2025',
      readingTime: '7 min de leitura',
      tags: ['Node.js', 'Performance', 'Backend'],
      content: `
        <p>Node.js é conhecido por sua eficiência, mas como qualquer tecnologia, pode ter gargalos de performance. Vamos explorar técnicas avançadas para otimização.</p>

        <h2>1. Profiling e Monitoramento</h2>
        <p>Antes de otimizar, é essencial identificar os gargalos:</p>
        <pre><code>// Usando o built-in profiler
node --prof app.js

// Analisando o resultado
node --prof-process isolate-0x*.log > processed.txt</code></pre>

        <h3>Ferramentas de Monitoramento</h3>
        <ul>
          <li><strong>Clinic.js:</strong> Suite completa de ferramentas de performance</li>
          <li><strong>0x:</strong> Profiler visual para Node.js</li>
          <li><strong>New Relic/DataDog:</strong> Monitoramento em produção</li>
        </ul>

        <h2>2. Otimização de Memory Management</h2>
        <p>Gerenciamento eficiente de memória é crucial para performance:</p>
        
        <h3>Evitar Memory Leaks</h3>
        <pre><code>// ❌ Problemático - Event listener não removido
function problematicoEventListener() {
  const data = new Array(1000000).fill('data');
  process.on('exit', () => {
    console.log('Process ending');
  });
}

// ✅ Correto - Cleanup adequado
function correctoEventListener() {
  const data = new Array(1000000).fill('data');
  
  const exitHandler = () => {
    console.log('Process ending');
  };
  
  process.once('exit', exitHandler);
  
  // Cleanup quando necessário
  setTimeout(() => {
    process.removeListener('exit', exitHandler);
  }, 1000);
}</code></pre>

        <h3>Object Pooling</h3>
        <pre><code>// Pool de objetos para evitar garbage collection excessivo
class ObjectPool {
  constructor(createFn, resetFn, maxSize = 100) {
    this.createFn = createFn;
    this.resetFn = resetFn;
    this.maxSize = maxSize;
    this.pool = [];
  }

  acquire() {
    if (this.pool.length > 0) {
      return this.pool.pop();
    }
    return this.createFn();
  }

  release(obj) {
    if (this.pool.length < this.maxSize) {
      this.resetFn(obj);
      this.pool.push(obj);
    }
  }
}</code></pre>

        <h2>3. Clustering e Worker Threads</h2>
        <p>Aproveitar múltiplos cores do processador:</p>
        
        <h3>Cluster Module</h3>
        <pre><code>const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(\`Master \${process.pid} is running\`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(\`Worker \${worker.process.pid} died\`);
    cluster.fork(); // Restart worker
  });
} else {
  // Worker process
  require('./app.js');
}</code></pre>

        <h2>4. Otimização de I/O</h2>
        <h3>Connection Pooling</h3>
        <pre><code>// Pool de conexões para database
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'mydb',
  connectionLimit: 10,
  queueLimit: 0,
  acquireTimeout: 60000,
  reconnect: true
});

// Uso eficiente do pool
async function queryWithPool(sql, params) {
  return new Promise((resolve, reject) => {
    pool.execute(sql, params, (error, results) => {
      if (error) reject(error);
      else resolve(results);
    });
  });
}</code></pre>

        <h2>5. Caching Strategies</h2>
        <pre><code>const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 600 }); // 10 minutos TTL

// Cache wrapper
function withCache(key, fn, ttl = 600) {
  return async (...args) => {
    const cachedResult = cache.get(key);
    if (cachedResult) {
      return cachedResult;
    }

    const result = await fn(...args);
    cache.set(key, result, ttl);
    return result;
  };
}</code></pre>

        <h2>6. Benchmarking</h2>
        <p>Sempre meça o impacto das otimizações:</p>
        <pre><code>const { performance } = require('perf_hooks');

function benchmark(fn, name = 'Function') {
  return async (...args) => {
    const start = performance.now();
    const result = await fn(...args);
    const end = performance.now();
    
    console.log(\`\${name} took \${end - start} milliseconds\`);
    return result;
  };
}</code></pre>

        <h2>Conclusão</h2>
        <p>Otimização de performance em Node.js é um processo contínuo que envolve:</p>
        <ul>
          <li>Monitoramento constante</li>
          <li>Identificação de gargalos</li>
          <li>Aplicação de técnicas específicas</li>
          <li>Medição do impacto</li>
        </ul>
        
        <p>Lembre-se: otimize com base em dados reais, não em suposições!</p>
      `
    },

    'cicd-azure': {
      category: 'DevOps',
      title: 'CI/CD com GitHub Actions e Azure',
      date: '2024',
      readingTime: '8 min de leitura',
      tags: ['DevOps', 'Azure', 'CI/CD'],
      content: `
        <p>Configurar pipelines robustos de CI/CD é essencial para desenvolvimento moderno. Vamos explorar como implementar isso usando GitHub Actions e Azure.</p>

        <h2>Configuração Inicial</h2>
        <p>Primeiro, vamos configurar o workflow básico no GitHub Actions:</p>
        
        <pre><code># .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

env:
  AZURE_WEBAPP_NAME: my-app
  AZURE_WEBAPP_PACKAGE_PATH: '.'
  NODE_VERSION: '18.x'</code></pre>

        <h2>Stage 1: Continuous Integration</h2>
        <h3>Build e Testes</h3>
        <pre><code>jobs:
  build-and-test:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout código
      uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: \${{ env.NODE_VERSION }}
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Run linting
      run: npm run lint

    - name: Run tests
      run: npm run test:coverage

    - name: Upload coverage reports
      uses: codecov/codecov-action@v3
      with:
        file: ./coverage/lcov.info

    - name: Build aplicação
      run: npm run build</code></pre>

        <h3>Security Scanning</h3>
        <pre><code>    - name: Run security audit
      run: npm audit --audit-level high

    - name: SAST com CodeQL
      uses: github/codeql-action/init@v2
      with:
        languages: javascript

    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze@v2</code></pre>

        <h2>Stage 2: Continuous Deployment</h2>
        <h3>Deploy para Staging</h3>
        <pre><code>  deploy-staging:
    needs: build-and-test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/develop'
    
    environment:
      name: staging
      url: https://\${{ env.AZURE_WEBAPP_NAME }}-staging.azurewebsites.net
    
    steps:
    - name: Download artifacts
      uses: actions/download-artifact@v3
      with:
        name: build-files

    - name: Deploy to Azure Web App (Staging)
      uses: azure/webapps-deploy@v2
      with:
        app-name: \${{ env.AZURE_WEBAPP_NAME }}
        slot-name: staging
        publish-profile: \${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE_STAGING }}
        package: \${{ env.AZURE_WEBAPP_PACKAGE_PATH }}</code></pre>

        <h3>Testes de Integração</h3>
        <pre><code>    - name: Run integration tests
      run: |
        npm install -g newman
        newman run ./tests/postman-collection.json \
          --environment ./tests/staging-environment.json \
          --reporters cli,json \
          --reporter-json-export results.json

    - name: Performance tests
      uses: loadimpact/k6-action@v0.2.1
      with:
        filename: ./tests/performance.js</code></pre>

        <h2>Stage 3: Production Deployment</h2>
        <pre><code>  deploy-production:
    needs: [build-and-test, deploy-staging]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    environment:
      name: production
      url: https://\${{ env.AZURE_WEBAPP_NAME }}.azurewebsites.net
    
    steps:
    - name: Deploy to Azure Web App (Production)
      uses: azure/webapps-deploy@v2
      with:
        app-name: \${{ env.AZURE_WEBAPP_NAME }}
        publish-profile: \${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
        package: \${{ env.AZURE_WEBAPP_PACKAGE_PATH }}

    - name: Swap staging to production
      uses: azure/CLI@v1
      with:
        inlineScript: |
          az webapp deployment slot swap \
            --name \${{ env.AZURE_WEBAPP_NAME }} \
            --resource-group \${{ secrets.AZURE_RESOURCE_GROUP }} \
            --slot staging \
            --target-slot production</code></pre>

        <h2>Monitoramento e Rollback</h2>
        <h3>Health Check</h3>
        <pre><code>    - name: Health check
      run: |
        for i in {1..5}; do
          response=\$(curl -s -o /dev/null -w "%{http_code}" https://\${{ env.AZURE_WEBAPP_NAME }}.azurewebsites.net/health)
          if [ \$response -eq 200 ]; then
            echo "Health check passed"
            exit 0
          fi
          echo "Attempt \$i failed, retrying..."
          sleep 10
        done
        echo "Health check failed"
        exit 1</code></pre>

        <h3>Rollback Automático</h3>
        <pre><code>    - name: Rollback on failure
      if: failure()
      uses: azure/CLI@v1
      with:
        inlineScript: |
          echo "Rolling back deployment..."
          az webapp deployment slot swap \
            --name \${{ env.AZURE_WEBAPP_NAME }} \
            --resource-group \${{ secrets.AZURE_RESOURCE_GROUP }} \
            --slot production \
            --target-slot staging</code></pre>

        <h2>Configuração do Azure</h2>
        <h3>Resource Group e App Service</h3>
        <pre><code># Azure CLI commands
az group create --name myResourceGroup --location "East US"

az appservice plan create \
  --name myAppServicePlan \
  --resource-group myResourceGroup \
  --sku B1 \
  --is-linux

az webapp create \
  --resource-group myResourceGroup \
  --plan myAppServicePlan \
  --name my-app \
  --runtime "NODE|18-lts"

# Criar slot de staging
az webapp deployment slot create \
  --name my-app \
  --resource-group myResourceGroup \
  --slot staging</code></pre>

        <h2>Secrets e Configuração</h2>
        <p>Configure os seguintes secrets no GitHub:</p>
        <ul>
          <li><code>AZURE_WEBAPP_PUBLISH_PROFILE</code></li>
          <li><code>AZURE_WEBAPP_PUBLISH_PROFILE_STAGING</code></li>
          <li><code>AZURE_RESOURCE_GROUP</code></li>
          <li><code>AZURE_CLIENT_ID</code></li>
          <li><code>AZURE_CLIENT_SECRET</code></li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li><strong>Ambientes isolados:</strong> Staging deve ser idêntico à produção</li>
          <li><strong>Testes automatizados:</strong> Cobertura mínima de 80%</li>
          <li><strong>Blue-Green deployment:</strong> Zero downtime</li>
          <li><strong>Monitoring:</strong> Logs e métricas em tempo real</li>
          <li><strong>Rollback strategy:</strong> Plano de contingência automático</li>
        </ul>

        <p>Esta configuração garante deploys seguros, testados e com capacidade de rollback automático em caso de falhas.</p>
      `
    },

    'powerbi-vale': {
      category: 'Data Analysis',
      title: 'Power BI na Indústria: Case Vale S.A.',
      date: '2024',
      readingTime: '6 min de leitura',
      tags: ['Power BI', 'Data Analysis', 'Indústria'],
      content: `
        <p>Durante minha experiência na Vale S.A., implementei dashboards para análise de paradas industriais que revolucionaram o processo de tomada de decisão operacional.</p>

        <h2>O Desafio</h2>
        <p>A Vale enfrentava dificuldades para:</p>
        <ul>
          <li>Identificar rapidamente causas de paradas não programadas</li>
          <li>Analisar patterns de falhas em equipamentos críticos</li>
          <li>Otimizar cronogramas de manutenção preventiva</li>
          <li>Reduzir tempo médio de reparo (MTTR)</li>
        </ul>

        <h2>Arquitetura da Solução</h2>
        <h3>1. Coleta de Dados</h3>
        <p>Integramos múltiplas fontes de dados:</p>
        <pre><code>// Conexão com sistemas SAP via API
let
    Source = Web.Contents("https://sap-api.vale.com/maintenance",
    [
        Headers = [
            #"Authorization" = "Bearer " & AccessToken,
            #"Content-Type" = "application/json"
        ]
    ]),
    JsonData = Json.Document(Source)
in
    JsonData</code></pre>

        <h3>2. Modelagem de Dados</h3>
        <p>Criamos um modelo dimensional otimizado:</p>
        <ul>
          <li><strong>Fato:</strong> Paradas (duração, custo, impacto)</li>
          <li><strong>Dimensões:</strong> Tempo, Equipamento, Local, Tipo de Falha</li>
          <li><strong>Medidas calculadas:</strong> MTTR, MTBF, Disponibilidade</li>
        </ul>

        <h3>Medidas DAX Principais</h3>
        <pre><code>// MTTR (Mean Time To Repair)
MTTR = 
DIVIDE(
    SUM('Paradas'[Duração_Minutos]),
    COUNTROWS('Paradas'),
    0
)

// Disponibilidade do Equipamento
Disponibilidade = 
VAR TotalHoras = 24 * 365
VAR HorasParada = SUM('Paradas'[Duração_Horas])
RETURN
DIVIDE(TotalHoras - HorasParada, TotalHoras, 0)

// Custo por Hora de Parada
Custo_Hora_Parada = 
DIVIDE(
    SUM('Paradas'[Custo_Total]),
    SUM('Paradas'[Duração_Horas]),
    0
)</code></pre>

        <h2>Dashboard Principal: Visão Executiva</h2>
        <p>O dashboard executivo incluía:</p>
        
        <h3>KPIs Principais</h3>
        <ul>
          <li>Disponibilidade geral da planta: 87.3%</li>
          <li>MTTR médio: 4.2 horas</li>
          <li>Custo total de paradas: R$ 2.4M/mês</li>
          <li>Top 5 equipamentos críticos</li>
        </ul>

        <h3>Visualizações Implementadas</h3>
        <ul>
          <li><strong>Waterfall Chart:</strong> Impacto de cada tipo de parada</li>
          <li><strong>Heatmap:</strong> Paradas por hora/dia da semana</li>
          <li><strong>Pareto:</strong> 80/20 de equipamentos vs. tempo parado</li>
          <li><strong>Timeline:</strong> Duração e sobreposição de paradas</li>
        </ul>

        <h2>Dashboard Operacional</h2>
        <h3>Análise de Tendências</h3>
        <pre><code>// Tendência de Paradas (DAX)
Tendencia_Paradas = 
VAR CurrentMonth = MAX('Calendar'[Month])
VAR PreviousMonth = CurrentMonth - 1
VAR CurrentValue = CALCULATE(
    COUNT('Paradas'[ID]),
    'Calendar'[Month] = CurrentMonth
)
VAR PreviousValue = CALCULATE(
    COUNT('Paradas'[ID]),
    'Calendar'[Month] = PreviousMonth
)
RETURN
IF(
    PreviousValue > 0,
    (CurrentValue - PreviousValue) / PreviousValue,
    0
)</code></pre>

        <h3>Alertas Automáticos</h3>
        <p>Configuramos alertas para:</p>
        <ul>
          <li>MTTR acima de 6 horas</li>
          <li>Disponibilidade abaixo de 85%</li>
          <li>Paradas recorrentes no mesmo equipamento</li>
          <li>Custos de manutenção acima do orçado</li>
        </ul>

        <h2>Impactos Mensurados</h2>
        <h3>Resultados Quantitativos</h3>
        <ul>
          <li><strong>30% redução</strong> no tempo de identificação de problemas</li>
          <li><strong>15% melhoria</strong> na disponibilidade dos equipamentos</li>
          <li><strong>R$ 1.2M economia</strong> anual em custos de manutenção</li>
          <li><strong>45% redução</strong> no MTTR médio</li>
        </ul>

        <h3>Benefícios Qualitativos</h3>
        <ul>
          <li>Tomada de decisão baseada em dados</li>
          <li>Manutenção preditiva mais eficaz</li>
          <li>Padronização de processos</li>
          <li>Cultura data-driven disseminada</li>
        </ul>

        <h2>Lições Aprendidas</h2>
        <h3>Challenges Técnicos</h3>
        <ul>
          <li><strong>Qualidade dos dados:</strong> Necessário ETL robusto</li>
          <li><strong>Performance:</strong> Otimização de consultas DAX</li>
          <li><strong>Integração:</strong> APIs legadas com limitações</li>
        </ul>

        <h3>Soluções Implementadas</h3>
        <pre><code>// Otimização de performance - Variáveis
MTBF_Otimizado = 
VAR EquipamentoAtual = SELECTEDVALUE('Equipamento'[ID])
VAR FalhasEquipamento = CALCULATE(
    COUNTROWS('Paradas'),
    'Equipamento'[ID] = EquipamentoAtual
)
VAR PeriodoOperacao = DATEDIFF(
    MIN('Calendar'[Date]),
    MAX('Calendar'[Date]),
    HOUR
)
RETURN
DIVIDE(PeriodoOperacao, FalhasEquipamento, 0)</code></pre>

        <h2>Conclusão</h2>
        <p>A implementação do Power BI na Vale demonstrou como analytics pode transformar operações industriais. A chave foi:</p>
        <ul>
          <li>Entender profundamente o negócio</li>
          <li>Integrar dados de múltiplas fontes</li>
          <li>Criar visualizações acionáveis</li>
          <li>Estabelecer cultura data-driven</li>
        </ul>

        <p>O projeto serviu como modelo para outras plantas da Vale, expandindo o impacto para toda a organização.</p>
      `
    },

    'async-promises': {
      category: 'JavaScript',
      title: 'Async/Await vs Promises: Quando usar cada um',
      date: '2024',
      readingTime: '4 min de leitura',
      tags: ['JavaScript', 'Async Programming', 'Best Practices'],
      content: `
        <p>A programação assíncrona em JavaScript evoluiu significativamente. Vamos explorar quando usar Promises, async/await, e as melhores práticas para cada cenário.</p>

        <h2>Promises: A Base</h2>
        <p>Promises resolveram o problema do "callback hell", oferecendo uma sintaxe mais limpa:</p>
        
        <pre><code>// Promise básica
function fetchUserData(userId) {
  return fetch(\`/api/users/\${userId}\`)
    .then(response => {
      if (!response.ok) {
        throw new Error('User not found');
      }
      return response.json();
    })
    .then(user => {
      console.log('User loaded:', user);
      return user;
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
}</code></pre>

        <h2>Async/Await: Sintaxe Simplificada</h2>
        <p>Async/await torna o código assíncrono mais legível:</p>
        
        <pre><code>// Mesma função com async/await
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error('User not found');
    }
    
    const user = await response.json();
    console.log('User loaded:', user);
    return user;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}</code></pre>

        <h2>Quando Usar Promises</h2>
        <h3>1. Operações Paralelas</h3>
        <pre><code>// ✅ Promise.all para operações paralelas
function loadDashboardData() {
  return Promise.all([
    fetch('/api/users'),
    fetch('/api/orders'),
    fetch('/api/products')
  ]).then(responses => {
    return Promise.all(responses.map(r => r.json()));
  });
}

// ❌ Async/await sequencial (mais lento)
async function loadDashboardDataSlow() {
  const users = await fetch('/api/users').then(r => r.json());
  const orders = await fetch('/api/orders').then(r => r.json());
  const products = await fetch('/api/products').then(r => r.json());
  return { users, orders, products };
}</code></pre>

        <h3>2. Pipelines de Transformação</h3>
        <pre><code>// Promise chains para pipelines
function processData(input) {
  return validateInput(input)
    .then(transformData)
    .then(enrichData)
    .then(saveToDatabase)
    .then(sendNotification)
    .catch(handleError);
}</code></pre>

        <h2>Quando Usar Async/Await</h2>
        <h3>1. Lógica Complexa com Condicionais</h3>
        <pre><code>async function processUser(userId) {
  try {
    const user = await fetchUser(userId);
    
    if (user.isPremium) {
      const premiumFeatures = await loadPremiumFeatures();
      user.features = premiumFeatures;
    }
    
    if (user.needsVerification) {
      await sendVerificationEmail(user.email);
    }
    
    return await saveUser(user);
  } catch (error) {
    await logError(error);
    throw error;
  }
}</code></pre>

        <h3>2. Loops com Operações Assíncronas</h3>
        <pre><code>// Processamento sequencial
async function processUsersSequentially(userIds) {
  const results = [];
  
  for (const userId of userIds) {
    const result = await processUser(userId);
    results.push(result);
  }
  
  return results;
}

// Processamento paralelo limitado
async function processUsersBatch(userIds, batchSize = 5) {
  const results = [];
  
  for (let i = 0; i < userIds.length; i += batchSize) {
    const batch = userIds.slice(i, i + batchSize);
    const batchResults = await Promise.all(
      batch.map(id => processUser(id))
    );
    results.push(...batchResults);
  }
  
  return results;
}</code></pre>

        <h2>Combinando Ambas as Abordagens</h2>
        <h3>Padrão Híbrido</h3>
        <pre><code>class DataService {
  async loadUserProfile(userId) {
    try {
      // Carregar dados básicos primeiro
      const user = await this.fetchUser(userId);
      
      // Carregar dados complementares em paralelo
      const [preferences, activity, notifications] = await Promise.all([
        this.fetchUserPreferences(userId),
        this.fetchUserActivity(userId),
        this.fetchUserNotifications(userId)
      ]);
      
      return {
        ...user,
        preferences,
        activity,
        notifications
      };
    } catch (error) {
      throw new Error(\`Failed to load profile: \${error.message}\`);
    }
  }
}</code></pre>

        <h2>Tratamento de Erros Avançado</h2>
        <h3>Promise.allSettled para Tolerância a Falhas</h3>
        <pre><code>async function loadDashboardWithFallbacks() {
  const operations = [
    fetch('/api/critical-data'),
    fetch('/api/optional-data1'),
    fetch('/api/optional-data2')
  ];
  
  const results = await Promise.allSettled(operations);
  
  const dashboard = {
    critical: null,
    optional1: null,
    optional2: null
  };
  
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      const key = ['critical', 'optional1', 'optional2'][index];
      dashboard[key] = result.value;
    } else {
      console.warn(\`Operation \${index} failed:\`, result.reason);
    }
  });
  
  if (!dashboard.critical) {
    throw new Error('Critical data unavailable');
  }
  
  return dashboard;
}</code></pre>

        <h2>Performance e Best Practices</h2>
        <h3>1. Evite Await Desnecessário</h3>
        <pre><code>// ❌ Await desnecessário
async function badExample() {
  return await someAsyncOperation();
}

// ✅ Retorne a Promise diretamente
function goodExample() {
  return someAsyncOperation();
}</code></pre>

        <h3>2. Use Promise.race para Timeouts</h3>
        <pre><code>function withTimeout(promise, timeoutMs) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Timeout')), timeoutMs);
  });
  
  return Promise.race([promise, timeout]);
}

// Uso
const result = await withTimeout(
  fetch('/api/slow-endpoint'),
  5000
);</code></pre>

        <h2>Conclusão</h2>
        <p>A escolha entre Promises e async/await depende do contexto:</p>
        <ul>
          <li><strong>Use Promises para:</strong> Operações paralelas, pipelines, functional programming</li>
          <li><strong>Use async/await para:</strong> Lógica complexa, loops, código procedural</li>
          <li><strong>Combine ambos:</strong> Para máxima flexibilidade e performance</li>
        </ul>
        
        <p>O importante é entender os prós e contras de cada abordagem e escolher a ferramenta certa para cada situação.</p>
      `
    },

    'carreira-tech': {
      category: 'Carreira',
      title: 'Transição de Carreira para Tech: Minha Jornada',
      date: '2024',
      readingTime: '10 min de leitura',
      tags: ['Carreira', 'Tecnologia', 'Desenvolvimento Pessoal'],
      content: `
        <p>Minha transição para a área de tecnologia não foi linear nem fácil. Compartilho aqui os desafios, aprendizados e estratégias que me ajudaram nessa jornada transformadora.</p>

        <h2>O Ponto de Partida</h2>
        <p>Antes de entrar na tech, trabalhei em diferentes áreas que, na época, pareciam completamente desconectadas da programação. No entanto, hoje percebo como cada experiência contribuiu para minha formação como desenvolvedor:</p>

        <ul>
          <li><strong>Resolução de problemas:</strong> Cada desafio anterior me ensinou a quebrar problemas complexos em partes menores</li>
          <li><strong>Comunicação:</strong> Trabalhar com diferentes equipes me preparou para colaborar com stakeholders técnicos e não-técnicos</li>
          <li><strong>Gestão de projetos:</strong> Experiência com prazos e entregas se traduz diretamente para desenvolvimento de software</li>
        </ul>

        <h2>A Decisão de Mudar</h2>
        <p>A motivação veio da percepção de que a tecnologia era o futuro e eu queria ser parte ativa dessa transformação. O momento decisivo foi quando percebi que:</p>

        <blockquote>
          <p>"A programação combina criatividade, lógica e impacto social de uma forma que nenhuma outra profissão oferece."</p>
        </blockquote>

        <h2>O Plano de Transição</h2>
        <h3>Fase 1: Fundamentos (6 meses)</h3>
        <p>Comecei com o básico, dedicando 2-3 horas diárias:</p>
        
        <pre><code>// Meu primeiro "Hello World" em JavaScript
function primeiroCodigo() {
  console.log("Hello, World!");
  console.log("Esse é o início de uma nova jornada!");
}

primeiroCodigo();</code></pre>

        <p><strong>Recursos utilizados:</strong></p>
        <ul>
          <li>FreeCodeCamp para estrutura curricular</li>
          <li>YouTube para conceitos visuais</li>
          <li>MDN Web Docs para referência técnica</li>
          <li>GitHub para versionamento desde o dia 1</li>
        </ul>

        <h3>Fase 2: Projetos Práticos (6 meses)</h3>
        <p>Teoria sem prática é inútil. Comecei a construir projetos reais:</p>

        <h4>Projeto 1: Todo List</h4>
        <p>Parece simples, mas ensina fundamentos cruciais:</p>
        <pre><code>// Evoluindo do básico para conceitos avançados
class TodoApp {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    this.render();
  }

  addTodo(text) {
    const todo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date()
    };
    
    this.todos.push(todo);
    this.saveAndRender();
  }

  saveAndRender() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.render();
  }
}</code></pre>

        <h4>Projeto 2: Weather App (API Integration)</h4>
        <p>Primeiro contato com APIs e programação assíncrona:</p>
        <pre><code>async function getWeatherData(city) {
  try {
    const response = await fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${API_KEY}\`);
    
    if (!response.ok) {
      throw new Error('Cidade não encontrada');
    }
    
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    showError(error.message);
  }
}</code></pre>

        <h3>Fase 3: Especialização (12 meses)</h3>
        <p>Escolhi React como framework principal e mergulhei fundo:</p>

        <pre><code>// Evoluindo para componentes mais complexos
import React, { useState, useEffect, useCallback } from 'react';

const UserDashboard = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(\`/api/users/\${userId}\`);
      const userData = await response.json();
      setUser(userData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!user) return <UserNotFound />;

  return (
    <div className="dashboard">
      <UserProfile user={user} />
      <UserStats userId={userId} />
      <RecentActivity userId={userId} />
    </div>
  );
};</code></pre>

        <h2>Os Maiores Desafios</h2>
        <h3>1. Síndrome do Impostor</h3>
        <p>O sentimento constante de "não saber o suficiente" foi devastador inicialmente. A solução foi:</p>
        <ul>
          <li>Aceitar que é um processo contínuo de aprendizado</li>
          <li>Focar no progresso, não na perfeição</li>
          <li>Comparar-se apenas com o "eu" do passado</li>
        </ul>

        <h3>2. Velocidade de Mudança</h3>
        <p>A tecnologia muda rapidamente. A estratégia foi:</p>
        <ul>
          <li>Focar em fundamentos sólidos</li>
          <li>Aprender a aprender eficientemente</li>
          <li>Não se deixar levar pelo hype de cada nova tecnologia</li>
        </ul>

        <h3>3. Primeiro Emprego</h3>
        <p>Conseguir a primeira oportunidade foi o maior desafio. O que funcionou:</p>
        <ul>
          <li><strong>Portfolio forte:</strong> Projetos que demonstravam habilidades reais</li>
          <li><strong>Networking:</strong> Participação em comunidades e eventos</li>
          <li><strong>Contribuições open source:</strong> Demonstravam capacidade de trabalhar em equipe</li>
          <li><strong>Persistência:</strong> Não desistir após rejeições</li>
        </ul>

        <h2>Estratégias que Funcionaram</h2>
        <h3>1. Aprendizado Ativo</h3>
        <pre><code>// Em vez de apenas assistir tutoriais, sempre codificava junto
function learningStrategy(concept) {
  return {
    watch: true,
    code: true,
    modify: true, // Crucial: mudar o código para entender
    teach: true,  // Explicar para outros consolida o conhecimento
    apply: true   // Usar em projetos reais
  };
}</code></pre>

        <h3>2. Construção de Portfólio</h3>
        <p>Cada projeto no portfolio tinha um propósito específico:</p>
        <ul>
          <li><strong>Projeto 1:</strong> Demonstrar HTML/CSS/JS básico</li>
          <li><strong>Projeto 2:</strong> Mostrar integração com APIs</li>
          <li><strong>Projeto 3:</strong> Exibir conhecimento em React</li>
          <li><strong>Projeto 4:</strong> Provar capacidade full-stack</li>
        </ul>

        <h3>3. Networking Estratégico</h3>
        <p>Construí relacionamentos genuínos na comunidade:</p>
        <ul>
          <li>Participação ativa no Stack Overflow</li>
          <li>Contribuições para projetos open source</li>
          <li>Presença em meetups e conferências</li>
          <li>Mentoria de iniciantes (ensinar consolida o aprendizado)</li>
        </ul>

        <h2>A Primeira Oportunidade</h2>
        <p>Minha primeira vaga foi em uma startup onde pude:</p>
        <ul>
          <li>Trabalhar com múltiplas tecnologias</li>
          <li>Ter impacto direto no produto</li>
          <li>Aprender com desenvolvedores sêniors</li>
          <li>Cometer erros em um ambiente de aprendizado</li>
        </ul>

        <h3>Código da Primeira Feature</h3>
        <pre><code>// Minha primeira feature em produção: sistema de notificações
const NotificationSystem = {
  async sendNotification(userId, message, type = 'info') {
    try {
      const notification = {
        id: generateId(),
        userId,
        message,
        type,
        timestamp: new Date(),
        read: false
      };

      await this.saveToDatabase(notification);
      await this.pushToUser(userId, notification);
      
      console.log('Notification sent successfully!');
      return notification;
    } catch (error) {
      console.error('Failed to send notification:', error);
      throw error;
    }
  }
};</code></pre>

        <h2>Evolução na Carreira</h2>
        <h3>Progressão Natural</h3>
        <p>A evolução seguiu um caminho interessante:</p>
        <ol>
          <li><strong>Junior Developer:</strong> Foco em executar tarefas bem definidas</li>
          <li><strong>Developer:</strong> Capacidade de resolver problemas independentemente</li>
          <li><strong>Senior Developer:</strong> Mentoria e arquitetura de soluções</li>
          <li><strong>Tech Lead:</strong> Visão de produto e liderança técnica</li>
        </ol>

        <h2>Lições Aprendidas</h2>
        <h3>Para Quem Está Começando</h3>
        <ul>
          <li><strong>Seja consistente:</strong> 1 hora todo dia > 8 horas no fim de semana</li>
          <li><strong>Construa projetos:</strong> Teoria sem prática não impressiona ninguém</li>
          <li><strong>Documente sua jornada:</strong> Blog/GitHub mostra evolução</li>
          <li><strong>Não se compare:</strong> Cada um tem seu tempo e contexto</li>
          <li><strong>Peça ajuda:</strong> A comunidade dev é incrivelmente acolhedora</li>
        </ul>

        <h3>Sobre o Mercado</h3>
        <ul>
          <li>Soft skills são tão importantes quanto technical skills</li>
          <li>Comunicação clara vale mais que código complexo</li>
          <li>Resolver problemas reais > conhecer 20 frameworks</li>
          <li>Aprender a aprender é a habilidade mais valiosa</li>
        </ul>

        <h2>O Que Faria Diferente</h2>
        <p>Olhando para trás, algumas coisas que mudaria:</p>
        <ul>
          <li><strong>Começaria com testes mais cedo:</strong> TDD mudou minha forma de programar</li>
          <li><strong>Focaria mais em algoritmos:</strong> Base sólida faz toda diferença</li>
          <li><strong>Participaria de mais hackathons:</strong> Experiência prática valiosa</li>
          <li><strong>Investiria mais em inglês técnico:</strong> Abre muitas portas</li>
        </ul>

        <h2>Mensagem Final</h2>
        <p>A transição para tech não é apenas sobre aprender a programar. É sobre:</p>
        <blockquote>
          <p>"Desenvolver uma mentalidade de crescimento, abraçar a incerteza e encontrar prazer no processo contínuo de aprendizado."</p>
        </blockquote>

        <p>Se você está considerando essa mudança, saiba que é possível. Será desafiador, frustrante às vezes, mas também incrivelmente gratificante. A tecnologia me deu não apenas uma carreira, mas uma forma completamente nova de ver e impactar o mundo.</p>

        <p><strong>A jornada continua...</strong> E esse é o mais belo da nossa área: nunca paramos de aprender e evoluir.</p>
      `
    }
  };

  // Event listeners para botões "Ler mais"
  document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      const articleId = e.target.getAttribute('data-article');
      const article = articles[articleId];
      
      if (article) {
        openArticleModal(article);
      }
    });
  });

  // Função para abrir o modal
  function openArticleModal(article) {
    const modal = document.getElementById('article-modal');
    const modalCategory = document.getElementById('modal-category');
    const modalTitle = document.getElementById('modal-title');
    const modalDate = document.getElementById('modal-date');
    const modalReadingTime = document.getElementById('modal-reading-time');
    const modalTags = document.getElementById('modal-tags');
    const modalContent = document.getElementById('modal-content');

    // Preencher conteúdo do modal
    modalCategory.textContent = article.category;
    modalTitle.textContent = article.title;
    modalDate.textContent = article.date;
    modalReadingTime.textContent = article.readingTime;
    
    // Tags
    modalTags.innerHTML = article.tags.map(tag => 
      `<span>${tag}</span>`
    ).join('');
    
    // Conteúdo do artigo
    modalContent.innerHTML = article.content;

    // Mostrar modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Função para fechar o modal
  function closeArticleModal() {
    const modal = document.getElementById('article-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Event listeners para fechar modal
  document.getElementById('modal-close').addEventListener('click', closeArticleModal);
  document.getElementById('modal-close-btn').addEventListener('click', closeArticleModal);
  document.getElementById('modal-backdrop').addEventListener('click', closeArticleModal);

  // Fechar modal com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeArticleModal();
    }
  });

  // Compartilhamento social
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
});