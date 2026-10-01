/**
 * Social proof shown on the public site. RULE: only verifiable facts live here.
 * Add real client names, logos, user counts or quotes here (and nowhere else)
 * as they become available; every proof section on the site reads from this file.
 */

/**
 * Customers we can name. These are the clients listed on leadforgrow.com.
 * TODO(owner): confirm each business is happy to be shown before this ships.
 */
export const CLIENTS = [
  { name: "Pistons Garage" },
  { name: "Homies4u" },
  { name: "PMKR" },
  { name: "CXO" },
  { name: "Moodli" },
];

/** Channels the suite actually works across. */
export const CHANNELS = ["WhatsApp", "Instagram", "Email"];

/**
 * Registered company details, shown in the footer (and later on /about).
 * A Pvt Ltd site earns trust by stating these plainly. Any field left null is
 * simply not rendered, so never put a guess here.
 * TODO(owner): fill in CIN, GSTIN, registered office and phone.
 */
export const COMPANY = {
  legalName: "ScaleDesk Technology Private Limited",
  cin: null, // e.g. "U72900DL2024PTC123456"
  gstin: null, // e.g. "07ABCDE1234F1Z5"
  address: null, // e.g. "Floor 3, Example Tower, Sector 62, Noida, Uttar Pradesh 201309, India"
  email: "contact@scaledesktechnology.com",
  phone: null, // e.g. "+91 98xxx xxxxx"
};

/**
 * Headline numbers for the homepage stats band. Real, defensible figures only.
 * The band hides itself while this list is empty.
 * TODO(owner): e.g. { value: "120+", label: "Businesses served" }
 */
export const STATS = [];

/**
 * Customer quotes. Use only quotes the customer has approved for publication.
 * The testimonials section hides itself while this list is empty.
 * TODO(owner): { quote: "...", name: "...", role: "...", company: "..." }
 */
export const TESTIMONIALS = [];
