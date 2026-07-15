"use strict";

document.documentElement.classList.add("js");

const english = {
  "skip-link": "Skip to content",
  "nav-work": "Work",
  "nav-services": "Services",
  "nav-about": "Practice",
  "nav-contact": "Contact",
  "hero-kicker": "Systems & Automation Architect — Jeddah",
  "hero-title-a": "I turn business data",
  "hero-title-b": "into decisions that work.",
  "hero-lead": "I build systems that connect sales, inventory, branches, and reporting into one clear view—less manual work and faster decisions.",
  "cta-work": "Explore the work",
  "cta-project": "Start a project",
  "signal-live": "System live",
  "signal-data": "Data",
  "signal-logic": "Processing",
  "signal-decision": "Decision",
  "signal-manual": "Less manual work",
  "signal-speed": "Faster reporting",
  "stat-years": "years in retail systems",
  "stat-branches": "branches in one view",
  "stat-hours": "saved weekly for management",
  "stat-systems": "systems ready to tailor",
  "work-title": "Work measured by impact, not screen count.",
  "work-intro": "Real systems designed to save time, connect teams, and make the daily picture easier to read.",
  "project-1-type": "Integrated retail analytics",
  "project-1-title": "One live view of 52 branches.",
  "project-1-summary": "Sales, footfall, inventory, and ERP data connected in a daily platform that helps management catch gaps and act immediately.",
  "case-challenge": "Challenge",
  "case-solution": "Solution",
  "case-impact": "Impact",
  "project-1-challenge": "Scattered data and delayed manual reporting.",
  "project-1-solution": "A data warehouse with live BI dashboards.",
  "project-1-impact": "15 hours saved weekly and clearer daily visibility.",
  "project-2-type": "E-commerce integration",
  "project-2-title": "Inventory, order, and invoice sync engine",
  "project-2-summary": "One reliable flow across online stores, inventory, and finance systems.",
  "project-3-type": "Branch operations",
  "project-3-title": "A portal connecting branches, warehouse, and management",
  "project-4-type": "Report automation",
  "project-4-title": "Scheduled reports delivered ready—without manual work",
  "project-5-type": "Maintenance & service",
  "project-5-title": "Track incidents, ownership, and response time",
  "project-6-type": "Analytics for growing teams",
  "project-6-title": "Dash Analytics—a lightweight view of performance",
  "project-6-summary": "A configurable platform that helps smaller teams track the metrics that matter.",
  "project-7-type": "Inventory intelligence",
  "project-7-title": "Mobile barcode counting with instant sync",
  "services-title": "See what the system can do.",
  "services-intro": "12 practical demos—from raw business data to a clear screen your team can use every day.",
  "reel-preview": "Live preview",
  "service-index-title": "Select a system",
  "service-index-hint": "Click to preview",
  "service-1": "Real-time performance dashboards",
  "service-2": "Systems integration & data pipelines",
  "service-3": "Visitor & conversion analytics",
  "service-4": "Branch operations applications",
  "service-5": "Inventory intelligence & alerts",
  "service-6": "Product & basket analytics",
  "service-7": "Targets & team performance",
  "service-8": "Scheduled automated reporting",
  "service-9": "AI business assistant",
  "service-10": "E-commerce platform integration",
  "service-11": "Unified management control center",
  "service-12": "Finance & VAT reporting",
  "about-title": "Technology that understands the operation before writing code.",
  "about-intro": "I work where operations, data, and software meet—turning everyday friction into a simple system teams can rely on.",
  "about-heading": "I bridge what management needs with what technology can actually deliver.",
  "about-copy": "Over 4+ years in retail and multi-branch operations, I have led integration, analytics, and automation projects from process discovery to a clear daily tool.",
  "about-quote": "“The best system is not the most complex one. It is the one that saves time and makes decisions easier.”",
  "cv-ar": "Arabic CV",
  "cv-en": "English CV",
  "capability-title": "Core capabilities",
  "capability-1": "Data engineering & integration",
  "capability-2": "Process & report automation",
  "capability-3": "Performance dashboards & analytics",
  "capability-4": "Branch & inventory operations systems",
  "industries-title": "Industries",
  "industry-1": "Retail",
  "industry-2": "E-commerce",
  "industry-3": "Food & beverage",
  "industry-4": "Services",
  "process-1-title": "Understand",
  "process-1-copy": "Map the process and find where time is lost.",
  "process-2-title": "Design",
  "process-2-copy": "Choose the simplest solution that creates impact.",
  "process-3-title": "Build",
  "process-3-copy": "Connect the sources and ship a usable first version.",
  "process-4-title": "Improve",
  "process-4-copy": "Measure performance and evolve it with your team.",
  "contact-title": "A process keeps repeating? Let’s make it run itself.",
  "contact-intro": "Describe the problem briefly. I will review it and suggest a practical first step—without unnecessary complexity or a long commitment.",
  "email-label": "Email",
  "location-label": "Location",
  "location-value": "Jeddah, Saudi Arabia",
  "form-name": "Name",
  "form-email": "Email address",
  "form-company": "Company or industry",
  "form-service": "What do you need?",
  "form-service-placeholder": "Choose the closest area…",
  "form-service-1": "Dashboards & analytics",
  "form-service-2": "Process & report automation",
  "form-service-3": "Systems & store integration",
  "form-service-4": "Custom operations system",
  "form-service-5": "Consultation & solution discovery",
  "form-message": "Describe the process or problem",
  "form-submit": "Send details on WhatsApp",
  "footer-copy": "Clearer systems. Less manual work. Faster decisions."
};

const englishAria = {
  "nav-label": "Primary navigation",
  "menu-open": "Open menu",
  "theme-dark": "Enable dark mode",
  "signal-label": "Workflow from data to decision",
  "proof-label": "Experience figures",
  "video-label": "Service video preview",
  "video-play": "Play video",
  "service-index-label": "Choose a service to preview",
  "footer-nav-label": "Footer links",
  "whatsapp-label": "Contact on WhatsApp"
};

const englishPlaceholders = {
  "form-name-placeholder": "Your name…",
  "form-email-placeholder": "name@company.com",
  "form-company-placeholder": "Example: retail, e-commerce…",
  "form-message-placeholder": "What happens today, and what result do you want?…"
};

const englishAlt = {
  "project-1-alt": "Retail sales analytics platform interface",
  "project-2-alt": "E-commerce synchronization engine interface",
  "project-3-alt": "Branch operations portal interface",
  "project-4-alt": "Automated reporting system interface",
  "project-5-alt": "Maintenance ticketing system interface",
  "project-6-alt": "Dash Analytics platform interface",
  "project-7-alt": "Barcode inventory system interface"
};

const services = [
  {
    video: "./assets/videos/services/realtime-dashboards.mp4",
    poster: "./services-package/stills-check/f200.png",
    ar: { title: "لوحات متابعة الأداء اللحظية", description: "مبيعات الفروع والزوار وأداء الفرق في شاشة واحدة تتحدث طوال اليوم." },
    en: { title: "Real-time performance dashboards", description: "Branch sales, visitor traffic, and team performance in one view that updates throughout the day." }
  },
  {
    video: "./assets/videos/services/systems-integration.mp4",
    poster: "./services-package/stills-check/pipeline.png",
    ar: { title: "تكامل الأنظمة وخطوط البيانات", description: "اربط ERP ونقاط البيع والمتاجر وقواعد البيانات في تدفق موحّد وموثوق." },
    en: { title: "Systems integration & data pipelines", description: "Connect ERP, POS, online stores, and databases through one reliable data flow." }
  },
  {
    video: "./assets/videos/services/visitor-analytics.mp4",
    poster: "./services-package/stills-check/f330.png",
    ar: { title: "تحليلات الزوار ومعدل التحويل", description: "اعرف حركة الزوار ونسبة التحويل وأفضل ساعات الأداء لكل فرع." },
    en: { title: "Visitor & conversion analytics", description: "Understand footfall, conversion, and the strongest trading hours for every branch." }
  },
  {
    video: "./assets/videos/services/branch-operations-app.mp4",
    poster: "./services-package/stills-check/branchapp.png",
    ar: { title: "تطبيقات تشغيلية للفروع", description: "حوّل طلبات الفروع ومهامها اليومية إلى مسار واضح يمكن تتبعه." },
    en: { title: "Branch operations applications", description: "Turn branch requests and daily tasks into a clear, trackable workflow." }
  },
  {
    video: "./assets/videos/services/inventory-intelligence.mp4",
    poster: "./services-package/stills-check/inventory.png",
    ar: { title: "ذكاء المخزون والتنبيهات", description: "راقب النقص والركود والحركة غير الطبيعية قبل أن تتحول إلى خسارة." },
    en: { title: "Inventory intelligence & alerts", description: "Spot shortages, slow stock, and unusual movement before they become losses." }
  },
  {
    video: "./assets/videos/services/product-analytics.mp4",
    poster: "./services-package/stills-check/f040.png",
    ar: { title: "تحليل المنتجات وسلة المشتريات", description: "اكتشف المنتجات التي تنمو معاً والفرص المخفية داخل سلة العميل." },
    en: { title: "Product & basket analytics", description: "Discover products that grow together and hidden opportunities inside each basket." }
  },
  {
    video: "./assets/videos/services/targets-performance.mp4",
    poster: "./services-package/stills-check/f330.png",
    ar: { title: "إدارة الأهداف وأداء الفرق", description: "حوّل الأهداف إلى مؤشرات يومية واضحة لكل فرع وفريق ومسؤول." },
    en: { title: "Targets & team performance", description: "Turn targets into clear daily indicators for every branch, team, and owner." }
  },
  {
    video: "./assets/videos/services/automated-reports.mp4",
    poster: "./services-package/stills-check/reports.png",
    ar: { title: "التقارير التلقائية المجدولة", description: "تقارير دقيقة تصل في موعدها إلى البريد أو واتساب دون نسخ ولصق." },
    en: { title: "Scheduled automated reporting", description: "Accurate reports delivered on time by email or WhatsApp—without copy and paste." }
  },
  {
    video: "./assets/videos/services/ai-business-assistant.mp4",
    poster: "./services-package/stills-check/aichat.png",
    ar: { title: "مساعد أعمال بالذكاء الاصطناعي", description: "اسأل بياناتك بلغة طبيعية واحصل على إجابة وسياق يساعدانك على القرار." },
    en: { title: "AI business assistant", description: "Ask your business data in plain language and get answers with decision-ready context." }
  },
  {
    video: "./assets/videos/services/ecommerce-sync.mp4",
    poster: "./services-package/stills-check/ecommerce.png",
    ar: { title: "ربط المتاجر والمنصات الإلكترونية", description: "زامن المنتجات والمخزون والطلبات بين قنوات البيع والأنظمة الداخلية." },
    en: { title: "E-commerce platform integration", description: "Synchronize products, inventory, and orders across sales channels and internal systems." }
  },
  {
    video: "./assets/videos/services/mission-control.mp4",
    poster: "./services-package/stills-check/mission.png",
    ar: { title: "لوحة تحكم إدارية موحّدة", description: "مكان واحد لمتابعة ما يحتاج انتباه الإدارة الآن، لا ما حدث بالأمس." },
    en: { title: "Unified management control center", description: "One place to see what needs management attention now—not what happened yesterday." }
  },
  {
    video: "./assets/videos/services/finance-vat-reports.mp4",
    poster: "./services-package/stills-check/f200.png",
    ar: { title: "اللوحة المالية وتقارير الضريبة", description: "تابع الإيرادات والمصروفات والضريبة بهيكل واضح وجاهز للمراجعة." },
    en: { title: "Finance & VAT reporting", description: "Track revenue, expenses, and VAT in a clear structure that is ready to review." }
  }
];

const root = document.documentElement;
const textNodes = [...document.querySelectorAll("[data-i18n]")];
const ariaNodes = [...document.querySelectorAll("[data-i18n-aria]")];
const placeholderNodes = [...document.querySelectorAll("[data-i18n-placeholder]")];
const altNodes = [...document.querySelectorAll("[data-i18n-alt]")];
const initialText = new Map(textNodes.map((node) => [node, node.textContent]));
const initialAria = new Map(ariaNodes.map((node) => [node, node.getAttribute("aria-label")]));
const initialPlaceholders = new Map(placeholderNodes.map((node) => [node, node.getAttribute("placeholder")]));
const initialAlt = new Map(altNodes.map((node) => [node, node.getAttribute("alt")]));
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let currentLanguage = localStorage.getItem("portfolio-language") === "en" ? "en" : "ar";
let activeService = 0;

function transition(update) {
  if (document.startViewTransition && !reducedMotion.matches) {
    document.startViewTransition(update);
  } else {
    update();
  }
}

function updateServiceText() {
  const content = services[activeService][currentLanguage];
  document.getElementById("reel-title").textContent = content.title;
  document.getElementById("reel-description").textContent = content.description;
}

function updateControlLabels() {
  const dark = root.dataset.theme === "dark";
  const menuButton = document.getElementById("menu-button");
  const themeButton = document.getElementById("theme-button");
  const videoButton = document.getElementById("reel-play");
  const menuOpen = menuButton.getAttribute("aria-expanded") === "true";
  const videoPlaying = videoButton.getAttribute("aria-pressed") === "true";

  if (currentLanguage === "en") {
    menuButton.setAttribute("aria-label", menuOpen ? "Close menu" : "Open menu");
    themeButton.setAttribute("aria-label", dark ? "Enable light mode" : "Enable dark mode");
    videoButton.setAttribute("aria-label", videoPlaying ? "Pause video" : "Play video");
  } else {
    menuButton.setAttribute("aria-label", menuOpen ? "إغلاق القائمة" : "فتح القائمة");
    themeButton.setAttribute("aria-label", dark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الغامق");
    videoButton.setAttribute("aria-label", videoPlaying ? "إيقاف الفيديو مؤقتاً" : "تشغيل الفيديو");
  }
}

function applyLanguage(language) {
  currentLanguage = language;
  const isEnglish = language === "en";

  root.lang = isEnglish ? "en" : "ar";
  root.dir = isEnglish ? "ltr" : "rtl";

  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = isEnglish && english[key] ? english[key] : initialText.get(node);
  });

  ariaNodes.forEach((node) => {
    const key = node.dataset.i18nAria;
    node.setAttribute("aria-label", isEnglish && englishAria[key] ? englishAria[key] : initialAria.get(node));
  });

  placeholderNodes.forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    node.setAttribute("placeholder", isEnglish && englishPlaceholders[key] ? englishPlaceholders[key] : initialPlaceholders.get(node));
  });

  altNodes.forEach((node) => {
    const key = node.dataset.i18nAlt;
    node.setAttribute("alt", isEnglish && englishAlt[key] ? englishAlt[key] : initialAlt.get(node));
  });

  document.getElementById("language-button").textContent = isEnglish ? "AR" : "EN";
  document.getElementById("language-button").setAttribute("aria-label", isEnglish ? "التبديل إلى العربية" : "Switch to English");
  document.title = isEnglish ? "Alaa Wafaie | Systems, Automation & Business Analytics" : "علاء وفائي | أنظمة وأتمتة وتحليلات أعمال";
  document.querySelector('meta[name="description"]').content = isEnglish
    ? "I design operations systems, automation, and business dashboards that connect sales, inventory, branches, and decisions."
    : "أصمم أنظمة تشغيل وأتمتة ولوحات بيانات تربط المبيعات والمخزون والفروع وتحول البيانات المبعثرة إلى قرارات واضحة.";

  updateServiceText();
  updateControlLabels();
  localStorage.setItem("portfolio-language", language);
}

function applyLanguageWithoutLosingPlace(language) {
  const anchoredSection = location.hash ? document.querySelector(location.hash) : null;
  const previousTop = anchoredSection ? anchoredSection.getBoundingClientRect().top : null;
  applyLanguage(language);

  if (anchoredSection && previousTop !== null) {
    const restorePosition = () => {
      const layoutShift = anchoredSection.getBoundingClientRect().top - previousTop;
      if (Math.abs(layoutShift) > 1) window.scrollBy(0, layoutShift);
    };

    window.requestAnimationFrame(() => window.requestAnimationFrame(restorePosition));
    if (document.fonts) document.fonts.ready.then(() => window.requestAnimationFrame(restorePosition));
  }
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#10110f" : "#f4f0e8";
  localStorage.setItem("portfolio-theme", theme);
  updateControlLabels();
}

const savedTheme = localStorage.getItem("portfolio-theme");
applyTheme(savedTheme === "dark" || savedTheme === "light" ? savedTheme : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
applyLanguage(currentLanguage);

document.getElementById("language-button").addEventListener("click", () => {
  transition(() => applyLanguageWithoutLosingPlace(currentLanguage === "ar" ? "en" : "ar"));
});

document.getElementById("theme-button").addEventListener("click", () => {
  transition(() => applyTheme(root.dataset.theme === "dark" ? "light" : "dark"));
});

const menuButton = document.getElementById("menu-button");
const siteNav = document.getElementById("site-nav");

function setMenu(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  siteNav.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
  updateControlLabels();
}

menuButton.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    setMenu(false);
    menuButton.focus();
  }
});

const video = document.getElementById("service-video");
const reelStage = document.getElementById("reel-stage");
const reelPlay = document.getElementById("reel-play");
const serviceOptions = [...document.querySelectorAll(".service-option")];

function updateVideoState(playing) {
  reelStage.classList.toggle("is-playing", playing);
  reelPlay.setAttribute("aria-pressed", String(playing));
  updateControlLabels();
}

function setService(index) {
  if (!services[index]) return;
  activeService = index;
  video.pause();
  video.removeAttribute("src");
  video.load();
  video.dataset.src = services[index].video;
  video.poster = services[index].poster;
  reelStage.classList.add("is-switching");
  window.setTimeout(() => reelStage.classList.remove("is-switching"), 260);

  serviceOptions.forEach((option, optionIndex) => {
    const active = optionIndex === index;
    option.classList.toggle("is-active", active);
    option.setAttribute("aria-pressed", String(active));
  });

  const number = String(index + 1).padStart(2, "0");
  document.getElementById("reel-number").textContent = number;
  document.getElementById("reel-count").textContent = `${number} / ${String(services.length).padStart(2, "0")}`;
  updateServiceText();
  updateVideoState(false);
}

async function toggleVideo() {
  if (!video.paused) {
    video.pause();
    return;
  }

  if (!video.getAttribute("src")) {
    video.src = video.dataset.src;
    video.load();
  }

  try {
    await video.play();
  } catch {
    updateVideoState(false);
  }
}

serviceOptions.forEach((option) => option.addEventListener("click", () => setService(Number(option.dataset.service))));
reelPlay.addEventListener("click", toggleVideo);
video.addEventListener("play", () => updateVideoState(true));
video.addEventListener("pause", () => updateVideoState(false));
video.addEventListener("ended", () => updateVideoState(false));

if ("IntersectionObserver" in window) {
  const videoObserver = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting && !video.paused) video.pause();
  }, { threshold: 0.15 });
  videoObserver.observe(reelStage);
}

const revealElements = [...document.querySelectorAll(".reveal")];
if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8%", threshold: 0.08 });
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const header = document.getElementById("site-header");
const progress = document.getElementById("scroll-progress");
let scrollFrame = 0;

function updateScrollUI() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
  progress.style.transform = `scaleX(${ratio})`;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
  scrollFrame = 0;
}

window.addEventListener("scroll", () => {
  if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScrollUI);
}, { passive: true });
updateScrollUI();

if ("IntersectionObserver" in window) {
  const navLinks = [...siteNav.querySelectorAll("a")];
  const sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`));
  }, { rootMargin: "-30% 0px -55%", threshold: [0, 0.15, 0.5] });
  document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));
}

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.querySelectorAll("input, select, textarea").forEach((field) => {
  field.addEventListener("input", () => field.removeAttribute("aria-invalid"));
  field.addEventListener("change", () => field.removeAttribute("aria-invalid"));
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "";

  if (!contactForm.checkValidity()) {
    const invalidField = contactForm.querySelector(":invalid");
    invalidField.setAttribute("aria-invalid", "true");
    invalidField.focus();
    formStatus.textContent = currentLanguage === "en" ? "Complete the highlighted field to continue." : "أكمل الحقل المحدد للمتابعة.";
    return;
  }

  const data = new FormData(contactForm);
  const serviceSelect = contactForm.elements.service;
  const serviceLabel = serviceSelect.options[serviceSelect.selectedIndex].textContent;
  const message = currentLanguage === "en"
    ? `Hello Alaa, I found your portfolio and would like to discuss a project.\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany / industry: ${data.get("company")}\nArea: ${serviceLabel}\n\nProject details:\n${data.get("message")}`
    : `السلام عليكم علاء، شاهدت معرض أعمالك وأرغب في مناقشة مشروع.\n\nالاسم: ${data.get("name")}\nالبريد: ${data.get("email")}\nالشركة / المجال: ${data.get("company")}\nالخدمة: ${serviceLabel}\n\nتفاصيل المشروع:\n${data.get("message")}`;

  const whatsappUrl = `https://wa.me/966553377408?text=${encodeURIComponent(message)}`;
  formStatus.textContent = currentLanguage === "en" ? "Opening WhatsApp with your project details…" : "جارٍ فتح واتساب مع تفاصيل مشروعك…";
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});

document.getElementById("current-year").textContent = new Date().getFullYear();

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}
