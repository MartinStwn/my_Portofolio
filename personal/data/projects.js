const projects = [
  {
    id: 1,
    slug: 'endpoint-security',
    title: 'Endpoint Security Implementation',
    category: 'Incident Response',
    shortDesc: 'Implementation and testing of system protection using Kaspersky in Windows & Linux environments to ensure real-time protection against malware threats.',
    overview: 'This project focused on deploying and testing endpoint security solutions across a mixed Windows and Linux enterprise environment. Using Kaspersky Endpoint Security, I configured real-time threat detection, scheduled malware simulations, and established monitoring protocols to ensure comprehensive system protection. The project aimed to reduce the organization\'s attack surface by implementing layered security controls at the endpoint level.',
    problem: [
      'Organizations faced increasing malware threats targeting both Windows and Linux endpoints',
      'Existing security solutions lacked centralized management and real-time visibility',
      'Manual threat response processes led to delayed incident remediation',
      'Inconsistent security policies across heterogeneous operating systems created blind spots',
      'Lack of automated malware simulation testing meant unknown vulnerabilities remained unaddressed'
    ],
    solution: 'I deployed Kaspersky Endpoint Security across all endpoints with centralized policy management. I configured custom threat detection rules, scheduled automated scans, and implemented real-time monitoring dashboards. Regular malware simulation tests were conducted to validate protection effectiveness. The solution provided unified security management across both Windows and Linux environments with automated incident response workflows.',
    features: [
      'Centralized Endpoint Management',
      'Real-time Threat Detection',
      'Malware Simulation Testing',
      'Cross-Platform Protection',
      'Automated Incident Response',
      'Security Dashboard & Reporting',
      'Policy-based Access Control',
      'Vulnerability Assessment'
    ],
    technologies: {
      frontend: ['React', 'Tailwind CSS'],
      backend: ['Node.js', 'Express'],
      database: ['PostgreSQL'],
      deployment: ['Docker', 'Linux Server'],
      tools: ['Kaspersky', 'Wireshark', 'Nmap', 'Parrot OS', 'Fedora', 'Ubuntu']
    },
    gallery: [],
    architecture: [
      { from: 'Windows / Linux Endpoints', to: 'Kaspersky Security Center' },
      { from: 'Kaspersky Security Center', to: 'Threat Detection Engine' },
      { from: 'Threat Detection Engine', to: 'Monitoring Dashboard' },
      { from: 'Monitoring Dashboard', to: 'Incident Response Team' }
    ],
    challenges: [
      'Configuring consistent security policies across different OS platforms',
      'Balancing security controls with system performance requirements',
      'Setting up accurate malware simulation without disrupting operations',
      'Integrating endpoint logs with existing SIEM infrastructure'
    ],
    lessonsLearned: [
      'Cross-platform security requires deep understanding of each OS\'s security model',
      'Simulation testing is critical for validating protection effectiveness',
      'Centralized management significantly reduces operational overhead',
      'Regular security audits help maintain strong defense posture'
    ],
    githubUrl: '#',
    liveDemoUrl: '#',
    coverImage: null,
    createdAt: '2025',
    status: 'Completed'
  },
  {
    id: 2,
    slug: 'mail-server-deployment',
    title: 'Mail Server & Infrastructure Deployment',
    category: 'Infrastructure',
    shortDesc: 'Mail server configuration (Postfix, Dovecot, Roundcube) and network troubleshooting (VoIP, LAN) to support corporate IT operations.',
    overview: 'I designed and deployed a complete mail infrastructure using Postfix, Dovecot, and Roundcube to support corporate email operations. The project involved configuring SMTP/IMAP services, setting up secure authentication, and integrating webmail access. Additionally, I performed network troubleshooting across VoIP and LAN infrastructure to ensure reliable communication services for the entire organization.',
    problem: [
      'Outdated mail server infrastructure caused frequent downtime and delivery failures',
      'Lack of proper email security measures led to spam and phishing vulnerabilities',
      'Network connectivity issues affected VoIP quality and data transmission reliability',
      'No centralized mail management made user administration difficult',
      'Manual troubleshooting processes extended resolution times for IT incidents'
    ],
    solution: 'I deployed Postfix as the SMTP server and Dovecot for IMAP/POP3 services, with Roundcube providing the webmail interface. I configured SPF, DKIM, and DMARC for email authentication and security. For the network component, I performed thorough diagnostics on VLAN configurations and VoIP traffic routing, resolving latency issues and improving overall network reliability.',
    features: [
      'SMTP/IMAP/POP3 Mail Services',
      'Webmail Access (Roundcube)',
      'Email Security (SPF/DKIM/DMARC)',
      'Anti-spam Filtering',
      'Mail Queue Management',
      'Network Traffic Monitoring',
      'VoIP Quality Optimization',
      'Centralized User Administration'
    ],
    technologies: {
      frontend: ['Roundcube UI'],
      backend: ['Postfix', 'Dovecot'],
      database: ['MySQL'],
      deployment: ['Linux Server', 'Juniper'],
      tools: ['Wireshark', 'n8n', 'Fedora', 'Ubuntu', 'Parrot OS']
    },
    gallery: [],
    architecture: [
      { from: 'Email Client', to: 'Postfix SMTP' },
      { from: 'Postfix SMTP', to: 'Dovecot IMAP' },
      { from: 'Dovecot IMAP', to: 'Roundcube Webmail' },
      { from: 'Postfix SMTP', to: 'Mail Queue' },
      { from: 'Mail Queue', to: 'External Delivery' }
    ],
    challenges: [
      'Configuring correct SPF/DKIM/DMARC records to prevent email spoofing',
      'Optimizing mail queue performance under high-volume conditions',
      'Diagnosing intermittent VoIP quality issues across VLAN segments',
      'Ensuring high availability and failover for critical mail services'
    ],
    lessonsLearned: [
      'Email infrastructure requires careful security configuration to prevent abuse',
      'Network troubleshooting is most effective with structured diagnostic methodology',
      'Integration of monitoring tools significantly improves incident response time',
      'Documenting configurations is essential for long-term maintainability'
    ],
    githubUrl: '#',
    liveDemoUrl: '#',
    coverImage: null,
    createdAt: '2025',
    status: 'Completed'
  },
  {
    id: 3,
    slug: 'workflow-automation',
    title: 'Workflow Automation & Security Efficiency',
    category: 'Automation',
    shortDesc: 'Workflow and webhook-based chatbot development using n8n to improve operational efficiency and infrastructure security.',
    overview: 'I developed automated workflows and a webhook-based chatbot using n8n to streamline IT operations and enhance security monitoring. The automation system handles routine tasks such as log analysis, incident triage, and notification delivery — reducing manual workload and enabling faster response to security events. The chatbot provides a conversational interface for team members to query system status and receive alerts.',
    problem: [
      'IT team spent excessive time on repetitive manual tasks and status checks',
      'Security alerts were scattered across multiple tools with no centralized view',
      'Incident notification and escalation processes were slow and inconsistent',
      'Team members had no quick way to query system status or retrieve information',
      'Manual log analysis delayed threat detection and response times'
    ],
    solution: 'Using n8n, I designed and deployed automated workflows that connect security tools, log sources, and communication platforms. I built a webhook-based chatbot that integrates with the team\'s messaging platform, providing instant access to system status, security alerts, and automated responses. The workflows handle log aggregation, incident triage, and notification escalation without human intervention.',
    features: [
      'Automated Workflow Engine',
      'Webhook-based Chatbot',
      'Real-time Alert Notifications',
      'Log Aggregation & Analysis',
      'Incident Triage Automation',
      'Multi-platform Integration',
      'Customizable Workflow Templates',
      'Status Query Interface'
    ],
    technologies: {
      frontend: ['Chatbot Interface'],
      backend: ['n8n', 'Node.js'],
      database: ['PostgreSQL'],
      deployment: ['Docker', 'Linux Server'],
      tools: ['Webhook', 'n8n', 'Fedora', 'Ubuntu', 'Parrot OS']
    },
    gallery: [],
    architecture: [
      { from: 'Security Tools / Logs', to: 'n8n Workflow Engine' },
      { from: 'n8n Workflow Engine', to: 'Webhook Chatbot' },
      { from: 'Webhook Chatbot', to: 'Team Messaging Platform' },
      { from: 'n8n Workflow Engine', to: 'Alert & Notification System' }
    ],
    challenges: [
      'Designing workflows that handle diverse data formats from multiple sources',
      'Building a chatbot that provides accurate and timely information',
      'Ensuring automation reliability without creating false positives',
      'Integrating with existing tools that had inconsistent APIs'
    ],
    lessonsLearned: [
      'Automation significantly reduces operational overhead when designed thoughtfully',
      'Chatbot interfaces make security tools more accessible to non-technical team members',
      'Workflow reliability depends on proper error handling and fallback mechanisms',
      'Integration planning is critical when connecting disparate systems'
    ],
    githubUrl: '#',
    liveDemoUrl: '#',
    coverImage: null,
    createdAt: '2025',
    status: 'Completed'
  }
];
