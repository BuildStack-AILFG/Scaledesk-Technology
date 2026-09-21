---
title: WhatsApp Message Templates: Categories, Approval and Best Practices
description: How WhatsApp message templates work, the main categories, why templates get rejected, and how to write ones customers actually read and reply to.
category: whatsapp-automation
date: 2026-09-21
tags: whatsapp templates, template approval, whatsapp business api
---

On the WhatsApp Business Platform, any message you start yourself has to be a template that WhatsApp has reviewed and approved in advance. Templates protect customers from spam and give you a reliable way to reach them outside the 24-hour window. Writing good ones is a skill worth learning, because they are often the first message a customer sees from you.

## What a template is

A template is a pre-written message with optional placeholders for details such as a name or an order number. You submit it for review, and once approved you can send it to customers who have opted in.

A template can include:

- A header (text, image, video or document).
- A body with your message and variables.
- A short footer.
- Buttons, such as quick replies or links.

## The main categories

WhatsApp groups templates into categories, and each category is treated and priced differently. The names and pricing have changed over time, so check the current documentation, but the ideas are stable:

- **Utility.** Messages about something the customer has already asked for or done: order updates, appointment reminders, payment receipts, delivery status.
- **Marketing.** Promotions, offers, product announcements and anything that encourages a purchase.
- **Authentication.** One-time passcodes and login verification.

Choose the honest category. If a message is really promotional, submitting it as utility can lead to rejection or reclassification.

## Why templates get rejected

Common reasons include:

- **Vague or generic wording**, for example "Hello, please see our message".
- **Variables that make no sense** or too many variables in a short message.
- **Promotional content in a utility template.**
- **Pushy, misleading or threatening language.**
- **Formatting errors**, such as broken placeholders.
- **Content that breaks WhatsApp's commerce or business policies.**

If a template is rejected, read the reason, fix it and resubmit rather than reusing the same text.

## How to write templates that work

1. **Say who you are in the first line.** People should recognise your business immediately.
2. **Be specific and useful.** "Your order 4821 will arrive tomorrow between 2 and 5 pm" beats "Your order is on the way".
3. **Use the customer's name** when you have it, but do not overdo variables.
4. **Keep it short.** Two or three short sentences are enough.
5. **Add one clear next step**, ideally a quick-reply button such as "Confirm" or "Reschedule". Buttons invite a reply, which opens a fresh 24-hour window.
6. **Match your tone.** Write the way you would speak to a customer in person.
7. **Give an easy way out** on marketing messages, so people can opt out without frustration.

## Examples

**Appointment reminder (utility):**
"Hi {{1}}, this is a reminder of your appointment with {{2}} on {{3}} at {{4}}. Reply CONFIRM to keep it or RESCHEDULE to pick another time."

**Lead follow-up (marketing or utility, depending on context):**
"Hi {{1}}, thanks for your enquiry about {{2}}. Would you like us to send a quote? Tap below and we will get started."

## Keep a template library

As your automation grows, you will have dozens of templates. Keep a simple list with the name, purpose, category, approval status and where it is used. Review it every quarter and retire templates nobody sends. A platform such as [TalkForGrow](/products/talkforgrow) is designed to help you manage templates, flows and replies in one place instead of in scattered documents.

For the rules that decide when you need a template at all, read [the 24-hour window](/blog/whatsapp-24-hour-conversation-window). For how templates power outbound messages, see [WhatsApp broadcast campaigns](/blog/whatsapp-broadcast-campaigns).

## Frequently asked questions

### How long does template approval take?

Often it is quick, from minutes to a day, but timing varies. Submit templates well before you need them.

### Can I edit an approved template?

You usually create a new version and submit it for approval, so plan changes ahead.

### Do I need a template for every message?

No. Inside the 24-hour window after a customer writes to you, you can reply freely. Templates are for messages you start, or for messages after the window closes.
