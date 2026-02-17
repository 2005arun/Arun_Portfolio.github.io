const LINKS = {
  github: "#",
  linkedin: "#",
  leetcode: "#",
  codeforces: "#",
  gfg: "#",
  hackerrank: "#",
  codechef: "https://www.codechef.com/users/arunrs2023",
  netify: "#",
  autositegen: "#",
  emotionsense: "#",
  chat: "#"
};

function qs(sel, root = document){
  return root.querySelector(sel);
}

function qsa(sel, root = document){
  return Array.from(root.querySelectorAll(sel));
}

function setToast(message){
  const toast = qs('[data-toast]');
  if(!toast) return;
  toast.textContent = message;
  toast.classList.add('is-show');
  window.clearTimeout(setToast._t);
  setToast._t = window.setTimeout(() => {
    toast.classList.remove('is-show');
    toast.textContent = '';
  }, 2200);
}

function getTheme(){
  const saved = window.localStorage.getItem('theme');
  if(saved === 'light' || saved === 'dark') return saved;
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  return prefersLight ? 'light' : 'dark';
}

function applyTheme(theme){
  if(theme === 'light'){
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  window.localStorage.setItem('theme', theme);
}

function setupThemeToggle(){
  const btn = qs('[data-theme-toggle]');
  if(!btn) return;

  btn.addEventListener('click', () => {
    const current = getTheme();
    const next = current === 'light' ? 'dark' : 'light';
    applyTheme(next);
    setToast(`Theme: ${next}`);
  });
}

async function copyText(text, label){
  try{
    await navigator.clipboard.writeText(text);
    setToast(`${label} copied`);
  } catch {
    try{
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
      setToast(`${label} copied`);
    } catch {
      setToast('Copy failed');
    }
  }
}

function setupCopy(){
  qsa('[data-copy]').forEach((el) => {
    el.addEventListener('click', () => {
      const value = el.getAttribute('value') || el.value || '';
      const label = el.getAttribute('data-copy-label') || 'Text';
      if(value) copyText(value, label);
    });
  });
}

function setupExternalLinks(){
  qsa('[data-ext-link]').forEach((a) => {
    const key = a.getAttribute('data-ext-link');
    const url = LINKS[key] || '#';
    const currentHref = (a.getAttribute('href') || '').trim();
    if(!currentHref || currentHref === '#'){
      a.setAttribute('href', url);
    }
    const finalHref = (a.getAttribute('href') || '').trim();
    if(finalHref && finalHref !== '#' && /^https?:\/\//i.test(finalHref)){
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noreferrer');
    }
  });

  qsa('[data-project-link]').forEach((a) => {
    const key = a.getAttribute('data-project-link');
    const normalized = (key || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const url = LINKS[normalized] || LINKS[key] || '#';
    const currentHref = (a.getAttribute('href') || '').trim();
    if(!currentHref || currentHref === '#'){
      a.setAttribute('href', url);
    }
    const finalHref = (a.getAttribute('href') || '').trim();
    if(finalHref && finalHref !== '#' && /^https?:\/\//i.test(finalHref)){
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noreferrer');
    }
  });
}

function setupYear(){
  const y = qs('[data-year]');
  if(y) y.textContent = String(new Date().getFullYear());
}

function setupMobileNav(){
  const toggle = qs('[data-nav-toggle]');
  const panel = qs('[data-nav-panel]');
  if(!toggle || !panel) return;

  function close(){
    panel.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', () => {
    const open = panel.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  qsa('.nav__link', panel).forEach((a) => {
    a.addEventListener('click', () => close());
  });

  document.addEventListener('click', (e) => {
    if(!panel.classList.contains('is-open')) return;
    const t = e.target;
    if(t === toggle || toggle.contains(t)) return;
    if(panel.contains(t)) return;
    close();
  });

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') close();
  });
}

function setupReveal(){
  const els = qsa('[data-reveal]');
  if(!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach((el) => io.observe(el));
}

function setupActiveNav(){
  const links = qsa('.nav__link');
  const map = new Map();

  links.forEach((a) => {
    const href = a.getAttribute('href') || '';
    if(href.startsWith('#')){
      const id = href.slice(1);
      const section = qs(`#${CSS.escape(id)}`);
      if(section) map.set(section, a);
    }
  });

  const sections = Array.from(map.keys());
  if(!sections.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const a = map.get(entry.target);
      if(!a) return;
      if(entry.isIntersecting){
        links.forEach((x) => x.classList.remove('is-active'));
        a.classList.add('is-active');
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 });

  sections.forEach((s) => io.observe(s));
}

function setupProjectFilters(){
  const filters = qsa('[data-filter]');
  const cards = qsa('[data-projects] .project');
  if(!filters.length || !cards.length) return;

  function setActive(btn){
    filters.forEach((b) => {
      b.classList.toggle('is-active', b === btn);
      b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
    });
  }

  function apply(tag){
    cards.forEach((card) => {
      const tags = (card.getAttribute('data-tags') || '').split(/\s+/).filter(Boolean);
      const show = tag === 'all' || tags.includes(tag);
      card.classList.toggle('is-hidden', !show);
    });
  }

  filters.forEach((btn) => {
    btn.addEventListener('click', () => {
      const tag = btn.getAttribute('data-filter') || 'all';
      setActive(btn);
      apply(tag);
    });
  });
}

function prefersReducedMotion(){
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function setupCharts(){
  const charts = qsa('[data-chart]');
  if(!charts.length) return;

  const reduce = prefersReducedMotion();

  function setProgress(el){
    const value = Number(el.getAttribute('data-value') || 0);
    const max = Number(el.getAttribute('data-max') || 1);
    const p = max > 0 ? Math.max(0, Math.min(1, value / max)) : 0;
    const deg = `${Math.round(p * 360)}deg`;

    el.style.setProperty('--deg', deg);
    el.classList.add('is-ready');

    if(reduce) return;
    el.animate(
      [
        { transform: 'scale(0.985)' },
        { transform: 'scale(1)' }
      ],
      { duration: 420, easing: 'cubic-bezier(.2,.8,.2,1)' }
    );
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(!entry.isIntersecting) return;
      setProgress(entry.target);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.18 });

  charts.forEach((el) => io.observe(el));
}

function setupArcCharts(){
  const arcs = qsa('[data-arc]');
  if(!arcs.length) return;

  const reduce = prefersReducedMotion();

  function render(el){
    const value = Number(el.getAttribute('data-value') || 0);
    const max = Number(el.getAttribute('data-max') || 1);
    const color = (el.getAttribute('data-color') || '').trim();

    const p = max > 0 ? Math.max(0, Math.min(1, value / max)) : 0;
    const circle = qs('.cp__progress', el);
    const track = qs('.cp__track', el);
    if(!circle || !track) return;

    const r = Number(circle.getAttribute('r') || 46);
    const c = 2 * Math.PI * r;
    const dash = Math.round(c * p);
    const gap = Math.round(c - dash);

    circle.style.strokeDasharray = `${dash} ${gap}`;
    if(color) circle.style.stroke = color;

    if(reduce) return;
    el.animate(
      [
        { transform: 'scale(0.985)' },
        { transform: 'scale(1)' }
      ],
      { duration: 420, easing: 'cubic-bezier(.2,.8,.2,1)' }
    );
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(!entry.isIntersecting) return;
      render(entry.target);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.18 });

  arcs.forEach((el) => io.observe(el));
}

function setupContactForm(){
  const form = qs('[data-contact-form]');
  if(!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();

    const to = 'arunramamoorthi05@gmail.com';
    const subject = encodeURIComponent(`Portfolio Contact — ${name}`);
    const body = encodeURIComponent(`Hi Arun,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`);

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    setToast('Opening email...');
    form.reset();
  });
}

(function init(){
  applyTheme(getTheme());
  setupThemeToggle();
  setupCopy();
  setupExternalLinks();
  setupYear();
  setupMobileNav();
  setupReveal();
  setupActiveNav();
  setupProjectFilters();
  setupCharts();
  setupArcCharts();
  setupContactForm();
})();
