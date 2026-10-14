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


=== SOURCE: Case study: C.O.T (/work/cot) ===

🎓

# C.O.T

COT’s tutoring ran on intake forms and phone calls. We turned it into a self-serve app where learners sign up, get matched, book and prepay.

Status

MVP, in development

Client

COT, an online tutoring company (under NDA)

My role

UX research and product design; I owned payment and checkout

Team

Jr designer, Sr designer, the founder and COT’s engineering team

Timeline

6 weeks

Segment

Learners: students and adult learners, with parents as the purchaser

Tested with

4 participants, 100% task success

North star

Prepaid sessions booked in the app without staff help, and completed, per week

Stack

Figma, Notion

Result

I turned COT’s form-and-phone-call intake into a self-serve mobile flow, with one other designer, in a 6-week client engagement. We narrowed 25 feature ideas to an 8-feature MVP; the prototype reached 100% task success with 4 testers and is now in development with COT’s engineering team.

## 1. Background

COT is an online tutoring company that connects students and adult learners with professional tutors. It had a working website but no mobile app, and every new customer still went through a manual intake. We delivered a five-flow, high-fidelity prototype with annotations, handed off for development.

## 2. Project overview

Mission. COT gives students personalized one-on-one virtual tutoring from qualified educators, helping them build confidence and reach their academic potential.

The business problem. Before anyone could book, they filled in a form, waited for an internal review, then got on a live call. The founder said this was “leading to lost revenue from potential customers due to wait times,” and it tied staff time to every booking and reschedule. He wanted customers to book on their own, in an app built for actions, not reading.

Problem statement. Parents and adult learners struggle to find a tutor they trust who fits their goals, then hit friction scheduling, paying and communicating. The app had to cut the time from first contact to first booked session without losing the trust and tutor quality the manual process protected.

## 3. Ideation overview

Stakeholders. Weekly reviews with the founder to agree scope and priorities, and alignment with his engineering team on what could ship. The founder’s must-haves set the guardrails: onboarding, a dashboard, pricing and payment, session booking and events.

Scope. We built on an earlier team’s research and added our own in week one:

- 4 user interviews: a parent, a student, a teacher who tutors and a working professional upskilling

- 4 competitor apps reviewed by signing up and walking their flows (Wyzant, Kadama, Varsity Tutors, Chegg)

- AI-assisted secondary research on the tutoring market, then affinity mapping into themes

Target customer. Research produced four personas:

Persona | Who they are | Key goal | Key frustration

Mia | Teen student | Fun learning and visible progress | Boredom, low motivation

Jordan | Adult learner upskilling for work | Efficient learning on a flexible schedule | Hard to find the right tutor; manual scheduling

David | Parent and decision-maker | Transparency, convenience, a tutor he trusts | Confusing scheduling; unclear progress

Sophia | Tutor | Professional growth, client retention | Fragmented tools, little visibility

Jordan, an adult learner: part of the target segment, books and pays for himself.

Mia, a student learner: part of the target segment.

David, a parent: the purchaser, which shaped the checkout.

## 4. Customer segmentation

We prioritized learners: the students and adult learners who take the sessions. Parents stay in the picture as the purchaser.

Segment | Impact | Urgency | Size of market | Total

Learners: students and adult learners | 4 | 5 | 4 | 13

Tutors | 3 | 3 | 3 | 9

Parents (as purchasers) | 3 | 2 | 3 | 8

Scored 1–5, retrospectively from research findings.

Learners feel the pain at every session and are most of the user base, so they shape the core flow: match, book, attend. Parents mostly enter at one moment, when they pay. That split shaped the MVP: matching and booking are built around the learner, and the checkout I owned is built for whoever holds the card. Tutors mattered for trust, so they appear through profile cards rather than a tutor-side app.

## 5. Customer pain point

We prioritized finding a tutor who fits, just ahead of booking and payment friction.

Pain point | Impact | Urgency | Size | Total

Finding a tutor who fits my goals and learning style | 5 | 5 | 4 | 14

Booking, rescheduling and paying without friction | 5 | 5 | 3 | 13

Engaging learning with visible progress | 4 | 5 | 3 | 12

Trusting tutor credibility | 4 | 5 | 3 | 12

Separate learner and parent/admin views | 3 | 2 | 2 | 7

Connecting with peer learners | 2 | 2 | 1 | 5

Scored 1–5, retrospectively from research findings.

Booking friction was the pain the founder felt most, and interviews backed it up: one parent had to phone in just to move a session, and when a tutor cancelled, her next session slipped a full week. But scoring changed the order. A smooth booking flow is worthless if the learner doesn’t trust the match, so matching came first, and booking and checkout followed from it.

## 6. Prioritized solution

We chose a matching questionnaire that leads straight to top-matched tutors and booking: the buildable first version of smart matching.

Proposed solution | Ease (5 = easy) | Eng. effort (5 = easy) | Effectiveness | Total

Matching questionnaire → top-matched tutors → book or exit | 4 | 3 | 5 | 12

Search and filter tutors by subject | 4 | 4 | 3 | 11

Tutor profile cards with ratings and reviews | 3 | 3 | 4 | 10

Personalized learning path and progress bar | 2 | 1 | 4 | 7

AI-powered adaptive matching | 1 | 1 | 5 | 7

Scored retrospectively from the feature backlog, client meetings and research.

The questionnaire reuses the intake questions COT’s staff already asked on the phone, so it cuts the review-and-call wait without new data or infrastructure. AI matching would fit best long term, but needs session data COT doesn’t have yet. The questionnaire collects that data, which makes it AI matching’s first version. Search and profile cards stayed as supporting paths.

From 25 ideas to an 8-feature MVP. We ranked 25 features P1 to P5 with the founder. The final P1 set: sign-up and onboarding, matching and booking, search by subject, tutor profile cards, pricing and purchase, a learner/admin dashboard, events and an FAQ chatbot.

⚖️

Two calls that moved the list. Matching moved from P2 to P1 once scoring showed fit was the top pain. And a chatbot replaced in-app tutor messaging: messaging needed more design and didn’t clear the bar for value against effort, while the chatbot answers common questions from a 48-intent FAQ library now and tells us what messaging must handle later. Launch, learn, then build.

### What we cut, and why

Cut | Moved to | Reason

Learning progress bar | P2 | Engineering flagged it as hard to build; “progress” wasn’t defined yet

Badges and gamification | P2 | Retention play; no value before booking works

Session reminders, post-session summary | P2 | Rely on the core booking loop existing first

Study groups and community | P3 | Lowest-scoring pain

Peer rankings, sharing results | P4 | Lowest-scoring pain

In-app video, multiplayer study | P5 | High effort; outside the booking-first scope

## 7. Develop MVP

The MVP is one continuous journey: sign up → get matched → book → pay → confirm, plus a chatbot and events to bring people back.

North star: prepaid sessions booked through the app without staff help, and completed, per week. It rewards what the founder cared about: customers booking on their own, fewer abandoned bookings, sessions paid in advance, and sessions that actually happen.

- Booking-flow completion rate, the inverse of abandonment

- Share of sessions paid with credit bundles rather than one at a time

- Reschedules handled in the app instead of by staff, a proxy for admin cost

- Post-session satisfaction score

COT had no in-house payment system, so booking and payment were designed to run on a third-party tool, which kept engineering scope small.

### User stories and acceptance criteria

# | User story | Acceptance criteria

1 | As a new learner, I want to create an account in the app, so that I can book without calling anyone. | Sign up with email, Google or Apple. A first-time user lands on the matching questionnaire.

2 | As a learner, I want to answer a few questions and see my best-matched tutors, so that I can choose with confidence. | Questionnaire mirrors COT’s intake questions. Results show profile cards with subjects and ratings. Book or exit at any point.

3 | As a learner, I want to pick a time and add it to my calendar, so that I don’t miss the session. | Only available slots are shown. Confirmation appears immediately with add-to-calendar.

4 | As a parent or adult learner paying, I want to pay for one session or buy a discounted credit bundle, so that future bookings take one tap. (my flow) | One-off or bundle on one screen. Price and savings shown before paying. Mobile wallets supported. New balance on confirmation.

5 | As a returning learner, I want to add sessions or top up credits from checkout, so that I can keep learning without starting over. (my flow) | Add sessions from the cart. Buy credits from the account page. Balance updates immediately.

6 | As a learner, I want to see my upcoming sessions, so that I know what’s next. | Upcoming sessions listed on the dashboard; each opens to its details.

7 | As a learner, I want quick answers to common questions, so that I don’t have to wait for staff. | Chatbot answers from the FAQ library and links to a resource.

8 | As a learner or parent, I want to find and register for events, so that I can get more from COT. | Events appear on the dashboard. Registering saves the event to the calendar.

Every story was held to the test plan’s bar: at least 90% task success, under 5 minutes per task, no critical errors.

### User flows

Each flow maps the happy path, alternative paths and error paths. Select a flow to open it full size.

Story 1: create an account, with log-in for returning users.

Stories 2–5: find a tutor and book, or top up credits. The checkout and payment paths are the part I owned, including error recovery.

Story 7: ask the chatbot a common question and follow its resource link.

Story 8: find an event, RSVP and add it to the calendar.

## 8. Launch plan

The app is in development and hasn’t launched yet, so this is the go-to-market plan we handed over, not a result.

- First market: existing customers who already book through the manual intake, mainly parents and adult learners. They already trust the service, so the app replaces a process instead of having to win them over.

- Target population: a closed beta of current active customers first, then every new inquiry from the website.

- Promotion: intake-form replies say “book instantly in the app,” an email to existing customers, and discounted credit bundles as the launch incentive. In-app events give people a reason to come back.

Phase | What ships | Gate to move on

Closed beta | Existing customers: sign-up, matching, booking, credit bundles | Booking completion and payments hold

Open sign-up | All new website inquiries routed to the app | North star trending up

Extend | Chatbot questions shape tutor messaging; then reminders, session summaries, progress | Retention holds

↩️

Rollback. The manual form-and-call intake stays live during the beta, and features sit behind toggles. If booking completion or payment success drops, affected users go back to manual intake while it’s fixed.

## 9. Customer feedback and iterations

All 4 usability test participants completed every task: 100% task success, beating our 90% bar. Participants had used or considered online tutoring, and worked through six tasks on the hi-fi prototype: book a tutor and add it to the calendar, ask the chatbot a question, view upcoming sessions, buy more credits, register for an event, and create an account.

Between low and high fidelity we iterated through weekly founder reviews, team critiques and mentor feedback, each round aiming for fewer steps from discovery to confirmation, clearer pricing and less to think about at checkout. Once the beta is live, the north star and its inputs replace task success as the bar.

Appendix: the full 25-feature backlog

All 25 ideas, ranked with the founder. Matching later moved to P1 and the chatbot replaced messaging in the final MVP.

Priority | Feature | User need it serves

P1 | Sign-up and log-in onboarding | Founder must-have

P1 | Pricing and purchase page, with mobile wallet payment | Founder must-have

P1 | Learner/admin dashboard with an account-view toggle | Founder must-have

P1 | Events promoted in the dashboard | Founder must-have

P1 | Tutor search and filter by subject | Finding a tutor who fits

P1 | Tutor profile cards with ratings and reviews | Trusting tutor credibility

P1 | In-app messaging (replaced by the FAQ chatbot) | Connection and communication

P2 | Matching questionnaire and booking flow (moved to P1) | Finding a tutor who fits

P2 | Learning progress bar and personalized path | Finding a tutor who fits

P2 | Upcoming-session reminders and cancellation | Booking without friction

P2 | Post-session summary with billing status and review | Booking without friction

P2 | Badges and rewards | Engaging learning

P3 | Study sessions and student community | Peer connection

P3 | Homework and task list | Booking without friction

P4 | Ranking students with global peers | Peer connection

P4 | Share results | Peer connection

P4 | Competitive learning duels | Peer connection

P4 | Interactive lessons sent by tutors | Booking without friction

P5 | Tutor micro-learnings that inform the tutor | Finding a tutor who fits

P5 | Tutor-influenced micro-learning curriculum | Finding a tutor who fits

P5 | Tutor reliability metric made visible | Trusting tutor credibility

P5 | Etiquette guidance for tutors | Trusting tutor credibility

P5 | Profile display of performance | Peer connection

P5 | Multiplayer joint study | Engaging learning

P5 | In-app video call | Engaging learning

← 🌦️ Prepare Next: 💇🏾‍♀️ Just Hair →



=== SOURCE: Case study: Just Hair (/work/just-hair) ===

💇🏾‍♀️

# Just Hair

An AI hair-care assistant for women with textured hair: it explains your hair before it recommends anything, so years of trial and error become a routine you can trust.

Status

Concept, tested hi-fi prototype

Context

Solo project, ELVTR product design program

My role

Product and UX, end to end: research, prioritization, design and testing

Timeline

6 weeks

Segment

High-spending professionals with textured hair

Research

6 interviews, U.S. and Indonesia, ages 20s to 40s

Tested with

6 participants (mid-fi) and 7 unmoderated Maze testers

North star

Routine followed for 3+ weeks

Stack

Figma, Maze, Notion; LLM feasibility in Lovable

Result

I took Just Hair from six interviews to a tested hi-fi prototype in six weeks, solo. In an unmoderated Maze test, 85% completed the routine flow without help and 86% said the hair report was what they needed.

💬

“It took me 10 years to find products that actually worked.” Research participant

## 1. Background

Just Hair is my concept project from the ELVTR product design program. I chose it because textured-hair care is a deep, global problem that the industry underserves, and because large language models can finally read a photo and explain what they see in plain language. I owned every stage, and tested the LLM connection for feasibility in Lovable.

## 2. Project overview

Vision. Help women with textured hair understand their own hair first, then care for it with confidence and spend less getting there.

The market. Black consumers spent $6.6 billion on beauty in 2021, yet are 1.6 times more likely than White consumers to be dissatisfied with hair care products, and only 13% say it’s easy to find products that meet their needs at mass retailers (McKinsey, 2022). In 2017 they accounted for $54 million of the $63 million spent on ethnic hair and beauty products (NielsenIQ, 2018). High spend, low satisfaction: the gap is guidance, not supply.

Problem statement. Most people with textured hair don’t fully understand their own hair, and often take a decade or more to learn it. They rely on reviews, influencers and costly trial and error, so the industry puts the burden of expertise on the customer.

## 3. Ideation overview

Scope. A solo project: I made the product calls and tested them with users.

- 6 interviews over Zoom and phone: 2 with tightly textured hair, 3 medium textured, 1 straight, across the U.S. and Indonesia, ages 20s to 40s

- Secondary research on the hair-care market and on what LLMs can reliably analyze

- A competitive scan of curl quizzes and product lines participants already used (Prose, Cantu, Shea Moisture)

- Affinity mapping into six themes, then problem statements, POVs and How Might We questions

Target customer. Three personas came out of the research:

Persona | Who she is | Key goal | Key pain

Jasmine | 26, London, marketing director who travels | A healthy routine and less money wasted on products | Spends too much on products that don’t work; hard to find stylists abroad

Sherelle | 40, Melbourne, mother of a 6-year-old | Teach her daughter to love and care for her hair | Her daughter’s hair is different from hers; afraid of harmful products

Jeanette | 21, Miami, swimmer with an active life | A routine that survives sweat and pool days | No routine, so her hair usually ends up in a bun

Jasmine, the target segment: high spend, little to show for it.

Sherelle: a strong second segment, planned for v2 household profiles.

Jeanette: lifestyle drives her routine, which shaped the lifestyle questionnaire.

## 4. Customer segmentation

We prioritized high-spending professionals with textured hair, the Jasmine segment. Their spend is the business case: redirect it to the right products and the product earns trust and a path to revenue.

Segment | Impact | Urgency | Size of market | Total

High-spending professionals with textured hair | 5 | 4 | 4 | 13

Parents caring for a child’s textured hair | 4 | 4 | 3 | 11

Active, lifestyle-driven young women | 3 | 3 | 3 | 9

Scored 1–5, retrospectively from research findings.

Parents scored close behind and stay in the roadmap as household profiles; the same analysis and routines serve them once the core works for one person.

## 5. Customer pain point

We prioritized not understanding my own hair, the root cause behind years of trial and error.

Pain point | Impact | Urgency | Size | Total

Not understanding my own hair, so years of trial and error | 5 | 5 | 5 | 15

Finding products that fit my hair, climate and lifestyle | 5 | 4 | 4 | 13

Trusting ingredients are safe | 4 | 3 | 4 | 11

Finding a stylist who knows textured hair | 4 | 3 | 3 | 10

Buying products locally or abroad | 3 | 3 | 2 | 8

Scored 1–5, retrospectively from research findings.

Every interview told the same story: “A lot of Googling, a lot of YouTube,” products bought and abandoned, and routines that broke when life or climate changed (“In Bali, I wash every day”). Product fit scored second, but recommending products to someone who doesn’t understand her hair only restarts the cycle, so understanding came first.

## 6. Prioritized solution

We chose photo analysis with a plain-language hair report, fed by a short lifestyle questionnaire.

Proposed solution | Ease (5 = easy) | Eng. effort (5 = easy) | Effectiveness | Total

Photo analysis + plain-language hair report | 4 | 4 | 5 | 13

Lifestyle questionnaire, by voice or text | 4 | 4 | 4 | 12

Product recommendations from the profile | 4 | 4 | 3 | 11

Routine builder with reminders | 3 | 2 | 5 | 10

Stylist profiles and salon recommendations | 2 | 2 | 3 | 7

AI hairstyle recommendation | 2 | 2 | 2 | 6

Effort mapped from my feature backlog’s sizing (S = 4, M = 3, L = 2); scored retrospectively.

The analysis answers the top pain directly and was small to build on an existing multimodal model. The questionnaire and recommendations came with it, because a routine that ignores real life fails.

⚖️

The call that changed the MVP: routines moved up. The routine builder was P2 and the largest feature, but a scan alone is a one-time novelty. Routines give people a reason to come back, rescan their hair at different moments and see it improve, which builds trust and makes the app worth keeping. I promoted routines and reminders into the MVP and made them the flow I tested.

### Key product decisions

Decision | I chose | Over | Why

Core experience | A guided flow | A search bar or feed | Win on clarity, not on volume of content

Understanding the user | Photo analysis plus lifestyle questions | Hair type alone | Routines fail when they ignore real life

AI’s role | Explain the why in plain language | Just output a routine | Trust comes before automation

Feedback | Thumbs up or down on every result | No feedback loop | Users get control; the model learns

🧩

The hard trade-off: good recommendations need a long lifestyle questionnaire, and long forms are where people drop off. I made the questionnaire part of the value, not a gate, showing how each answer shapes the routine.

### What we cut, and why

Cut | Moved to | Reason

Stylist profiles and salon recommendations | P4 | Real need, but a marketplace is a separate product; it needs trust and supply first

AI hairstyle recommendation | P4 | Styling isn’t the root pain; high effort

Photo inspiration wall | P4 | Engagement feature with no link to understanding

Product scan for match analysis | P3 | Valuable, but depends on a product database that doesn’t exist yet

## 7. Develop MVP

The MVP is one loop: photo → plain-language report → lifestyle questions → routine and matched products → reminders and rescans, with a thumbs up or down on every answer.

North star: routines followed for three or more weeks. An analysis is a one-time novelty; weeks of routine change hair and earn trust.

Stage | Metric | Signal

Try | Photo uploaded | Vanity on its own

Understand | Report read, questionnaire done | Real

Commit | Routine started, reminders on | Real

Habit | Routine followed 3+ weeks | North star

### User stories and acceptance criteria

# | User story | Acceptance criteria

1 | As a woman with textured hair, I want to take or upload a photo and get an analysis, so that I finally understand what my hair needs. | Camera or gallery upload, with tips on the confirm screen. The report explains results in plain language. Thumbs up or down on every result.

2 | As a user, I want to describe my lifestyle by voice or text, so that advice fits my climate and routine. | Voice or text input. The assistant asks follow-up questions and offers suggested replies.

3 | As a user, I want products matched to my profile, so that I stop paying for trial and error. | Each recommendation shows why it fits my profile. Save or shop from the list. Sponsored items labeled.

4 | As a user, I want to turn my report into a routine and add it to my calendar, so that I actually stick to it. | An intro screen sets expectations. The routine is generated from my answers. Add to calendar in one step, with a confirmation.

5 | As a returning user, I want reminders and rescans, so that I can see my hair change over time. | Wash-day and treatment reminders. Rescan at any time from home.

The test plan’s bar: complete each task with no errors.

### User flows

The task flow is the happy path; the user flow shows every branch after the first report. Select a flow to open it full size.

Stories 1 and 3: from home to an uploaded photo, LLM review, the report and a response.

Stories 1–5: after the report, users rate it, add voice or text context, view products, view the analysis or build a routine and add it to the calendar.

## 8. Launch plan

Just Hair hasn’t launched; this is how it will go to market. An iOS version is in definition.

- First market: high-spending professionals with textured hair in the U.S., starting with the research participants and a waitlist.

- Promotion: natural-hair creators and communities on YouTube and social, where research showed women already go to learn.

- AI approach: ground an existing model in a curated hair-care knowledge base instead of training one. It ships fast, stays grounded in vetted hair science and updates without retraining. Fine-tuning comes once real thumbs up and down signals exist.

Phase | What ships | Gate to move on

Beta | Analysis, questionnaire, routines, recommendations, feedback signals | Over 60% of users rate results; analysis rated accurate over 95% of the time

v2 | Product scan anywhere, progress tracking, household profiles, fine-tuned model | Routines followed 3+ weeks

v3 | Stylist marketplace, climate and travel adjustments | Recommendation revenue proven

↩️

Rollback. If accuracy signals drop below the gate, product recommendations switch off and the report falls back to education only, until the knowledge base is fixed.

### How it will make money

Path | How it pays | Why it fits

Product recommendations | Affiliate revenue or brand partners | Users already spend; these are purchase-intent moments

Premium routines | Subscription for tracking and household profiles | Value grows the longer someone uses it

Stylist marketplace | Booking fee for vetted stylists | Solves the trust problem research surfaced

The risk to manage: affiliate money can bias recommendations, so they will stay tied to the hair profile, with sponsorship labeled.

### Privacy, built in from day one

- Explicit consent before any data improves the AI

- Entries anonymized: names, location and photo metadata stripped

- A clear “don’t train on my data” option

- A plain-English explanation of how data helps the user

## 9. Customer feedback and iterations

Two rounds of testing shaped the final design. First a mid-fi test with the six research participants across three flows: complete a hair analysis, create a routine and find products.

What we saw | What I changed

The “swipe no” button made people hesitate | Clarified the choice

Suggested replies sped people through the analysis | Kept and expanded them

The back arrow and back button confused people | Replaced with a Cancel button

The photo-upload check lacked context | Added a title, tips and guidance

People wanted more guidance | Added an intro before the routine questions and a congratulations step that leads to add-to-calendar

Then an unmoderated Maze test of the routine flow, with no help: 17 people started and 7 finished.

Result | Score

Completed the routine flow | 85%

Said the hair report was what they needed | 86%

Rated its value to them 4 out of 5 | 57%

Found navigation “somewhat intuitive” | 57%

Testers liked the routine questions and the clean layout but found the light-blue buttons looked disabled and the background too busy. The nine changes that followed: a stronger call-to-action color, outlines instead of background scribbles, more photos, guide text, simpler copy for all levels of English, a stronger blur behind pop-ups, clearer checkboxes and better contrast.

Appendix: the full feature backlog

All 14 features, ranked P1 to P4 with effort sizes.

Priority | Feature | Effort | Outcome

P1 | Log in and sign up | S | In prototype

P1 | Photo or video upload and AI analysis | S | In prototype

P1 | Product recommendations | S | In prototype

P1 | AI lifestyle questionnaire by voice | S | In prototype

P1 | Thumbs up or down signals on results | S | In prototype

P2 | Photo uploads and profile | S | In prototype

P2 | Routine creator | L | In prototype (promoted)

P2 | Scheduler and reminders | M | In prototype

P3 | Product scan for match analysis | M | Deferred

P3 | Data-sharing settings | S | Planned for launch

P4 | Stylist profiles | L | Cut

P4 | Salon recommendations | L | Cut

P4 | AI hairstyle recommendation | L | Cut

P4 | Photo inspiration wall | XS | Cut

← 🎓 C.O.T Next: 🔧 GoTukang →



=== SOURCE: Case study: GoTukang (/work/gotukang) ===

🔧

# GoTukang

A concept for booking trusted handymen inside Gojek, so business owners in Bali can stop relying on “I know a guy.”

Status

Concept, tested hi-fi prototype

Context

Solo project: add a feature to an existing app. Not affiliated with Gojek.

My role

Product lead and designer: research, prioritization, design and testing

Timeline

July to September 2025

Segment

Small business and property owners in Bali

Research

3 in-person interviews, competitive SWOT and a four-market analysis

Tested with

4 rounds of lo-fi testing; 7 participants in Maze

North star

Books again within 60 days

Stack

Figma, FigJam, Maze, Notion, Midjourney

Result

I took GoTukang from interviews with Bali business owners to a tested hi-fi prototype inside Gojek’s app, solo, in under three months. In the final Maze test, all 7 participants sent a job invite to a tukang of their choice (100% task success) and rated the experience 5 out of 5.

💬

“If you ask anyone in Indonesia how they get something fixed in their home or business, they’ll tell you they know a guy.” From my project brief

## 1. Background

The brief was to add a feature to an existing app without breaking its brand. I live in Bali, and every repair I saw ran on a personal network: a tukang (handyman) you know, reached by text or call. I picked Gojek, Indonesia’s leading super app for rides, food and payments, and asked whether it could own this job.

Gojek had tried before. Its GoService partnership brought Pinhome’s cleaning and home services into the app in 2021, and that integration ended on February 28, 2022 (Warta Ekonomi, 2022). The demand was real; a partner-run model was the risk.

## 2. Project overview

Vision. Make finding and booking a reliable tukang as easy and trustworthy as ordering a Gojek ride.

The market. Indonesia has 65.5 million micro, small and medium businesses. They employ about 97% of the workforce and produce 61.9% of GDP (Antara, July 2025). Gojek’s parent, GoTo, is growing at scale: group core GTV rose 43% year over year to Rp89.8 trillion in Q2 2025, and On-Demand Services GTV grew 9% to Rp16.4 trillion (GoTo, Q2 2025). That means a large base of businesses that need repairs, and an app many already open every day.

Problem statement. For business and home owners in Indonesia, finding skilled labor for maintenance is hard. Word of mouth is still the main way to find a tukang, and it brings a chain of problems: no transparent pricing, unreliable scheduling, language barriers and no way to find someone new.

## 3. Ideation overview

Scope. A solo project: I made the product calls and tested them with users.

- 3 in-person interviews with Bali business and property owners who regularly hire tukangs

- A four-market comparison (Indonesia, Thailand, the Philippines, Singapore) that ranked Indonesia first on business count and labor supply

- A SWOT analysis of Sejasa, Ayasan and Pinhome, the main home-service players

- Affinity mapping, then problem statements, POVs and How Might We questions

- An audit of Gojek’s existing flows (GoRide, GoFood, GoSend, GoPay) to reuse its patterns

Player | Focus | Gap GoTukang fills

Sejasa | Handyman and renovation marketplace | Web-first; quality varies by provider

Ayasan | Domestic staff (maids, drivers, carers) | Little depth in trades

Pinhome | App-based home services | Mostly big cities; no super-app reach since leaving Gojek

None of the people I interviewed knew any of these apps existed. Reach, not features, was the gap.

Target customer. Two personas came out of the research:

Persona | Who they are | Key goal | Key pain

Prinka | 34, runs a café near the beach in Bali | A business that builds community and serves great coffee | Slow, unreliable repairs have forced the café to close

Paul | 40, owns two villas leased for long and short stays | Scale the business into a legacy for his children | Surprise property issues stop guests from staying

Prinka needs regular, reliable service partners so her café stays open for her customers.

Paul needs quick, reliable fixes and regular maintenance so problems don’t reach his guests.

## 4. Customer segmentation

We prioritized small business owners, the Prinka segment. A shop needs a tukang often and loses money the day something breaks, so the need is frequent and the cost of a no-show is real.

Segment | Impact | Urgency | Size of market | Total

Small business owners (cafés, shops) | 5 | 5 | 4 | 14

Property and villa owners and managers | 5 | 4 | 3 | 12

Households | 3 | 2 | 5 | 10

Scored 1–5, retrospectively from research findings.

Property owners like Paul scored close behind and share the same flow. Households are the biggest group but need help a few times a year and have more patience, so they come later.

## 5. Customer pain point

We prioritized finding a reliable, trustworthy tukang. Every other pain follows from it.

Pain point | Impact | Urgency | Size | Total

Finding a reliable, trustworthy tukang | 5 | 5 | 5 | 15

No-shows and unreliable scheduling | 5 | 4 | 4 | 13

No transparent pricing | 4 | 3 | 4 | 11

Language barrier | 3 | 3 | 3 | 9

Findability: no listings, only referrals | 3 | 3 | 3 | 9

Scored 1–5, retrospectively from research findings.

Participants described the same loop: ask a friend, wait, and hope. Some tukangs didn’t show up, others lacked professionalism or missed the brief. Reliability scored second, but you can’t schedule someone reliable until you can find and judge them.

## 6. Prioritized solution

We chose search and tukang profiles with reviews and badges, so a business owner can judge a tukang in seconds instead of asking around.

Proposed solution | Ease (5 = easy) | Eng. effort (5 = easy) | Effectiveness | Total

Search + tukang profiles with reviews and badges (On Time, Bilingual) | 4 | 4 | 5 | 13

Job request with scope, budget and photos; invite several tukangs | 4 | 3 | 5 | 12

Scheduling | 4 | 3 | 4 | 11

Chat and Q&A with the tukang | 4 | 4 | 3 | 11

Saved tukangs and referrals | 4 | 4 | 2 | 10

In-app payment | 3 | 2 | 2 | 7

QR code scan to book | 3 | 3 | 1 | 7

Large projects and contractor accounts | 2 | 2 | 2 | 6

Scored retrospectively; priorities come from my feature backlog (P1–P3).

Profiles answer the top pain directly and reuse patterns Gojek users already know. The job request came with them, because a profile only helps if you can then ask that person for help.

⚖️

The model: invite and propose, not instant booking. Instant, fixed-price booking is the familiar Gojek pattern, but trades jobs vary too much to price up front. The business owner posts one job and invites several tukangs; each one accepts and proposes. Tukangs keep control of the jobs and prices they take, which matters because they are the supply the product depends on. The cost is a slower match, which job statuses (Pending, Accepted, Past) make visible.

### Key product decisions

Decision | I chose | Over | Why

Trust | Ratings, reviews and job history | Referrals | Trust has to live in the product

Reliability | Badges: On Time, Bilingual | Long reviews | Judge a tukang in seconds

Requests | Structured job: issue type, photos, schedule | Free-text messages | Better proposals, less back-and-forth

Look and feel | Gojek’s existing patterns, like GoCar scheduling | New UI | Inside a super app, new patterns are a cost

### What we cut, and why

Cut | Moved to | Reason

In-app payment | Later phase | The trades still run largely on cash; forcing digital payment adds friction on both sides

QR code scan to book | Removed | Testers said it was nice to have, but the audience could struggle with it

Saved tukangs and tukang referrals | P2 | Saved tukangs were tested in lo-fi; both matter once a network exists, not first

Large-project bidding and contractor accounts | P3 | A different product for multi-trade jobs

## 7. Develop MVP

The MVP is one loop inside Gojek: search a problem → compare tukang profiles → create a job → invite tukangs → track proposals and schedule, with chat before you commit and a review after the job.

North star: businesses that book again within 60 days. A first booking can be curiosity; a second one means the tukang showed up and did the work. In a two-sided marketplace I’d watch supply just as closely: jobs with no proposals, and tukang no-shows.

Stage | Metric | Signal

Request | Job posted with issue, photos and schedule | Real

Match | Job gets 2+ proposals | Real

Complete | Tukang arrives on time | Real

Repeat | Books again within 60 days | North star

### User stories and acceptance criteria

# | User story | Acceptance criteria

1 | As a business owner, I want to search by problem and area, so that I find tukangs who can fix it near me. | Search by service type and location. Results and categories follow Gojek’s search layout.

2 | As a business owner, I want to see a tukang’s reviews, badges and services, so that I can trust them before I ask. | Profile shows rating, review count, badges and services, with a path to all reviews. Save or share the profile.

3 | As a business owner, I want to create a job and invite several tukangs to it, so that I get a fast, fair response. | Choose an existing job or create one with name, issue type and photos. Invite more than one tukang to the same job.

4 | As a business owner, I want to give my available times, so that a tukang can accept quickly. | Scheduling mirrors GoCar: open availability for the day, the week or custom dates and times.

5 | As a business owner, I want to track each job’s status and contact the tukang, so that I know who is coming and when. | Jobs page with Pending, Accepted and Past. Message, call or request a change from the job.

The test plan’s bar: 100% task success, 0% errors.

### User flow

Every path from Gojek’s home screen: search and browse, saved tukangs, pending jobs and changes to a booking. Select the flow to open it full size.

Stories 1–5: from Gojek home to search, a tukang profile, the job request and confirmation, plus messaging and changes to an upcoming job.

## 8. Launch plan

GoTukang hasn’t launched; this is how it would go to market.

- First market: small businesses and villa owners in Bali, where the research happened and where referrals still decide who gets hired.

- Supply first: recruit tukangs through the referral networks they already use, so jobs get proposals from day one.

- Promotion: an entry on Gojek’s home screen and cross-promotion to GoFood merchants, who are already small businesses on the platform.

Phase | What ships | Gate to move on

Pilot (Bali) | Search, profiles and badges, job requests and invites, scheduling, chat, reviews | Most jobs get 2+ proposals

Expand | More cities and trades, saved tukangs, tukang referrals | Repeat bookings hold

Scale | Contractor accounts, large projects, GoPay payment | Commission covers acquisition

↩️

Rollback. If jobs go unanswered or no-shows rise, new job requests pause in the affected area or trade until tukang supply recovers. Bookings already accepted carry on.

### How it will make money

Long term, a commission on each completed job. The pilot earns no commission by design, because I cut in-app payment: its job is to build a reliable network and repeat demand. Commission starts once GoPay is common in the trades.

## 9. Customer feedback and iterations

Four rounds of lo-fi testing reshaped the flows before any visual design. Over seven days, testers reviewed three flows: book from saved tukangs, search for a plumber and schedule, and message or change a booking.

What we saw | What I changed

People needed to send one job to several tukangs | Added a job selection or creation step to the request flow

Upcoming appointments didn’t reflect that tukangs must accept first | Replaced them with a Jobs page: Pending, Accepted, Past

The scheduling screen felt unfamiliar | Rebuilt it to mirror GoCar scheduling, with open-availability options

The QR scan was nice to have but a barrier for this audience | Removed it

Search sections all looked the same | Rebuilt the layout to match Gojek’s search pages

The large profile photo took space but added little | Shrank it and added badges, services and reviews

Saving tukangs to groups was confusing | Added a heart to save or unsave, plus quick actions on the saved list

Then an unmoderated Maze test of the hi-fi “search and request a tukang” flow with 7 participants: 100% task success, and testers rated it 5 out of 5. Four small changes followed:

- Images that fit Gojek’s brand, generated with Midjourney

- Missing UI states: calendar pickers, dropdowns and keyboard input

- Clearer button text where people hesitated

- The request split into two distinct steps

Gojek has no public design system, so I rebuilt the fonts, colors, icons and components from screenshots to keep the feature native.

Appendix: the full feature backlog

All 8 features from my feature map, ranked P1 to P3.

Priority | Feature | Outcome

P1 | Specialty tukang search | In prototype

P1 | Schedule a tukang service | In prototype

P1 | Chat and Q&A before booking | In prototype

P1 | Tukang reviews | In prototype

P2 | Save tukangs for future jobs | Tested in lo-fi; deferred

P2 | Tukang referral | Deferred

P3 | Large-project bidding | Deferred

P3 | General contractor and tukang manager accounts | Deferred

← 💇🏾‍♀️ Just Hair All work →



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
