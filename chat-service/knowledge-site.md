# Knowledge pack: Brian Johnson

This is everything the assistant may use. It comes from brianjohnson.work. Anything not written here is unknown.



=== SOURCE: Home page (about Brian, experience) (/) ===

👋

# Brian Johnson

I lead products from customer problem to shipped result: deciding what to build, what to cut and how to measure it. Four products so far, from research to launch or handoff.

Focus

Product management, 0 to 1
Path

Sales → Design → Product
Based in

New York City
Email

bjohnson1041@gmail.com

Open to Product Manager roles

Four products, from concept to shipped: each case study leads with the decision, the trade-off and the result.

Book a meeting

## Selected work

Open Work →

🌦️ Prepare

A weather app that tells you what to wear and pack

Shipped
Consumer AI

🎓 C.O.T

Tutoring rebuilt around prepaid credits and recurring revenue

MVP
Client · EdTech

💇🏾‍♀️ Just Hair

An AI hair-care assistant that explains before it recommends

MVP
Consumer AI

🔧 GoTukang

A handyman marketplace inside Southeast Asia's super app

Concept
Marketplace

## Experience

Table

AaCompany |
Role |
Time |
Product offering |

Carbon Design World |
Product Builder |
2025 – Present |
Product design and builds for early-stage products |

Career Break |
Professional Development |
2024 – 2025 |
Full-time training in product design, management and AI |

Notion |
SaaS Account Executive |
2022 – 2024 |
Connected workspace for docs, wikis and projects |

Bravely |
SaaS Account Executive |
2021 – 2022 |
On-demand professional coaching for employees |

Bonusly |
SaaS Account Executive |
2018 – 2021 |
Employee rewards and recognition platform |

Autodesk |
Business Development Rep |
2017 – 2018 |
Construction software, including bid management |

## Writing

📝The Notion Paradox: Why the Most Flexible Product Is Also the Hardest to SellMay 5, 2026

📝I've built brands in fashion and products in tech.Apr 29, 2026


=== SOURCE: Case study: Prepare (/work/prepare) ===

🌦️

# Prepare

A weather app that answers the question people actually open it for: what do I wear and what do I pack today?

Status

Shipped v0.1
My role

Product lead, designer and builder
Platform

Mobile web
Segment

Urban professionals first, travelers second
Traction

~100 site visitors; 20 research participants using it daily
North star

Daily return rate
Stack

React, TypeScript, Tailwind, Gemini Flash, Open-Meteo, Google Cloud Run
Links

Live app · Figma · Repo

Outcome

Shipped v0.1 solo and tested it with 20 research participants who used it daily. The core bet: lead with a decision instead of data, and use AI only where it's safe to.

💬
"This saves me so much time in the morning! I don't have to think. I just get ready, pack and go!" Research participant

## 1. The problem and who had it

Weather apps are built as data dashboards, but nobody checks the weather to study meteorology. Every morning, people do the same mental math: 68°F, 85% humidity and 18 mph gusts means a light jacket? An umbrella? Both?

Someone close to me asked for exactly this: an app that just tells them what to wear. That's when it clicked that this is an accessibility problem, not a convenience feature. Some people simply need help deciding what to wear.

How I validated it

Before building, I talked to many people about how they dress for the weather. Almost everyone described the same friction and had ideas for fixing it, which told me the problem was common, not personal.

## 2. Segment and business case

Prepare is for anyone who checks the weather, but I prioritized urban professionals. City weather changes what they wear across work, evening plans and the weekend. They check the forecast at a predictable moment, which makes the habit easy to design for. Travelers come second: packing is the same decision stretched over days.

The category is crowded and free, so the case rests on owning the decision layer, a daily habit, and very low running costs.

Monetization path | How it pays | Why it fits |

Premium personalization | Subscription for personal modes and briefings | Deepens a habit people already have |

Wardrobe integration | Recommendations from your own closet | High switching cost once a closet is catalogued |

Commerce in Pack | Affiliate links on recommended gear | Recommendations are purchase-intent moments |

## 3. The decisions: what I chose and what I cut

The biggest call: AI writes the words, but rules make the recommendations. Letting a language model decide what to wear is fast to build but unsafe: it can suggest a t-shirt in a snowstorm. Every clothing and packing decision comes from a rules engine; Gemini only adds the voice and answers follow-up questions.

Decision | I chose | Over | Why |

Who decides what to wear | A rules engine | The language model | No made-up advice; logic I can test |

Speed vs. richness | Instant fallback copy, AI copy swaps in | Waiting for the model | A slow model never blocks the morning |

Chat scope | Today's forecast only | Open-ended chat | On-job, cheaper, harder to misuse |

Uncertainty | A confidence score | Hiding it | Honesty on borderline days builds trust |

## What I cut from v0.1

- Most weather data points. Showing more data well takes careful design, and it isn't what people came for.

- Pack items beyond the umbrella. Rain is the most obvious, highest-stakes call. The umbrella is even suppressed when wind would break it.

- Custom avatar and styling. Too heavy for v0.1, and the core value didn't depend on it.

- Richer assistant replies: no images, products or multiple-choice answers yet.

## 4. How I designed and built it

I designed it in Figma and built it myself, so every decision above could be tested in a working app within days instead of handed off in a spec.

Forecast data
Open-Meteo, free

Rules engine
Decides wear and pack

Gemini Flash
Writes the words

Interface
Renders instantly

Rules decide; AI only writes the words. If the model is slow, fallback copy appears instantly.

The rules engine's output, cold to hot. The two rain looks show the umbrella call.

Design and build details

- Decision first, data second. Wear and Pack lead the screen; forecast detail sits below.

- An editorial voice: serif headlines over a clean sans, like a morning paper.

- Mobile first, with fluid layouts that scale up.

- Build: React, TypeScript and Tailwind; 23 custom icons; deployed to Google Cloud Run on every push.

## 5. Outcome and how I measure success

v0.1 is live with ~100 site visitors. I recruited 20 research participants to use it daily; because they were recruited, the next test is whether strangers come back on their own.

The metric that matters is whether people come back tomorrow morning.

Stage | Metric | Signal |

Arrive | Visits, location granted | Vanity on its own |

Activate | Saw the Wear card in under a second | Real |

Trust | Recommendation followed | Real |

Habit | Next-morning return, 4+ days a week | North star |

Expand | Shared with a friend | Real |

## 6. Growth plan and roadmap

The roadmap follows the habit loop: get people in, make the answer trustworthy, then give them a reason to come back without thinking.

Phase | What ships | Gate to the next phase |

v0.1 Shipped | Rules engine, wear recommendations, umbrella call, AI copy, travel assistant | 20 participants using it daily |

v0.2 | Sign-up, avatar, custom pack lists, deeper weather data | Daily return holds with strangers |

v0.3 | Travel and shopping, calendar integrations, AI that learns your routine | Retention proven before monetizing |

⚖️
The trade-off I'm watching: sign-up adds friction to the instant first answer that drives activation. People get the answer first and sign up only to customize; if sign-up doesn't lift daily return, it gates nothing.

← All work
Next: 🎓 C.O.T →


=== SOURCE: Case study: C.O.T (Canada Online Tutoring) (/work/cot) ===

🎓

# C.O.T

Canada Online Tutoring ran on phone calls and emails. I turned it into a mobile app with recurring revenue built in.

Status

MVP, handed off
Client

Canada Online Tutoring
My role

Product lead, UX researcher and UI designer
Timeline

6 weeks
Segment

Parents and adult learners: the people who book and pay
Tested with

10 families
North star

Credit repurchase rate
Stack

Figma, Notion
Links

Figma file

Outcome

Handed off in six weeks after testing with 10 families. 100% of new users found and changed their sessions without getting stuck, and families confidently chose larger packages and booked ahead.

## 1. The problem and who had it

A tutoring model that worked had stopped scaling. Booking, rescheduling, cancelling and paying all ran through emails and phone calls.

- Parents and students hit friction every time plans changed, and scattered payment details created mistrust.

- The business couldn't grow without adding admin staff and had no visibility into retention.

The core tension: modernize without breaking what worked. The tutoring philosophy was why families stayed, so the product had to extend it, not replace it.

## 2. Segment and business case

The app served two users: the person who learns and the person who pays. I prioritized the payer. For younger students that's the parent; for adult learners it's themselves. Payers choose the tutor and judge whether it's working.

- "I need to know exactly who is teaching my child." Credentials decide who gets hired, so detailed tutor profiles became a conversion feature.

- "I need a tutor, but I also have a deadline." Families arrive with a goal and an end date, so tutoring can be sold as a plan.

Who benefits from prepaid credits | How |

The business | Revenue captured earlier, recurring purchases, efficient tutor scheduling |

Parents | Simple payment, easy rescheduling, a discount for committing |

Students | More consistent sessions, which is what improves results |

## 3. The decisions: what I chose and what I cut

The biggest call: credits are the core of the experience, not a payment screen bolted on at the end.

Decision | I chose | Over | Why |

Payment model | Prepaid credit packages | Pay per session | Earlier revenue and commitment that improves outcomes |

App structure | One app, role-based onboarding | Separate apps | One platform to build; the right journey from day one |

Build for first | Payers | Students | Revenue and trust run through whoever pays |

Booking | Plans around a goal and end date | One session at a time | Matches how families think; sells sessions up front |

## What I cut from the MVP

- Video tutoring in the app. Sessions already ran on existing video tools.

- A native calendar. The booking flow handles scheduling.

- Native payment processing. A third-party provider is faster and safer.

- Separate parent and student interfaces. Role is captured at sign-up so v2 can split them without rework.

## 4. How I prioritized, and where we disagreed

Research produced six user needs; the MVP shipped the first two, checked against the client's must-haves: onboarding, dashboard, pricing and payment, booking and events.

Rank | User need | MVP? |

1 | Book, reschedule and pay without friction | Yes |

2 | Find a tutor who fits my goals | Yes |

3 | Engaging learning and visible progress | Deferred |

4 | Tutors showcase results and earn trust | Partly |

5 | Learner and parent tools in one app | Partly |

6 | Connect students with each other | Later |

⚖️
The disagreement: gamification. I pushed for streaks and badges, which scored well with students. The client prioritized the core path to booking and paying. We deferred gamification and moved progress tracking to v2, where it serves students and parents alike.

## 5. How I designed it

I took the project from market research and interviews through lo-fi to hi-fi design and an interactive prototype, iterating with the client's executives.

The top row is the core path: home to a booked, paid session in four screens.

## 6. Outcome and how I measure success

- 100% task success on managing sessions. Every new user found and changed their session without getting stuck.

- Families spent more and booked ahead, the behavior the recurring-revenue model depends on.

Stage | Metric | Signal |

Activate | First session booked | Real |

Commit | First credit package bought | Real |

Engage | Sessions used on schedule | Real |

Renew | Second package bought | North star |

## 7. Growth plan and roadmap

Phase | What ships | Gate |

MVP | Onboarding, tutor discovery, goal-based booking, credits, dashboard | Families booking in-app |

v2 | Separate parent and student views, progress tracking, renewal reminders | Repeat purchases |

v3 | Referrals, tutor tools, group sessions | Retention holds with new families |

← 🌦️ Prepare
Next: 💇🏾‍♀️ Just Hair →


=== SOURCE: Case study: Just Hair (/work/just-hair) ===

💇🏾‍♀️

# Just Hair

An AI hair-care assistant for textured hair that replaces years of trial and error with personalized guidance, and explains every recommendation before it automates.

Status

MVP, clickable prototype
My role

Product lead, UX researcher and UI designer
Timeline

6 weeks
Segment

Women with textured hair (3C to 4C) who spend heavily on hair care
Research

4 in-depth interviews, U.S. and Indonesia, ages 20s to 40s
Tested with

All 4 interview participants
North star

Routine adherence, week over week
Stack

Figma, Notion
Links

Figma file

Outcome

A clickable MVP in six weeks, built on four in-depth interviews and tested by all four participants. The bet: in a category tied to identity, education comes before automation.

💬
"It took me 10 years to find products that actually worked." Research participant

## 1. The problem and who had it

Women with textured hair struggle to care for it confidently in ways that fit their lives. The industry puts the burden of expertise on the user. The gap isn't products or information; it's confidence and clarity.

- Trial and error is slow and expensive: premium prices, and years of buying and abandoning products.

- Advice is everywhere but rarely fits: "A lot of Googling, a lot of YouTube."

- Life and climate change the routine: "In Bali, I wash every day."

- Trusted stylists are hard to find, so most care happens at home.

## 2. Segment and business case

I built first for high-spending users, whose spend is the business case: redirect it toward the right products and the product earns trust and a path to revenue.

Monetization path | How it pays | Why it fits |

Product recommendations | Affiliate revenue or brand partners | Users already spend; these are purchase-intent moments |

Premium routines | Subscription for tracking and household profiles | Value grows the longer someone uses it |

Stylist marketplace | Booking fee for vetted stylists | Solves the trust problem research surfaced |

The risk I'd manage: affiliate money can bias recommendations, so they stay tied to the hair profile, with sponsorship labeled.

## 3. The decisions: what I chose and what I cut

The biggest call: don't compete with YouTube and Google; build the guided path they can't offer.

Decision | I chose | Over | Why |

Core experience | A guided flow | A search bar or feed | Win on clarity, not volume |

Understanding the user | Photo analysis plus lifestyle questions | Hair type alone | Routines fail when they ignore real life |

AI's role | Explain the why in plain language | Just output a routine | Trust comes before automation |

Feedback | Thumbs up or down everywhere | No feedback loop | Users get control; the system learns |

⚖️
The hard call: good recommendations need a long lifestyle questionnaire, but long forms are where people drop off. I made the questionnaire part of the value, not a gate, showing users how each answer shapes their routine.

Research surfaced five opportunities; the MVP built the three that remove trial and error (analysis, recommendations, routines). Styling tutorials, local buying options and stylist booking were deferred.

## 4. The AI strategy I defined for launch

Ground an existing model in a curated hair-care knowledge base instead of training one. It's fast to ship, keeps answers grounded in vetted hair science, and updates without retraining. Fine-tuning comes in v2, once real users' thumbs-up and thumbs-down signals give it something to learn from.

Privacy, built into the product

- Explicit consent before any data improves the AI

- Entries anonymized: names, location and photo metadata stripped

- A clear "don't train on my data" option

- A plain-English explanation of how data helps the user

## 5. How I designed it

Start with a photo, get a plain-language summary, open the full analysis, turn it into a routine, then see matched products.

## 6. Outcome and how I measure success

The metric that matters is whether people keep following their routine. An analysis is a one-time novelty; weeks of routine change hair and earn trust.

Stage | Metric | Signal |

Try | Photo uploaded | Vanity on its own |

Understand | Analysis read, questionnaire done | Real |

Commit | Routine started, reminders on | Real |

Habit | Routine followed 3+ weeks | North star |

## 7. Growth plan and roadmap

Phase | What ships | Gate |

MVP | Analysis, questionnaire, routines, recommendations, signals | Routines followed 3+ weeks |

v2 | Progress tracking, explainability, household profiles, fine-tuned model | Signals improve over time |

v3 | Stylist marketplace, climate and travel adjustments | Recommendation revenue proven |

← 🎓 C.O.T
Next: 🔧 GoTukang →


=== SOURCE: Case study: GoTukang (/work/gotukang) ===

🔧

# GoTukang

A concept for adding on-demand handyman services to Gojek, built on trust signals instead of word of mouth.

Status

Concept Personal project, not affiliated with Gojek
Type

Feature add inside an existing super app
My role

Product lead, UX researcher and UI designer
Segment

Small business owners and property managers in Indonesia
Research

3 interviews, plus market and competitive analysis
North star

Repeat bookings
Stack

Figma, Notion
Links

Figma file

Outcome

A concept grounded in market research suggesting Gojek is well placed to own this vertical. The bet: in a market that runs on referrals, trust has to be built into the product itself.

## 1. The problem and who had it

Business owners and property managers had no reliable way to get handyman work done, and it cost them revenue. A no-show means a shop can't open or a rental can't turn over.

- Sourcing ran on personal networks, so finding someone trustworthy was slow.

- No way to compare availability, pricing or reliability.

- The platform constraint: Gojek is already dense, so a new vertical had to feel native and add no friction.

## 2. Market research: why Indonesia, and why Gojek

I compared four Southeast Asian markets and ranked Indonesia first, for its scale of small businesses and the region's largest labor force: both sides of the marketplace are large.

Player | Focus | Gap GoTukang fills |

Sejasa | Handyman and renovation marketplace | Web-first, inconsistent quality |

Ayasan | Domestic staff | Little trade depth |

Pinhome | App-based home services | Mostly Jakarta; no super-app reach |

💡
Gojek has tried this before. Its home-services partnership with Pinhome ended in early 2022. The opportunity was real but the model was the risk, so GoTukang has Gojek own its tukang network.

## 3. Segment and business case

I chose businesses over households. A shop owner needs a handyman monthly and loses money on a no-show; a homeowner needs one a few times a year. More bookings, more willingness to pay for reliability.

The trade-off in the model: long term, a commission per job. But I cut in-app payment, so the pilot earns no commission by design. Its job is to build a reliable network and repeat demand; commission starts as GoPay adoption grows in the trades.

## 4. The decisions: what I chose and what I cut

The biggest call: consistency over novelty. Inside a super app, new patterns are a cost. I spent novelty only where trust required it.

Decision | I chose | Over | Why |

Trust | Ratings and job history | Referrals | Trust has to live in the product |

Reliability | Badges: On Time, Bilingual | Long reviews | Qualify a tukang in seconds |

Requests | Structured scope, budget, photos | Free-text messages | Accurate quotes, fewer back-and-forths |

⚖️
The hard call: bidding vs. instant booking. Instant, fixed-price booking is the familiar Gojek pattern. I bet on bidding: tukangs are the workforce the product depends on, and bidding gives them control over jobs and prices. The cost is customer speed, offset with job invites.

- In-app payment was cut. The trades still run largely on cash; forcing digital payment would add friction on both sides.

- Deferred: saved favorites and tukang referrals (P2); contractor accounts and large multi-trade projects (P3).

## 5. How I designed it

GoTukang enters as one more icon on the Gojek home screen. Describe the job, pick timing, compare tukangs, invite them and track proposals.

## 6. Outcome and how I measure success

The metric that matters is whether a business books again. In a two-sided marketplace I'd watch supply just as closely: jobs with no bids, and tukang no-shows.

Stage | Metric | Signal |

Request | Job posted with scope and budget | Real |

Match | Job gets 2+ bids | Real |

Complete | Tukang arrives on time | Real |

Repeat | Books again within 60 days | North star |

## 7. Growth plan and roadmap

Phase | What ships | Gate |

Pilot (one city) | Job creation, bidding, badges, scheduling, messaging, ratings | Most jobs get 2+ bids |

Expand | More cities and trades, favorites, referrals | Repeat bookings hold |

Scale | Contractor accounts, large projects, GoPay payment | Commission covers acquisition |

← 💇🏾‍♀️ Just Hair
All work →


=== SOURCE: Writing (/writing) ===

✍️

# Writing

Thoughts on building, designing, selling, and everything in between.

All posts

2 posts

AaTitle |
Topic |
Published on |
Date |

📝The Notion Paradox: Why the Most Flexible Product Is Also the Hardest to Sell |
SalesProduct |
Medium |
May 5, 2026 |

📝I've built brands in fashion and products in tech. |
CareerProduct |
Medium |
Apr 29, 2026 |


=== SOURCE: Contact (/contact) ===

✉️

# Contact

Open to Product Manager roles: remote, hybrid or on-site, based in New York City. The fastest way to reach me is a short call.

## Book time

☕Intro chat
15 min · video call
For recruiters and hiring managers checking fit.
Pick a time →

🧭Product conversation
30 min · video call
A case study walkthrough or a role in detail.
Pick a time →

## Elsewhere

✉️Emailbjohnson1041@gmail.com
💼LinkedInin/employeenumberone
💻GitHubCarbonDesignWorld
📄ResumePDF · Oct 2026

💬
Have a quick question first? Brian's AI assistant can answer from his case studies and resume.
Ask the assistant
