/**
 * ScaleDesk platforms: the single source of truth for names, copy and imagery.
 * Menus, cards, product pages, SEO data and the sitemap all read from here.
 *
 * Naming family: "<Function>ForGrow". Endorsement line: "by ScaleDesk".
 * NOTE(owner): names are proposals pending a proper trademark search (India IP
 * Office / WIPO / USPTO, software classes 9, 35 and 42). Product capability
 * copy is written in general terms; confirm each claim matches the live product.
 *
 * Photos are keys into lib/images.js (stock ambience only).
 */

const feature = (title, body, points, photo) => ({ title, body, points, photo });
const cap = (name, blurb) => ({ name, blurb });
const step = (title, body) => ({ title, body });
const faq = (question, answer) => ({ question, answer });

export const PLATFORMS = [
  {
    slug: "leadforgrow-crm",
    name: "LeadForGrow",
    kind: "CRM",
    accent: "#0A5FBE",
    mark: "crm",
    appUrl: "https://leadforgrow.com",
    tagline: "Capture, assign and follow up every lead.",
    descriptor: "A CRM that keeps every lead, conversation and follow-up in one place.",
    panelTitle: "Close more deals",
    photo: "prod-crm",
    heroTitle: "The CRM that helps you close more deals",
    heroLead:
      "LeadForGrow brings every lead, conversation and follow-up into one place, so your team always knows who to talk to next.",
    features: [
      feature(
        "Every lead in one place",
        "Bring leads from your website forms, messaging apps, social channels and email into one CRM, so every enquiry has an owner and a status.",
        ["Capture leads from forms, chats and email", "Assign each lead to the right person", "See the full history for every contact"],
        "prod-crm"
      ),
      feature(
        "One inbox for every conversation",
        "Reply on messaging apps, social channels and email from a single shared inbox, with the lead's details right beside the chat.",
        ["Shared team inbox", "Conversation history kept with the lead", "Hand a chat to a teammate in one click"],
        "story-crm"
      ),
      feature(
        "Follow-ups that never slip",
        "Set tasks and reminders, and automate the next step, so no lead is forgotten and every deal keeps moving.",
        ["Tasks and reminders", "Automated follow-up steps", "Pipelines that show where every deal stands"],
        "arch-follow"
      ),
    ],
    capabilities: [
      cap("Leads and contacts", "One record for every person and company you deal with."),
      cap("Deals and pipelines", "Track every opportunity from first enquiry to closed sale."),
      cap("Tasks and reminders", "Never miss a call-back, meeting or follow-up."),
      cap("Shared inbox", "Talk to customers on messaging apps, social channels and email."),
      cap("Automation", "Let routine follow-ups and routing run on their own."),
      cap("Forms and lead capture", "Turn website visitors into leads automatically."),
    ],
    steps: [
      step("Connect your channels", "Link your forms, messaging apps, social accounts and email."),
      step("Capture and organise", "Every enquiry lands in the CRM with an owner and a status."),
      step("Automate the follow-up", "Set the rules once and let reminders and replies run."),
      step("Track what works", "See which channels and campaigns bring in customers."),
    ],
    industries: ["ecommerce", "saas", "startup"],
    faqs: [
      faq("What is LeadForGrow?", "LeadForGrow is a CRM by ScaleDesk Technology that helps businesses capture leads, manage conversations and follow up so more enquiries become customers."),
      faq("Which channels can I use with it?", "LeadForGrow is built to bring together messaging apps, social channels, email and website forms in one place."),
      faq("Can my whole team use it?", "Yes. Your team can work in the same CRM, with roles and permissions so people see what they need."),
      faq("Can ScaleDesk set it up for us?", "Yes. As a technology partner, we can configure LeadForGrow around how you sell and connect it to the tools you already use."),
    ],
  },
  {
    slug: "talkforgrow",
    name: "TalkForGrow",
    kind: "Messaging",
    accent: "#1F9D55",
    mark: "talk",
    appUrl: "https://whatsapp.leadforgrow.com",
    tagline: "Send, automate and manage customer chats.",
    descriptor: "Run customer conversations on messaging apps from one platform.",
    panelTitle: "Talk to every customer",
    photo: "prod-whatsapp",
    heroTitle: "Talk to every customer, at scale",
    heroLead:
      "TalkForGrow lets your team send, automate and manage customer conversations on messaging apps such as WhatsApp, from one shared platform.",
    features: [
      feature(
        "Every chat in one shared inbox",
        "Your whole team answers customers from one place, so no message is missed and every conversation has an owner.",
        ["Shared team inbox", "Assign chats to teammates", "Full conversation history"],
        "prod-whatsapp"
      ),
      feature(
        "Campaigns your customers actually read",
        "Send approved message templates and broadcasts to the right customers at the right time.",
        ["Message templates", "Broadcast campaigns", "Simple delivery and reply tracking"],
        "story-whatsapp"
      ),
      feature(
        "Automated replies that feel personal",
        "Set up flows that answer common questions instantly and bring in your team when a person is needed.",
        ["Chat flows and quick replies", "Instant answers to common questions", "Hand-over to your team"],
        "arch-reply"
      ),
    ],
    capabilities: [
      cap("Team inbox", "One place for every customer conversation."),
      cap("Message templates", "Ready-to-send messages for common situations."),
      cap("Broadcast campaigns", "Reach many customers at once, with the right message."),
      cap("Chat flows", "Guide customers through questions and bookings automatically."),
      cap("Automated replies", "Answer common questions the moment they arrive."),
      cap("Contacts and tags", "Keep customers organised so every message is relevant."),
    ],
    steps: [
      step("Connect your business number", "Link your messaging channel to the platform."),
      step("Set up templates and flows", "Prepare the messages and replies your customers need."),
      step("Talk to customers", "Reply, broadcast and automate from one inbox."),
      step("Review and improve", "See what works and refine your messages."),
    ],
    industries: ["ecommerce", "healthcare", "education"],
    faqs: [
      faq("What is TalkForGrow?", "TalkForGrow is a customer messaging platform by ScaleDesk Technology for sending, automating and managing conversations on messaging apps."),
      faq("Does it work with my CRM?", "TalkForGrow is designed to work with LeadForGrow, so conversations and leads stay connected."),
      faq("Can I send bulk messages?", "Yes. You can run broadcast campaigns using approved message templates."),
      faq("Can ScaleDesk set it up for us?", "Yes. We can configure your channel, templates and flows around your business."),
    ],
  },
  {
    slug: "engageforgrow",
    name: "EngageForGrow",
    kind: "Social",
    accent: "#C13584",
    mark: "engage",
    appUrl: "https://instagram.leadforgrow.com",
    tagline: "Manage social messages and comments in one inbox.",
    descriptor: "Turn social conversations into customers, from one inbox.",
    panelTitle: "Turn attention into customers",
    photo: "prod-instagram",
    heroTitle: "Turn social conversations into customers",
    heroLead:
      "EngageForGrow gathers the direct messages and comments from your social channels in one inbox, so you can reply faster and never lose an interested customer.",
    features: [
      feature(
        "One inbox for messages and comments",
        "See every direct message and comment in one place, with your team able to reply without switching apps.",
        ["Direct messages and comments together", "Assign conversations to teammates", "Conversation history in one view"],
        "prod-instagram"
      ),
      feature(
        "Automated replies that start the conversation",
        "Use triggers to reply quickly and start conversations while interest is high.",
        ["Reply triggers", "Instant first responses", "Hand-over to your team"],
        "story-instagram"
      ),
      feature(
        "Every follower can become a lead",
        "Interested people are captured as leads, so they can be followed up in LeadForGrow.",
        ["Lead capture from conversations", "Connected to LeadForGrow", "See which posts bring customers"],
        "agent-marketing"
      ),
    ],
    capabilities: [
      cap("Unified inbox", "Direct messages and comments together."),
      cap("Comment replies", "Reply to comments quickly, in public or private."),
      cap("Automation triggers", "Respond automatically to the messages that matter."),
      cap("Lead capture", "Turn interested people into leads."),
      cap("Team assignment", "Give every conversation an owner."),
      cap("Conversation history", "Remember every customer interaction."),
    ],
    steps: [
      step("Connect your social accounts", "Link the channels your customers use."),
      step("Set up your replies", "Choose the triggers and messages that start conversations."),
      step("Engage from one inbox", "Answer messages and comments as a team."),
      step("Track your leads", "See which conversations turn into customers."),
    ],
    industries: ["ecommerce", "startup", "education"],
    faqs: [
      faq("What is EngageForGrow?", "EngageForGrow is a social engagement platform by ScaleDesk Technology that brings messages and comments from your social channels into one inbox."),
      faq("Can it create leads for my CRM?", "Yes. EngageForGrow is designed to pass interested people to LeadForGrow as leads."),
      faq("Can several people use it?", "Yes. Conversations can be assigned so your team works together."),
      faq("Can ScaleDesk set it up for us?", "Yes. We can connect your accounts and design the replies around your business."),
    ],
  },
  {
    slug: "peopleforgrow",
    name: "PeopleForGrow",
    kind: "HR",
    accent: "#E58A00",
    mark: "people",
    appUrl: "https://hrm.scaledesktechnology.com",
    tagline: "Attendance, payroll and the employee lifecycle.",
    descriptor: "Run attendance, payroll and people operations from one place.",
    panelTitle: "Run your people operations",
    photo: "prod-hrm",
    heroTitle: "People operations, without the paperwork",
    heroLead:
      "PeopleForGrow handles attendance, payroll and the whole employee lifecycle in one system, so your team spends less time on admin and more on the business.",
    features: [
      feature(
        "Attendance you do not have to chase",
        "Record attendance and leave in one place, so managers and HR always have a clear, current picture.",
        ["Attendance and leave tracking", "Clear records for every employee", "Fewer manual spreadsheets"],
        "prod-hrm"
      ),
      feature(
        "Payroll made simple",
        "Prepare payroll from the attendance and leave you already track, with less re-entering of data.",
        ["Payroll built on attendance data", "Payslips for employees", "Consistent, auditable records"],
        "values"
      ),
      feature(
        "The whole employee lifecycle",
        "From onboarding to exit, keep every employee's records, documents and history together.",
        ["Onboarding checklists", "Employee documents and records", "Reports for HR and leadership"],
        "story-hrm"
      ),
    ],
    capabilities: [
      cap("Employee records", "One profile for every person on your team."),
      cap("Attendance and leave", "Track who is working and who is away."),
      cap("Payroll", "Run payroll from the data you already have."),
      cap("Onboarding", "Welcome new hires with a clear, repeatable process."),
      cap("Documents", "Keep employee paperwork organised and easy to find."),
      cap("Reports", "See headcount, attendance and payroll at a glance."),
    ],
    steps: [
      step("Add your team", "Bring in employees and their details."),
      step("Set your policies", "Define attendance, leave and payroll rules."),
      step("Run attendance and payroll", "Let the system do the routine work."),
      step("Review your reports", "Keep leadership informed with clear reports."),
    ],
    industries: ["manufacturing", "logistics", "enterprise"],
    faqs: [
      faq("What is PeopleForGrow?", "PeopleForGrow is an HR platform by ScaleDesk Technology covering attendance, payroll and the employee lifecycle."),
      faq("Is it only for large companies?", "No. It is designed for growing businesses that want to replace spreadsheets with a single HR system."),
      faq("Does it connect with other systems?", "PeopleForGrow is designed to work alongside the rest of the ForGrow suite."),
      faq("Can ScaleDesk set it up for us?", "Yes. We can configure it around your policies and import your existing data."),
    ],
  },
];

export const getPlatform = (slug) => PLATFORMS.find((p) => p.slug === slug) ?? null;
