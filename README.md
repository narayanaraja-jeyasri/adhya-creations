# ADHYA Creations & Tech Solutions — Website

> **"Make Your Business Impossible to Ignore."**
> Premium freelancer website for Digital Marketing, Content Creation, Video Creation, SEO & Tech Solutions.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js 18 + Vite + Tailwind CSS + Framer Motion |
| Backend | Python FastAPI (serverless on Vercel) |
| Database | Supabase (PostgreSQL) |
| Hosting | Vercel (Free) |
| Repo | GitHub |

---

## 📁 Project Structure

```
adhya-website/
├── frontend/        ← React.js app (deployed to Vercel)
├── backend/         ← Python FastAPI (deployed as Vercel serverless)
├── .github/
│   └── workflows/
│       └── deploy.yml   ← Auto-deploy on git push
├── .env.example     ← Template for environment variables
├── .gitignore
└── README.md
```

---

## ⚙️ Local Development Setup

### Prerequisites
- [Node.js 20+](https://nodejs.org)
- [Python 3.11+](https://python.org)
- [Git](https://git-scm.com)

### Step 1 — Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/adhya-website.git
cd adhya-website
```

### Step 2 — Set up Frontend
```bash
cd frontend
npm install
```

Create `frontend/.env`:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_API_URL=http://localhost:8000
```

Run frontend:
```bash
npm run dev
# → Opens at http://localhost:5173
```

### Step 3 — Set up Backend
```bash
cd backend
python -m venv venv

# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

pip install -r requirements.txt
```

Create `backend/.env`:
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your-service-role-key
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_EMAIL=your-gmail@gmail.com
SMTP_PASSWORD=your-app-password
NOTIFICATION_EMAIL=contact@adhyacreations.com
FRONTEND_URL=http://localhost:5173
```

Run backend:
```bash
uvicorn main:app --reload --port 8000
# → API at http://localhost:8000
# → Docs at http://localhost:8000/docs
```

---

## 🗄️ Supabase Database Setup

1. Go to [supabase.com](https://supabase.com) → Create account → **New Project**
2. Wait for project to be ready (~2 min)
3. Go to **SQL Editor** → Run this SQL:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Contact form submissions
CREATE TABLE contacts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service TEXT,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Newsletter subscribers
CREATE TABLE newsletter (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security (optional but recommended)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter ENABLE ROW LEVEL SECURITY;

-- Allow backend (service role) to insert
CREATE POLICY "service_role_insert_contacts"
  ON contacts FOR INSERT
  WITH CHECK (true);

CREATE POLICY "service_role_insert_newsletter"
  ON newsletter FOR INSERT
  WITH CHECK (true);
```

4. Go to **Settings → API** → Copy:
   - `Project URL` → `SUPABASE_URL`
   - `anon public` key → `VITE_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_KEY`

---

## 📧 Gmail SMTP Setup (for contact form emails)

1. Go to your Google Account → **Security**
2. Enable **2-Step Verification** (required)
3. Search for **App Passwords** → Create one for "Mail" + "Windows Computer"
4. Copy the 16-character password → use as `SMTP_PASSWORD`

---

## 🌐 Free Hosting on Vercel (Step-by-Step)

### Step 1 — Push to GitHub
```bash
# In the root adhya-website folder:
git init
git add .
git commit -m "🚀 Initial commit: ADHYA website"

# Create repo on github.com first, then:
git remote add origin https://github.com/YOUR_USERNAME/adhya-website.git
git branch -M main
git push -u origin main
```

### Step 2 — Deploy Frontend to Vercel
1. Go to [vercel.com](https://vercel.com) → Sign in with GitHub
2. Click **"Add New Project"**
3. Import your `adhya-website` repository
4. Configure:
   - **Framework Preset:** Vite
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Add **Environment Variables:**
   ```
   VITE_SUPABASE_URL       = https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY  = your-anon-key
   VITE_API_URL            = https://adhya-api.vercel.app
   ```
6. Click **Deploy** → 🎉 Your site is live at `https://adhya-website.vercel.app`

### Step 3 — Deploy Backend API to Vercel
1. In Vercel → **"Add New Project"**
2. Import the same `adhya-website` repo
3. Configure:
   - **Root Directory:** `backend`
   - **Framework Preset:** Other
4. Add **Environment Variables:**
   ```
   SUPABASE_URL          = https://your-project.supabase.co
   SUPABASE_SERVICE_KEY  = your-service-role-key
   SMTP_HOST             = smtp.gmail.com
   SMTP_PORT             = 587
   SMTP_EMAIL            = your-gmail@gmail.com
   SMTP_PASSWORD         = your-app-password
   NOTIFICATION_EMAIL    = contact@adhyacreations.com
   FRONTEND_URL          = https://adhya-website.vercel.app
   ```
5. Click **Deploy** → API live at `https://adhya-api.vercel.app`
6. Update `VITE_API_URL` in your frontend project env vars to point to this URL

### Step 4 — Auto-Deploy (GitHub Actions)
Every time you push to `main`, Vercel auto-deploys. You can also configure GitHub Actions for CI checks.

Add these secrets to GitHub (**Settings → Secrets → Actions**):
```
VERCEL_TOKEN           (get from vercel.com/account/tokens)
VERCEL_ORG_ID          (from .vercel/project.json after first deploy)
VERCEL_PROJECT_ID      (from .vercel/project.json)
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
VITE_API_URL
```

---

## 🔗 Custom Domain (Optional)

1. Buy a domain (e.g., `adhyacreations.com`) from GoDaddy/Namecheap (~₹700/year)
2. In Vercel → Your Project → **Settings → Domains**
3. Add your domain → Follow DNS instructions
4. SSL certificate is **auto-issued for free**!

---

## 📊 Services

| Service | Description |
|---------|-------------|
| Design & Branding | Logo, brand identity, marketing materials |
| Websites & Apps | Custom React websites, e-commerce |
| Digital Marketing | Meta Ads, Facebook/Instagram campaigns |
| AI Solutions | Chatbots, automation, AI tools |
| SEO & Google Ads | Organic rankings + paid search |
| Content & Video | YouTube, social media, copywriting |

---

## 📍 Locations
**Tenkasi · Tirunelveli · Alangulam**, Tamil Nadu, India

---

## 📄 License
© 2024 ADHYA Creations & Tech Solutions. All rights reserved.
