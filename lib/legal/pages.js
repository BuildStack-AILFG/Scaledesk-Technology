import { SITE } from "../seo/config";

export const LEGAL_LAST_UPDATED = "July 1, 2026";

export const LEGAL_RELATED_LINKS = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms of Service", href: "/legal/terms-of-service" },
  { label: "Cookie Policy", href: "/legal/cookie-policy" },
  { label: "Security", href: "/legal/security" },
];

export const privacyPolicy = {
  title: "Privacy Policy",
  subtitle:
    "How ScaleDesk Technology collects, uses, stores, and protects personal information across our website, products, and services.",
  lastUpdated: LEGAL_LAST_UPDATED,
  contactEmail: SITE.email,
  contactLabel: "Privacy inquiries",
  intro: [
    `${SITE.legalName} ("ScaleDesk," "we," "us," or "our") respects your privacy and is committed to protecting personal information. This Privacy Policy describes how we process data when you visit scaledesktechnology.com, use LeadForGrow™, PeopleForGrow™, or engage our Product Engineering and consulting services.`,
    "This policy applies to visitors, customers, prospects, job applicants, and users of our digital properties. By using our services, you acknowledge the practices described here. For cookie-specific details, see our Cookie Policy.",
  ],
  sections: [
    {
      id: "information-we-collect",
      title: "Information we collect",
      paragraphs: [
        "We collect information you provide directly, information generated through your use of our services, and limited information from third-party sources where permitted by law.",
      ],
      subsections: [
        {
          title: "Information you provide",
          list: [
            "Contact details such as name, email address, phone number, company name, and job title when you submit forms, request demos, or contact us.",
            "Account and profile information when you register for products, portals, or client workspaces.",
            "Billing and transaction information required to process commercial agreements.",
            "Communications you send to us, including support requests, sales inquiries, and feedback.",
            "Recruitment information submitted through careers pages or email, such as résumés and employment history.",
          ],
        },
        {
          title: "Information collected automatically",
          list: [
            "Device and browser data, including IP address, operating system, browser type, and language preferences.",
            "Usage data such as pages viewed, referral URLs, session duration, and interaction events.",
            "Log and diagnostic data used to maintain security, troubleshoot issues, and improve performance.",
            "Cookie and similar technology data as described in our Cookie Policy.",
          ],
        },
        {
          title: "Information from third parties",
          list: [
            "Business contact information from partners, event registrations, or publicly available professional sources.",
            "Authentication or integration data when you connect third-party services to ScaleDesk products, subject to your authorization.",
          ],
        },
      ],
    },
    {
      id: "how-we-use-information",
      title: "How we use information",
      paragraphs: ["We use personal information for legitimate business purposes, including:"],
      list: [
        "Delivering, operating, and improving our website, products, and professional services.",
        "Responding to inquiries, providing customer support, and managing client relationships.",
        "Processing transactions, invoicing, and contractual obligations.",
        "Sending service-related notices, product updates, and administrative communications.",
        "Analyzing usage trends to enhance security, reliability, and user experience.",
        "Conducting recruitment and evaluating job applications.",
        "Complying with legal obligations, enforcing our terms, and protecting our rights and users.",
        "Sending marketing communications where permitted and subject to your preferences.",
      ],
    },
    {
      id: "legal-bases",
      title: "Legal bases for processing",
      paragraphs: [
        "Where applicable under GDPR and similar laws, we rely on one or more of the following legal bases: performance of a contract, legitimate interests (such as securing our services and improving products), compliance with legal obligations, and consent where required (for example, certain marketing or non-essential cookies).",
      ],
    },
    {
      id: "sharing",
      title: "How we share information",
      paragraphs: [
        "We do not sell personal information. We may share information in the following circumstances:",
      ],
      list: [
        "With service providers and subprocessors that assist with hosting, analytics, communications, payment processing, and customer support, under contractual confidentiality and security obligations.",
        "With professional advisors such as legal, accounting, or audit firms where necessary.",
        "With affiliates within the ScaleDesk corporate group for operational purposes.",
        "In connection with a merger, acquisition, financing, or sale of assets, subject to appropriate safeguards.",
        "When required by law, regulation, legal process, or governmental request.",
        "To protect the rights, property, or safety of ScaleDesk, our clients, or others.",
      ],
    },
    {
      id: "international-transfers",
      title: "International data transfers",
      paragraphs: [
        "ScaleDesk operates globally with teams and infrastructure in the United States, India, and other regions. When personal information is transferred across borders, we implement appropriate safeguards such as standard contractual clauses, data processing agreements, and security controls consistent with applicable law.",
      ],
    },
    {
      id: "retention",
      title: "Data retention",
      paragraphs: [
        "We retain personal information only as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce agreements. Retention periods vary based on data type, contractual requirements, and regulatory obligations.",
      ],
    },
    {
      id: "your-rights",
      title: "Your rights and choices",
      paragraphs: [
        "Depending on your location, you may have rights to access, correct, delete, restrict, or port your personal information, and to object to certain processing. You may also withdraw consent where processing is consent-based.",
        "To exercise these rights, contact us at the address below. We may verify your identity before responding. If you are in the EEA, UK, or similar jurisdictions, you may lodge a complaint with your local supervisory authority.",
        "You may opt out of marketing emails by using the unsubscribe link in our messages or contacting us directly.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies and tracking technologies",
      paragraphs: [
        "We use cookies and similar technologies to operate our website, remember preferences, analyze traffic, and improve services. Details on cookie categories, retention, and controls are available in our Cookie Policy.",
      ],
    },
    {
      id: "security",
      title: "Security",
      paragraphs: [
        "We implement administrative, technical, and organizational measures designed to protect personal information. No method of transmission or storage is completely secure; we continuously work to improve our safeguards. See our Security page for more information.",
      ],
    },
    {
      id: "children",
      title: "Children's privacy",
      paragraphs: [
        "Our services are not directed to individuals under 16, and we do not knowingly collect personal information from children. If you believe a child has provided us information, please contact us so we can delete it.",
      ],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. The \"Last updated\" date at the top indicates when changes take effect. Material changes will be communicated through our website or direct notice where appropriate.",
      ],
    },
    {
      id: "contact",
      title: "Contact us",
      paragraphs: [
        `For privacy-related questions or requests, contact ${SITE.legalName}:`,
        `${SITE.email}`,
      ],
    },
  ],
};

export const termsOfService = {
  title: "Terms of Service",
  subtitle:
    "The terms and conditions governing access to ScaleDesk Technology websites, products, and professional services.",
  lastUpdated: LEGAL_LAST_UPDATED,
  contactEmail: SITE.email,
  contactLabel: "Legal inquiries",
  intro: [
    `These Terms of Service ("Terms") constitute a binding agreement between you and ${SITE.legalName} regarding your use of our website, software products (including LeadForGrow™ and PeopleForGrow™), APIs, documentation, and related services.`,
    "Please read these Terms carefully. By accessing or using our services, you agree to be bound by them. If you are entering into an agreement on behalf of an organization, you represent that you have authority to bind that organization.",
  ],
  sections: [
    {
      id: "services",
      title: "Our services",
      paragraphs: [
        "ScaleDesk provides Product Engineering, AI Solutions, Enterprise Software Development, IT Services, and proprietary software products. Specific scope, deliverables, service levels, and fees are defined in order forms, statements of work, or subscription agreements that supplement these Terms.",
      ],
    },
    {
      id: "eligibility",
      title: "Eligibility and accounts",
      paragraphs: [
        "You must be at least 18 years old and capable of forming a binding contract to use our services. You are responsible for maintaining the confidentiality of account credentials and for all activity under your account. Notify us immediately of unauthorized access.",
      ],
    },
    {
      id: "acceptable-use",
      title: "Acceptable use",
      paragraphs: ["You agree not to misuse our services. Prohibited activities include:"],
      list: [
        "Violating applicable laws, regulations, or third-party rights.",
        "Attempting unauthorized access to systems, accounts, or data.",
        "Introducing malware, conducting denial-of-service attacks, or interfering with service integrity.",
        "Reverse engineering, decompiling, or extracting source code except where permitted by law.",
        "Using services to send spam, phishing, or unlawful communications.",
        "Reselling or sublicensing products without written authorization.",
        "Uploading content that is defamatory, infringing, or harmful.",
      ],
    },
    {
      id: "client-data",
      title: "Client data and confidentiality",
      paragraphs: [
        'You retain ownership of data you submit to our products and services ("Client Data"). You grant ScaleDesk a limited license to process Client Data solely to provide and improve the services, as described in your agreement and our Privacy Policy.',
        "Each party agrees to protect the other's confidential information using reasonable care and to use it only for purposes related to the engagement. Confidentiality obligations survive termination as required by law or contract.",
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual property",
      paragraphs: [
        "ScaleDesk and its licensors retain all rights in our website, products, software, documentation, trademarks, and proprietary materials. Except for limited rights expressly granted, no license is implied.",
        "For custom development engagements, intellectual property ownership is governed by the applicable statement of work. Unless otherwise agreed in writing, pre-existing ScaleDesk materials and general-purpose components remain our property.",
      ],
    },
    {
      id: "fees",
      title: "Fees and payment",
      paragraphs: [
        "Fees, billing cycles, and payment terms are specified in commercial agreements. Unless stated otherwise, invoices are due within the period specified in your order form. Late payments may incur interest or service suspension as permitted by contract.",
      ],
    },
    {
      id: "availability",
      title: "Service availability and support",
      paragraphs: [
        "We strive to maintain reliable services but do not guarantee uninterrupted availability. Planned maintenance, third-party outages, or force majeure events may affect access. Support levels and uptime commitments, if any, are defined in applicable service agreements.",
      ],
    },
    {
      id: "disclaimers",
      title: "Disclaimers",
      paragraphs: [
        'Except as expressly stated in a written agreement, services are provided "as is" and "as available." To the fullest extent permitted by law, ScaleDesk disclaims all warranties, whether express, implied, or statutory, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
      ],
    },
    {
      id: "liability",
      title: "Limitation of liability",
      paragraphs: [
        "To the maximum extent permitted by law, ScaleDesk shall not be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of profits, revenue, data, or goodwill.",
        "Our aggregate liability arising from or related to the services shall not exceed the fees paid by you to ScaleDesk in the twelve (12) months preceding the event giving rise to the claim, except where liability cannot be limited under applicable law.",
      ],
    },
    {
      id: "indemnification",
      title: "Indemnification",
      paragraphs: [
        "You agree to indemnify and hold harmless ScaleDesk from claims arising from your misuse of the services, violation of these Terms, or infringement of third-party rights through your Client Data or conduct, except to the extent caused by ScaleDesk's negligence or willful misconduct.",
      ],
    },
    {
      id: "termination",
      title: "Suspension and termination",
      paragraphs: [
        "We may suspend or terminate access if you materially breach these Terms, pose a security risk, or fail to pay applicable fees. You may stop using services at any time subject to contractual notice periods. Provisions that by nature should survive termination will remain in effect.",
      ],
    },
    {
      id: "governing-law",
      title: "Governing law and disputes",
      paragraphs: [
        // TODO(owner + counsel): specify the governing law and courts that apply to ScaleDesk Technology.
        "These Terms are governed by the laws that apply to the agreement between you and ScaleDesk Technology, and any disputes will be resolved as set out in that agreement or, where none applies, under applicable law.",
      ],
    },
    {
      id: "changes",
      title: "Changes to these Terms",
      paragraphs: [
        "We may modify these Terms periodically. Updated Terms will be posted on this page with a revised effective date. Continued use after changes constitutes acceptance. For material changes affecting active subscriptions, we will provide notice as required by contract or law.",
      ],
    },
    {
      id: "contact",
      title: "Contact",
      paragraphs: [
        `Questions about these Terms may be directed to ${SITE.email}.`,
      ],
    },
  ],
};

export const cookiePolicy = {
  title: "Cookie Policy",
  subtitle:
    "How ScaleDesk Technology uses cookies and similar technologies on our website and products.",
  lastUpdated: LEGAL_LAST_UPDATED,
  contactEmail: SITE.email,
  contactLabel: "Cookie and privacy inquiries",
  intro: [
    "This Cookie Policy explains what cookies are, how ScaleDesk Technology uses them, and the choices available to you. It should be read alongside our Privacy Policy.",
  ],
  sections: [
    {
      id: "what-are-cookies",
      title: "What are cookies?",
      paragraphs: [
        "Cookies are small text files stored on your device when you visit a website. They help websites function, remember preferences, and understand how visitors interact with content. We also use similar technologies such as local storage, session storage, and pixels where appropriate.",
      ],
    },
    {
      id: "how-we-use-cookies",
      title: "How we use cookies",
      paragraphs: [
        "ScaleDesk uses cookies to operate our website securely, maintain authenticated sessions, remember preferences, measure performance, and improve user experience. We aim to minimize data collection and retain cookies only as long as necessary for their purpose.",
      ],
    },
    {
      id: "cookie-categories",
      title: "Categories of cookies",
      paragraphs: ["The table below describes the main categories of cookies we use:"],
      table: {
        headers: ["Category", "Purpose", "Examples"],
        rows: [
          [
            "Strictly necessary",
            "Required for core site functionality, security, and session management.",
            "Authentication tokens, load balancing, CSRF protection",
          ],
          [
            "Functional",
            "Remember preferences and enhance usability.",
            "Language selection, form progress, UI preferences",
          ],
          [
            "Analytics",
            "Help us understand traffic patterns and improve performance.",
            "Page views, referral source, anonymized usage metrics",
          ],
          [
            "Marketing",
            "Measure campaign effectiveness where enabled.",
            "Conversion tracking, audience insights (only with consent where required)",
          ],
        ],
      },
    },
    {
      id: "third-party",
      title: "Third-party cookies",
      paragraphs: [
        "Some cookies are placed by trusted third-party providers that support hosting, analytics, communications, or embedded content. These providers process data according to their own policies. We contractually require appropriate security and data handling standards.",
      ],
    },
    {
      id: "managing-cookies",
      title: "Managing your preferences",
      paragraphs: [
        "Most browsers allow you to block or delete cookies through settings. Blocking strictly necessary cookies may affect site functionality. Where required by law, we provide consent controls for non-essential cookies.",
        "To manage cookies: open your browser settings, navigate to privacy or cookies, and adjust preferences. Consult your browser documentation for specific instructions.",
      ],
    },
    {
      id: "do-not-track",
      title: "Do Not Track",
      paragraphs: [
        'Some browsers offer "Do Not Track" (DNT) signals. Because there is no uniform industry standard, we do not currently respond to all DNT signals. We continue to monitor regulatory and technical developments.',
      ],
    },
    {
      id: "updates",
      title: "Updates to this policy",
      paragraphs: [
        "We may update this Cookie Policy to reflect changes in technology, regulation, or our practices. The latest version will always be available on this page.",
      ],
    },
    {
      id: "contact",
      title: "Contact us",
      paragraphs: [
        `Questions about cookies or privacy: ${SITE.email}`,
      ],
    },
  ],
};

export const securityPage = {
  title: "Security",
  subtitle:
    "How ScaleDesk Technology protects infrastructure, applications, and customer data across our products and services.",
  lastUpdated: LEGAL_LAST_UPDATED,
  contactEmail: SITE.email,
  contactLabel: "Security inquiries",
  highlights: [
    {
      title: "Zero-trust architecture",
      description:
        "Identity-verified access, least-privilege permissions, and encrypted communication across systems.",
    },
    {
      title: "Defense in depth",
      description:
        "Layered controls spanning network, application, data, and operational security.",
    },
    {
      title: "Secure development",
      description:
        "Security reviews, dependency management, and testing integrated into our engineering lifecycle.",
    },
    {
      title: "Incident readiness",
      description:
        "Documented response procedures, monitoring, and escalation paths for security events.",
    },
  ],
  intro: [
    "Security is foundational to how ScaleDesk Technology builds and operates LeadForGrow™, PeopleForGrow™, and enterprise client engagements. We design systems with confidentiality, integrity, and availability in mind — from architecture decisions to day-to-day operations.",
  ],
  sections: [
    {
      id: "commitment",
      title: "Our security commitment",
      paragraphs: [
        "We maintain administrative, technical, and physical safeguards appropriate to the nature of the data we process. Our approach aligns with industry frameworks and enterprise expectations, including practices commonly associated with SOC 2, ISO 27001, and GDPR requirements.",
      ],
    },
    {
      id: "infrastructure",
      title: "Infrastructure security",
      list: [
        "Cloud infrastructure hosted with leading providers using hardened configurations.",
        "Network segmentation, firewalls, and intrusion detection where applicable.",
        "Encryption in transit (TLS 1.2+) for data transmitted over public networks.",
        "Regular patching and vulnerability management for operating systems and dependencies.",
        "Automated backups and disaster recovery planning for critical systems.",
      ],
    },
    {
      id: "application",
      title: "Application security",
      list: [
        "Secure coding standards and peer review for production changes.",
        "Authentication controls including multi-factor authentication for administrative access.",
        "Role-based access control (RBAC) and principle of least privilege.",
        "Input validation, output encoding, and protection against common web vulnerabilities.",
        "Dependency scanning and remediation for known CVEs.",
      ],
    },
    {
      id: "data-protection",
      title: "Data protection",
      list: [
        "Encryption at rest for sensitive data stores where supported.",
        "Data classification and handling procedures for client and employee information.",
        "Logical separation of customer environments in multi-tenant products.",
        "Secure deletion and retention policies aligned with contractual obligations.",
      ],
    },
    {
      id: "access-controls",
      title: "Access management",
      paragraphs: [
        "Access to production systems is restricted to authorized personnel with a business need. We log administrative actions, review access periodically, and revoke credentials promptly upon role changes or offboarding.",
      ],
    },
    {
      id: "incident-response",
      title: "Incident response",
      paragraphs: [
        "ScaleDesk maintains incident response procedures covering detection, containment, investigation, remediation, and notification. Where contractual or legal obligations require, affected customers will be notified without undue delay.",
      ],
    },
    {
      id: "compliance",
      title: "Compliance and audits",
      paragraphs: [
        "We design controls to support customer compliance requirements and enterprise procurement processes. Formal audit reports or security questionnaires may be available to customers under NDA as engagements require.",
      ],
    },
    {
      id: "vendor-management",
      title: "Vendor and subprocessor security",
      paragraphs: [
        "Third-party vendors with access to data undergo security evaluation. Contracts include confidentiality, data protection, and breach notification provisions consistent with our standards.",
      ],
    },
    {
      id: "report-vulnerability",
      title: "Report a security vulnerability",
      paragraphs: [
        "If you believe you have discovered a security vulnerability in ScaleDesk products or infrastructure, please report it responsibly to security@scaledesktechnology.com. Include sufficient detail to reproduce the issue. We ask that you do not publicly disclose vulnerabilities until we have had reasonable time to investigate and remediate.",
      ],
    },
    {
      id: "contact",
      title: "Contact",
      paragraphs: [
        `Security questions: security@scaledesktechnology.com`,
        `General inquiries: ${SITE.email}`,
      ],
    },
  ],
};

export const linkedInPage = {
  title: "LinkedIn",
  subtitle:
    "Connect with ScaleDesk Technology on LinkedIn for company news, product updates, engineering insights, and career opportunities.",
  lastUpdated: LEGAL_LAST_UPDATED,
  companyUrl: SITE.linkedIn,
  intro: [
    "ScaleDesk Technology maintains an official company presence on LinkedIn. Follow us for announcements about LeadForGrow™, PeopleForGrow™, Product Engineering work, case studies, and open roles.",
  ],
  sections: [
    {
      id: "company-page",
      title: "Official company page",
      paragraphs: [
        "Our LinkedIn company page is the authoritative channel for ScaleDesk news, culture, and hiring updates. We publish product milestones, technical articles, event participation, and team highlights.",
      ],
      link: {
        label: "Follow ScaleDesk Technology on LinkedIn",
        href: SITE.linkedIn,
        external: true,
      },
    },
    {
      id: "what-we-share",
      title: "What we share",
      list: [
        "Product updates for LeadForGrow™ and PeopleForGrow™.",
        "Engineering and AI insights from our Product Engineering team.",
        "Client success stories and case study highlights.",
        "Company news, partnerships, and industry commentary.",
        "Career opportunities and internship program announcements.",
      ],
    },
    {
      id: "engagement",
      title: "Community guidelines",
      paragraphs: [
        "We welcome professional discussion on our posts. We ask that comments remain respectful, relevant, and free of spam or solicitation. ScaleDesk may moderate or remove content that violates LinkedIn's Professional Community Policies or our brand standards.",
      ],
    },
    {
      id: "careers",
      title: "Careers on LinkedIn",
      paragraphs: [
        "Open positions are listed on our careers page and may also appear on LinkedIn. For the most current listings, visit our Careers page or connect with us on LinkedIn to receive job alerts.",
      ],
      link: {
        label: "View careers at ScaleDesk",
        href: "/careers",
      },
    },
    {
      id: "contact",
      title: "Other ways to connect",
      paragraphs: [
        `For business inquiries: ${SITE.email}`,
        `Website: ${SITE.url.replace("https://", "")}`,
      ],
    },
  ],
};
