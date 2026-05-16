/*
  Edit this file to update the site.

  Start here for normal updates. Use SITE-MANAGER.md for the full workflow
  and templates/content-blocks.js for copy-paste starter blocks.

  Common edits:
  - Add a blog post: copy one object in blogPosts and change the text.
  - Add a project: copy one object in projects and change the text.
  - Add a skill: copy one object in skills and change the text.
  - Update links: edit contactLinks.

  Keep commas between items. Text should stay inside quotes.
*/

window.siteContent = {
  year: "2026",
  owner: "NZUBE IGWEAMAKA",
  nav: {
    name: "NZUBE",
    avatar: "assets/profile.jpg?v=20260516b"
  },

  hero: {
    tag: "CYBERSECURITY PORTFOLIO",
    firstName: "Nzube",
    lastName: "Igweamaka",
    title: "ASPIRING SOC ANALYST · BLUE TEAM",
    description: "Building the skills to defend digital infrastructure — one log, one alert, one lab at a time. Documenting my journey from zero to SOC analyst in public.",
    cv: {
      label: "VIEW RESUME",
      url: "https://nzubeio.github.io/resume.pdf"
    }
  },

  statusItems: [
    { label: "CURRENT STATUS", value: "ACTIVELY LEARNING", dot: true }
  ],

  about: {
    paragraphs: [
      "I'm Nzube Igweamaka, a cybersecurity enthusiast on a deliberate mission to enter the Security Operations Center (SOC) field. I believe in learning in public — every lab, every writeup, and every project on this portfolio is a record of real progress.",
      "My focus is on the Blue Team: threat detection, log analysis, incident response, and SIEM tooling. I'm building foundations first — networking, Linux, and core security concepts — before diving deep into SOC-specific tools like Splunk and Microsoft Sentinel.",
      "I document everything so others on the same path can learn alongside me. Let's build together."
    ],
    terminal: {
      name: "Nzube Igweamaka",
      role: "Aspiring SOC Analyst",
      focus: "Blue Team / Threat Detection",
      learning: "Networking, Linux, SIEM"
    }
  },

  projects: [
    {
      status: "IN PROGRESS",
      number: "PROJECT_01",
      title: "Home SOC Lab Setup",
      description: "Building a personal SOC environment using free and open-source tools. Setting up log ingestion, alerting, and a basic detection pipeline from scratch.",
      image: "assets/project-home-soc-lab.svg",
      imageAlt: "Home SOC lab dashboard project preview",
      tags: ["VIRTUALBOX", "SPLUNK FREE", "LINUX"],
      blogUrl: "posts/home-soc-lab.html",
      codeUrl: "https://github.com/nzubeio"
    },
    {
      status: "PLANNED",
      number: "PROJECT_02",
      title: "Log Analysis Lab",
      description: "Analyzing real-world sample Windows and Linux logs to identify suspicious activity, failed logins, privilege escalations, and lateral movement patterns.",
      tags: ["SPLUNK", "WINDOWS LOGS", "LINUX LOGS"],
      blogUrl: "blog.html",
      codeUrl: "https://github.com/nzubeio"
    },
    {
      status: "PLANNED",
      number: "PROJECT_03",
      title: "Network Traffic Analysis",
      description: "Capturing live network traffic and analyzing packet captures (PCAPs) to identify port scans, C2 beaconing, and other network-based threats.",
      tags: ["WIRESHARK", "PCAP", "TCPDUMP"],
      blogUrl: "blog.html",
      codeUrl: "https://github.com/nzubeio"
    },
    {
      status: "PLANNED",
      number: "PROJECT_04",
      title: "Python Security Scripts",
      description: "Writing Python scripts for security automation: log file parsers, IP reputation checkers, simple port scanners, and alert aggregators.",
      tags: ["PYTHON", "AUTOMATION", "SCRIPTING"],
      blogUrl: "blog.html",
      codeUrl: "https://github.com/nzubeio"
    },
    {
      status: "PLANNED",
      number: "PROJECT_05",
      title: "TryHackMe SOC Writeups",
      description: "Detailed writeups for completed TryHackMe rooms — focusing on the SOC Level 1 learning path. Documenting methodology, tools used, and key learnings.",
      tags: ["TRYHACKME", "SOC PATH", "WRITEUPS"],
      blogUrl: "blog.html",
      codeUrl: "https://github.com/nzubeio"
    },
    {
      status: "PLANNED",
      number: "PROJECT_06",
      title: "OSINT Investigation Lab",
      description: "Practicing open-source intelligence gathering techniques using tools like Maltego, Shodan, and TheHarvester on target machines in a controlled environment.",
      tags: ["OSINT", "SHODAN", "MALTEGO"],
      blogUrl: "blog.html",
      codeUrl: "https://github.com/nzubeio"
    }
  ],

  skills: [
    { icon: "🐧", name: "Linux", status: "LEARNING", tone: "learning" },
    { icon: "🔍", name: "Splunk", status: "UP NEXT", tone: "planned" },
    { icon: "🌐", name: "Wireshark", status: "UP NEXT", tone: "planned" },
    { icon: "🐍", name: "Python", status: "PLANNED", tone: "planned" },
    { icon: "📡", name: "Nmap", status: "PLANNED", tone: "planned" },
    { icon: "💻", name: "Bash Scripting", status: "PLANNED", tone: "planned" },
    { icon: "☁️", name: "MS Sentinel", status: "PLANNED", tone: "planned" },
    { icon: "🕵️", name: "OSINT Tools", status: "PLANNED", tone: "planned" }
  ],

  certifications: [
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      status: "TARGET CERT",
      date: "In Progress",
      description: "Foundational cybersecurity certification covering threats, architecture, operations, governance, and risk.",
      image: "assets/cert-security-plus.svg",
      imageAlt: "Security Plus certification badge placeholder",
      url: "https://www.comptia.org/certifications/security"
    },
    {
      name: "TryHackMe SOC Level 1",
      issuer: "TryHackMe",
      status: "LEARNING PATH",
      date: "Planned",
      description: "Hands-on blue-team path focused on SOC workflows, alert triage, log analysis, and incident response basics.",
      image: "assets/cert-tryhackme-soc.svg",
      imageAlt: "TryHackMe SOC Level 1 badge placeholder",
      url: "https://tryhackme.com/p/nzubeio"
    },
    {
      name: "Google Cybersecurity Certificate",
      issuer: "Google / Coursera",
      status: "PLANNED",
      date: "Planned",
      description: "Beginner-friendly professional certificate covering security foundations, Linux, SQL, Python, and SIEM concepts.",
      image: "assets/cert-google-cybersecurity.svg",
      imageAlt: "Google Cybersecurity Certificate badge placeholder",
      url: "https://www.coursera.org/professional-certificates/google-cybersecurity"
    }
  ],

  contact: {
    heading: "Let's Connect",
    text: "I'm open to learning opportunities, mentorship, collaboration, and entry-level SOC roles. If you're a recruiter, a fellow learner, or just someone passionate about cybersecurity — reach out!"
  },

  contactLinks: [
    { label: "GITHUB", url: "https://github.com/nzubeio" },
    { label: "LINKEDIN", url: "https://linkedin.com/in/nzubeio" },
    { label: "MEDIUM", url: "https://medium.com/@nzubeio" },
    { label: "X", url: "https://x.com/nzubeio" },
    { label: "TRYHACKME", url: "https://tryhackme.com/p/nzubeio" },
    { label: "EMAIL", url: "mailto:nzube@email.com" }
  ],

  blog: {
    label: "// FIELD NOTES",
    title: "Blog & SOC Learning Journal",
    intro: "Notes from labs, security concepts, detection practice, and the messy middle of learning cybersecurity in public.",
    status: "Drafting first writeups and lab notes.",
    topics: ["Threat detection", "SIEM practice", "TryHackMe notes", "Home lab builds"]
  },

  blogPosts: [
    {
      status: "PUBLISHED",
      readTime: "7 MIN READ",
      title: "How I Am Building My First Home SOC Lab",
      excerpt: "A practical walkthrough of the tools, goals, and decisions behind my first personal SOC environment.",
      image: "assets/blog-home-soc-lab.svg",
      imageAlt: "Home SOC lab dashboard illustration",
      tags: ["SOC LAB", "SPLUNK", "LINUX"],
      showMedium: true,
      mediumUrl: "https://medium.com/@nzubeio",
      url: "posts/home-soc-lab.html"
    },
    {
      status: "COMING SOON",
      readTime: "4 MIN READ",
      title: "What I Learned From Reading Authentication Logs",
      excerpt: "Early lessons from spotting failed logins, suspicious timing, and patterns that matter to Tier 1 analysts.",
      tags: ["LOG ANALYSIS", "DETECTION", "BLUE TEAM"],
      showMedium: false,
      mediumUrl: "",
      url: "#"
    },
    {
      status: "COMING SOON",
      readTime: "6 MIN READ",
      title: "My Beginner Roadmap Into SOC Analysis",
      excerpt: "The learning path I am following: networking, Linux, SIEM basics, incident response, and hands-on labs.",
      tags: ["ROADMAP", "CAREER", "SOC TIER 1"],
      showMedium: false,
      mediumUrl: "",
      url: "#"
    }
  ]
};
