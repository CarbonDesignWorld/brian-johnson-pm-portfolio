# Brian's AI assistant (chat service)

A small Google Cloud Run service that sits between the website and Gemini. It:

- keeps the Gemini API key secret (it never appears in the website's code)
- adds the knowledge pack (`knowledge-site.md`, `knowledge-faq.md`) and the assistant's rules to every question
- allows 10 questions per visitor per day (plus a looser per-network limit, using a hashed IP that is never stored as-is)
- pauses itself at 90% of a $10 monthly spend, so a Google Cloud budget alert is a backup rather than the only guard
- logs question and answer text anonymously (no name, visitor id or IP) to Firestore, so you can see what people ask

## One-time setup (about 20 minutes)

You need the Google Cloud CLI (`gcloud`) signed in to the same Google Cloud project as Prepare.

```bash
cd chat-service
gcloud config set project YOUR_PROJECT_ID

# Turn on the services it uses
gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com \
  firestore.googleapis.com secretmanager.googleapis.com

# A Firestore database for counters and logs (skip if the project already has one)
gcloud firestore databases create --location=nam5

# Store your Gemini API key (from Google AI Studio) as a secret.
# The AI Studio project needs billing and prepaid credits, or Gemini returns 402.
printf "PASTE_YOUR_GEMINI_KEY" | gcloud secrets create gemini-api-key --data-file=-

# Deploy
gcloud run deploy brian-assistant --source . --region us-east4 \
  --allow-unauthenticated --max-instances 2 --memory 512Mi \
  --set-secrets GEMINI_API_KEY=gemini-api-key:latest \
  --set-env-vars "^;^HASH_SALT=$(openssl rand -hex 16);ALLOWED_ORIGINS=https://brianjohnson.work,https://www.brianjohnson.work"

# Let old daily counters delete themselves after two days
gcloud firestore fields ttls update expires --collection-group=limits --enable-ttl
```

The `^;^` at the start of `--set-env-vars` makes `;` the separator, so the comma inside
`ALLOWED_ORIGINS` stays part of its value.

The deploy prints a URL like `https://brian-assistant-xxxxx.us-east4.run.app`. Put it in the website's
hosting settings as the environment variable `PUBLIC_CHAT_API`, then redeploy the site.

If the deploy log mentions a permission error on Firestore, give the service's account the
"Cloud Datastore User" role in IAM.

**Also set a budget alert:** Billing → Budgets & alerts → $10 per month. It only emails you; the
service's own counter is what actually stops spending.

## Settings (environment variables)

| Variable | Default | What it does |
| --- | --- | --- |
| `GEMINI_MODEL` | `gemini-3.8-flash` | Which Gemini model answers |
| `DAILY_LIMIT` | `10` | Questions per visitor per day |
| `IP_DAILY_LIMIT` | `40` | Questions per network per day |
| `MONTHLY_CAP_USD` | `10` | Monthly spend cap; the service pauses at 90% |
| `PRICE_IN_PER_M` / `PRICE_OUT_PER_M` | `0.5` / `3` | Gemini price per million input/output tokens, set a little above the published rate (about $0.375 / $1.875 for 3.8 Flash in Oct 2026) so the cap trips early. Check Google's current pricing when you change models |
| `ALLOWED_ORIGINS` | the two brianjohnson.work addresses | Websites allowed to call the service. Add your preview address while testing |
| `HASH_SALT` | — | Random text used to hash visitor ids and IPs. Set once, keep secret |

## Updating what the assistant knows

Edit `knowledge-faq.md` (or regenerate `knowledge-site.md` from the site), then run the same
`gcloud run deploy` command again.

## Reading the questions people ask

Google Cloud console → Firestore → `questions` collection. Each entry is just the question, the
answer and a time.
