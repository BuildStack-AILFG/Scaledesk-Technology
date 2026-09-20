/**
 * ForGrow AI: ScaleDesk's line of AI agents for business. One suite brand
 * ("ForGrow AI"), one agent per business function, plainly named.
 *
 * NOTE(owner): copy is written in general terms from how such agents work in
 * the market. Confirm each capability (and any language/channel claims) against
 * the real agents before publishing, and add specifics such as supported
 * languages, integrations and metrics only when they are true.
 */

const feature = (title, body, points, photo) => ({ title, body, points, photo });
const cap = (name, blurb) => ({ name, blurb });
const step = (title, body) => ({ title, body });
const faq = (question, answer) => ({ question, answer });

export const AGENT_SUITE = {
  name: "ForGrow AI",
  tagline: "AI agents that work alongside your team.",
  blurb:
    "Ready-made agents for sales, support, voice, finance, hiring and marketing, built to take routine work off your team and keep every customer conversation moving.",
};

/** Guardrails shown on every agent page. Phrased as design principles. */
export const AGENT_GUARDRAILS = [
  { title: "Clear boundaries", body: "Each agent works only within the topics, data and actions you approve." },
  { title: "People stay in charge", body: "Complex or sensitive requests are handed to your team, who can step in at any time." },
  { title: "Approval where it matters", body: "Actions such as refunds or payments can wait for a person to approve." },
  { title: "A record of everything", body: "Conversations and actions are logged so you can review what the agent did." },
];

export const AGENTS = [
  {
    slug: "voice-agent",
    name: "Voice Agent",
    accent: "#0A5FBE",
    mark: "voice",
    tagline: "Answer and make calls, around the clock.",
    descriptor: "A voice agent that handles calls and hands over to your team when needed.",
    photo: "agent-voice",
    heroTitle: "A voice that answers every call",
    heroLead:
      "The Voice Agent answers inbound calls, follows up with leads by phone and books appointments, then hands over to your team when a person is needed.",
    features: [
      feature(
        "Never miss a call",
        "Answer inbound calls at any hour, respond to common questions and book appointments without a queue.",
        ["Inbound call answering", "Appointment booking", "Answers to common questions"],
        "agent-voice"
      ),
      feature(
        "Reach out at scale",
        "Place outbound calls to qualify leads, send reminders and collect feedback, consistently every time.",
        ["Lead qualification calls", "Payment and appointment reminders", "Feedback and survey calls"],
        "arch-reply"
      ),
      feature(
        "Hand over with full context",
        "When a customer needs a person, the call is transferred with a summary, and notes are saved to your CRM.",
        ["Warm transfer to your team", "Call summaries and transcripts", "Notes saved to LeadForGrow"],
        "story-crm"
      ),
    ],
    capabilities: [
      cap("Inbound calls", "Answer every call, day or night."),
      cap("Outbound campaigns", "Call leads and customers in bulk, on schedule."),
      cap("Appointment booking", "Fill your calendar without back-and-forth."),
      cap("Call summaries", "Get a clear record of every conversation."),
      cap("Human handover", "Pass the call to your team with context."),
      cap("CRM updates", "Keep every call logged against the customer."),
    ],
    steps: [
      step("Connect your phone line", "Use your existing number or a new one."),
      step("Teach it your business", "Share your services, prices and common answers."),
      step("Let it take the calls", "It answers, qualifies and books, and escalates when needed."),
      step("Review every call", "Listen back, read summaries and refine."),
    ],
    industries: ["healthcare", "education", "ecommerce"],
    faqs: [
      faq("What does the Voice Agent do?", "It answers inbound calls, makes outbound calls for tasks such as qualification and reminders, books appointments and hands over to your team when needed."),
      faq("Will it replace my team?", "No. It handles routine calls so your team can focus on conversations that need a person."),
      faq("Can I review the calls?", "Yes. Calls are recorded as transcripts and summaries so you can review what was said."),
      faq("Can ScaleDesk tailor it to my business?", "Yes. We set up the agent around your services, scripts and systems."),
    ],
  },
  {
    slug: "financial-agent",
    name: "Financial Agent",
    accent: "#00A3B0",
    mark: "finance",
    tagline: "Invoice, follow up and reconcile automatically.",
    descriptor: "An agent that sends invoices, chases payments and keeps your books matched.",
    photo: "agent-finance",
    heroTitle: "Get paid faster, with less chasing",
    heroLead:
      "The Financial Agent sends invoices, follows up on overdue payments and matches payments to invoices, so your cash flow stays healthy without the manual work.",
    features: [
      feature(
        "Invoicing that runs itself",
        "Create and send invoices on time, every time, without re-entering the same details.",
        ["Automatic invoice creation", "Sent on schedule", "A clear record for every customer"],
        "agent-finance"
      ),
      feature(
        "Payment follow-ups that stay polite",
        "Remind customers before and after due dates, and see at a glance which accounts need attention first.",
        ["Reminders before and after due dates", "Overdue accounts prioritised", "Promises to pay tracked"],
        "arch-insight"
      ),
      feature(
        "Matched books and clear reports",
        "Match incoming payments to invoices and see cash-flow summaries in plain language.",
        ["Payment matching", "Mismatches flagged for review", "Simple cash-flow summaries"],
        "values"
      ),
    ],
    capabilities: [
      cap("Invoice creation", "Generate accurate invoices automatically."),
      cap("Payment reminders", "Follow up on time, in the right tone."),
      cap("Overdue tracking", "Know which accounts to chase first."),
      cap("Payment matching", "Match payments to the right invoices."),
      cap("Expense tracking", "Keep costs organised as they happen."),
      cap("Cash-flow summaries", "See where your money stands."),
    ],
    steps: [
      step("Connect your accounts", "Link your invoicing and accounting tools."),
      step("Set your rules", "Choose due dates, reminder timing and approvals."),
      step("Let it work", "Invoices go out and follow-ups run automatically."),
      step("Review and approve", "Check summaries and approve sensitive actions."),
    ],
    industries: ["enterprise", "ecommerce", "logistics"],
    faqs: [
      faq("What does the Financial Agent do?", "It automates invoicing, payment follow-ups and payment matching so finance work takes less time."),
      faq("Can I approve actions before they happen?", "Yes. Sensitive actions can wait for a person to approve them."),
      faq("Does it work with my accounting software?", "We connect it to the tools you already use as part of setup."),
      faq("Can ScaleDesk tailor it to my business?", "Yes. We set up the agent around your processes and systems."),
    ],
  },
  {
    slug: "sales-agent",
    name: "Sales Agent",
    accent: "#1F9D55",
    mark: "sales",
    tagline: "Follow up on every lead within minutes.",
    descriptor: "An agent that responds to leads instantly, qualifies them and books meetings.",
    photo: "prod-crm",
    heroTitle: "Follow up on every lead within minutes",
    heroLead:
      "The Sales Agent responds to new leads straight away, asks the right questions and books meetings, so your team spends its time on customers who are ready to buy.",
    features: [
      feature(
        "An instant first response",
        "Reach every new lead while their interest is high, on the channel they used.",
        ["Immediate follow-up", "Works across your channels", "Consistent, on-brand replies"],
        "story-crm"
      ),
      feature(
        "Qualify before your team steps in",
        "Ask the right questions, answer common objections from your product information and pass on the best leads.",
        ["Qualification questions", "Answers from your product information", "Hot leads flagged for your team"],
        "arch-follow"
      ),
      feature(
        "Meetings booked, CRM updated",
        "Book meetings straight into your calendar and keep LeadForGrow up to date automatically.",
        ["Meeting booking", "Notes saved to the CRM", "Follow-up sequences"],
        "prod-crm"
      ),
    ],
    capabilities: [
      cap("Instant response", "Reply to new leads in minutes, not hours."),
      cap("Qualification", "Find out who is ready to buy."),
      cap("Objection handling", "Answer common questions with your own information."),
      cap("Meeting booking", "Fill your team's calendar."),
      cap("CRM updates", "Keep every lead's record current."),
      cap("Follow-up sequences", "Keep in touch until the lead is ready."),
    ],
    steps: [
      step("Connect your CRM and channels", "Link LeadForGrow and your lead sources."),
      step("Share your offer", "Give it your products, prices and common answers."),
      step("Let it follow up", "It responds, qualifies and books meetings."),
      step("Take over at the right moment", "Your team steps in with full context."),
    ],
    industries: ["saas", "education", "startup"],
    faqs: [
      faq("What does the Sales Agent do?", "It follows up on new leads immediately, qualifies them and books meetings, then hands over to your sales team."),
      faq("Does it work with LeadForGrow?", "Yes. It is designed to keep LeadForGrow updated as it works."),
      faq("Will it sound generic?", "It answers using your own products, prices and tone, so replies stay on brand."),
      faq("Can ScaleDesk tailor it to my business?", "Yes. We set up the agent around how you sell."),
    ],
  },
  {
    slug: "support-agent",
    name: "Support Agent",
    accent: "#7C4DFF",
    mark: "support",
    tagline: "Resolve customer questions at any hour.",
    descriptor: "An agent that answers customers from your knowledge and escalates with context.",
    photo: "arch-reply",
    heroTitle: "Support that answers at any hour",
    heroLead:
      "The Support Agent resolves common customer questions from your own knowledge, takes simple actions and passes anything complex to your team with the full context.",
    features: [
      feature(
        "Answers from your own knowledge",
        "Reply accurately using your FAQs, policies and product information, in your brand's voice.",
        ["Answers from your documents", "On-brand tone", "Available around the clock"],
        "arch-reply"
      ),
      feature(
        "Takes action, not just answers",
        "Handle routine requests such as order status, bookings and simple changes, without a ticket.",
        ["Order and booking status", "Simple requests handled end to end", "Fewer repetitive tickets"],
        "prod-whatsapp"
      ),
      feature(
        "Escalates with full context",
        "When a person is needed, the conversation is passed on with a summary so customers never repeat themselves.",
        ["Smooth hand-over to your team", "Conversation summary included", "Nothing lost in the transfer"],
        "story-whatsapp"
      ),
    ],
    capabilities: [
      cap("Knowledge answers", "Reply from your own information."),
      cap("Routine actions", "Handle status checks and simple requests."),
      cap("Multi-channel", "Support customers where they already are."),
      cap("Smart escalation", "Pass complex cases to a person."),
      cap("Conversation summaries", "Give your team the full picture."),
      cap("Insights", "See the questions customers ask most."),
    ],
    steps: [
      step("Share your knowledge", "Give it your FAQs, policies and product details."),
      step("Choose what it can do", "Set the actions it may take and the limits."),
      step("Let it help customers", "It answers and resolves routine requests."),
      step("Improve over time", "Review conversations and refine answers."),
    ],
    industries: ["ecommerce", "fintech", "education"],
    faqs: [
      faq("What does the Support Agent do?", "It answers common customer questions from your knowledge, handles routine requests and escalates complex cases to your team."),
      faq("Can it get things wrong?", "Like any system it can, which is why it works within your boundaries and hands over anything sensitive or unclear."),
      faq("Which channels does it support?", "We set it up on the channels your customers use, such as messaging apps, chat and email."),
      faq("Can ScaleDesk tailor it to my business?", "Yes. We build the agent around your knowledge and tools."),
    ],
  },
  {
    slug: "hiring-agent",
    name: "Hiring Agent",
    accent: "#E58A00",
    mark: "hiring",
    tagline: "Screen, schedule and answer HR questions.",
    descriptor: "An agent that screens candidates, schedules interviews and answers employee queries.",
    photo: "story-hrm",
    heroTitle: "Hire faster, with less admin",
    heroLead:
      "The Hiring Agent screens candidates, schedules interviews and answers common HR questions, so your people team can focus on people.",
    features: [
      feature(
        "Screen candidates consistently",
        "Ask every applicant the same questions and shortlist the best matches for your team to review.",
        ["Consistent screening questions", "Shortlists for review", "Faster time to first response"],
        "story-hrm"
      ),
      feature(
        "Interviews scheduled for you",
        "Coordinate calendars and send reminders so interviews happen on time.",
        ["Calendar coordination", "Reminders to candidates", "Fewer scheduling emails"],
        "prod-hrm"
      ),
      feature(
        "Answers for your employees",
        "Handle common policy and leave questions, and guide new joiners through onboarding.",
        ["Policy and leave questions", "Onboarding checklists", "Connected to PeopleForGrow"],
        "values"
      ),
    ],
    capabilities: [
      cap("Candidate screening", "Shortlist the right people faster."),
      cap("Interview scheduling", "Coordinate calendars automatically."),
      cap("Candidate updates", "Keep applicants informed at every step."),
      cap("HR helpdesk", "Answer common employee questions."),
      cap("Onboarding", "Guide new joiners through their first days."),
      cap("Reports", "See hiring progress at a glance."),
    ],
    steps: [
      step("Share your roles and policies", "Give it the job details and HR guidelines."),
      step("Set your screening steps", "Choose the questions and criteria."),
      step("Let it coordinate", "It screens, schedules and answers questions."),
      step("Decide with your team", "People make every hiring decision."),
    ],
    industries: ["manufacturing", "logistics", "enterprise"],
    faqs: [
      faq("What does the Hiring Agent do?", "It screens candidates, schedules interviews and answers common HR questions."),
      faq("Who makes the hiring decision?", "Your people team always does. The agent prepares information and handles administration."),
      faq("Does it work with PeopleForGrow?", "It is designed to work alongside PeopleForGrow."),
      faq("Can ScaleDesk tailor it to my business?", "Yes. We set the agent up around your hiring process."),
    ],
  },
  {
    slug: "marketing-agent",
    name: "Marketing Agent",
    accent: "#C13584",
    mark: "marketing",
    tagline: "Draft, segment and report on your campaigns.",
    descriptor: "An agent that drafts content, segments audiences and summarises performance.",
    photo: "agent-marketing",
    heroTitle: "Marketing that keeps up with you",
    heroLead:
      "The Marketing Agent drafts on-brand content, segments your audience from your CRM data and sends a clear weekly summary of what is working.",
    features: [
      feature(
        "On-brand content, drafted for you",
        "Draft posts, emails and messages in your brand's voice for your team to review and publish.",
        ["Drafts for posts, emails and messages", "Your brand's tone", "Your team approves before anything goes out"],
        "agent-marketing"
      ),
      feature(
        "Audiences built from your data",
        "Group customers and leads by what they do and what they need, using the data in LeadForGrow.",
        ["Segments from CRM data", "Right message, right group", "Less guesswork"],
        "prod-instagram"
      ),
      feature(
        "A weekly summary you will actually read",
        "See what worked, what did not and what to try next, in plain language.",
        ["Weekly performance summaries", "Suggested next steps", "Results tied back to leads"],
        "arch-insight"
      ),
    ],
    capabilities: [
      cap("Content drafts", "Get a first draft in minutes."),
      cap("Audience segments", "Group customers by what matters."),
      cap("Campaign summaries", "Understand results without spreadsheets."),
      cap("Suggested next steps", "Know what to try next."),
      cap("Brand voice", "Keep every message on-brand."),
      cap("Approval workflow", "Nothing is published without a person's approval."),
    ],
    steps: [
      step("Share your brand and goals", "Tell it your tone, offers and audience."),
      step("Connect your data", "Link your CRM and campaign channels."),
      step("Review the drafts", "Approve, edit or reject in one place."),
      step("Read the summary", "See what worked and plan the next week."),
    ],
    industries: ["ecommerce", "startup", "education"],
    faqs: [
      faq("What does the Marketing Agent do?", "It drafts content, segments audiences and summarises campaign performance for your team."),
      faq("Will it publish without asking?", "No. Your team reviews and approves content before it goes out."),
      faq("Does it use my CRM data?", "It is designed to use the customer data in LeadForGrow to build segments."),
      faq("Can ScaleDesk tailor it to my business?", "Yes. We set it up around your brand and channels."),
    ],
  },
];

export const getAgent = (slug) => AGENTS.find((a) => a.slug === slug) ?? null;
