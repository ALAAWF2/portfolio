// i18n Translations Dictionary
const translations = {
  ar: {
    // Navigation
    "nav-home": "الرئيسية",
    "nav-about": "من أنا",
    "nav-services": "الخدمات",
    "nav-workflow": "خطوات العمل",
    "nav-projects": "المشاريع",
    "nav-calculator": "آلة تحكم تفاعلية",
    "nav-faq": "الأسئلة الشائعة",
    "nav-contact": "تواصل معي",

    // Hero Section
    "hero-tag": "مهندس أنظمة مؤسسية وأتمتة",
    "hero-title-1": "أحوّل عمليات شركتك اليدوية إلى ",
    "hero-title-span": "أنظمة ذكية مؤتمتة",
    "hero-title-2": " ولوحات متابعة لحظية",
    "hero-desc": "بصفتي مهندس حلول أتمتة وتحليلات أعمال، أساعد الشركات الكبرى والمتوسطة على توفير الوقت، تقليص الأخطاء التشغيلية بنسبة 85%، ورؤية الأرقام لحظة بلحظة لدعم اتخاذ القرار المناسب.",
    "btn-whatsapp": "تواصل عبر واتساب",
    "btn-portfolio": "عرض المشاريع",

    // Stats Bar
    "stat-exp": "+4 سنوات خبرة",
    "stat-branches": "ربط +50 فرعاً",
    "stat-manual": "تقليص العمل اليدوي 80%",
    "stat-speed": "+60% سرعة تنفيذ",
    "stat-errors": "أخطاء أقل بنسبة 85%",

    // About Section
    "about-title": "من أنا",
    "about-subtitle": "مهندس حلول تقنية متخصص في ربط الأنظمة وأتمتة العمليات للمؤسسات الكبرى",
    "about-heading": "أبني الجسور بين التكنولوجيا وأهداف الأعمال التجارية",
    "about-p1": "أهلاً بك، أنا علاء وفائي. على مدار أكثر من 4 سنوات، تخصصت في قيادة التحول الرقمي وتصميم البنى التحتية البرمجية للأعمال في قطاع التجزئة والمبيعات المتعددة. شغفي هو أتمتة المهام المعقدة والمملة وحلها برمجياً لتحدث تلقائياً.",
    "about-p2": "ركزت خلال مسيرتي على تطوير أدوات التحليلات الفورية ولوحات التحكم التي تربط أنظمة المخازن وERP والـ POS وأجهزة قياس الزوار، مما يعطي الإدارة رؤية شفافة تمكنها من زيادة الأرباح وتخفيض التكاليف التشغيلية.",
    "about-quote": "«التقنية ليست لاستعراض العضلات البرمجية، بل هي وسيلة لتحقيق أرقام أفضل، توفير الوقت، وتقليل الصداع التشغيلي لأصحاب الأعمال.»",
    "about-f1": "تصميم خطوط نقل البيانات (ETL) ومعالجتها",
    "about-f2": "أتمتة العمليات التشغيلية بالكامل",
    "about-f3": "تطوير لوحات بيانات لحظية (BI)",
    "about-f4": "ربط المتاجر والـ ERP وقواعد البيانات",

    // Services Section
    "services-title": "الخدمات التي أقدمها",
    "services-subtitle": "حلول برمجية ذكية مفصلة خصيصاً لتناسب احتياجات شركتك وتزيد من كفاءتها",
    "srv-1-title": "لوحات متابعة الأداء اللحظية (BI)",
    "srv-1-desc": "شاشة تحكم واحدة تجمع مبيعات فروعك، أداء موظفيك، وأعداد الزوار لحظة بلحظة، بدلاً من تجميعها يدوياً من ملفات متعددة.",
    "srv-2-title": "أتمتة المهام والتقارير اليومية",
    "srv-2-desc": "أتمتة التقارير الدورية (مبيعات، مخزون، تشغيل) لتصلك في دقائق معدودة بدلاً من ساعات عمل طويلة ومملة خالية من الأخطاء.",
    "srv-3-title": "ربط المتجر الإلكتروني بالمخازن",
    "srv-3-desc": "ربط متجرك (سلة، ووكومرس، ترينديول) بنظام المستودعات وERP لتحديث المخزون والطلبات تلقائياً ومنع البيع بالخطأ.",
    "srv-4-title": "دمج وتوحيد الأنظمة (Integrations)",
    "srv-4-desc": "جعل أنظمتك المختلفة (ERP Dynamics 365, POS, GoFrugal) تتحدث مع بعضها كأنها نظام واحد دون تكرار لإدخال البيانات.",
    "srv-5-title": "أنظمة وتطبيقات داخلية مخصصة",
    "srv-5-desc": "بناء أدوات داخلية لطلب البضائع للفروع، طلبات الصيانة، تتبع المهام، وإدارة الموافقات حسب صلاحيات كل موظف.",
    "srv-6-title": "بوتات وإشعارات واتساب التلقائية",
    "srv-6-desc": "إرسال إشعارات تلقائية عبر واتساب لفريقك أو عملائك: تأكيد طلب، تنبيه انخفاض مخزون، أو تقارير مبيعات سريعة.",
    "srv-7-title": "دمج الذكاء الاصطناعي بالأعمال",
    "srv-7-desc": "تزويد نظامك بمساعد ذكي يجيب على أسئلة المدراء حول أرقام المبيعات والتقارير بلغة طبيعية، مع استخلاص البيانات فوراً.",
    "srv-8-title": "استشارات التحول الرقمي",
    "srv-8-desc": "تقييم الوضع التقني الحالي لشركتك، ووضع خطة عملية خطوة بخطوة للبدء في رقمنة وأتمتة العمليات بنجاح وبأقل التكاليف.",

    // Workflow Section
    "workflow-title": "كيف أعمل معك؟",
    "workflow-subtitle": "منهجية واضحة ومباشرة تضمن الحصول على أفضل النتائج بأقصى سرعة",
    "step-1-title": "1. فهم المشكلة والتحليل",
    "step-1-desc": "نجلس معاً لنفهم طبيعة عملك الحالي والعقبات التي تبطئ تشغيلك وتكلفك وقتاً وجهداً.",
    "step-2-title": "2. اقتراح الحل المناسب",
    "step-2-desc": "أقوم بتصميم وتخطيط بنية النظام المقترح وعرض الفوائد والنتائج المتوقعة بالأرقام والوقت.",
    "step-3-title": "3. التنفيذ والربط الفعلي",
    "step-3-desc": "أقوم بكتابة الأكواد والربط بين قواعد البيانات والأنظمة الحالية بدقة وأمان تام.",
    "step-4-title": "4. الدعم والمتابعة المستمرة",
    "step-4-desc": "بعد التسليم، أظل على تواصل لدعم النظام وضمان استمراريته وتدريب فريق عملك على استخدامه.",

    // Projects Section
    "projects-title": "معرض المشاريع وقصص النجاح",
    "projects-subtitle": "أمثلة حية على أنظمة وحلول قمت ببنائها وتشغيلها بنجاح في قطاعات مختلفة",
    "proj-1-tag": "نظام تحليلات تجزئة متكامل",
    "proj-1-title": "منصة تحليلات مبيعات التجزئة (Apex Data)",
    "proj-1-desc": "نظام تحليلات متكامل يربط مبيعات 52 فرعاً لحظة بلحظة مع ربط ERP (Dynamics 365) وأجهزة قياس الزوار ومعدلات التحويل. يتميز بلوحات أداء الموظفين، تحليل اتجاهات المنتجات والراكد، وبوت ذكاء اصطناعي للرد الفوري على الاستفسارات المالية للشركة.",
    "proj-1-tech-1": "Dynamics 365",
    "proj-1-tech-2": "PostgreSQL",
    "proj-1-tech-3": "Chart.js",
    "proj-1-tech-4": "AI Chatbot",
    "proj-2-tag": "أتمتة وربط سحابي",
    "proj-2-title": "محرك الربط والمزامنة الذكي للـ E-Commerce",
    "proj-2-desc": "نظام ربط ومزامنة ثنائي الاتجاه يربط المتاجر الإلكترونية (Trendyol, WooCommerce) مع نظام المستودعات وERP للتحديث اللحظي للطلبات والمخزون، مما ساهم في تسريع شحن الطلبات بنسبة 60%.",
    "proj-2-tech-1": "Python APIs",
    "proj-2-tech-2": "WooCommerce",
    "proj-2-tech-3": "Dynamics 365",
    "proj-2-tech-4": "ETL Pipelines",
    "proj-3-tag": "تطبيقات ويب داخلية",
    "proj-3-title": "بوابة إدارة عمليات فروع المعارض",
    "proj-3-desc": "تطبيق ويب داخلي يربط فروع الشركة لإدارة طلبات البضائع والمستودعات، متابعة أعمال الصيانة، وتصفح الكتالوج التفاعلي للمنتجات مع نظام صلاحيات صارم للموظفين والمدراء.",
    "proj-3-tech-1": "React.js",
    "proj-3-tech-2": "Supabase",
    "proj-3-tech-3": "PostgreSQL",
    "proj-3-tech-4": "RBAC Security",
    "proj-4-tag": "أتمتة الأعمال",
    "proj-4-title": "نظام معالجة وتوليد التقارير التلقائي",
    "proj-4-desc": "نظام مخصص لسحب البيانات وتنظيفها وتوليد التقارير اليومية بصيغ Excel و PDF وجدولتها وإرسالها لمدراء المناطق تلقائياً، مقلصاً وقت تجهيز التقارير من 4 ساعات يومياً لـ 3 دقائق فقط.",
    "proj-4-tech-1": "Python",
    "proj-4-tech-2": "VBA Macro",
    "proj-4-tech-3": "Power Query",
    "proj-4-tech-4": "Windows Scheduler",
    "proj-5-tag": "إدارة تشغيل وصيانة",
    "proj-5-title": "نظام إدارة تذاكر ومتابعة أعمال الصيانة",
    "proj-5-desc": "نظام داخلي متكامل مخصص لتسجيل وتتبع تذاكر الصيانة للأعطال التكنولوجية والأجهزة داخل المعارض، مع تتبع حالة الطلبات ومهام الفريق وإرسال تنبيهات المتابعة.",
    "proj-5-tech-1": "React.js",
    "proj-5-tech-2": "Firebase",
    "proj-5-tech-3": "Audit Logging",
    "proj-5-tech-4": "Cloud Functions",
    "proj-6-tag": "حلول سريعة وجاهزة",
    "proj-6-title": "منصة Dash Analytics الجاهزة للشركات",
    "proj-6-desc": "برنامج سحابي جاهز (White-label Dashboard) مخصص لشركات التجزئة والمحلات الكبرى، قابل للتثبيت السريع والربط مع أي نظام كاشير لعرض المبيعات اليومية والشهرية وأداء الكادر البائع فوراً.",
    "proj-6-tech-1": "Vanilla JS",
    "proj-6-tech-2": "Bootstrap",
    "proj-6-tech-3": "PWA Ready",
    "proj-6-tech-4": "PDF Export Engine",

    // Calculator Section
    "calc-title": "حاسبة أداء التجزئة التفاعلية",
    "calc-subtitle": "جرب بنفسك كيف تحسب الأنظمة الذكية أداء فروعك ومعدلات النمو يومياً لتتخذ قراراتك التشغيلية",
    "calc-heading": "لوحة مؤشرات أداء افتراضية",
    "calc-desc": "هذه الآلة الحاسبة التفاعلية مبنية على المعادلات والمنطق البرمجي الذي قمت بتصميمه في مشاريع لوحات التحكم الكبرى. أدخل أرقاماً افتراضية لترى كيف تترجم البيانات التشغيلية لمؤشرات واضحة تمكنك من متابعة تحقيق أهدافك بدقة.",
    "calc-tab-title": "مركز عمليات المبيعات",
    "calc-lbl-sales": "المبيعات الحالية هذا الشهر (ريال):",
    "calc-lbl-target": "التارجت المستهدف للمبيعات (ريال):",
    "calc-lbl-prev": "مبيعات نفس الفترة العام الماضي (ريال):",
    "calc-lbl-visitors": "إجمالي عدد زوار الفروع:",
    "calc-res-ach": "نسبة تحقيق التارجت",
    "calc-res-growth": "معدل النمو السنوي YoY",
    "calc-res-daily": "المبيعات اليومية المطلوبة",
    "calc-res-conv": "معدل تحويل الزوار لمشترين",
    "calc-sub-daily": "لتحقيق الهدف في 15 يوماً متبقية",
    "calc-sub-conv": "بناءً على متوسط الفاتورة (300 ريال)",
    "calc-achieved": "تم تحقيق الهدف! 🎉",

    // FAQ Section
    "faq-title": "الأسئلة الشائعة",
    "faq-subtitle": "إجابات واضحة ومباشرة على استفسارات أصحاب الشركات والمدراء التنفيذيين",
    "faq-q1": "كم تكلفة بناء نظام أتمتة أو لوحة تحكم لشركتي؟",
    "faq-a1": "التكلفة تعتمد بالكامل على حجم مشروعك، عدد الأنظمة المراد ربطها، وما إذا كنت تريد لوحة تحكم متكاملة أو سكربت أتمتة بسيط. سنحدد التكلفة الدقيقة بعد جلسة الاستشارة الأولى وفهم طبيعة واحتياجات عملك، وبما يضمن لك عائد استثماري مجزٍ لتوفير وقت موظفيك.",
    "faq-q2": "كم من الوقت يستغرق تنفيذ المشروع؟",
    "faq-a2": "المشاريع الصغيرة مثل أتمتة تقرير معين أو بناء بوت واتساب تأخذ بين 5 إلى 10 أيام. أما لوحات التحكم المتكاملة للمبيعات والربط الشامل للـ ERP فستستغرق بين 3 إلى 6 أسابيع حسب حجم البيانات وتعقيد الأنظمة المستخدمة.",
    "faq-q3": "شركتي صغيرة وتستخدم نظام كاشير بسيط، هل يمكنني الاستفادة من خدماتك؟",
    "faq-a3": "بكل تأكيد! الخدمات ليست حكراً على الشركات العملاقة فقط. يمكننا بناء لوحة تحكم بسيطة جداً وسريعة ومربوطة بأي كاشير محلي أو متجر سلة/ووكومرس، لتتمكن من رؤية مبيعاتك وأرباحك من هاتفك وتوفير ساعات من الحسابات اليدوية.",
    "faq-q4": "هل بيانات مبيعات وعملاء شركتي ستكون بأمان تام؟",
    "faq-a4": "الأمان والسرية هما ركيزة عملي الأساسية. جميع عمليات الربط وقواعد البيانات يتم بناؤها وفق بروتوكولات حماية وتشفير متكاملة، ويتم استضافة البيانات على خوادمك الخاصة أو منصات سحابية آمنة (مثل Supabase أو Google Cloud) ويكون لك كامل التحكم الحصري بكلمات المرور والمفاتيح التقنية.",
    "faq-q5": "هل أحتاج لخبرة تقنية لمتابعة عملك أو استخدام الأنظمة؟",
    "faq-a5": "لا على الإطلاق! دوري هو إزالة التعقيد التقني وتقديم لوحة تحكم وأزرار واضحة ومفهومة باللغة العربية أو الإنجليزية. سأقوم بتدريبك وتدريب فريق عملك على تشغيل واستخدام النظام، وسأكون متواجداً لدعمك وحل أي مشكلة تقنية قد تظهر بعد التسليم.",

    // Contact Section
    "contact-title": "ابدأ رحلة الأتمتة والتحليلات اليوم",
    "contact-subtitle": "أرسل تفاصيل مشروعك أو حدد موعد استشارة مجانية وسأتواصل معك في أقرب وقت",
    "contact-info-head": "معلومات الاتصال المباشر",
    "contact-info-sub": "إذا كنت تفضل التواصل السريع والمباشر، يمكنك استخدام القنوات التالية:",
    "contact-lbl-loc": "الموقع الحالي:",
    "contact-val-loc": "جدة، المملكة العربية السعودية",
    "contact-lbl-email": "البريد الإلكتروني:",
    "contact-lbl-in": "لينكد إن:",
    "contact-form-head": "أرسل طلباً مخصصاً للمشروع",
    "form-lbl-name": "الاسم الكريم:",
    "form-ph-name": "أدخل اسمك الكامل",
    "form-lbl-email": "البريد الإلكتروني:",
    "form-ph-email": "name@company.com",
    "form-lbl-biz": "مجال العمل / الشركة:",
    "form-ph-biz": "مثال: تجزئة، متجر إلكتروني، مطاعم",
    "form-lbl-service": "الخدمة المطلوبة:",
    "form-opt-select": "اختر الخدمة الأكثر ملاءمة...",
    "form-opt-1": "لوحة تحكم وتحليلات فورية",
    "form-opt-2": "أتمتة المهام والتقارير",
    "form-opt-3": "ربط متجر إلكتروني وبوابات شحن",
    "form-opt-4": "دمج وتوحيد أنظمة متعددة",
    "form-opt-5": "تطوير تطبيقات داخلية مخصصة",
    "form-opt-6": "بوت وإشعارات واتساب",
    "form-opt-7": "دمج تقنيات الذكاء الاصطناعي",
    "form-opt-8": "استشارة تحول رقمي كاملة",
    "form-lbl-msg": "تفاصيل إضافية عن مشروعك:",
    "form-ph-msg": "اشرح باختصار مشكلتك التشغيلية أو ما ترغب في إنجازه...",
    "form-btn-submit": "إرسال وتوليد رسالة واتساب",

    // Footer
    "footer-desc": "أساعد الشركات على تحويل الفوضى والعمليات اليدوية المبعثرة إلى أنظمة تلقائية ذكية ولوحات تحكم تفاعلية توفر الوقت وتزيد الكفاءة والوضوح.",
    "footer-head-links": "روابط سريعة",
    "footer-head-contact": "تواصل فوري",
    "footer-copyright": "© 2026 علاء وفائي. جميع الحقوق محفوظة.",
    "footer-disclaimer": "مطور أنظمة معتمد بشكل فري لانس ومستقل."
  },
  en: {
    // Navigation
    "nav-home": "Home",
    "nav-about": "About Me",
    "nav-services": "Services",
    "nav-workflow": "Workflow",
    "nav-projects": "Projects",
    "nav-calculator": "Live Simulator",
    "nav-faq": "FAQ",
    "nav-contact": "Contact",

    // Hero Section
    "hero-tag": "Enterprise Systems & Automation Architect",
    "hero-title-1": "I transform manual operations into ",
    "hero-title-span": "smart automated systems",
    "hero-title-2": " and live dashboards",
    "hero-desc": "As an automation architect and business analytics specialist, I help enterprise retail and SMB businesses save valuable hours, eliminate operational errors by 85%, and gain real-time visibility over all metrics.",
    "btn-whatsapp": "Chat on WhatsApp",
    "btn-portfolio": "View Portfolio",

    // Stats Bar
    "stat-exp": "4+ Years Exp",
    "stat-branches": "50+ Branches Synced",
    "stat-manual": "80% Manual Reduction",
    "stat-speed": "60% Faster Processing",
    "stat-errors": "85% Fewer Errors",

    // About Section
    "about-title": "About Me",
    "about-subtitle": "Enterprise solutions architect specialized in systems integration and operations automation",
    "about-heading": "Bridging the Gap Between Code and Commercial Outcomes",
    "about-p1": "Hello, I'm Alaa Wafaie. For over 4 years, I have specialized in leading digital transformations and designing robust software infrastructures in high-volume retail environments. My passion lies in solving repetitive, time-draining business operations through automation.",
    "about-p2": "I focus on developing real-time performance analytics dashboards that seamlessly pull data from ERP, POS, inventory storage, and visitor counter systems, giving management a unified perspective to scale profitability and lower overhead costs.",
    "about-quote": "\"Technology is not about showcasing complex code; it's about delivering clear metrics, reclaiming lost hours, and removing operational headaches for business owners.\"",
    "about-f1": "ETL & Data Pipeline Design",
    "about-f2": "Operational Automation Pipelines",
    "about-f3": "Custom Real-time BI Dashboards",
    "about-f4": "ERP, Store, and Database Sync",

    // Services Section
    "services-title": "Services Offered",
    "services-subtitle": "Tailored software solutions designed around how your business actually runs",
    "srv-1-title": "Live Business Dashboards (BI)",
    "srv-1-desc": "One screen showcasing live store sales, branch performance, and visitor conversion rates instead of chasing scattered Excel files.",
    "srv-2-title": "Task & Report Automation",
    "srv-2-desc": "Repetitive daily, weekly, or monthly sales and operational report runs generated in minutes, completely error-free and scheduled.",
    "srv-3-title": "E-Commerce & Inventory Linkage",
    "srv-3-desc": "Connect your online store (WooCommerce, Trendyol, Salla) with your actual warehouse stock and shipping channels to prevent overselling.",
    "srv-4-title": "Systems Integration (API)",
    "srv-4-desc": "Unify your disparate databases, POS systems, and ERPs (Dynamics 365, GoFrugal) so they sync automatically without double entry.",
    "srv-5-title": "Custom Internal Tools",
    "srv-5-desc": "Web tools for warehouse replenishment, branch maintenance tickets, staff targets, and approval workflows with strict role-based access.",
    "srv-6-title": "Automated WhatsApp Alerts",
    "srv-6-desc": "Instant, automated WhatsApp notifications for your team or customers, like stock limits, order completions, or daily summaries.",
    "srv-7-title": "AI-Powered Business Solutions",
    "srv-7-desc": "Integrate natural language chatbots that let decision-makers query sales tables and inventory databases using regular text.",
    "srv-8-title": "Digital Transformation Roadmap",
    "srv-8-desc": "Evaluate your current IT landscape and define a step-by-step, budget-conscious roadmap to automate and digitize manual workflows.",

    // Workflow Section
    "workflow-title": "How I Work With You",
    "workflow-subtitle": "A transparent and direct methodology aimed at delivering maximum ROI rapidly",
    "step-1-title": "1. Understand & Analyze",
    "step-1-desc": "We map your current workflow to identify bottlenecks and processes that consume excessive time and human error.",
    "step-2-title": "2. Propose & Design",
    "step-2-desc": "I design the systems architecture, highlighting estimated time savings, budget, and projected business outcomes.",
    "step-3-title": "3. Execute & Unify",
    "step-3-desc": "I write the pipelines, integrate the APIs, and build the custom user interfaces securely on your infrastructure.",
    "step-4-title": "4. Support & Train",
    "step-4-desc": "I train your operational team, deliver clear documentation, and remain available to support system extensions.",

    // Projects Section
    "projects-title": "Featured Projects & Case Studies",
    "projects-subtitle": "Demonstrated systems built, deployed, and currently scaling in production environments",
    "proj-1-tag": "Retail Business Intelligence",
    "proj-1-title": "Enterprise Retail Performance Dashboard (Apex Data)",
    "proj-1-desc": "A unified business dashboard connecting 52 retail stores. Integrates Microsoft Dynamics 365 ERP, POS systems, and V-Count visitor counters. Features include: store conversion rate logs, product trend and slow-moving stock finders, and an SQL AI bot to answer executive financial queries.",
    "proj-1-tech-1": "Dynamics 365",
    "proj-1-tech-2": "PostgreSQL",
    "proj-1-tech-3": "Chart.js",
    "proj-1-tech-4": "AI Chatbot",
    "proj-2-tag": "API Synchronization",
    "proj-2-title": "Bi-Directional E-Commerce Sync Engine",
    "proj-2-desc": "Built a Python-based synchronization engine connecting Trendyol and WooCommerce marketplaces with internal Dynamics 365 ERP, automating orders, reconciliation, and audit logs, speeding fulfillment by 60%.",
    "proj-2-tech-1": "Python APIs",
    "proj-2-tech-2": "WooCommerce",
    "proj-2-tech-3": "Dynamics 365",
    "proj-2-tech-4": "ETL Processes",
    "proj-3-tag": "Custom Operations Tool",
    "proj-3-title": "Showroom Inventory & Operations Portal",
    "proj-3-desc": "A secure web portal letting 50+ store managers check catalog items, submit inventory stock replenishment requests, and request store maintenance, governed by granular role-based permissions.",
    "proj-3-tech-1": "React.js",
    "proj-3-tech-2": "Supabase",
    "proj-3-tech-3": "PostgreSQL",
    "proj-3-tech-4": "RBAC Security",
    "proj-4-tag": "Workflow Automation",
    "proj-4-title": "Automated Report Generation & Processing System",
    "proj-4-desc": "Engineered an automated data processing system using Python, VBA, and Power Query that gathers sales and KPIs daily, generating PDF reports and mailing them to executives. Reduced daily workload from 4 hours to 3 minutes.",
    "proj-4-tech-1": "Python",
    "proj-4-tech-2": "VBA Macro",
    "proj-4-tech-3": "Power Query",
    "proj-4-tech-4": "Windows Scheduler",
    "proj-5-tag": "Ticketing Application",
    "proj-5-title": "Branch Maintenance Ticketing Platform",
    "proj-5-desc": "An internal React application allowing retail branches to submit and track maintenance requests, featuring manager approval chains, service logs, and detailed history audit logs.",
    "proj-5-tech-1": "React.js",
    "proj-5-tech-2": "Firebase",
    "proj-5-tech-3": "Audit Logging",
    "proj-5-tech-4": "Cloud Functions",
    "proj-6-tag": "Ready-to-Deploy Software",
    "proj-6-title": "Dash Analytics White-Label Dashboard",
    "proj-6-desc": "A ready-to-deploy, localized SaaS sales-dashboard package built for medium retail chains. Syncs with local databases to instantly visualize sales trends, employee quotas, and PDF summary sheets.",
    "proj-6-tech-1": "Vanilla JS",
    "proj-6-tech-2": "Bootstrap",
    "proj-6-tech-3": "PWA Ready",
    "proj-6-tech-4": "PDF Export Engine",

    // Calculator Section
    "calc-title": "Interactive Retail KPI Simulator",
    "calc-subtitle": "Experience how analytics dashboards calculate growth, conversion, and targets dynamically to drive decisions",
    "calc-heading": "Simulated Executive Dashboard",
    "calc-desc": "This simulator uses the real business logic and formulas I deploy in analytics dashboards. Input sample values below to see how raw retail operational figures translate into actionable KPIs, helping you monitor goals.",
    "calc-tab-title": "Sales Operations Hub",
    "calc-lbl-sales": "Current Month's Sales (SAR):",
    "calc-lbl-target": "Target Monthly Sales Quota (SAR):",
    "calc-lbl-prev": "Sales (Same Period Last Year - SAR):",
    "calc-lbl-visitors": "Total Branch Visitor Footcount:",
    "calc-res-ach": "Target Achievement Quota",
    "calc-res-growth": "YoY Annual Growth Rate",
    "calc-res-daily": "Daily Required Sales Run-Rate",
    "calc-res-conv": "Visitor to Customer Conversion",
    "calc-sub-daily": "To hit goal in 15 remaining days",
    "calc-sub-conv": "Based on average ticket size (300 SAR)",
    "calc-achieved": "Quota Met! 🎉",

    // FAQ Section
    "faq-title": "Frequently Asked Questions",
    "faq-subtitle": "Straightforward answers about budget, delivery times, security, and project scale",
    "faq-q1": "How much does it cost to build a dashboard or automation system?",
    "faq-a1": "The investment depends entirely on the size of the project, the number of systems to integrate, and whether you require a custom web interface. A clear scope and proposal will be provided after our initial consultation, aiming to deliver a high return on investment by reclaiming staff hours.",
    "faq-q2": "What is the expected project delivery time?",
    "faq-a2": "Small projects like automating a single Excel report or setting up a WhatsApp alert bot take 5 to 10 days. Comprehensive retail sales dashboards and full ERP integrations range between 3 to 6 weeks, depending on data volume and complexity.",
    "faq-q3": "My business is small and has a simple setup, can I still work with you?",
    "faq-a3": "Absolutely! Automation and dashboards aren't exclusive to massive retail chains. We can deploy a lightweight white-label solution linked to local databases or platforms like WooCommerce or Salla, saving you hours of daily manual math.",
    "faq-q4": "Will my business sales data and credentials remain secure?",
    "faq-a4": "Security is my highest priority. All data connections and pipelines follow encrypted standards. The database and code are hosted directly on your secure infrastructure, cloud nodes (such as Supabase or GCP), or private servers, giving you exclusive ownership.",
    "faq-q5": "Do I need technical knowledge to manage the systems?",
    "faq-a5": "No, not at all! My job is to handle the tech and provide you with an intuitive, clean interface in English or Arabic. I will personally guide your operational team on how to read the data and provide full post-launch support.",

    // Contact Section
    "contact-title": "Begin Automating Your Operations Today",
    "contact-subtitle": "Send your project requirements or book a free consultation, and I will contact you shortly",
    "contact-info-head": "Direct Channels",
    "contact-info-sub": "If you prefer direct messaging or direct email, reach out anytime:",
    "contact-lbl-loc": "Current Location:",
    "contact-val-loc": "Jeddah, Saudi Arabia",
    "contact-lbl-email": "Direct Email:",
    "contact-lbl-in": "LinkedIn Profile:",
    "contact-form-head": "Submit a Custom Project Request",
    "form-lbl-name": "Your Name:",
    "form-ph-name": "Enter your full name",
    "form-lbl-email": "Business Email:",
    "form-ph-email": "name@company.com",
    "form-lbl-biz": "Industry / Company Name:",
    "form-ph-biz": "e.g., Retail, E-Commerce, F&B",
    "form-lbl-service": "Requested Service:",
    "form-opt-select": "Select a service...",
    "form-opt-1": "Live Dashboard & Performance Analytics",
    "form-opt-2": "Task & Report Automation Run",
    "form-opt-3": "E-Commerce & Warehouse Channel Linkage",
    "form-opt-4": "System Integration & API Pipelines",
    "form-opt-5": "Custom Internal Web Applications",
    "form-opt-6": "Automated WhatsApp Alerts & Bot Runs",
    "form-opt-7": "AI-Powered Business Solutions",
    "form-opt-8": "Complete Digital Transformation Consultation",
    "form-lbl-msg": "Tell me about your project needs:",
    "form-ph-msg": "Briefly explain the current operational bottleneck or what you want to achieve...",
    "form-btn-submit": "Submit & Create WhatsApp Text",

    // Footer
    "footer-desc": "Helping businesses replace time-draining manual spreadsheet entry with fast automated databases and live business dashboards.",
    "footer-head-links": "Quick Links",
    "footer-head-contact": "Contact Info",
    "footer-copyright": "© 2026 Alaa Wafaie. All rights reserved.",
    "footer-disclaimer": "Independent Enterprise Systems & Automation Architect."
  }
};

// State Management
let currentLang = 'ar';

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
  // Check for saved language
  const savedLang = localStorage.getItem('alaa_portfolio_lang');
  if (savedLang && (savedLang === 'ar' || savedLang === 'en')) {
    currentLang = savedLang;
  } else {
    currentLang = 'ar';
  }

  // Check for saved theme
  const savedTheme = localStorage.getItem('alaa_portfolio_theme') || 'light';
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    updateThemeIcon('light');
  } else {
    document.body.classList.remove('light-theme');
    updateThemeIcon('dark');
  }

  // Apply Language & Translations
  applyLanguage(currentLang);

  // Setup Event Listeners
  setupEventListeners();

  // Scroll Animations Setup
  setupScrollAnimations();

  // Run initial calculations
  calculateKPIs();

  // Register Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('Service Worker registered successfully.'))
        .catch(err => console.log('Service Worker registration failed: ', err));
    });
  }
});

// Setup Event Listeners
function setupEventListeners() {
  // Language Switcher Button
  const langToggleBtn = document.getElementById('lang-toggle');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'ar' ? 'en' : 'ar';
      localStorage.setItem('alaa_portfolio_lang', currentLang);
      applyLanguage(currentLang);
      calculateKPIs(); // Refresh values inside calc
    });
  }

  // Theme Switcher Button
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light-theme');
      const newTheme = isLight ? 'light' : 'dark';
      localStorage.setItem('alaa_portfolio_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  // Mobile Menu Toggle
  const menuBtn = document.getElementById('menu-btn');
  const navMenu = document.getElementById('nav-menu');
  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = menuBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close menu on link clicks (mobile)
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = menuBtn.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // Interactive Calculator Inputs
  const calcInputs = ['calc-sales', 'calc-target', 'calc-prev', 'calc-visitors'];
  calcInputs.forEach(id => {
    const input = document.getElementById(id);
    if (input) {
      input.addEventListener('input', calculateKPIs);
    }
  });

  // Contact Form Submit Handler (Generates WhatsApp Redirection)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      sendFormToWhatsApp();
    });
  }

  // FAQ Items Toggle
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const isActive = item.classList.contains('active');
      
      // Close all FAQs first
      document.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('active');
        el.querySelector('.faq-answer').style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        const answer = item.querySelector('.faq-answer');
        answer.style.maxHeight = answer.scrollHeight + 32 + "px"; // Include padding padding-bottom
      }
    });
  });

  // Header Scroll Shadow
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    
    // Active Navigation Highlight
    highlightActiveSection();
  });

  // Setup Image Zoom Modal
  setupImageModal();
}

// Apply Selected Language Translations
function applyLanguage(lang) {
  // Set html tags
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.body.setAttribute('data-lang', lang);

  // Set values of i18n placeholders
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      // If it's an input or textarea placeholder
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.setAttribute('placeholder', translations[lang][key]);
      } else {
        element.innerHTML = translations[lang][key];
      }
    }
  });

  // Update Language Toggle Button UI
  const langToggleBtn = document.getElementById('lang-toggle');
  if (langToggleBtn) {
    langToggleBtn.textContent = lang === 'ar' ? 'English' : 'عربي';
  }

  // Fix form options translation dynamically
  translateSelectOptions(lang);
}

// Translate Contact Form Select Dropdown Options
function translateSelectOptions(lang) {
  const serviceSelect = document.getElementById('contact-service');
  if (serviceSelect) {
    const defaultOption = serviceSelect.options[0];
    defaultOption.textContent = translations[lang]["form-opt-select"];
    
    for (let i = 1; i <= 8; i++) {
      if (serviceSelect.options[i]) {
        serviceSelect.options[i].textContent = translations[lang][`form-opt-${i}`];
      }
    }
  }
}

// Update Sun/Moon icon in theme button
function updateThemeIcon(theme) {
  const icon = document.querySelector('#theme-toggle i');
  if (icon) {
    if (theme === 'light') {
      icon.className = 'fa-solid fa-moon';
    } else {
      icon.className = 'fa-solid fa-sun';
    }
  }
}

// Scroll Animation Triggers using IntersectionObserver
function setupScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal');
  const observerOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        // If it's the stats bar, kick off the numeric counting animation
        if (entry.target.classList.contains('stats-bar')) {
          animateStatsCounters();
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}

// Highlight Active Nav Item on Scroll
function highlightActiveSection() {
  const sections = document.querySelectorAll('section, header');
  const navLinks = document.querySelectorAll('.nav-link');
  let currentActiveId = 'hero';

  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      currentActiveId = id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentActiveId}`) {
      link.classList.add('active');
    }
  });
}

// Count up animation for stats bar
function animateStatsCounters() {
  const statsValues = [
    { id: 'counter-exp', val: 4, suffix: '+' },
    { id: 'counter-branches', val: 50, suffix: '+' },
    { id: 'counter-manual', val: 80, suffix: '%' },
    { id: 'counter-speed', val: 60, suffix: '%' }
  ];

  statsValues.forEach(stat => {
    const el = document.getElementById(stat.id);
    if (!el) return;

    let start = 0;
    const end = stat.val;
    const duration = 1500; // ms
    const increment = end / (duration / 16); // 16ms frame rate

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        el.textContent = Math.round(end) + stat.suffix;
      } else {
        el.textContent = Math.round(start) + stat.suffix;
      }
    }, 16);
  });
}

// Calculator Logic (ROI Simulator)
function calculateKPIs() {
  const sales = parseFloat(document.getElementById('calc-sales').value) || 0;
  const target = parseFloat(document.getElementById('calc-target').value) || 0;
  const prevSales = parseFloat(document.getElementById('calc-prev').value) || 0;
  const visitors = parseFloat(document.getElementById('calc-visitors').value) || 0;

  // 1. Target Achievement
  const achievementEl = document.getElementById('res-achievement');
  if (achievementEl) {
    if (target > 0) {
      const ach = Math.round((sales / target) * 100);
      achievementEl.textContent = `${ach}%`;
    } else {
      achievementEl.textContent = '0%';
    }
  }

  // 2. YoY Growth
  const growthEl = document.getElementById('res-growth');
  if (growthEl) {
    if (prevSales > 0) {
      const growth = Math.round(((sales - prevSales) / prevSales) * 100);
      const sign = growth > 0 ? '+' : '';
      growthEl.innerHTML = `<span class="calc-kpi-trend ${growth < 0 ? 'down' : ''}">${sign}${growth}%</span>`;
    } else {
      growthEl.textContent = '0%';
    }
  }

  // 3. Daily Sales Required (assume 15 days remaining)
  const dailyEl = document.getElementById('res-daily');
  const dailySubEl = document.getElementById('sub-daily-text');
  if (dailyEl) {
    if (sales >= target) {
      dailyEl.textContent = translations[currentLang]["calc-achieved"];
      if (dailySubEl) dailySubEl.style.display = 'none';
    } else {
      if (dailySubEl) dailySubEl.style.display = 'block';
      const remaining = target - sales;
      const dailyReq = Math.round(remaining / 15);
      dailyEl.textContent = dailyReq > 0 ? `${dailyReq.toLocaleString()} SAR` : '0 SAR';
    }
  }

  // 4. Conversion Rate (assuming avg invoice size of 300 SAR)
  const conversionEl = document.getElementById('res-conversion');
  if (conversionEl) {
    if (visitors > 0) {
      const transactions = sales / 300;
      const convRate = ((transactions / visitors) * 100).toFixed(2);
      conversionEl.textContent = `${convRate}%`;
    } else {
      conversionEl.textContent = '0.00%';
    }
  }
}

// Create Custom WhatsApp URL and Redirect User
function sendFormToWhatsApp() {
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const business = document.getElementById('contact-biz').value;
  const serviceVal = document.getElementById('contact-service').value;
  const message = document.getElementById('contact-msg').value;

  const serviceSelect = document.getElementById('contact-service');
  const serviceText = serviceSelect.options[serviceSelect.selectedIndex].text;

  let waText = "";
  if (currentLang === 'ar') {
    waText = `السلام عليكم يا مهندس علاء، أنا *${name}* من شركة/مجال *${business}*.\n\nتصفحت موقعك وحابب أستفسر بخصوص خدمة:\n📍 *${serviceText}*\n\nتفاصيل إضافية:\n${message}\n\nالبريد الإلكتروني للمتابعة: ${email}`;
  } else {
    waText = `Hello Alaa, I am *${name}* from *${business}*.\n\nI saw your portfolio and would like to inquire about:\n📍 *${serviceText}*\n\nDetails:\n${message}\n\nMy email: ${email}`;
  }

  const encodedText = encodeURIComponent(waText);
  const waUrl = `https://wa.me/966553377408?text=${encodedText}`;

  // Redirect in new window
  window.open(waUrl, '_blank');
}

// Setup Zoomable Project Image Modal
function setupImageModal() {
  const modal = document.getElementById('image-zoom-modal');
  const imgs = document.querySelectorAll('.laptop-preview-img');
  const modalImg = document.getElementById('modal-img-target');
  const closeSpan = document.querySelector('.image-modal-close');

  if (imgs.length > 0 && modal && modalImg && closeSpan) {
    imgs.forEach(img => {
      img.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = img.src;
      });
    });

    closeSpan.addEventListener('click', () => {
      modal.style.display = "none";
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
}
