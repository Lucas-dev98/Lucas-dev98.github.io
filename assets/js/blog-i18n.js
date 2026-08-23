(function () {
  const ARTICLE_KEYS = {
    'clean-architecture': { prefix: 'a1', date: '2025', tags: ['React', 'Clean Code', 'blog.tagArch'] },
    'nodejs-performance': { prefix: 'a2', date: '2025', tags: ['Node.js', 'Performance', 'Backend'] },
    'cicd-azure': { prefix: 'a3', date: '2024', tags: ['DevOps', 'Azure', 'CI/CD'] },
    'powerbi-vale': { prefix: 'a4', date: '2024', tags: ['Power BI', 'Data Analysis', 'blog.tagIndustry'] },
    'async-promises': { prefix: 'a5', date: '2024', tags: ['JavaScript', 'Async Programming', 'Best Practices'] },
    'carreira-tech': { prefix: 'a6', date: '2024', tags: ['blog.tagCareer', 'blog.tagTech', 'blog.tagPersonal'] }
  };

  const CONTENT = {
    pt: {
      'clean-architecture': `
        <p>A Clean Architecture, proposta por Robert C. Martin (Uncle Bob), é um padrão que cria sistemas mais organizados, testáveis e independentes de frameworks.</p>
        <h2>Por que Clean Architecture em React?</h2>
        <p>Aplicações React crescem rápido. Sem arquitetura, é comum encontrar componentes com muitas responsabilidades, regra de negócio na UI e testes frágeis.</p>
        <ul>
          <li>Componentes com muitas responsabilidades</li>
          <li>Lógica de negócio misturada com apresentação</li>
          <li>Dificuldade para testar funcionalidades</li>
          <li>Acoplamento forte entre camadas</li>
        </ul>
        <h2>Estrutura das camadas</h2>
        <h3>1. Entities</h3>
        <p>Objetos de negócio independentes de framework. Guardam as regras mais críticas.</p>
        <pre><code>export class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
  isValid() {
    return this.name && this.email && this.email.includes('@');
  }
}</code></pre>
        <h3>2. Use cases</h3>
        <p>Orquestram o fluxo entre entidades e interfaces.</p>
        <pre><code>export class CreateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute(userData) {
    const user = new User(null, userData.name, userData.email);
    if (!user.isValid()) throw new Error('Dados inválidos');
    return this.userRepository.save(user);
  }
}</code></pre>
        <h3>3. Interface adapters</h3>
        <p>Convertem dados entre casos de uso e o mundo externo: UI, banco e APIs.</p>
        <h2>Implementação em React</h2>
        <pre><code>src/
├── entities/
├── usecases/
├── adapters/
└── frameworks/web/</code></pre>
        <h2>Benefícios</h2>
        <ul>
          <li><strong>Testabilidade:</strong> cada camada pode ser testada sozinha</li>
          <li><strong>Manutenção:</strong> mudança em uma camada não derruba as outras</li>
          <li><strong>Flexibilidade:</strong> trocar framework sem reescrever o domínio</li>
        </ul>
        <p>O investimento inicial é maior. Em sistema que cresce, o retorno aparece na manutenção e nos testes.</p>
      `,
      'nodejs-performance': `
        <p>Node.js é eficiente, mas qualquer runtime tem gargalo. Otimize com dado, não com palpite.</p>
        <h2>1. Profiling e monitoramento</h2>
        <pre><code>node --prof app.js
node --prof-process isolate-0x*.log > processed.txt</code></pre>
        <ul>
          <li><strong>Clinic.js:</strong> suite de performance</li>
          <li><strong>0x:</strong> profiler visual</li>
          <li><strong>New Relic / Datadog:</strong> produção</li>
        </ul>
        <h2>2. Memória</h2>
        <p>Listener sem cleanup e objeto grande preso no escopo vazam memória. Use <code>once</code>, remova listener e considere object pool quando o GC vira custo.</p>
        <h2>3. Cluster e worker threads</h2>
        <p>O event loop é single-thread. Cluster espalha conexões entre CPUs; worker threads resolvem CPU-bound sem bloquear a API.</p>
        <h2>Boas práticas</h2>
        <ul>
          <li>Meça antes de otimizar</li>
          <li>Evite trabalho síncrono no request path</li>
          <li>Cacheie o que é caro e estável</li>
          <li>Observe latência, memória e event-loop delay em produção</li>
        </ul>
      `,
      'cicd-azure': `
        <p>Pipeline de CI/CD bem feito reduz risco: testa, publica em staging, valida e só então vai para produção — com rollback.</p>
        <h2>Integração contínua</h2>
        <p>No GitHub Actions: lint, testes, cobertura, audit e SAST (CodeQL) em todo push e pull request.</p>
        <pre><code>on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]</code></pre>
        <h2>Deploy contínuo</h2>
        <p><code>develop</code> vai para staging. <code>main</code> vai para produção depois do health check. Slot swap no Azure evita downtime.</p>
        <h2>Rollback</h2>
        <p>Se o health check falha, o pipeline devolve o slot anterior. Staging precisa ser o mais próximo possível da produção.</p>
        <h2>Práticas</h2>
        <ul>
          <li>Ambientes isolados e secrets no GitHub</li>
          <li>Testes automatizados com cobertura mínima definida</li>
          <li>Blue-green / slot swap para zero downtime</li>
          <li>Logs e métricas no momento do deploy</li>
        </ul>
      `,
      'powerbi-vale': `
        <p>Na Vale, construí dashboards para análise de paradas industriais. O objetivo era reduzir o tempo até a causa e apoiar a decisão operacional.</p>
        <h2>O desafio</h2>
        <ul>
          <li>Identificar rápido a causa de parada não programada</li>
          <li>Ver padrão de falha em equipamento crítico</li>
          <li>Apoiar manutenção preventiva</li>
          <li>Reduzir MTTR</li>
        </ul>
        <h2>Solução</h2>
        <p>Integração de fontes (incluindo SAP), modelo dimensional e medidas DAX: MTTR, MTBF, disponibilidade e custo por hora parada.</p>
        <pre><code>MTTR =
DIVIDE(
    SUM('Paradas'[Duração_Minutos]),
    COUNTROWS('Paradas'),
    0
)</code></pre>
        <h2>O que o dashboard mostrava</h2>
        <ul>
          <li>KPIs de disponibilidade, MTTR e custo</li>
          <li>Pareto de equipamentos vs. tempo parado</li>
          <li>Heatmap por hora e dia</li>
          <li>Alertas quando o indicador saía da faixa</li>
        </ul>
        <h2>Resultado</h2>
        <p>Menos tempo para achar o problema, melhor leitura da disponibilidade e decisão com dado — não só com relato de turno.</p>
      `,
      'async-promises': `
        <p>Promise e async/await resolvem o mesmo problema. A escolha certa depende do fluxo: paralelo, pipeline ou lógica com condicional.</p>
        <h2>Quando Promise ajuda</h2>
        <p><code>Promise.all</code> para trabalho paralelo. Encadeamento <code>.then</code> para pipeline de transformação.</p>
        <pre><code>function loadDashboardData() {
  return Promise.all([
    fetch('/api/users'),
    fetch('/api/orders'),
    fetch('/api/products')
  ]).then((responses) => Promise.all(responses.map((r) => r.json())));
}</code></pre>
        <h2>Quando async/await ajuda</h2>
        <p>Regra com if, loop e tratamento de erro fica mais legível. Dá para misturar: await nos passos sequenciais e <code>Promise.all</code> no que pode ir junto.</p>
        <h2>Erros e timeout</h2>
        <p><code>Promise.allSettled</code> quando uma falha não pode derrubar o restante. <code>Promise.race</code> para timeout.</p>
        <h2>Resumo</h2>
        <ul>
          <li><strong>Promises:</strong> paralelo, pipeline, estilo funcional</li>
          <li><strong>async/await:</strong> fluxo complexo e código procedural</li>
          <li><strong>Os dois:</strong> quando o caminho mistura sequência e concorrência</li>
        </ul>
      `,
      'carreira-tech': `
        <p>Minha entrada em desenvolvimento não foi linear. Vim da operação de TI — suporte, rede, servidor — e fui para o código. Isso mudou a forma como eu projeto sistema.</p>
        <h2>De onde eu vim</h2>
        <p>Cabeamento, suporte N1/N2 e depois servidores me ensinaram uma coisa que tutorial não ensina: o que quebra em produção. Comunicação com time não técnico e prazo de operação também vieram daí.</p>
        <h2>Como eu estudei</h2>
        <ul>
          <li>Fundamento todo dia, não só maratona de fim de semana</li>
          <li>Projeto real no lugar de tutorial copiado</li>
          <li>GitHub desde o primeiro exercício</li>
          <li>React, API e banco no mesmo sistema — o ciclo completo</li>
        </ul>
        <h2>O que pesou de verdade</h2>
        <ul>
          <li>Portfólio que mostra contrato, dado e deploy — não só tela</li>
          <li>Consistência: uma hora por dia vence oito horas soltas</li>
          <li>Pedir ajuda e documentar o que eu aprendi</li>
          <li>Soft skill: explicar a solução para quem não programa</li>
        </ul>
        <h2>O que eu faria de novo</h2>
        <p>Começaria testes mais cedo. Focaria mais em fundamento do que em framework da semana. Inglês técnico abre porta — por isso o CEI entrou no currículo.</p>
        <p>A transição continua. A diferença é que hoje eu leio a falha do cabo ao código.</p>
      `
    },
    en: {
      'clean-architecture': `
        <p>Clean Architecture, proposed by Robert C. Martin (Uncle Bob), is a pattern for systems that stay organized, testable, and independent of frameworks.</p>
        <h2>Why Clean Architecture in React?</h2>
        <p>React apps grow fast. Without a structure, you get fat components, business rules in the UI, and brittle tests.</p>
        <ul>
          <li>Components with too many responsibilities</li>
          <li>Domain logic mixed with presentation</li>
          <li>Features that are hard to test</li>
          <li>Tight coupling between layers</li>
        </ul>
        <h2>Layer structure</h2>
        <h3>1. Entities</h3>
        <p>Framework-free business objects. They hold the most critical rules.</p>
        <pre><code>export class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
  isValid() {
    return this.name && this.email && this.email.includes('@');
  }
}</code></pre>
        <h3>2. Use cases</h3>
        <p>They orchestrate the flow between entities and interfaces.</p>
        <pre><code>export class CreateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute(userData) {
    const user = new User(null, userData.name, userData.email);
    if (!user.isValid()) throw new Error('Invalid data');
    return this.userRepository.save(user);
  }
}</code></pre>
        <h3>3. Interface adapters</h3>
        <p>They convert data between use cases and the outside world: UI, database, and APIs.</p>
        <h2>React layout</h2>
        <pre><code>src/
├── entities/
├── usecases/
├── adapters/
└── frameworks/web/</code></pre>
        <h2>Benefits</h2>
        <ul>
          <li><strong>Testability:</strong> each layer can be tested on its own</li>
          <li><strong>Maintenance:</strong> a change in one layer does not break the others</li>
          <li><strong>Flexibility:</strong> swap a framework without rewriting the domain</li>
        </ul>
        <p>The upfront cost is higher. In a system that grows, you get the return in maintenance and tests.</p>
      `,
      'nodejs-performance': `
        <p>Node.js is efficient, but every runtime has a bottleneck. Optimize from measurements, not guesses.</p>
        <h2>1. Profiling and monitoring</h2>
        <pre><code>node --prof app.js
node --prof-process isolate-0x*.log > processed.txt</code></pre>
        <ul>
          <li><strong>Clinic.js:</strong> performance suite</li>
          <li><strong>0x:</strong> visual profiler</li>
          <li><strong>New Relic / Datadog:</strong> production</li>
        </ul>
        <h2>2. Memory</h2>
        <p>A listener without cleanup and a large object stuck in scope leak memory. Use <code>once</code>, remove listeners, and consider an object pool when GC becomes a cost.</p>
        <h2>3. Cluster and worker threads</h2>
        <p>The event loop is single-threaded. Cluster spreads connections across CPUs; worker threads handle CPU-bound work without blocking the API.</p>
        <h2>Practices</h2>
        <ul>
          <li>Measure before you optimize</li>
          <li>Avoid sync work on the request path</li>
          <li>Cache what is expensive and stable</li>
          <li>Watch latency, memory, and event-loop delay in production</li>
        </ul>
      `,
      'cicd-azure': `
        <p>A solid CI/CD pipeline reduces risk: it tests, publishes to staging, validates, and only then goes to production — with rollback.</p>
        <h2>Continuous integration</h2>
        <p>In GitHub Actions: lint, tests, coverage, audit, and SAST (CodeQL) on every push and pull request.</p>
        <pre><code>on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]</code></pre>
        <h2>Continuous deployment</h2>
        <p><code>develop</code> goes to staging. <code>main</code> goes to production after the health check. Azure slot swap avoids downtime.</p>
        <h2>Rollback</h2>
        <p>If the health check fails, the pipeline swaps back to the previous slot. Staging should be as close as possible to production.</p>
        <h2>Practices</h2>
        <ul>
          <li>Isolated environments and secrets in GitHub</li>
          <li>Automated tests with a defined coverage floor</li>
          <li>Blue-green / slot swap for zero downtime</li>
          <li>Logs and metrics at deploy time</li>
        </ul>
      `,
      'powerbi-vale': `
        <p>At Vale I built dashboards for industrial downtime analysis. The goal was to shorten time-to-cause and support operational decisions.</p>
        <h2>The challenge</h2>
        <ul>
          <li>Find the cause of unplanned downtime quickly</li>
          <li>See failure patterns on critical equipment</li>
          <li>Support preventive maintenance</li>
          <li>Reduce MTTR</li>
        </ul>
        <h2>The solution</h2>
        <p>Source integration (including SAP), a dimensional model, and DAX measures: MTTR, MTBF, availability, and cost per downtime hour.</p>
        <pre><code>MTTR =
DIVIDE(
    SUM('Paradas'[Duração_Minutos]),
    COUNTROWS('Paradas'),
    0
)</code></pre>
        <h2>What the dashboard showed</h2>
        <ul>
          <li>Availability, MTTR, and cost KPIs</li>
          <li>Pareto of equipment vs. downtime</li>
          <li>Heatmap by hour and day</li>
          <li>Alerts when a metric left the band</li>
        </ul>
        <h2>Outcome</h2>
        <p>Less time to find the issue, a clearer read on availability, and decisions based on data — not only on shift reports.</p>
      `,
      'async-promises': `
        <p>Promises and async/await solve the same problem. The right choice depends on the flow: parallel work, a pipeline, or logic with branches.</p>
        <h2>When Promises help</h2>
        <p><code>Promise.all</code> for parallel work. <code>.then</code> chains for a transformation pipeline.</p>
        <pre><code>function loadDashboardData() {
  return Promise.all([
    fetch('/api/users'),
    fetch('/api/orders'),
    fetch('/api/products')
  ]).then((responses) => Promise.all(responses.map((r) => r.json())));
}</code></pre>
        <h2>When async/await helps</h2>
        <p>Rules with ifs, loops, and error handling stay more readable. You can mix both: await sequential steps and use <code>Promise.all</code> for work that can run together.</p>
        <h2>Errors and timeouts</h2>
        <p><code>Promise.allSettled</code> when one failure must not take the rest down. <code>Promise.race</code> for timeouts.</p>
        <h2>Summary</h2>
        <ul>
          <li><strong>Promises:</strong> parallel work, pipelines, functional style</li>
          <li><strong>async/await:</strong> complex flow and procedural code</li>
          <li><strong>Both:</strong> when the path mixes sequence and concurrency</li>
        </ul>
      `,
      'carreira-tech': `
        <p>My path into software was not linear. I came from IT operations — support, networks, servers — and moved into code. That changed how I design systems.</p>
        <h2>Where I came from</h2>
        <p>Cabling, L1/L2 support, and later servers taught me something tutorials skip: what breaks in production. Talking to non-technical teams and working under operational deadlines came from there too.</p>
        <h2>How I studied</h2>
        <ul>
          <li>Fundamentals every day, not only weekend marathons</li>
          <li>Real projects instead of copied tutorials</li>
          <li>GitHub from the first exercise</li>
          <li>React, API, and database in the same system — the full cycle</li>
        </ul>
        <h2>What actually mattered</h2>
        <ul>
          <li>A portfolio that shows contract, data, and deploy — not just a screen</li>
          <li>Consistency: one hour a day beats eight scattered hours</li>
          <li>Asking for help and writing down what I learned</li>
          <li>Soft skills: explaining the solution to people who do not code</li>
        </ul>
        <h2>What I would do again</h2>
        <p>I would start tests earlier. I would focus more on fundamentals than on the framework of the week. Technical English opens doors — that is why CEI is on the resume.</p>
        <p>The transition is still going. The difference is that today I can read a failure from the cable to the code.</p>
      `
    },
    es: {
      'clean-architecture': `
        <p>Clean Architecture, propuesta por Robert C. Martin (Uncle Bob), es un patrón para sistemas más organizados, testeables e independientes de frameworks.</p>
        <h2>¿Por qué Clean Architecture en React?</h2>
        <p>Las apps React crecen rápido. Sin estructura aparecen componentes gordos, reglas de negocio en la UI y tests frágiles.</p>
        <ul>
          <li>Componentes con demasiadas responsabilidades</li>
          <li>Lógica de dominio mezclada con la presentación</li>
          <li>Funciones difíciles de testear</li>
          <li>Acoplamiento fuerte entre capas</li>
        </ul>
        <h2>Estructura de capas</h2>
        <h3>1. Entities</h3>
        <p>Objetos de negocio independientes del framework. Guardan las reglas más críticas.</p>
        <pre><code>export class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
  isValid() {
    return this.name && this.email && this.email.includes('@');
  }
}</code></pre>
        <h3>2. Use cases</h3>
        <p>Orquestan el flujo entre entidades e interfaces.</p>
        <pre><code>export class CreateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute(userData) {
    const user = new User(null, userData.name, userData.email);
    if (!user.isValid()) throw new Error('Datos inválidos');
    return this.userRepository.save(user);
  }
}</code></pre>
        <h3>3. Interface adapters</h3>
        <p>Convierten datos entre casos de uso y el mundo externo: UI, base de datos y APIs.</p>
        <h2>Implementación en React</h2>
        <pre><code>src/
├── entities/
├── usecases/
├── adapters/
└── frameworks/web/</code></pre>
        <h2>Beneficios</h2>
        <ul>
          <li><strong>Testabilidad:</strong> cada capa se puede probar sola</li>
          <li><strong>Mantenimiento:</strong> un cambio en una capa no tumba las otras</li>
          <li><strong>Flexibilidad:</strong> cambiar de framework sin reescribir el dominio</li>
        </ul>
        <p>La inversión inicial es mayor. En un sistema que crece, el retorno aparece en el mantenimiento y en los tests.</p>
      `,
      'nodejs-performance': `
        <p>Node.js es eficiente, pero cualquier runtime tiene cuello de botella. Optimiza con datos, no con suposiciones.</p>
        <h2>1. Profiling y monitoreo</h2>
        <pre><code>node --prof app.js
node --prof-process isolate-0x*.log > processed.txt</code></pre>
        <ul>
          <li><strong>Clinic.js:</strong> suite de rendimiento</li>
          <li><strong>0x:</strong> profiler visual</li>
          <li><strong>New Relic / Datadog:</strong> producción</li>
        </ul>
        <h2>2. Memoria</h2>
        <p>Un listener sin cleanup y un objeto grande atrapado en el scope filtran memoria. Usa <code>once</code>, quita listeners y considera object pool cuando el GC se vuelve costo.</p>
        <h2>3. Cluster y worker threads</h2>
        <p>El event loop es de un solo hilo. Cluster reparte conexiones entre CPUs; worker threads resuelven CPU-bound sin bloquear la API.</p>
        <h2>Prácticas</h2>
        <ul>
          <li>Mide antes de optimizar</li>
          <li>Evita trabajo síncrono en el request path</li>
          <li>Cachea lo que es caro y estable</li>
          <li>Observa latencia, memoria y event-loop delay en producción</li>
        </ul>
      `,
      'cicd-azure': `
        <p>Un pipeline de CI/CD bien hecho reduce riesgo: testa, publica en staging, valida y solo entonces va a producción — con rollback.</p>
        <h2>Integración continua</h2>
        <p>En GitHub Actions: lint, tests, cobertura, audit y SAST (CodeQL) en cada push y pull request.</p>
        <pre><code>on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]</code></pre>
        <h2>Deploy continuo</h2>
        <p><code>develop</code> va a staging. <code>main</code> va a producción después del health check. El slot swap de Azure evita downtime.</p>
        <h2>Rollback</h2>
        <p>Si el health check falla, el pipeline devuelve el slot anterior. Staging debe parecerse lo más posible a producción.</p>
        <h2>Prácticas</h2>
        <ul>
          <li>Entornos aislados y secrets en GitHub</li>
          <li>Tests automatizados con cobertura mínima definida</li>
          <li>Blue-green / slot swap para zero downtime</li>
          <li>Logs y métricas en el momento del deploy</li>
        </ul>
      `,
      'powerbi-vale': `
        <p>En Vale construí dashboards para el análisis de paradas industriales. El objetivo era reducir el tiempo hasta la causa y apoyar la decisión operativa.</p>
        <h2>El desafío</h2>
        <ul>
          <li>Identificar rápido la causa de una parada no programada</li>
          <li>Ver el patrón de falla en equipo crítico</li>
          <li>Apoyar el mantenimiento preventivo</li>
          <li>Reducir el MTTR</li>
        </ul>
        <h2>La solución</h2>
        <p>Integración de fuentes (incluido SAP), modelo dimensional y medidas DAX: MTTR, MTBF, disponibilidad y costo por hora parada.</p>
        <pre><code>MTTR =
DIVIDE(
    SUM('Paradas'[Duração_Minutos]),
    COUNTROWS('Paradas'),
    0
)</code></pre>
        <h2>Qué mostraba el dashboard</h2>
        <ul>
          <li>KPIs de disponibilidad, MTTR y costo</li>
          <li>Pareto de equipos vs. tiempo parado</li>
          <li>Heatmap por hora y día</li>
          <li>Alertas cuando el indicador salía de la banda</li>
        </ul>
        <h2>Resultado</h2>
        <p>Menos tiempo para encontrar el problema, mejor lectura de la disponibilidad y decisión con dato — no solo con el relato del turno.</p>
      `,
      'async-promises': `
        <p>Promise y async/await resuelven el mismo problema. La elección correcta depende del flujo: paralelo, pipeline o lógica con condicionales.</p>
        <h2>Cuándo ayuda Promise</h2>
        <p><code>Promise.all</code> para trabajo en paralelo. Encadenar <code>.then</code> para un pipeline de transformación.</p>
        <pre><code>function loadDashboardData() {
  return Promise.all([
    fetch('/api/users'),
    fetch('/api/orders'),
    fetch('/api/products')
  ]).then((responses) => Promise.all(responses.map((r) => r.json())));
}</code></pre>
        <h2>Cuándo ayuda async/await</h2>
        <p>Una regla con if, loop y manejo de error queda más legible. Se pueden mezclar: await en los pasos secuenciales y <code>Promise.all</code> en lo que puede ir junto.</p>
        <h2>Errores y timeout</h2>
        <p><code>Promise.allSettled</code> cuando un fallo no puede tumbar el resto. <code>Promise.race</code> para timeout.</p>
        <h2>Resumen</h2>
        <ul>
          <li><strong>Promises:</strong> paralelo, pipeline, estilo funcional</li>
          <li><strong>async/await:</strong> flujo complejo y código procedural</li>
          <li><strong>Los dos:</strong> cuando el camino mezcla secuencia y concurrencia</li>
        </ul>
      `,
      'carreira-tech': `
        <p>Mi entrada al desarrollo no fue lineal. Vine de la operación de TI — soporte, red, servidor — y pasé al código. Eso cambió cómo diseño un sistema.</p>
        <h2>De dónde vengo</h2>
        <p>Cableado, soporte N1/N2 y después servidores me enseñaron algo que el tutorial no enseña: qué se rompe en producción. La comunicación con equipos no técnicos y el plazo de operación también vinieron de ahí.</p>
        <h2>Cómo estudié</h2>
        <ul>
          <li>Fundamento todos los días, no solo maratón de fin de semana</li>
          <li>Proyecto real en lugar de tutorial copiado</li>
          <li>GitHub desde el primer ejercicio</li>
          <li>React, API y base en el mismo sistema — el ciclo completo</li>
        </ul>
        <h2>Lo que de verdad pesó</h2>
        <ul>
          <li>Portafolio que muestra contrato, dato y deploy — no solo pantalla</li>
          <li>Consistencia: una hora por día gana a ocho horas sueltas</li>
          <li>Pedir ayuda y documentar lo que aprendí</li>
          <li>Soft skill: explicar la solución a quien no programa</li>
        </ul>
        <h2>Lo que haría de nuevo</h2>
        <p>Empezaría los tests más temprano. Me enfocaría más en fundamento que en el framework de la semana. El inglés técnico abre puertas — por eso el CEI está en el currículum.</p>
        <p>La transición sigue. La diferencia es que hoy leo la falla del cable al código.</p>
      `
    }
  };

  function resolveTag(tag) {
    if (tag.indexOf('.') === -1) return tag;
    const translated = window.lookupI18n && window.lookupI18n(tag);
    return typeof translated === 'string' ? translated : tag;
  }

  window.getBlogArticle = function (id) {
    const lang = (window.getPortfolioLang && window.getPortfolioLang()) || 'pt';
    const meta = ARTICLE_KEYS[id];
    if (!meta) return null;
    const body = (CONTENT[lang] && CONTENT[lang][id]) || CONTENT.pt[id];
    return {
      category: window.lookupI18n('blog.' + meta.prefix + 'Cat'),
      title: window.lookupI18n('blog.' + meta.prefix + 'Title'),
      date: meta.date,
      readingTime: window.lookupI18n('blog.' + meta.prefix + 'Time'),
      tags: meta.tags.map(resolveTag),
      content: body
    };
  };
})();
