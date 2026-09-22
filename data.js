/* ============================================================================
   CONTENT  —  bilingual (EN / AR)
   Every field is { en, ar }.  Arrays of strings become arrays inside en/ar.
   All facts below come from the real CV + certificate files. Nothing invented.
   TODO markers = things only you can fill in (email, links).
   ========================================================================== */

const PROFILE = {
  name:      { en: "Asem Mohamed Gamal",            ar: "عاصم محمد جمال" },
  fullName:  { en: "Asem Mohamed Gamal Abdelshafi", ar: "عاصم محمد جمال عبدالشافي" },
  initials:  "A·G",
  title:     { en: "Cloud & DevOps Engineer",       ar: "مهندس Cloud و DevOps" },
  location:  { en: "Cairo, Egypt",                  ar: "القاهرة، مصر" },
  greeting:  { en: "Hello, I'm",                    ar: "أهلًا، أنا" },
  phone: "+20 150 317 8835",
  whatsapp: "+201503178835",
  email: "assem.mohamed.azab@gmail.com", // TODO: ضع إيميلك الحقيقي
  linkedin: "www.linkedin.com/in/assem-mohamed206",                          // TODO: https://www.linkedin.com/in/...
  github: "https://github.com/assemazab/",                            // TODO: https://github.com/...
  cvFile: "assets/Asem_Mohamed_CV.pdf",

  /* ---- USP (Stage 03) — draft for you to approve/reword in your own voice ---- */
  usp: {
    en: "I help small teams and startups run their applications reliably on AWS — by containerizing them and automating deployment with CI/CD and infrastructure as code.",
    ar: "أساعد الفرق الصغيرة والشركات الناشئة على تشغيل تطبيقاتها على AWS بثبات — عن طريق الحاويات وأتمتة النشر بـ CI/CD والبنية التحتية ككود."
  },
  /* shorter punchier version used in the hero */
  uspShort: {
    en: "I containerize applications and automate their deployment on AWS, so small teams can ship without fighting their infrastructure.",
    ar: "بحوّل التطبيقات لحاويات وبأتمت نشرها على AWS، عشان الفرق الصغيرة تنشر شغلها من غير ما تتعارك مع البنية التحتية."
  },
};

const UI = {
  connect:      { en: "Connect Me",        ar: "تواصل معايا" },
  viewWork:     { en: "View My Work",      ar: "شوف شغلي" },
  downloadCV:   { en: "Download CV",       ar: "حمّل الـ CV" },
  scroll:       { en: "Scroll",            ar: "انزل" },
  openTo:       { en: "Open to internships, freelance work & entry-level cloud roles",
                  ar: "متاح للتدريب والعمل الحر والوظائف المبتدئة في الـ Cloud" },
  certsTitle:   { en: "Certificates",      ar: "الشهادات" },
  eduTitle:     { en: "Education",         ar: "الدراسة" },
  certClick:    { en: "Click a certificate to view it full size.", ar: "اضغط على أي شهادة لعرضها بحجم كامل." },
  challenge:    { en: "Challenge",         ar: "التحدي" },
  action:       { en: "Action",            ar: "الإجراء" },
  result:       { en: "Result",            ar: "النتيجة" },
  problem:      { en: "Problem",           ar: "المشكلة" },
  role:         { en: "My Role",           ar: "دوري" },
  solution:     { en: "Solution",          ar: "الحل" },
  tools:        { en: "Tools",             ar: "الأدوات" },
  whatIDo:      { en: "What I do",         ar: "بأعمل إيه" },
  solves:       { en: "Problem it solves", ar: "بتحلّ إيه" },
  youGet:       { en: "What you get",      ar: "اللي هتاخده" },
  verify:       { en: "Verify credential", ar: "تحقّق من الشهادة" },
  explore:      { en: "Explore",           ar: "تصفّح" },
  getInTouch:   { en: "Get in touch",      ar: "تواصل" },
  formName:     { en: "Your Name",         ar: "اسمك" },
  formEmail:    { en: "Your Email",        ar: "إيميلك" },
  formSubject:  { en: "Subject",           ar: "الموضوع" },
  formMessage:  { en: "Tell me about your project…", ar: "احكيلي عن مشروعك…" },
  formSend:     { en: "Send Message",      ar: "ابعت الرسالة" },
  formNote:     { en: "Opens your email client with this message pre-filled.",
                  ar: "هيفتح برنامج الإيميل عندك والرسالة جاهزة." },
  built:        { en: "Built with HTML, CSS & JavaScript.", ar: "مبني بـ HTML و CSS و JavaScript." },
  rights:       { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  noImage:      { en: "No certificate image available — details below.",
                  ar: "لا توجد صورة للشهادة — التفاصيل بالأسفل." },
  concept:      { en: "Practice Lab",      ar: "معمل تدريبي" },
  popular:      { en: "Most Popular",      ar: "الأكثر طلبًا" },
  min:          { en: "MIN",               ar: "من" },
  max:          { en: "MAX",               ar: "إلى" },
  getStarted:   { en: "Get Started",       ar: "ابدأ" },
  hireMe:       { en: "Hire Me",           ar: "اشتغل معايا" },
  letsConnect:  { en: "Let's Connect",     ar: "يلا نتواصل" },
  whoAmI:       { en: "Who Am I?",         ar: "أنا مين؟" },
  platforms:    { en: "Find me on",        ar: "تلاقيني على" },
};

/* ---------------- PRICING (Stage 05 · optional section — ranges, never one number)
   DRAFT RANGES — review them against what you're actually willing to deliver
   before you publish. Every line below has to be something you can honour.   */
const PRICING = [
  {
    tier: { en: "Starter", ar: "مبتدئ" },
    min: 20, max: 40,
    tagline: { en: "Single app · short timeline", ar: "تطبيق واحد · مدة قصيرة" },
    desc: { en: "Best for getting one application containerized and running the same way on every machine. Source files included.",
            ar: "الأنسب لتحويل تطبيق واحد لحاويات وتشغيله بنفس الشكل على أي جهاز. الملفات المصدرية مشمولة." },
    features: {
      en: ["Dockerfile for up to 2 services", "docker-compose setup", "Deployment README", "Basic Nginx reverse proxy", "1 round of revisions"],
      ar: ["ملف Dockerfile لحد خدمتين", "إعداد docker-compose", "ملف README للنشر", "Nginx كـ Reverse Proxy أساسي", "جولة تعديلات واحدة"]
    },
    excluded: { en: ["CI/CD pipeline", "Cloud provisioning"], ar: ["Pipeline للـ CI/CD", "تجهيز البنية السحابية"] },
    popular: false,
  },
  {
    tier: { en: "Standard", ar: "قياسي" },
    min: 60, max: 120,
    tagline: { en: "Containers + automated deploys", ar: "حاويات + نشر مؤتمت" },
    desc: { en: "For teams that are tired of deploying by hand. Everything in Starter, plus a pipeline that ships on every merge.",
            ar: "للفرق اللي زهقت من النشر اليدوي. كل اللي في الباقة الأولى، وزيادة Pipeline بينشر مع كل Merge." },
    features: {
      en: ["Everything in Starter", "GitHub Actions build + test + deploy", "Container registry setup", "Staging + production environments", "Secrets handled properly", "2 rounds of revisions"],
      ar: ["كل اللي في باقة Starter", "GitHub Actions للبناء والاختبار والنشر", "إعداد Container Registry", "بيئتي Staging و Production", "التعامل الصحيح مع الـ Secrets", "جولتين تعديلات"]
    },
    excluded: { en: ["Kubernetes cluster", "Full IaC"], ar: ["كلاستر Kubernetes", "بنية تحتية ككود كاملة"] },
    popular: true,
  },
  {
    tier: { en: "Pro", ar: "احترافي" },
    min: 150, max: 300,
    tagline: { en: "Full AWS infrastructure as code", ar: "بنية AWS كاملة ككود" },
    desc: { en: "The whole stack described in code — so you can destroy your environment and rebuild it identically.",
            ar: "البنية كلها موصوفة ككود — تقدر تمسح البيئة وتبنيها تاني بنفس الشكل بالظبط." },
    features: {
      en: ["Everything in Standard", "Terraform: VPC, EC2, S3, IAM", "Ansible configuration playbooks", "Kubernetes deployment manifests", "Prometheus + Grafana monitoring", "Architecture diagram + full handover docs", "3 rounds of revisions"],
      ar: ["كل اللي في باقة Standard", "Terraform: VPC و EC2 و S3 و IAM", "Playbooks للضبط بـ Ansible", "ملفات نشر على Kubernetes", "مراقبة بـ Prometheus و Grafana", "رسم للبنية + توثيق تسليم كامل", "٣ جولات تعديلات"]
    },
    excluded: null,
    popular: false,
  },
];

const PRICING_NOTE = {
  en: "Ranges, not fixed quotes — the final number depends on how many services, environments and integrations are involved. Tell me what you have and I'll give you an exact figure.",
  ar: "دي نطاقات مش أسعار نهائية — الرقم النهائي بيعتمد على عدد الخدمات والبيئات والتكاملات. قولي عندك إيه وأديك رقم محدد."
};

/* ---------------- FOOTER columns */
const FOOTER = {
  connect: {
    en: "I'm always open to discussing new DevOps and cloud projects, freelance work, and internship opportunities. Let's build infrastructure worth trusting.",
    ar: "دايمًا مستعد أتكلم في مشاريع DevOps والسحابة، والشغل الحر، وفرص التدريب. يلا نبني بنية تحتية تستاهل الثقة."
  },
  whoAmI: {
    en: "I'm <strong>Asem Mohamed Gamal</strong>, a Cloud &amp; DevOps engineer who containerizes applications and automates their deployment on AWS with Terraform, Ansible and CI/CD.",
    ar: "أنا <strong>عاصم محمد جمال</strong>، مهندس Cloud و DevOps بحوّل التطبيقات لحاويات وبأتمت نشرها على AWS بـ Terraform و Ansible و CI/CD."
  },
  tagline: { en: "Cloud &amp; DevOps Engineer · Cairo, Egypt", ar: "مهندس Cloud و DevOps · القاهرة، مصر" },
};

/* Direct-contact icons on the left of the footer (hidden while url is "#") */
const FOOTER_DIRECT = [
  { key: "github",   label: "GitHub",   url: "#" }, // TODO
  { key: "linkedin", label: "LinkedIn", url: "#" }, // TODO
  { key: "whatsapp", label: "WhatsApp", url: "https://wa.me/201503178835" },
];

/* Freelance platforms shown as tiles in the middle of the footer */
const PLATFORMS = [
  { key: "khamsat",    label: { en: "Khamsat",    ar: "خمسات" },  short: "خ", url: "#" }, // TODO
  { key: "mostaql",    label: { en: "Mostaql",    ar: "مستقل" },  short: "م", url: "#" }, // TODO
  { key: "upwork",     label: { en: "Upwork",     ar: "Upwork" }, short: "Up", url: "#" }, // TODO
  { key: "freelancer", label: { en: "Freelancer", ar: "Freelancer" }, short: "Fl", url: "#" }, // TODO
];

/* Section titles + hooks (hook = a line that describes value, not your name) */
const SECTIONS = {
  about: {
    kicker: { en: "01 — About",   ar: "٠١ — نبذة" },
    hook:   { en: "Building reliable infrastructure, one pipeline at a time",
              ar: "ببني بنية تحتية يُعتمد عليها، خطوة بخطوة" },
  },
  education: {
    kicker: { en: "02 — Education", ar: "٠٢ — التعليم" },
    hook:   { en: "Education & certificates", ar: "الدراسة والشهادات" },
  },
  skills: {
    kicker: { en: "03 — Skills", ar: "٠٣ — المهارات" },
    hook:   { en: "The toolkit I actually work with", ar: "الأدوات اللي بشتغل بيها فعلًا" },
    sub:    { en: "Grouped by what I use them for — not a list of everything I've heard of.",
              ar: "مقسّمة حسب استخدامها — مش لستة بكل حاجة سمعت عنها." },
  },
  experience: {
    kicker: { en: "04 — Experience", ar: "٠٤ — الخبرة" },
    hook:   { en: "Where I've trained and what came out of it",
              ar: "فين اتدربت وإيه اللي خرجت بيه" },
  },
  services: {
    kicker: { en: "05 — Services", ar: "٠٥ — الخدمات" },
    hook:   { en: "What I can take off your plate", ar: "إيه اللي أقدر أشيله عنك" },
  },
  projects: {
    kicker: { en: "06 — Projects", ar: "٠٦ — المشاريع" },
    hook:   { en: "Problems I solved, documented end to end",
              ar: "مشاكل حليتها، وموثّقة من الأول للآخر" },
    sub:    { en: "Self-directed AWS labs. Each one is written up the way I'd document work on a team — problem, role, solution, tools, result.",
              ar: "معامل AWS نفّذتها بنفسي. كل واحدة موثّقة بنفس الطريقة اللي بوثّق بيها شغل الفريق — المشكلة، دوري، الحل، الأدوات، النتيجة." },
  },
  pricing: {
    kicker: { en: "07 — Pricing", ar: "٠٧ — الأسعار" },
    hook:   { en: "Pricing plans", ar: "باقات الأسعار" },
    sub:    { en: "Transparent starting ranges so you know where you stand before the first call.",
              ar: "نطاقات بداية واضحة عشان تعرف إنت واقف فين قبل أول مكالمة." },
  },
  achievements: {
    kicker: { en: "08 — Achievements", ar: "٠٨ — الإنجازات" },
    hook:   { en: "Milestones worth mentioning", ar: "إنجازات تستاهل الذكر" },
  },
  contact: {
    kicker: { en: "09 — Contact", ar: "٠٩ — تواصل" },
    hook:   { en: "Let's talk", ar: "يلا نتكلم" },
    sub:    { en: "Open to internships, freelance work and entry-level cloud/DevOps roles. Fastest reply is on WhatsApp or email.",
              ar: "متاح للتدريب والعمل الحر والوظائف المبتدئة في Cloud و DevOps. أسرع رد على الواتساب أو الإيميل." },
  },
};

const TERMINAL_LINES = [
  { cmd: "whoami",                 out: { en: "Asem Mohamed Gamal — Cloud & DevOps Engineer", ar: "عاصم محمد جمال — مهندس Cloud و DevOps" } },
  { cmd: "cat status.txt",         out: { en: "DevOps Intern @ DEPI · Computer Engineering, Monufia University", ar: "متدرب DevOps في DEPI · هندسة حاسبات، جامعة المنوفية" } },
  { cmd: "skills --top",           out: { en: "Linux | Docker | Kubernetes | AWS | Terraform | Ansible", ar: "Linux | Docker | Kubernetes | AWS | Terraform | Ansible" } },
  { cmd: "cat certifications.txt", out: { en: "AWS Certified Cloud Practitioner · Huawei HCCDA", ar: "AWS Certified Cloud Practitioner · Huawei HCCDA" } },
  { cmd: "echo $STATUS",           out: { en: "Open to internships & freelance work", ar: "متاح للتدريب والعمل الحر" } },
];

/* ---------------- ABOUT (Stage 04 flow: who I am → what I do → who I help → what makes me different → why care) */
const ABOUT = {
  whoIAm: {
    en: "I'm <strong>Asem Mohamed Gamal</strong>, a Cloud & DevOps engineer and a Computer Engineering student at Monufia University — currently a DevOps intern with the Digital Egypt Pioneers Initiative (DEPI).",
    ar: "أنا <strong>عاصم محمد جمال</strong>، مهندس Cloud و DevOps وطالب هندسة حاسبات في جامعة المنوفية — حاليًا متدرب DevOps في مبادرة رواد مصر الرقمية (DEPI)."
  },
  specialize: {
    en: "I specialize in containerization and deployment automation: packaging applications with Docker, running them on Kubernetes, provisioning AWS infrastructure with Terraform, configuring it with Ansible, and wiring the whole thing into CI/CD pipelines with GitHub Actions.",
    ar: "بتخصص في الحاويات وأتمتة النشر: تغليف التطبيقات بـ Docker، وتشغيلها على Kubernetes، وتجهيز بنية AWS بـ Terraform، وضبطها بـ Ansible، وربط ده كله في CI/CD بـ GitHub Actions."
  },
  different: {
    en: "What sets my work apart is that I document it. Every lab I build ships with an architecture diagram, a step-by-step README and the test results — so the person after me can actually reproduce it.",
    ar: "اللي بيميّز شغلي إني بوثّقه. كل معمل بنفّذه بيطلع معاه رسم للبنية و README خطوة بخطوة ونتائج الاختبار — عشان اللي بعدي يقدر يعيد تنفيذه فعلًا."
  },
  facts: [
    { k: { en: "Degree",     ar: "الدرجة"   }, v: { en: "B.Sc. Computer Engineering", ar: "بكالوريوس هندسة حاسبات" } },
    { k: { en: "University", ar: "الجامعة"  }, v: { en: "Monufia University · 2022–2027", ar: "جامعة المنوفية · ٢٠٢٢–٢٠٢٧" } },
    { k: { en: "GPA",        ar: "المعدل"   }, v: { en: "3.63 / 4.0", ar: "٣٫٦٣ / ٤٫٠" } },
    { k: { en: "Based in",   ar: "المكان"   }, v: { en: "Cairo, Egypt", ar: "القاهرة، مصر" } },
    { k: { en: "Currently",  ar: "حاليًا"   }, v: { en: "DevOps Intern @ DEPI", ar: "متدرب DevOps في DEPI" } },
  ],
  tags: ["AWS", "Terraform", "Ansible", "Docker", "Kubernetes", "GitHub Actions", "Linux (RHEL)"],
};

const EDUCATION = {
  degree: { en: "B.Sc. in Computer Engineering", ar: "بكالوريوس هندسة حاسبات" },
  org:    { en: "Faculty of Engineering, Monufia University", ar: "كلية الهندسة، جامعة المنوفية" },
  meta:   { en: "2022 – 2027 · Computer Engineering Department", ar: "٢٠٢٢ – ٢٠٢٧ · قسم هندسة الحاسبات" },
  gpa: "3.63",
  gpaLabel: { en: "GPA / 4.0", ar: "المعدل / ٤٫٠" },
};

const SKILLS = [
  {
    group: { en: "Cloud Platforms", ar: "منصات السحابة" },
    desc:  { en: "Provisioning and running workloads across two major clouds — compute, storage, networking and IAM.",
             ar: "تجهيز وتشغيل الأحمال على منصتين سحابيتين — الحوسبة والتخزين والشبكات وصلاحيات الوصول." },
    items: ["AWS", "Huawei Cloud", "IAM", "VPC", "EC2", "S3"],
  },
  {
    group: { en: "Containers & Orchestration", ar: "الحاويات والتنسيق" },
    desc:  { en: "Packaging applications into images and running them reliably across a cluster.",
             ar: "تغليف التطبيقات في صور وتشغيلها بثبات على كلاستر." },
    items: ["Docker", "Kubernetes", "Istio"],
  },
  {
    group: { en: "CI/CD & Infrastructure as Code", ar: "CI/CD والبنية ككود" },
    desc:  { en: "Automating build-test-deploy and describing infrastructure declaratively so it's repeatable.",
             ar: "أتمتة البناء والاختبار والنشر، ووصف البنية التحتية ككود عشان تتكرر بنفس الشكل." },
    items: ["GitHub Actions", "Terraform", "Ansible"],
  },
  {
    group: { en: "Systems & Scripting", ar: "الأنظمة والسكريبتات" },
    desc:  { en: "Day-to-day Linux administration — users, permissions, services, networking — automated with Bash.",
             ar: "إدارة Linux اليومية — مستخدمين وصلاحيات وخدمات وشبكات — مؤتمتة بـ Bash." },
    items: ["Linux (RHEL)", "Bash", "Nginx", "Git", "GitHub"],
  },
  {
    group: { en: "Monitoring & Observability", ar: "المراقبة والرصد" },
    desc:  { en: "Instrumenting infrastructure and services so problems show up before users report them.",
             ar: "رصد البنية والخدمات عشان المشاكل تبان قبل ما المستخدم يبلّغ بيها." },
    items: ["Prometheus", "Grafana"],
  },
  {
    group: { en: "Currently Learning", ar: "بتعلّمه حاليًا" },
    desc:  { en: "What I'm actively working through right now — listed honestly, not claimed as mastered.",
             ar: "اللي بشتغل عليه دلوقتي — مكتوب بصراحة، مش مدّعي إني متقنه." },
    items: ["ArgoCD", "Helm", "Service Mesh (Istio)", "AWS Solutions Architect"],
    learning: true,
  },
];

/* ---------------- EXPERIENCE in C.A.R format (Challenge → Action → Result) */
const EXPERIENCE = [
  {
    role: { en: "DevOps Intern", ar: "متدرب DevOps" },
    org:  { en: "Digital Egypt Pioneers Initiative (DEPI)", ar: "مبادرة رواد مصر الرقمية (DEPI)" },
    date: { en: "Jul 2026 — Present", ar: "يوليو ٢٠٢٦ — حتى الآن" },
    type: { en: "Internship", ar: "تدريب" },
    current: true,
    challenge: {
      en: "Course theory doesn't tell you what breaks in a real deployment. The challenge was to move from reading about pipelines to actually operating them end to end on Linux and cloud infrastructure.",
      ar: "المنهج النظري مش بيقولك إيه اللي بيقع في النشر الحقيقي. التحدي كان الانتقال من القراءة عن الـ Pipelines إلى تشغيلها فعليًا من الأول للآخر على Linux والبنية السحابية."
    },
    actions: {
      en: [
        "Administered RHEL systems — users, permissions, services and networking — and scripted the repetitive parts in Bash.",
        "Containerized applications with Docker and orchestrated multi-container workloads on Kubernetes.",
        "Built CI/CD workflows with GitHub Actions to automate build, test and deploy steps.",
        "Provisioned AWS infrastructure declaratively with Terraform and configured it with Ansible.",
        "Instrumented services with Prometheus and Grafana to track health and performance.",
      ],
      ar: [
        "إدارة أنظمة RHEL — مستخدمين وصلاحيات وخدمات وشبكات — وأتمتة المتكرر منها بـ Bash.",
        "تحويل التطبيقات لحاويات بـ Docker وتشغيل أحمال متعددة الحاويات على Kubernetes.",
        "بناء Workflows للـ CI/CD بـ GitHub Actions لأتمتة البناء والاختبار والنشر.",
        "تجهيز بنية AWS ككود بـ Terraform وضبطها بـ Ansible.",
        "رصد الخدمات بـ Prometheus و Grafana لمتابعة الصحة والأداء.",
      ],
    },
    result: {
      en: "Ongoing. So far it has produced a working set of containerized environments and automated pipelines, each documented well enough to hand to someone else.",
      ar: "مستمر. لحد دلوقتي طلع منه مجموعة بيئات بالحاويات و Pipelines مؤتمتة، كل واحدة موثّقة بشكل يسمح بتسليمها لحد تاني."
    },
    tech: ["Linux (RHEL)", "Bash", "Git", "Docker", "Kubernetes", "Nginx", "GitHub Actions", "Ansible", "Terraform", "Prometheus", "Grafana", "AWS"],
  },
  {
    role: { en: "Cloud Services Management & Operation — Trainee", ar: "إدارة وتشغيل الخدمات السحابية — متدرب" },
    org:  { en: "National Telecommunication Institute (NTI) · Digital Egypt Youth Initiative", ar: "المعهد القومي للاتصالات (NTI) · مبادرة شباب مصر الرقمية" },
    date: { en: "May — Jul 2026", ar: "مايو — يوليو ٢٠٢٦" },
    type: { en: "Training · 120 hrs", ar: "تدريب · ١٢٠ ساعة" },
    current: false,
    challenge: {
      en: "Knowing cloud concepts is not the same as operating a cloud account safely — access control, cost visibility and day-two operations are where accounts actually go wrong.",
      ar: "معرفة مفاهيم السحابة حاجة، وتشغيل حساب سحابي بأمان حاجة تانية — التحكم في الوصول ورؤية التكلفة والتشغيل اليومي هم فين الحسابات بتغلط فعلًا."
    },
    actions: {
      en: [
        "Worked through cloud service management and operation across a 120-hour program (90 technical + 30 soft skills).",
        "Practised access control, resource management and cost-aware operation on live cloud accounts.",
      ],
      ar: [
        "دراسة إدارة وتشغيل الخدمات السحابية خلال برنامج ١٢٠ ساعة (٩٠ تقني + ٣٠ مهارات).",
        "تطبيق عملي على التحكم في الوصول وإدارة الموارد والتشغيل الواعي بالتكلفة على حسابات سحابية حقيقية.",
      ],
    },
    result: {
      en: "Completed with a score of 97% — and the AWS IAM and billing labs in the Projects section below came directly out of this program.",
      ar: "أنهيته بدرجة ٩٧٪ — ومعامل IAM والفوترة في قسم المشاريع بالأسفل خرجت مباشرة من البرنامج ده."
    },
    tech: ["AWS", "IAM", "Billing & Cost Management", "Cloud Operations"],
  },
  {
    role: { en: "Cloud Essentials — Trainee", ar: "أساسيات السحابة — متدرب" },
    org:  { en: "National Telecommunication Institute (NTI) · ITIDA", ar: "المعهد القومي للاتصالات (NTI) · ITIDA" },
    date: { en: "Aug — Sep 2025", ar: "أغسطس — سبتمبر ٢٠٢٥" },
    type: { en: "Training · 120 hrs", ar: "تدريب · ١٢٠ ساعة" },
    current: false,
    challenge: {
      en: "I needed a solid foundation before touching production-style infrastructure — how the layers of a cloud actually fit together, not just which buttons to click.",
      ar: "كنت محتاج أساس قوي قبل ما ألمس بنية شبه إنتاجية — أفهم طبقات السحابة بتتركب إزاي، مش بس أضغط أزرار فين."
    },
    actions: {
      en: [
        "Covered cloud service models (IaaS, PaaS, SaaS) and virtualization fundamentals.",
        "Studied networking architecture — VPCs, subnets and routing — across AWS and Huawei Cloud.",
        "Applied high-availability design patterns and security best practices to lab scenarios.",
      ],
      ar: [
        "دراسة نماذج الخدمات السحابية (IaaS و PaaS و SaaS) وأساسيات المحاكاة الافتراضية.",
        "دراسة معمارية الشبكات — VPC والـ Subnets والتوجيه — على AWS و Huawei Cloud.",
        "تطبيق أنماط التصميم عالي الإتاحة وأفضل ممارسات الأمان على سيناريوهات معملية.",
      ],
    },
    result: {
      en: "Completed with a score of 96.5%, and went on to certify on both platforms — AWS Cloud Practitioner and Huawei HCCDA.",
      ar: "أنهيته بدرجة ٩٦٫٥٪، وبعدها حصلت على شهادتين من المنصتين — AWS Cloud Practitioner و Huawei HCCDA."
    },
    tech: ["AWS", "Huawei Cloud", "VPC", "Virtualization", "HA Design"],
  },
];

/* ---------------- SERVICES: name · what · problem it solves · what you get */
const SERVICES = [
  {
    icon: "container",
    title: { en: "Containerize your application", ar: "تحويل تطبيقك لحاويات" },
    what:  { en: "I package your app and its dependencies into Docker images and run them on Kubernetes.",
             ar: "بغلّف تطبيقك واعتمادياته في صور Docker وبشغّلها على Kubernetes." },
    problem: { en: "\"It works on my machine\" — the app behaves differently on every server and every new environment takes days to set up.",
               ar: "«شغّالة عندي» — التطبيق بيتصرف بشكل مختلف على كل سيرفر، وكل بيئة جديدة بتاخد أيام." },
    youGet: { en: "One image that runs identically on any machine, plus the Dockerfile and compose/manifest files you own.",
              ar: "صورة واحدة بتشتغل بنفس الشكل على أي جهاز، ومعاها ملفات Dockerfile والـ manifests ملكك." },
    tech: ["Docker", "Kubernetes"],
  },
  {
    icon: "pipeline",
    title: { en: "CI/CD pipeline setup", ar: "إعداد Pipeline للـ CI/CD" },
    what:  { en: "I build GitHub Actions workflows that build, test and deploy on every push.",
             ar: "ببني Workflows بـ GitHub Actions بتبني وتختبر وتنشر مع كل Push." },
    problem: { en: "Deployment is a manual checklist someone runs at midnight — slow, and it breaks when that person is on holiday.",
               ar: "النشر قايمة يدوية حد بينفذها بالليل — بطيئة وبتقع لما الشخص ده يغيب." },
    youGet: { en: "A pipeline that ships on every merge, with the deploy steps written down instead of living in someone's head.",
              ar: "Pipeline بينشر مع كل Merge، وخطوات النشر مكتوبة مش محفوظة في دماغ حد." },
    tech: ["GitHub Actions", "Docker", "Bash"],
  },
  {
    icon: "cloud",
    title: { en: "AWS infrastructure as code", ar: "بنية AWS ككود" },
    what:  { en: "I define your AWS environment in Terraform and configure the servers with Ansible.",
             ar: "بعرّف بيئة AWS بتاعتك في Terraform وبضبط السيرفرات بـ Ansible." },
    problem: { en: "Infrastructure was clicked together in the console, so nobody can recreate it and staging never matches production.",
               ar: "البنية اتعملت بالضغط في الـ Console، فمحدش يقدر يعيد بناءها، والـ Staging مش زي الـ Production أبدًا." },
    youGet: { en: "Version-controlled infrastructure you can destroy and rebuild identically, plus IAM scoped to least privilege.",
              ar: "بنية تحتية تحت إدارة الإصدارات تقدر تمسحها وتبنيها تاني بنفس الشكل، ومعاها صلاحيات IAM بأقل امتياز." },
    tech: ["Terraform", "Ansible", "AWS IAM", "VPC"],
  },
  {
    icon: "terminal",
    title: { en: "Linux administration & automation", ar: "إدارة Linux والأتمتة" },
    what:  { en: "I set up, harden and automate RHEL/Ubuntu servers, including Nginx as a reverse proxy.",
             ar: "بجهّز وبأمّن وبأتمت سيرفرات RHEL/Ubuntu، ومنها Nginx كـ Reverse Proxy." },
    problem: { en: "Routine server work eats hours every week and gets done slightly differently each time.",
               ar: "شغل السيرفرات الروتيني بياكل ساعات كل أسبوع، وبيتعمل بطريقة مختلفة شوية كل مرة." },
    youGet: { en: "Bash scripts and Ansible playbooks that do the routine work the same way every run.",
              ar: "سكريبتات Bash و Playbooks بـ Ansible بتعمل الشغل الروتيني بنفس الطريقة كل مرة." },
    tech: ["Linux (RHEL)", "Bash", "Nginx", "Ansible"],
  },
];

/* ---------------- PROJECTS: Problem · Role · Solution · Tools · Result */
const PROJECTS = [
  {
    cover: "assets/projects/cloud.jpg",
    title: { en: "IAM Least-Privilege Access Model", ar: "نموذج صلاحيات بأقل امتياز على IAM" },
    category: { en: "Cloud Security · AWS", ar: "أمان السحابة · AWS" },
    badge: true,
    problem: {
      en: "Support staff were all sharing broad administrative permissions, which meant anyone could reach services they had no business touching — a standing risk of accidental or malicious change.",
      ar: "فريق الدعم كله بيشارك صلاحيات إدارية واسعة، يعني أي حد يقدر يوصل لخدمات مالهوش علاقة بيها — خطر دائم لتغيير بالغلط أو بسوء نية."
    },
    role: {
      en: "Solo — I designed the permission model, implemented it, tested it and wrote the documentation.",
      ar: "منفرد — صمّمت نموذج الصلاحيات ونفّذته واختبرته وكتبت التوثيق."
    },
    solution: {
      en: [
        "Mapped three real job functions to IAM groups: S3-Support, EC2-Support and EC2-Admin.",
        "Attached a scoped policy to each group so permissions matched only that role's responsibilities.",
        "Created one IAM user per role and assigned each to its matching group.",
        "Signed in as each user and tested both allowed and denied actions to prove the boundaries held.",
      ],
      ar: [
        "ربط ثلاث وظائف حقيقية بمجموعات IAM: S3-Support و EC2-Support و EC2-Admin.",
        "إلحاق سياسة محدودة بكل مجموعة بحيث تطابق مسؤوليات الدور فقط.",
        "إنشاء مستخدم IAM لكل دور وإسناده لمجموعته.",
        "الدخول بكل مستخدم واختبار الإجراءات المسموحة والممنوعة لإثبات أن الحدود شغالة.",
      ],
    },
    tech: ["AWS IAM", "S3", "EC2", "IAM Policies"],
    result: {
      en: "A working least-privilege model where each role reaches only its own services. Delivered with an architecture diagram, a policy-by-policy breakdown and the full permission test results.",
      ar: "نموذج أقل امتياز شغّال، كل دور بيوصل لخدماته هو بس. مسلّم مع رسم للبنية وتفصيل لكل سياسة ونتائج اختبار الصلاحيات كاملة."
    },
    links: { repo: "#", demo: null }, // TODO: ضع لينك الـ GitHub repo
  },
  {
    cover: "assets/projects/devops.jpg",
    title: { en: "Billing Access Delegation", ar: "تفويض الوصول للفوترة" },
    category: { en: "Cloud Administration · AWS", ar: "إدارة السحابة · AWS" },
    badge: true,
    problem: {
      en: "Reviewing cost data required the root account, so the credentials with unlimited power were being handed around for a read-only task — and an account setting was silently blocking the safe alternative.",
      ar: "مراجعة بيانات التكلفة كانت بتتطلب حساب الـ Root، يعني بيانات دخول بصلاحيات مفتوحة بتتنقل عشان مهمة قراءة بس — وكان في إعداد في الحساب بيمنع البديل الآمن من غير ما حد ياخد باله."
    },
    role: {
      en: "Solo — I diagnosed the blocking setting, built the delegation and documented the fix.",
      ar: "منفرد — شخّصت الإعداد اللي كان بيمنع، وبنيت التفويض، ووثّقت الحل."
    },
    solution: {
      en: [
        "Traced the failure to IAM access to the Billing console being disabled at the account level, and enabled it.",
        "Created a dedicated IAM user scoped strictly to billing visibility.",
        "Verified the user could reach cost data while the root account stayed unused for daily work.",
      ],
      ar: [
        "تتبّع سبب المشكلة لحد إعداد وصول IAM لكونسول الفوترة المعطّل على مستوى الحساب، وتفعيله.",
        "إنشاء مستخدم IAM مخصص لرؤية الفوترة فقط.",
        "التأكد من وصول المستخدم لبيانات التكلفة مع بقاء حساب الـ Root بعيد عن الشغل اليومي.",
      ],
    },
    tech: ["AWS IAM", "Billing & Cost Management"],
    result: {
      en: "Billing review delegated safely away from the root account. Delivered as a step-by-step README with screenshots of every configuration stage.",
      ar: "مراجعة الفوترة اتفوّضت بأمان بعيد عن حساب الـ Root. مسلّم كـ README خطوة بخطوة مع صور لكل مرحلة إعداد."
    },
    links: { repo: "#", demo: null }, // TODO: ضع لينك الـ GitHub repo
  },
];

/* ---------------- ACHIEVEMENTS: org · name · 2 lines */
const ACHIEVEMENTS = [
  {
    name: { en: "DEPI Selection", ar: "القبول في DEPI" },
    org:  { en: "Digital Egypt Pioneers Initiative", ar: "مبادرة رواد مصر الرقمية" },
    desc: {
      en: "Selected for Egypt's national DevOps track under MCIT, training on CI/CD, containers and infrastructure automation.",
      ar: "تم اختياري في مسار DevOps القومي التابع لوزارة الاتصالات، وبتدرب على CI/CD والحاويات وأتمتة البنية التحتية."
    },
  },
  {
    name: { en: "97% & 96.5% — NTI programs", ar: "٩٧٪ و ٩٦٫٥٪ — برامج NTI" },
    org:  { en: "National Telecommunication Institute", ar: "المعهد القومي للاتصالات" },
    desc: {
      en: "Top scores across two 120-hour cloud programs: Cloud Services Management & Operation (97%) and Cloud Essentials (96.5%).",
      ar: "درجات مرتفعة في برنامجين سحابيين مدة كل منهما ١٢٠ ساعة: إدارة وتشغيل الخدمات السحابية (٩٧٪) وأساسيات السحابة (٩٦٫٥٪)."
    },
  },
  {
    name: { en: "Certified on both clouds", ar: "معتمد على المنصتين" },
    org:  { en: "AWS · Huawei Cloud", ar: "AWS · Huawei Cloud" },
    desc: {
      en: "AWS Certified Cloud Practitioner and Huawei HCCDA-Tech Essentials, alongside Red Hat system administration coursework.",
      ar: "شهادة AWS Certified Cloud Practitioner وشهادة Huawei HCCDA-Tech Essentials، بجانب مساق إدارة أنظمة Red Hat."
    },
  },
];

const CERTIFICATIONS = [
  {
    title: { en: "AWS Certified Cloud Practitioner", ar: "AWS Certified Cloud Practitioner" },
    issuer: { en: "Amazon Web Services", ar: "Amazon Web Services" },
    date: { en: "Issued May 1, 2026 · Expires May 1, 2029", ar: "صدرت ١ مايو ٢٠٢٦ · تنتهي ١ مايو ٢٠٢٩" },
    meta: [[{ en: "Validation number", ar: "رقم التحقق" }, "4d5a91f830934e0ba5af9e939b0d4a6c"]],
    image: "assets/certs/aws_ccp_cert.png",
    verifyUrl: "https://aws.amazon.com/verification",
  },
  {
    title: { en: "Huawei HCCDA — Tech Essentials", ar: "Huawei HCCDA — Tech Essentials" },
    issuer: { en: "Huawei Cloud", ar: "Huawei Cloud" },
    date: { en: "Certified · Valid until Oct 21, 2028", ar: "معتمدة · سارية حتى ٢١ أكتوبر ٢٠٢٨" },
    meta: [[{ en: "Certificate No.", ar: "رقم الشهادة" }, "HWENDCTEDA562969"]],
    image: "assets/certs/huawei_hccda_cert.png",
    verifyUrl: null,
  },
  {
    title: { en: "Cloud Services Management & Operation", ar: "إدارة وتشغيل الخدمات السحابية" },
    issuer: { en: "NTI · Digital Egypt Youth Initiative", ar: "NTI · مبادرة شباب مصر الرقمية" },
    date: { en: "7 May – 18 Jul 2026", ar: "٧ مايو – ١٨ يوليو ٢٠٢٦" },
    meta: [
      [{ en: "Duration", ar: "المدة" }, "120 hrs (90 technical · 30 soft skills)"],
      [{ en: "Score", ar: "الدرجة" }, "97%"],
    ],
    image: "assets/certs/cloud_services_cert.png",
    verifyUrl: null,
  },
  {
    title: { en: "Cloud Essentials", ar: "أساسيات السحابة" },
    issuer: { en: "NTI · ITIDA", ar: "NTI · ITIDA" },
    date: { en: "24 Aug – 18 Sep 2025", ar: "٢٤ أغسطس – ١٨ سبتمبر ٢٠٢٥" },
    meta: [
      [{ en: "Duration", ar: "المدة" }, "120 hrs (90 technical · 30 soft skills)"],
      [{ en: "Score", ar: "الدرجة" }, "96.5%"],
    ],
    image: "assets/certs/nti_cloud_essentials_cert.png",
    verifyUrl: null,
  },
  {
    title: { en: "DevOps Foundations", ar: "أساسيات DevOps" },
    issuer: { en: "Sprints × Microsoft Summer Camp", ar: "Sprints × Microsoft Summer Camp" },
    date: { en: "September 2025", ar: "سبتمبر ٢٠٢٥" },
    meta: [
      [{ en: "Workload", ar: "عدد الساعات" }, "40 hours"],
      [{ en: "Credential ID", ar: "رقم الاعتماد" }, "SPR-XS69D9"],
    ],
    image: "assets/certs/sprints_devops_cert.png",
    verifyUrl: null,
  },
  {
    title: { en: "Red Hat System Administration I & II", ar: "إدارة أنظمة Red Hat I و II" },
    issuer: { en: "Mahara-Tech · ITI", ar: "مهارة-تك · ITI" },
    date: { en: "Completed 26 Aug 2025", ar: "اكتملت ٢٦ أغسطس ٢٠٢٥" },
    meta: [[{ en: "Verification code", ar: "كود التحقق" }, "Ol8GLiGpJB"]],
    image: "assets/certs/redhat_admin_cert.png",
    verifyUrl: null,
  },
];

const NAV_SECTIONS = [
  ["home",         { en: "Home",         ar: "الرئيسية" }],
  ["about",        { en: "About",        ar: "نبذة" }],
  ["education",    { en: "Education",    ar: "التعليم" }],
  ["skills",       { en: "Skills",       ar: "المهارات" }],
  ["experience",   { en: "Experience",   ar: "الخبرة" }],
  ["services",     { en: "Services",     ar: "الخدمات" }],
  ["projects",     { en: "Projects",     ar: "المشاريع" }],
  ["pricing",      { en: "Pricing",      ar: "الأسعار" }],
  ["achievements", { en: "Achievements", ar: "الإنجازات" }],
  ["contact",      { en: "Contact",      ar: "تواصل" }],
];

const FOOTER_BLURB = {
  en: "Cloud & DevOps engineer based in Cairo. I containerize applications and automate their deployment on AWS with Docker, Kubernetes, Terraform and Ansible — and I document everything I build.",
  ar: "مهندس Cloud و DevOps من القاهرة. بحوّل التطبيقات لحاويات وبأتمت نشرها على AWS بـ Docker و Kubernetes و Terraform و Ansible — وبوثّق كل حاجة بعملها."
};

/* Any entry still set to "#" is hidden automatically — no dead links. */
const SOCIALS = [
  { key: "linkedin", label: "LinkedIn", url: "#" }, // TODO
  { key: "github",   label: "GitHub",   url: "#" }, // TODO
  { key: "upwork",   label: "Upwork",   url: "#" }, // TODO
  { key: "mostaql",  label: "Mostaql",  url: "#" }, // TODO
  { key: "khamsat",  label: "Khamsat",  url: "#" }, // TODO
];
