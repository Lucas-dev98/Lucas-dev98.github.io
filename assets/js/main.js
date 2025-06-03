// Animação de contagem
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
new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    animateCount();
  }
}).observe(document.querySelector('.impact-metrics'));