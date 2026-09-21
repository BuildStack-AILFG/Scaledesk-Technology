/**
 * Blog topic clusters. Each category is a hub page with its own introduction,
 * and each one points to the ScaleDesk product or service it relates to, so
 * every article has a natural, relevant next step.
 */
import { PLATFORMS } from "../catalog/platforms";

const platform = (slug) => PLATFORMS.find((p) => p.slug === slug);
const talk = platform("talkforgrow");
const engage = platform("engageforgrow");
const crm = platform("leadforgrow-crm");

export const CATEGORIES = [
  {
    slug: "whatsapp-automation",
    name: "WhatsApp automation",
    accent: "#1F9D55",
    image: "prod-whatsapp",
    description:
      "Practical guides to WhatsApp automation for business: the Business API, message templates, opt-in, broadcasts, chatbots and follow-up sequences.",
    intro: [
      "WhatsApp is where many customers already prefer to talk to businesses, which makes it one of the most effective channels for answering questions, following up on leads and keeping customers informed. It is also a channel with real rules: opt-in, the 24-hour conversation window and approved templates all shape what you can send and when.",
      "These guides explain how WhatsApp automation actually works, in plain language, so you can set it up in a way that customers welcome and that keeps your number in good standing.",
    ],
    cta: {
      title: "Run WhatsApp conversations with TalkForGrow",
      text: "TalkForGrow is our platform for sending, automating and managing customer conversations on messaging apps such as WhatsApp, from one shared inbox.",
      href: "/products/talkforgrow",
      label: "Explore TalkForGrow",
      appLabel: "talkforgrow.in",
      appUrl: talk?.appUrl,
    },
  },
  {
    slug: "instagram-automation",
    name: "Instagram automation",
    accent: "#C13584",
    image: "prod-instagram",
    description:
      "How to use Instagram DM and comment automation responsibly to answer faster, capture leads and manage a shared social inbox.",
    intro: [
      "For many businesses, Instagram is where interest starts: a comment on a post, a reply to a story, a direct message asking about price. The businesses that turn that attention into customers are the ones that reply quickly and never lose track of a conversation.",
      "These articles cover how Instagram messaging works, what automation can safely do, how to capture leads from conversations, and the mistakes that get accounts restricted.",
    ],
    cta: {
      title: "Manage social conversations with EngageForGrow",
      text: "EngageForGrow brings the direct messages and comments from your social channels into one inbox, so your team can reply faster and hand interested people to your CRM.",
      href: "/products/engageforgrow",
      label: "Explore EngageForGrow",
      appLabel: "instagram.leadforgrow.com",
      appUrl: engage?.appUrl,
    },
  },
  {
    slug: "crm",
    name: "CRM and sales",
    accent: "#0A5FBE",
    image: "prod-crm",
    description:
      "Plain-English CRM guides: choosing a CRM, designing pipeline stages, lead scoring, data hygiene, automation workflows and moving off spreadsheets.",
    intro: [
      "A CRM is only useful if the whole team uses it and trusts what is in it. That comes down to a few practical decisions: what you track, how deals move through stages, who owns each lead, and which follow-ups happen automatically.",
      "These guides cover those decisions step by step, whether you are choosing your first CRM or tidying up one you already have.",
    ],
    cta: {
      title: "Keep every lead in one place with LeadForGrow",
      text: "LeadForGrow is our CRM for capturing leads, managing conversations and following up, so no enquiry is forgotten.",
      href: "/products/leadforgrow-crm",
      label: "Explore LeadForGrow",
      appLabel: "leadforgrow.com",
      appUrl: crm?.appUrl,
    },
  },
  {
    slug: "ai-agents",
    name: "AI agents for business",
    accent: "#00A3B0",
    image: "agent-voice",
    description:
      "What AI agents do for businesses today: voice, sales, support and finance agents, how to set guardrails, and where a human should stay in charge.",
    intro: [
      "AI agents can now answer calls, qualify leads, handle routine support questions and chase overdue invoices. Used well, they take repetitive work off your team. Used carelessly, they frustrate customers and create risk.",
      "These articles explain what each kind of agent can and cannot do, how to keep people in control, and how to decide where an agent is worth using in your business.",
    ],
    cta: {
      title: "Meet ForGrow AI",
      text: "ForGrow AI is our line of AI agents for voice, finance, sales, support, hiring and marketing, designed to work within your rules and hand over to your team when needed.",
      href: "/agents",
      label: "Explore ForGrow AI",
    },
  },
  {
    slug: "services",
    name: "Technology and services",
    accent: "#7C4DFF",
    image: "engineering",
    description:
      "Guidance on choosing a technology partner, build versus buy decisions, implementation projects and the real return on business automation.",
    intro: [
      "Sooner or later most growing businesses need something built or configured around the way they work. Doing that well means knowing when to customise, how to choose the right partner, and how to measure whether the effort paid off.",
      "These guides are written for owners and managers who want a clear, honest picture before they commit time and budget.",
    ],
    cta: {
      title: "Talk to our experts",
      text: "Alongside our platforms, our team plans, builds and runs custom technology for businesses, from AI and automation to software, cloud and data.",
      href: "/services",
      label: "Explore our services",
    },
  },
  {
    slug: "company",
    name: "About ScaleDesk",
    accent: "#E58A00",
    image: "values",
    description:
      "How ScaleDesk Technology works, how our LeadForGrow, TalkForGrow, EngageForGrow and PeopleForGrow platforms fit together, and how we work with customers.",
    intro: [
      "ScaleDesk is a product company with a services arm. We build platforms and AI agents that help businesses grow their sales, and we work alongside customers when they need something built around them.",
      "These articles explain how our platforms fit together and what working with us looks like.",
    ],
    cta: {
      title: "Learn more about ScaleDesk",
      text: "Our mission is to uplift every business with AI and automation.",
      href: "/about",
      label: "About ScaleDesk",
    },
  },
];

export const getCategory = (slug) => CATEGORIES.find((c) => c.slug === slug) ?? null;
