(function () {
  const STORAGE_KEY = 'portfolio-lang';

  const I18N = {
    pt: {
      meta: {
        title: 'Lucas Oliveira Bastos - Desenvolvedor Full Stack',
        description: 'Currículo de Lucas Oliveira Bastos — Desenvolvedor Full Stack, Bacharel em Sistemas de Informação (UVV) e estágio em engenharia de software na Vale. React, Go, Node.js, Python e SQL.'
      },
      nav: { home: 'Início', about: 'Sobre', experience: 'Experiência', education: 'Formação', projects: 'Projetos', skills: 'Skills', contact: 'Contato', theme: 'Alternar tema', lang: 'Idioma' },
      hero: {
        role: 'Desenvolvedor Full Stack',
        photo: 'Foto de Lucas Oliveira Bastos, Desenvolvedor Full Stack',
        tagline: 'Faço soluções tecnológicas de ponta a ponta, com estrutura — da infraestrutura à entrega.',
        ctaProjects: 'Ver projetos',
        ctaExperience: 'Experiência'
      },
      about: {
        title: 'Sobre',
        p1: 'Sou desenvolvedor full stack e bacharel em Sistemas de Informação pela Universidade Vila Velha (UVV). Desde 2018 atuo na área de TI. Meu trabalho é fazer soluções tecnológicas de ponta a ponta, de forma estruturada: entender o problema, desenhar a arquitetura, implementar cada camada e deixar o sistema operável.',
        p2: 'Estrutura, para mim, é o caminho completo — rede e servidor, dados, API, autenticação, interface e deploy — com contrato claro, validação, testes e CI. Frontend em React e TypeScript. Backend em Node.js, Go e Python. Persistência em PostgreSQL, MongoDB e Redis. Publicação com Docker. Não entrego pedaço solto: entrego a solução encadeada, pronta para produção.',
        p3: 'Essa visão veio da operação. Na Polícia Civil do ES fiz cabeamento estruturado, redes e suporte N1/N2. Na iData virei especialista técnico em servidores e infraestrutura. Na Vale, como estagiário de engenharia de software, entreguei aplicações, dashboards e automações usados no fluxo operacional. Por isso cada solução que eu monto já nasce pensando em disponibilidade, falha e manutenção — do ambiente ao código.',
        langs: 'Idiomas: português nativo; inglês intermediário pelo CEI — Centro Estadual de Idiomas; espanhol para leitura, escrita e conversação.',
        card1Title: 'Engenharia de software',
        card1Text: 'Contrato da API, tipagem, validação, testes e UI — o produto inteiro, não só a tela.',
        card1Li1: 'React + TypeScript: estado, rotas e consumo de API',
        card1Li2: 'REST com Express, Fiber e FastAPI',
        card1Li3: 'JWT, regras de domínio e Clean Architecture',
        card1Li4: 'Testes, Zod/validação e CI no GitHub Actions',
        card2Title: 'Infraestrutura e operação',
        card2Text: 'Servidor, rede, cache e deploy. Sei o que quebra em produção porque já operei o ambiente.',
        card2Li1: 'Servidores, Linux e infraestrutura de TI',
        card2Li2: 'Redes, cabeamento estruturado e diagnóstico',
        card2Li3: 'Docker, Redis, filas (RabbitMQ) e outbox',
        card2Li4: 'Azure, Firebase, Vercel e pipeline de deploy'
      },
      exp: {
        title: 'Experiência profissional',
        valeRole: 'Estagiário de Engenharia de Software',
        valePeriod: 'nov 2024 — nov 2026',
        valeLoc: 'Vitória, Espírito Santo',
        valeText: 'Engenharia de software no chão de operação: sistemas, dashboards e automações que a equipe usa de fato — não protótipo de apresentação.',
        vale1: 'Full stack: React/TypeScript, APIs Node/Python e dashboards operacionais',
        vale2: 'Automação de processo, integração de sistemas e redução de trabalho manual',
        vale3: 'Modelagem de dados, visualização e apoio à decisão operacional',
        vale4: 'Visão de processo e conformidade (ISO 19011, 9001 e 14001)',
        idataRole: 'Especialista Técnico em Servidores e Infraestrutura',
        idataPeriod: 'jun 2022 — jun 2024',
        idataLoc: 'Espírito Santo',
        idataText: 'Virei o especialista técnico da operação: servidores, infraestrutura e ambientes que não podiam parar. Do hardware ao serviço em produção.',
        idata1: 'Administração de servidores: instalação, serviços, acesso e sustentação',
        idata2: 'Desenho e operação de infraestrutura (rede, storage, disponibilidade)',
        idata3: 'Troubleshooting de SO, hardware e serviços em ambiente crítico',
        idata4: 'Padronização da operação e continuidade — menos falha, menos retrabalho',
        idataTagInfra: 'Infraestrutura',
        idataTagOps: 'Operação de TI',
        pcesRole: 'Técnico de Suporte em Redes e Cabeamento Estruturado',
        pcesPeriod: 'fev 2015 — mar 2017',
        pcesLoc: 'Espírito Santo',
        pcesText: 'Infraestrutura de rede institucional de ponta a ponta: cabeamento estruturado, conectividade e suporte técnico N1/N2 nas unidades.',
        pces1: 'Cabeamento estruturado: pontos, patch panel, rack e organização física',
        pces2: 'Diagnóstico de rede (camada física e lógica) e restabelecimento de link',
        pces3: 'Suporte N1/N2: imagem, instalação, remoto, usuários e impressoras',
        pces4: 'Hardware, estações e conectividade sob pressão de ambiente operacional',
        pcesTagCabling: 'Cabeamento estruturado',
      },
      edu: {
        title: 'Formação acadêmica',
        role: 'Bacharel em Sistemas de Informação',
        period: '2022 — 2026 · Conclusão em dez 2025 · Colação em jan 2026',
        text: 'Diploma de graduação pela UVV. Formação em desenvolvimento de sistemas, banco de dados, engenharia de software e gestão da informação.',
        t1: 'Engenharia de software',
        t2: 'Banco de dados',
        t3: 'Desenvolvimento web'
      },
      cert: {
        title: 'Licenças e certificações',
        certLabel: 'Certificação',
        networkDate: 'dez 2025',
        auditTitle: 'Auditoria Interna',
        auditDate: 'abr 2025',
        ceiTitle: 'Inglês Intermediário',
        ceiLevel: 'Idioma',
        ceiOrg: 'CEI — Centro Estadual de Idiomas',
        auditOrg: 'Vale — ISO 19011, 9001 e 14001',
        itLabel: 'Hardware e software de PC'
      },
      projects: {
        title: 'Sistemas que eu construí',
        lead: 'Sistemas com API, persistência, autenticação e operação. Código que mostra domínio técnico — não exercício de curso.',
        code: 'Código',
        airKind: 'Full stack • produto',
        airText: 'Aplicação de clima e qualidade do ar com frontend e API no mesmo repositório: busca por cidade ou coordenadas, AQI, previsão, mapa e alertas.',
        air1: 'React + Vite + TypeScript no client; Express + TypeScript na API',
        air2: 'Zod, Helmet, rate limit, logs Pino, testes e pipeline no GitHub Actions',
        air3: 'Cache Redis, PWA, Mapbox, geofencing e comparador multi-cidades',
        epuKind: 'Full stack • Clean Architecture',
        epuText: 'Sistema de projetos, equipes e recursos com autenticação JWT, upload e ambiente Docker.',
        epu1: 'API Express com domain, application e infrastructure',
        epu2: 'React 18 + TypeScript + Vite; testes unitários, integração e E2E',
        epu3: 'MongoDB, JWT, Multer e docker-compose',
        pocketKind: 'TCC • produção',
        pocketText: 'Guia de viagens com itinerário por IA, mapa e persistência. Trabalho de conclusão na UVV, publicado na Vercel.',
        pocket1: 'React 19 + TypeScript strict, Tailwind e Zustand',
        pocket2: 'Firebase Auth/Firestore, Gemini, Mapbox e PWA',
        pocket3: 'Validação Zod, i18n (PT/EN/ES) e dark mode',
        neuroKind: 'Backend • plataforma',
        neuroText: 'Monorepo com gateway, serviço de IA e app mobile: auth, eventos, tarefas, lembretes e gamificação.',
        neuro1: 'Gateway Go (Fiber), AI em FastAPI, app Flutter',
        neuro2: 'Postgres, Redis, RabbitMQ, MinIO e Docker Compose',
        neuro3: 'Outbox, retry/dead-letter, JWT e canais push/e-mail/WhatsApp',
        agroKind: 'Plataforma • microsserviços',
        agroText: 'Plataforma rural com API Gateway em Go, serviços de IA em Python e cliente Flutter (web e mobile).',
        agro1: 'Gateway, usuários, propriedade, produção, estoque e clima',
        agro2: 'PostgreSQL, Redis, MinIO e Docker Compose',
        agro3: 'Módulos de dashboard, assistente de IA e visão computacional',
        paradaKind: 'Full stack • dashboard',
        paradaText: 'Dashboard em tempo real com API própria: ocupação, evolução e detalhe por área — linha do trabalho na Vale.',
        parada1: 'Frontend React + TypeScript com Chart.js',
        parada2: 'API REST Node.js + Express + TypeScript',
        parada3: 'Atualização periódica, resumo e histórico por área',
        more: 'Também: Sentrix (FastAPI + análise de sentimento) e Gestão de Gastos IA (React + Node + Gemini + Azure).',
        allRepos: 'Repositórios no GitHub',
        airAlt: 'Air Quality — clima, AQI e mapa operacional',
        paradaAlt: 'Dashboard Evolução Parada Fria'
      },
      metrics: {
        title: 'Em números',
        systems: 'Sistemas full stack em destaque',
        years: 'Anos na área de TI',
        layers: 'Camadas: web, API e dados',
        cisco: 'Certificações Cisco'
      },
      github: {
        title: 'Atividade no GitHub',
        profile: 'Perfil',
        repos: 'Repositórios',
        followers: 'Seguidores',
        stars: 'Stars',
        open: 'Abrir perfil',
        stack: 'Stack no GitHub',
        langs: 'Linguagens mais usadas'
      },
      skills: {
        title: 'Stack tecnológico',
        frontend: 'Frontend',
        backend: 'Backend e APIs',
        data: 'Dados',
        cloud: 'Cloud e ferramentas',
        microsoft: 'Microsoft e gestão',
        infra: 'Infraestrutura',
        servers: 'Servidores',
        networks: 'Redes',
        support: 'Suporte N1/N2',
        security: 'Segurança'
      },
      contact: {
        title: 'Vamos conversar',
        subtitle: 'Currículo completo, projetos e disponibilidade para conexões',
        email: 'Enviar e-mail',
        open: 'Aberto a conexões e oportunidades',
        reply: 'Resposta em até 24h',
        systems: 'Sistemas',
        years: 'Anos',
        wa: 'Olá Lucas, vi seu portfólio e gostaria de conversar sobre um projeto'
      },
      footer: {
        nav: 'Navegação',
        projects: 'Projetos',
        contact: 'Contato',
        tech: 'Tecnologias',
        tech1: 'React, Go e Node.js',
        tech2: 'Python e SQL',
        tech3: 'Azure e Power Platform',
        copy: '© 2026 Lucas Oliveira Bastos • Currículo e portfólio',
        photo: 'Foto de Lucas Oliveira Bastos'
      },
      blog: {
        title: 'Insights e conhecimento',
        subtitle: 'Notas técnicas sobre arquitetura, performance, operação e carreira.',
        cta: 'Quer trocar ideia sobre algum desses temas?',
        talk: 'Vamos conversar',
        readMore: 'Ler mais',
        share: 'Compartilhar:',
        close: 'Fechar',
        discuss: 'Discutir esse artigo',
        discussSubject: 'Sobre o artigo',
        tagArch: 'Arquitetura',
        tagIndustry: 'Indústria',
        tagCareer: 'Carreira',
        tagTech: 'Tecnologia',
        tagPersonal: 'Desenvolvimento pessoal',
        a1Cat: 'Desenvolvimento',
        a1Title: 'Implementando Clean Architecture em React',
        a1Text: 'Como estruturar aplicações React de forma escalável com Clean Architecture: separar responsabilidades e facilitar a manutenção.',
        a1Time: '5 min de leitura',
        a2Cat: 'Performance',
        a2Title: 'Otimização de performance em Node.js',
        a2Text: 'Técnicas para otimizar aplicações Node.js: clustering, gestão de memória, profiling e monitoramento em produção.',
        a2Time: '7 min de leitura',
        a3Cat: 'DevOps',
        a3Title: 'CI/CD com GitHub Actions e Azure',
        a3Text: 'Pipelines de integração e deploy contínuo com GitHub Actions e Azure, incluindo testes automatizados e rollback.',
        a3Time: '8 min de leitura',
        a4Cat: 'Análise de dados',
        a4Title: 'Power BI na indústria: case Vale S.A.',
        a4Text: 'Como implementei dashboards para análise de paradas industriais, reduzindo o tempo de identificação de problemas e apoiando a operação.',
        a4Time: '6 min de leitura',
        a5Cat: 'JavaScript',
        a5Title: 'Async/await vs Promises: quando usar cada um',
        a5Text: 'Comparação prática entre abordagens de programação assíncrona em JavaScript, com exemplos reais e casos de uso.',
        a5Time: '4 min de leitura',
        a6Cat: 'Carreira',
        a6Title: 'Transição de carreira para tech: minha jornada',
        a6Text: 'A passagem da operação de TI para o desenvolvimento: desafios, aprendizados e o que de fato importa no começo.',
        a6Time: '10 min de leitura'
      }
    },
    en: {
      meta: {
        title: 'Lucas Oliveira Bastos - Full Stack Developer',
        description: 'Resume of Lucas Oliveira Bastos — Full Stack Developer, B.Sc. in Information Systems (UVV), software engineering intern at Vale. React, Go, Node.js, Python, and SQL.'
      },
      nav: { home: 'Home', about: 'About', experience: 'Experience', education: 'Education', projects: 'Projects', skills: 'Skills', contact: 'Contact', theme: 'Toggle theme', lang: 'Language' },
      hero: {
        role: 'Full Stack Developer',
        photo: 'Photo of Lucas Oliveira Bastos, Full Stack Developer',
        tagline: 'I build end-to-end technology solutions, with structure — from infrastructure to delivery.',
        ctaProjects: 'View projects',
        ctaExperience: 'Experience'
      },
      about: {
        title: 'About',
        p1: 'I am a full stack developer with a B.Sc. in Information Systems from Universidade Vila Velha (UVV). I have been working in IT since 2018. My work is building end-to-end technology solutions, in a structured way: understand the problem, design the architecture, implement each layer, and leave the system operable.',
        p2: 'Structure, to me, is the full path — network and server, data, API, authentication, UI, and deploy — with a clear contract, validation, tests, and CI. Frontend in React and TypeScript. Backend in Node.js, Go, and Python. Persistence in PostgreSQL, MongoDB, and Redis. Shipping with Docker. I do not deliver a loose piece: I deliver a chained solution, ready for production.',
        p3: 'That view comes from operations. At the Civil Police of ES I worked on structured cabling, networks, and L1/L2 support. At iData I became a technical specialist in servers and infrastructure. At Vale, as a software engineering intern, I delivered applications, dashboards, and automations used in the operational flow. That is why every solution I build is born with availability, failure, and maintenance in mind — from the environment to the code.',
        langs: 'Languages: native Portuguese; intermediate English from CEI — Centro Estadual de Idiomas; Spanish for reading, writing, and conversation.',
        card1Title: 'Software engineering',
        card1Text: 'API contract, typing, validation, tests, and UI — the whole product, not just the screen.',
        card1Li1: 'React + TypeScript: state, routing, and API consumption',
        card1Li2: 'REST with Express, Fiber, and FastAPI',
        card1Li3: 'JWT, domain rules, and Clean Architecture',
        card1Li4: 'Tests, Zod/validation, and GitHub Actions CI',
        card2Title: 'Infrastructure and operations',
        card2Text: 'Servers, network, cache, and deploy. I know what breaks in production because I have run the environment.',
        card2Li1: 'Servers, Linux, and IT infrastructure',
        card2Li2: 'Networks, structured cabling, and diagnostics',
        card2Li3: 'Docker, Redis, queues (RabbitMQ), and outbox',
        card2Li4: 'Azure, Firebase, Vercel, and deploy pipelines'
      },
      exp: {
        title: 'Professional experience',
        valeRole: 'Software Engineering Intern',
        valePeriod: 'Nov 2024 — Nov 2026',
        valeLoc: 'Vitória, Espírito Santo, Brazil',
        valeText: 'Software engineering in real operations: systems, dashboards, and automations the team actually uses — not demo prototypes.',
        vale1: 'Full stack: React/TypeScript, Node/Python APIs, and operational dashboards',
        vale2: 'Process automation, system integration, and less manual work',
        vale3: 'Data modeling, visualization, and operational decision support',
        vale4: 'Process and compliance mindset (ISO 19011, 9001, and 14001)',
        idataRole: 'Technical Specialist, Servers and Infrastructure',
        idataPeriod: 'Jun 2022 — Jun 2024',
        idataLoc: 'Espírito Santo, Brazil',
        idataText: 'Became the technical specialist of the operation: servers, infrastructure, and environments that could not go down. From hardware to production services.',
        idata1: 'Server administration: install, services, access, and sustainment',
        idata2: 'Infrastructure design and operations (network, storage, availability)',
        idata3: 'OS, hardware, and service troubleshooting in critical environments',
        idata4: 'Operational standards and continuity — fewer failures, less rework',
        idataTagInfra: 'Infrastructure',
        idataTagOps: 'IT operations',
        pcesRole: 'Network and Structured Cabling Support Technician',
        pcesPeriod: 'Feb 2015 — Mar 2017',
        pcesLoc: 'Espírito Santo, Brazil',
        pcesText: 'End-to-end institutional network infrastructure: structured cabling, connectivity, and L1/L2 technical support across units.',
        pces1: 'Structured cabling: drops, patch panel, rack, and physical layout',
        pces2: 'Network diagnostics (physical and logical layers) and link recovery',
        pces3: 'L1/L2 support: imaging, installs, remote help, users, and printers',
        pces4: 'Hardware, workstations, and connectivity under operational pressure',
        pcesTagCabling: 'Structured cabling',
      },
      edu: {
        title: 'Education',
        role: 'B.Sc. in Information Systems',
        period: '2022 — 2026 · Completed Dec 2025 · Graduation Jan 2026',
        text: 'Undergraduate diploma from UVV. Training in systems development, databases, software engineering, and information management.',
        t1: 'Software engineering',
        t2: 'Databases',
        t3: 'Web development'
      },
      cert: {
        title: 'Licenses and certifications',
        certLabel: 'Certification',
        networkDate: 'Dec 2025',
        auditTitle: 'Internal Audit',
        auditDate: 'Apr 2025',
        ceiTitle: 'Intermediate English',
        ceiLevel: 'Language',
        ceiOrg: 'CEI — State Language Center',
        auditOrg: 'Vale — ISO 19011, 9001, and 14001',
        itLabel: 'PC hardware and software'
      },
      projects: {
        title: 'Systems I built',
        lead: 'Systems with APIs, persistence, auth, and operations. Code that shows technical depth — not coursework.',
        code: 'Code',
        airKind: 'Full stack • product',
        airText: 'Weather and air-quality app with frontend and API in the same repo: city or coordinates search, AQI, forecast, map, and alerts.',
        air1: 'React + Vite + TypeScript on the client; Express + TypeScript API',
        air2: 'Zod, Helmet, rate limit, Pino logs, tests, and GitHub Actions CI',
        air3: 'Redis cache, PWA, Mapbox, geofencing, and multi-city compare',
        epuKind: 'Full stack • Clean Architecture',
        epuText: 'Project, team, and resource system with JWT auth, uploads, and Docker.',
        epu1: 'Express API with domain, application, and infrastructure layers',
        epu2: 'React 18 + TypeScript + Vite; unit, integration, and E2E tests',
        epu3: 'MongoDB, JWT, Multer, and docker-compose',
        pocketKind: 'Thesis • production',
        pocketText: 'Travel guide with AI itineraries, maps, and persistence. UVV thesis, deployed on Vercel.',
        pocket1: 'React 19 + TypeScript strict, Tailwind, and Zustand',
        pocket2: 'Firebase Auth/Firestore, Gemini, Mapbox, and PWA',
        pocket3: 'Zod validation, i18n (PT/EN/ES), and dark mode',
        neuroKind: 'Backend • platform',
        neuroText: 'Monorepo with gateway, AI service, and mobile app: auth, events, tasks, reminders, and gamification.',
        neuro1: 'Go gateway (Fiber), FastAPI AI service, Flutter app',
        neuro2: 'Postgres, Redis, RabbitMQ, MinIO, and Docker Compose',
        neuro3: 'Outbox, retry/dead-letter, JWT, and push/email/WhatsApp channels',
        agroKind: 'Platform • microservices',
        agroText: 'Rural platform with a Go API gateway, Python AI services, and a Flutter client (web and mobile).',
        agro1: 'Gateway, users, property, production, stock, and climate',
        agro2: 'PostgreSQL, Redis, MinIO, and Docker Compose',
        agro3: 'Dashboard, AI assistant, and computer-vision modules',
        paradaKind: 'Full stack • dashboard',
        paradaText: 'Real-time dashboard with its own API: occupancy, trends, and per-area detail — from the Vale work stream.',
        parada1: 'React + TypeScript frontend with Chart.js',
        parada2: 'REST API with Node.js + Express + TypeScript',
        parada3: 'Periodic refresh, summary, and per-area history',
        more: 'Also: Sentrix (FastAPI + sentiment analysis) and AI Expense Tracker (React + Node + Gemini + Azure).',
        allRepos: 'GitHub repositories',
        airAlt: 'Air Quality — weather, AQI, and operational map',
        paradaAlt: 'Evolução Parada Fria dashboard'
      },
      metrics: {
        title: 'By the numbers',
        systems: 'Featured full-stack systems',
        years: 'Years in IT',
        layers: 'Layers: web, API, and data',
        cisco: 'Cisco certifications'
      },
      github: {
        title: 'GitHub activity',
        profile: 'Profile',
        repos: 'Repositories',
        followers: 'Followers',
        stars: 'Stars',
        open: 'Open profile',
        stack: 'Stack on GitHub',
        langs: 'Most used languages'
      },
      skills: {
        title: 'Tech stack',
        frontend: 'Frontend',
        backend: 'Backend and APIs',
        data: 'Data',
        cloud: 'Cloud and tools',
        microsoft: 'Microsoft and operations',
        infra: 'Infrastructure',
        servers: 'Servers',
        networks: 'Networks',
        support: 'L1/L2 support',
        security: 'Security'
      },
      contact: {
        title: 'Let’s talk',
        subtitle: 'Full resume, projects, and availability for new connections',
        email: 'Send email',
        open: 'Open to connections and opportunities',
        reply: 'Reply within 24 hours',
        systems: 'Systems',
        years: 'Years',
        wa: 'Hi Lucas, I saw your portfolio and would like to talk about a project'
      },
      footer: {
        nav: 'Navigation',
        projects: 'Projects',
        contact: 'Contact',
        tech: 'Technologies',
        tech1: 'React, Go, and Node.js',
        tech2: 'Python and SQL',
        tech3: 'Azure and Power Platform',
        copy: '© 2026 Lucas Oliveira Bastos • Resume and portfolio',
        photo: 'Photo of Lucas Oliveira Bastos'
      },
      blog: {
        title: 'Insights and knowledge',
        subtitle: 'Technical notes on architecture, performance, operations, and career.',
        cta: 'Want to talk about any of these topics?',
        talk: 'Let’s talk',
        readMore: 'Read more',
        share: 'Share:',
        close: 'Close',
        discuss: 'Discuss this article',
        discussSubject: 'About the article',
        tagArch: 'Architecture',
        tagIndustry: 'Industry',
        tagCareer: 'Career',
        tagTech: 'Technology',
        tagPersonal: 'Personal development',
        a1Cat: 'Development',
        a1Title: 'Implementing Clean Architecture in React',
        a1Text: 'How to structure React apps in a scalable way with Clean Architecture: separate responsibilities and make maintenance easier.',
        a1Time: '5 min read',
        a2Cat: 'Performance',
        a2Title: 'Node.js performance optimization',
        a2Text: 'Techniques to optimize Node.js apps: clustering, memory management, profiling, and production monitoring.',
        a2Time: '7 min read',
        a3Cat: 'DevOps',
        a3Title: 'CI/CD with GitHub Actions and Azure',
        a3Text: 'Continuous integration and deploy pipelines with GitHub Actions and Azure, including automated tests and rollback.',
        a3Time: '8 min read',
        a4Cat: 'Data analysis',
        a4Title: 'Power BI in industry: Vale S.A. case',
        a4Text: 'How I built dashboards for industrial downtime analysis, reducing time-to-detect issues and supporting operations.',
        a4Time: '6 min read',
        a5Cat: 'JavaScript',
        a5Title: 'Async/await vs Promises: when to use each',
        a5Text: 'A practical comparison of asynchronous approaches in JavaScript, with real examples and specific use cases.',
        a5Time: '4 min read',
        a6Cat: 'Career',
        a6Title: 'Career transition into tech: my path',
        a6Text: 'Moving from IT operations into software development: challenges, lessons, and what actually matters at the start.',
        a6Time: '10 min read'
      }
    },
    es: {
      meta: {
        title: 'Lucas Oliveira Bastos - Desarrollador Full Stack',
        description: 'Currículum de Lucas Oliveira Bastos — Desarrollador Full Stack, Licenciado en Sistemas de Información (UVV) y prácticas de ingeniería de software en Vale. React, Go, Node.js, Python y SQL.'
      },
      nav: { home: 'Inicio', about: 'Sobre mí', experience: 'Experiencia', education: 'Formación', projects: 'Proyectos', skills: 'Skills', contact: 'Contacto', theme: 'Cambiar tema', lang: 'Idioma' },
      hero: {
        role: 'Desarrollador Full Stack',
        photo: 'Foto de Lucas Oliveira Bastos, Desarrollador Full Stack',
        tagline: 'Hago soluciones tecnológicas de punta a punta, con estructura — de la infraestructura a la entrega.',
        ctaProjects: 'Ver proyectos',
        ctaExperience: 'Experiencia'
      },
      about: {
        title: 'Sobre mí',
        p1: 'Soy desarrollador full stack y licenciado en Sistemas de Información por la Universidade Vila Velha (UVV). Desde 2018 actúo en el área de TI. Mi trabajo es hacer soluciones tecnológicas de punta a punta, de forma estructurada: entender el problema, diseñar la arquitectura, implementar cada capa y dejar el sistema operable.',
        p2: 'Estructura, para mí, es el camino completo — red y servidor, datos, API, autenticación, interfaz y deploy — con contrato claro, validación, tests y CI. Frontend en React y TypeScript. Backend en Node.js, Go y Python. Persistencia en PostgreSQL, MongoDB y Redis. Publicación con Docker. No entrego un pedazo suelto: entrego la solución encadenada, lista para producción.',
        p3: 'Esa visión viene de la operación. En la Policía Civil de ES hice cableado estructurado, redes y soporte N1/N2. En iData me convertí en especialista técnico de servidores e infraestructura. En Vale, como becario de ingeniería de software, entregué aplicaciones, dashboards y automatizaciones usados en el flujo operativo. Por eso cada solución que monto nace pensando en disponibilidad, falla y mantenimiento — del entorno al código.',
        langs: 'Idiomas: portugués nativo; inglés intermedio por el CEI — Centro Estadual de Idiomas; español para lectura, escritura y conversación.',
        card1Title: 'Ingeniería de software',
        card1Text: 'Contrato de API, tipado, validación, tests y UI: el producto entero, no solo la pantalla.',
        card1Li1: 'React + TypeScript: estado, rutas y consumo de API',
        card1Li2: 'REST con Express, Fiber y FastAPI',
        card1Li3: 'JWT, reglas de dominio y Clean Architecture',
        card1Li4: 'Tests, Zod/validación y CI en GitHub Actions',
        card2Title: 'Infraestructura y operación',
        card2Text: 'Servidor, red, caché y deploy. Sé qué se rompe en producción porque ya operé el entorno.',
        card2Li1: 'Servidores, Linux e infraestructura de TI',
        card2Li2: 'Redes, cableado estructurado y diagnóstico',
        card2Li3: 'Docker, Redis, colas (RabbitMQ) y outbox',
        card2Li4: 'Azure, Firebase, Vercel y pipeline de deploy'
      },
      exp: {
        title: 'Experiencia profesional',
        valeRole: 'Becario de Ingeniería de Software',
        valePeriod: 'nov 2024 — nov 2026',
        valeLoc: 'Vitória, Espírito Santo',
        valeText: 'Ingeniería de software en operación real: sistemas, dashboards y automatizaciones que el equipo usa de hecho — no prototipo de presentación.',
        vale1: 'Full stack: React/TypeScript, APIs Node/Python y dashboards operativos',
        vale2: 'Automatización de procesos, integración de sistemas y menos trabajo manual',
        vale3: 'Modelado de datos, visualización y apoyo a la decisión operativa',
        vale4: 'Visión de proceso y conformidad (ISO 19011, 9001 y 14001)',
        idataRole: 'Especialista Técnico en Servidores e Infraestructura',
        idataPeriod: 'jun 2022 — jun 2024',
        idataLoc: 'Espírito Santo',
        idataText: 'Me convertí en el especialista técnico de la operación: servidores, infraestructura y entornos que no podían parar. Del hardware al servicio en producción.',
        idata1: 'Administración de servidores: instalación, servicios, acceso y sostenimiento',
        idata2: 'Diseño y operación de infraestructura (red, storage, disponibilidad)',
        idata3: 'Troubleshooting de SO, hardware y servicios en entorno crítico',
        idata4: 'Estandarización de la operación y continuidad: menos fallas, menos retrabajo',
        idataTagInfra: 'Infraestructura',
        idataTagOps: 'Operación de TI',
        pcesRole: 'Técnico de Soporte en Redes y Cableado Estructurado',
        pcesPeriod: 'feb 2015 — mar 2017',
        pcesLoc: 'Espírito Santo',
        pcesText: 'Infraestructura de red institucional de punta a punta: cableado estructurado, conectividad y soporte técnico N1/N2 en las unidades.',
        pces1: 'Cableado estructurado: puntos, patch panel, rack y organización física',
        pces2: 'Diagnóstico de red (capa física y lógica) y restablecimiento del enlace',
        pces3: 'Soporte N1/N2: imagen, instalación, remoto, usuarios e impresoras',
        pces4: 'Hardware, estaciones y conectividad bajo presión operativa',
        pcesTagCabling: 'Cableado estructurado',
      },
      edu: {
        title: 'Formación académica',
        role: 'Licenciado en Sistemas de Información',
        period: '2022 — 2026 · Finalización en dic 2025 · Graduación en ene 2026',
        text: 'Diploma de grado por la UVV. Formación en desarrollo de sistemas, bases de datos, ingeniería de software y gestión de la información.',
        t1: 'Ingeniería de software',
        t2: 'Bases de datos',
        t3: 'Desarrollo web'
      },
      cert: {
        title: 'Licencias y certificaciones',
        certLabel: 'Certificación',
        networkDate: 'dic 2025',
        auditTitle: 'Auditoría Interna',
        auditDate: 'abr 2025',
        ceiTitle: 'Inglés Intermedio',
        ceiLevel: 'Idioma',
        ceiOrg: 'CEI — Centro Estadual de Idiomas',
        auditOrg: 'Vale — ISO 19011, 9001 y 14001',
        itLabel: 'Hardware y software de PC'
      },
      projects: {
        title: 'Sistemas que construí',
        lead: 'Sistemas con API, persistencia, autenticación y operación. Código que muestra dominio técnico — no ejercicio de curso.',
        code: 'Código',
        airKind: 'Full stack • producto',
        airText: 'App de clima y calidad del aire con frontend y API en el mismo repositorio: búsqueda por ciudad o coordenadas, AQI, pronóstico, mapa y alertas.',
        air1: 'React + Vite + TypeScript en el client; Express + TypeScript en la API',
        air2: 'Zod, Helmet, rate limit, logs Pino, tests y pipeline en GitHub Actions',
        air3: 'Caché Redis, PWA, Mapbox, geofencing y comparador multi-ciudades',
        epuKind: 'Full stack • Clean Architecture',
        epuText: 'Sistema de proyectos, equipos y recursos con autenticación JWT, carga de archivos y Docker.',
        epu1: 'API Express con domain, application e infrastructure',
        epu2: 'React 18 + TypeScript + Vite; tests unitarios, de integración y E2E',
        epu3: 'MongoDB, JWT, Multer y docker-compose',
        pocketKind: 'TFG • producción',
        pocketText: 'Guía de viajes con itinerario por IA, mapa y persistencia. Trabajo de fin de grado en la UVV, publicado en Vercel.',
        pocket1: 'React 19 + TypeScript strict, Tailwind y Zustand',
        pocket2: 'Firebase Auth/Firestore, Gemini, Mapbox y PWA',
        pocket3: 'Validación Zod, i18n (PT/EN/ES) y modo oscuro',
        neuroKind: 'Backend • plataforma',
        neuroText: 'Monorepo con gateway, servicio de IA y app móvil: auth, eventos, tareas, recordatorios y gamificación.',
        neuro1: 'Gateway Go (Fiber), IA en FastAPI, app Flutter',
        neuro2: 'Postgres, Redis, RabbitMQ, MinIO y Docker Compose',
        neuro3: 'Outbox, retry/dead-letter, JWT y canales push/e-mail/WhatsApp',
        agroKind: 'Plataforma • microservicios',
        agroText: 'Plataforma rural con API Gateway en Go, servicios de IA en Python y cliente Flutter (web y móvil).',
        agro1: 'Gateway, usuarios, propiedad, producción, stock y clima',
        agro2: 'PostgreSQL, Redis, MinIO y Docker Compose',
        agro3: 'Módulos de dashboard, asistente de IA y visión computacional',
        paradaKind: 'Full stack • dashboard',
        paradaText: 'Dashboard en tiempo real con API propia: ocupación, evolución y detalle por área — línea de trabajo en Vale.',
        parada1: 'Frontend React + TypeScript con Chart.js',
        parada2: 'API REST Node.js + Express + TypeScript',
        parada3: 'Actualización periódica, resumen e historial por área',
        more: 'También: Sentrix (FastAPI + análisis de sentimiento) y Gestión de Gastos IA (React + Node + Gemini + Azure).',
        allRepos: 'Repositorios en GitHub',
        airAlt: 'Air Quality — clima, AQI y mapa operacional',
        paradaAlt: 'Dashboard Evolução Parada Fria'
      },
      metrics: {
        title: 'En números',
        systems: 'Sistemas full stack destacados',
        years: 'Años en TI',
        layers: 'Capas: web, API y datos',
        cisco: 'Certificaciones Cisco'
      },
      github: {
        title: 'Actividad en GitHub',
        profile: 'Perfil',
        repos: 'Repositorios',
        followers: 'Seguidores',
        stars: 'Stars',
        open: 'Abrir perfil',
        stack: 'Stack en GitHub',
        langs: 'Lenguajes más usados'
      },
      skills: {
        title: 'Stack tecnológico',
        frontend: 'Frontend',
        backend: 'Backend y APIs',
        data: 'Datos',
        cloud: 'Cloud y herramientas',
        microsoft: 'Microsoft y gestión',
        infra: 'Infraestructura',
        servers: 'Servidores',
        networks: 'Redes',
        support: 'Soporte N1/N2',
        security: 'Seguridad'
      },
      contact: {
        title: 'Hablemos',
        subtitle: 'Currículum completo, proyectos y disponibilidad para conexiones',
        email: 'Enviar correo',
        open: 'Abierto a conexiones y oportunidades',
        reply: 'Respuesta en hasta 24 h',
        systems: 'Sistemas',
        years: 'Años',
        wa: 'Hola Lucas, vi tu portafolio y me gustaría hablar sobre un proyecto'
      },
      footer: {
        nav: 'Navegación',
        projects: 'Proyectos',
        contact: 'Contacto',
        tech: 'Tecnologías',
        tech1: 'React, Go y Node.js',
        tech2: 'Python y SQL',
        tech3: 'Azure y Power Platform',
        copy: '© 2026 Lucas Oliveira Bastos • Currículum y portafolio',
        photo: 'Foto de Lucas Oliveira Bastos'
      },
      blog: {
        title: 'Insights y conocimiento',
        subtitle: 'Notas técnicas sobre arquitectura, rendimiento, operación y carrera.',
        cta: '¿Quieres hablar sobre alguno de estos temas?',
        talk: 'Hablemos',
        readMore: 'Leer más',
        share: 'Compartir:',
        close: 'Cerrar',
        discuss: 'Discutir este artículo',
        discussSubject: 'Sobre el artículo',
        tagArch: 'Arquitectura',
        tagIndustry: 'Industria',
        tagCareer: 'Carrera',
        tagTech: 'Tecnología',
        tagPersonal: 'Desarrollo personal',
        a1Cat: 'Desarrollo',
        a1Title: 'Implementando Clean Architecture en React',
        a1Text: 'Cómo estructurar aplicaciones React de forma escalable con Clean Architecture: separar responsabilidades y facilitar el mantenimiento.',
        a1Time: '5 min de lectura',
        a2Cat: 'Rendimiento',
        a2Title: 'Optimización de rendimiento en Node.js',
        a2Text: 'Técnicas para optimizar aplicaciones Node.js: clustering, gestión de memoria, profiling y monitoreo en producción.',
        a2Time: '7 min de lectura',
        a3Cat: 'DevOps',
        a3Title: 'CI/CD con GitHub Actions y Azure',
        a3Text: 'Pipelines de integración y deploy continuo con GitHub Actions y Azure, incluyendo tests automatizados y rollback.',
        a3Time: '8 min de lectura',
        a4Cat: 'Análisis de datos',
        a4Title: 'Power BI en la industria: caso Vale S.A.',
        a4Text: 'Cómo implementé dashboards para el análisis de paradas industriales, reduciendo el tiempo de identificación de problemas y apoyando la operación.',
        a4Time: '6 min de lectura',
        a5Cat: 'JavaScript',
        a5Title: 'Async/await vs Promises: cuándo usar cada uno',
        a5Text: 'Comparación práctica entre enfoques de programación asíncrona en JavaScript, con ejemplos reales y casos de uso.',
        a5Time: '4 min de lectura',
        a6Cat: 'Carrera',
        a6Title: 'Transición de carrera a tech: mi camino',
        a6Text: 'El paso de la operación de TI al desarrollo: desafíos, aprendizajes y lo que de verdad importa al comienzo.',
        a6Time: '10 min de lectura'
      }
    }
  };

  const LANG_HTML = { pt: 'pt-BR', en: 'en', es: 'es' };

  function lookup(lang, key) {
    return key.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), I18N[lang]);
  }

  function applyLanguage(lang) {
    const dict = I18N[lang] || I18N.pt;
    const resolved = I18N[lang] ? lang : 'pt';

    document.documentElement.lang = LANG_HTML[resolved];
    document.title = dict.meta.title;

    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', dict.meta.description);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const value = lookup(resolved, el.getAttribute('data-i18n'));
      if (typeof value === 'string') el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const value = lookup(resolved, el.getAttribute('data-i18n-alt'));
      if (typeof value === 'string') el.setAttribute('alt', value);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const value = lookup(resolved, el.getAttribute('data-i18n-aria'));
      if (typeof value === 'string') el.setAttribute('aria-label', value);
    });

    const wa = document.getElementById('whatsapp-link');
    if (wa) {
      wa.href = `https://wa.me/5527996081600?text=${encodeURIComponent(dict.contact.wa)}`;
    }

    const discuss = document.getElementById('modal-discuss');
    if (discuss) {
      discuss.href = `mailto:l.o.bastos@live.com?subject=${encodeURIComponent(dict.blog.discussSubject)}`;
    }

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute('content', resolved === 'en' ? 'en_US' : resolved === 'es' ? 'es_ES' : 'pt_BR');
    }

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === resolved);
    });

    localStorage.setItem(STORAGE_KEY, resolved);
    document.dispatchEvent(new CustomEvent('portfolio-lang', { detail: resolved }));
  }

  function detectLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && I18N[saved]) return saved;

    const nav = (navigator.language || 'pt').toLowerCase();
    if (nav.startsWith('en')) return 'en';
    if (nav.startsWith('es')) return 'es';
    return 'pt';
  }

  function initI18n() {
    applyLanguage(detectLanguage());
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
    });
  }

  window.applyLanguage = applyLanguage;
  window.initI18n = initI18n;
  window.lookupI18n = function (key) {
    const saved = localStorage.getItem(STORAGE_KEY);
    const lang = saved && I18N[saved] ? saved : 'pt';
    return lookup(lang, key);
  };
  window.getPortfolioLang = function () {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved && I18N[saved] ? saved : 'pt';
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
  } else {
    initI18n();
  }
})();
