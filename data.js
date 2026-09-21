/**
 * All content below is sourced directly from Asem's CV and the certificate
 * files provided. Fields left as placeholders (EMAIL / LINKEDIN / GITHUB)
 * were not visible as plain text in the source CV — replace them with the
 * real addresses/links before publishing.
 */

const PROFILE = {
  name: "Asem Mohamed Gamal",
  fullName: "Asem Mohamed Gamal Abdelshafi",
  title: "Cloud & DevOps Engineer",
  location: "Cairo, Egypt",
  phone: "+20 150 317 8835",
  email: "assem.mohamed.azab@gmail.com", // TODO: replace with real email
  linkedin: "#", // TODO: replace with real LinkedIn URL
  github: "#",   // TODO: replace with real GitHub URL
  cvFile: "assets/Asem_Mohamed_CV.pdf",
};

const TERMINAL_LINES = [
  { cmd: "whoami", out: "Asem Mohamed Gamal — Cloud & DevOps Engineer" },
  { cmd: "cat status.txt", out: "DevOps Intern @ DEPI · Computer Engineering student, Monufia University" },
  { cmd: "skills --top", out: "Linux | Docker | Kubernetes | AWS | Terraform | Ansible" },
  { cmd: "cat certifications.txt", out: "AWS Certified Cloud Practitioner · Huawei HCCDA" },
  { cmd: "echo $STATUS", out: "Open to internships & training opportunities" },
];

const EDUCATION = {
  degree: "B.Sc. in Computer Engineering",
  org: "Faculty of Engineering, Monufia University",
  meta: "2022 – 2027 · Computer Engineering Department",
  gpa: "3.63",
};

const SKILLS = [
  { group: "Cloud Platforms", items: ["AWS", "Huawei Cloud"] },
  { group: "DevOps & Automation", items: ["Docker", "Kubernetes", "Terraform", "Ansible", "GitHub Actions", "Istio"] },
  { group: "Systems & Scripting", items: ["Linux (RHEL)", "Bash Scripting", "Nginx"] },
  { group: "Monitoring", items: ["Prometheus", "Grafana"] },
  { group: "Tools", items: ["Git", "GitHub"] },
];

const EXPERIENCE = [
  {
    role: "DevOps Intern",
    org: "Digital Egypt Pioneers Initiative (DEPI)",
    date: "Jul 2026 — Present",
    current: true,
    points: [
      "Building hands-on experience with CI/CD pipelines, containerization and infrastructure automation.",
    ],
    tech: ["Linux (RHEL)", "Bash", "Git", "Docker", "Kubernetes", "Nginx", "GitHub Actions", "Ansible", "Terraform", "Prometheus", "Grafana", "AWS"],
  },
  {
    role: "Cloud Essentials Trainee",
    org: "National Telecommunication Institute (NTI)",
    date: "Aug 2025",
    current: false,
    points: [
      "Covered cloud service models (IaaS, PaaS, SaaS), virtualization, and networking architecture (VPC / subnets).",
      "Focused on high-availability design, security best practices and resource management across AWS and Huawei Cloud.",
    ],
    tech: ["AWS", "Huawei Cloud", "VPC"],
  },
];

const SERVICES = [
  {
    icon: "cloud",
    title: "Cloud Infrastructure",
    level: "Hands-on experience",
    desc: "Working across AWS and Huawei Cloud — compute, storage, networking (VPC/subnets), IAM and cost-aware resource management.",
    tech: ["AWS", "Huawei Cloud", "IAM", "VPC"],
  },
  {
    icon: "container",
    title: "Containerization & Orchestration",
    level: "Hands-on experience",
    desc: "Building and running containerized applications, from Dockerfiles to multi-container setups managed with Kubernetes.",
    tech: ["Docker", "Kubernetes"],
  },
  {
    icon: "pipeline",
    title: "CI/CD & Infrastructure as Code",
    level: "Hands-on experience",
    desc: "Automating build, test and deploy workflows and provisioning infrastructure declaratively.",
    tech: ["GitHub Actions", "Terraform", "Ansible"],
  },
  {
    icon: "terminal",
    title: "Linux Administration & Scripting",
    level: "Hands-on experience",
    desc: "Day-to-day Linux (RHEL) administration — users, permissions, processes and networking — automated with Bash.",
    tech: ["RHEL", "Bash", "Git"],
  },
  {
    icon: "monitor",
    title: "Monitoring & Observability",
    level: "Working knowledge",
    desc: "Instrumenting infrastructure and services to track health and performance, with early exposure to service mesh concepts.",
    tech: ["Prometheus", "Grafana", "Istio"],
  },
  {
    icon: "network",
    title: "Networking & Web Servers",
    level: "Working knowledge",
    desc: "Core networking fundamentals and serving applications behind a reverse proxy.",
    tech: ["Nginx", "DNS", "TCP/IP"],
  },
];

/* Real, documented hands-on work — no fabricated case studies. */
const PROJECTS = [
  {
    title: "IAM Least-Privilege Access Model",
    category: "Cloud Security · AWS",
    challenge:
      "Give different support roles access to only the AWS resources they actually need, instead of sharing broad administrative permissions.",
    implementation: [
      "Created three IAM groups mapped to real job functions: S3-Support, EC2-Support and EC2-Admin.",
      "Attached a scoped policy to each group so permissions matched the role's responsibilities.",
      "Created an IAM user per role and assigned each to its matching group.",
      "Signed in as each user and tested both allowed and denied actions to confirm the boundaries held.",
    ],
    tech: ["AWS IAM", "S3", "EC2", "IAM Policies"],
    result:
      "A working least-privilege model where each role reaches only its own services. Documented with an architecture diagram, a policy-by-policy breakdown and the permission test results.",
  },
  {
    title: "Billing Access Delegation",
    category: "Cloud Administration · AWS",
    challenge:
      "Let a non-root IAM user review billing and cost data without handing over root account credentials — and fix the account setting that was blocking it.",
    implementation: [
      "Enabled IAM access to the Billing and Cost Management console at the account level.",
      "Created a dedicated IAM user scoped to billing visibility.",
      "Verified the user could reach cost data while the root account stayed unused for daily work.",
    ],
    tech: ["AWS IAM", "Billing & Cost Management"],
    result:
      "Billing review delegated safely away from the root account. Documented as a step-by-step README with screenshots of each configuration stage.",
  },
];

const ACHIEVEMENTS = [
  { value: "97%", label: "Score — Cloud Services Management & Operation (NTI)" },
  { value: "96.5%", label: "Score — Cloud Essentials (NTI)" },
  { value: "3.63/4", label: "GPA — Computer Engineering, Monufia University" },
  { value: "6", label: "Certifications & courses completed" },
];

const CERTIFICATIONS = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Issued May 1, 2026 · Expires May 1, 2029",
    meta: [["Validation number", "4d5a91f830934e0ba5af9e939b0d4a6c"]],
    image: "assets/certs/aws_ccp_cert.png",
    verifyUrl: "https://aws.amazon.com/verification",
    verifyLabel: "Validate at aws.amazon.com",
  },
  {
    title: "Huawei Cloud Developer Certification — HCCDA-Tech Essentials",
    issuer: "Huawei Cloud",
    date: "Certified · Valid until Oct 21, 2028",
    meta: [["Certificate No.", "HWENDCTEDA562969"]],
    image: "assets/certs/huawei_hccda_cert.png",
    verifyUrl: null,
  },
  {
    title: "DevOps Foundations",
    issuer: "Sprints × Microsoft Summer Camp",
    date: "September 2025",
    meta: [
      ["Learning workload", "40 hours"],
      ["Credential ID", "SPR-XS69D9"],
    ],
    image: "assets/certs/sprints_devops_cert.png",
    verifyUrl: null,
  },
  {
    title: "Cloud Essentials",
    issuer: "National Telecommunication Institute (NTI) · ITIDA",
    date: "24 Aug – 18 Sep 2025",
    meta: [
      ["Duration", "120 hrs (90 technical · 30 soft skills)"],
      ["Score", "96.5%"],
      ["Student ID", "255505"],
    ],
    image: "assets/certs/nti_cloud_essentials_cert.png",
    verifyUrl: null,
  },
  {
    title: "Cloud Services Management and Operation",
    issuer: "NTI · Digital Egypt Youth Initiative",
    date: "7 May – 18 Jul 2026",
    meta: [
      ["Duration", "120 hrs (90 technical · 30 soft skills)"],
      ["Score", "97%"],
      ["Student ID", "255505"],
    ],
    image: "assets/certs/cloud_services_cert.png",
    verifyUrl: null,
  },
  {
    title: "Red Hat System Administration I & II",
    issuer: "Mahara-Tech (Information Technology Institute)",
    date: "Completed 26 Aug 2025",
    meta: [
      ["Course time", "9 hrs 11 min (Part I)"],
      ["Verification code", "Ol8GLiGpJB"],
    ],
    image: "assets/certs/redhat_admin_cert.png",
    verifyUrl: null,
  },
];

const NAV_SECTIONS = [
  ["about", "About"], ["education", "Education"], ["skills", "Skills"],
  ["experience", "Experience"], ["services", "Services"], ["projects", "Projects"],
  ["achievements", "Achievements"], ["contact", "Contact"],
];
