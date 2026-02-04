# Tech Tamizha - The World How

A modern educational platform built with Next.js, featuring videos, articles, and product recommendations.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id
NEXT_PUBLIC_EMAILJS_ARTICLE_TEMPLATE_ID=your_article_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

---

## 📊 Supabase Database Setup

### Initial Setup

1. Go to your [Supabase Dashboard](https://app.supabase.com)
2. Open the **SQL Editor**
3. Run the schema file: `lib/supabase/content-schema.sql`
4. Run the seed file: `lib/supabase/content-seed.sql` (optional, for sample data)

---

## 📝 Adding Records to Tables

You can add records using either the **Supabase Table Editor** (GUI) or the **SQL Editor**.

### Option 1: Using Table Editor (GUI)
1. Go to Supabase Dashboard → **Table Editor**
2. Select the table you want to add records to
3. Click **Insert row**
4. Fill in the fields and click **Save**

### Option 2: Using SQL Editor
Go to Supabase Dashboard → **SQL Editor** and run the SQL commands below.

---

## 🎬 Videos Table

### Table Structure
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `youtube_id` | text | ✅ | YouTube video ID (e.g., `dQw4w9WgXcQ`) |
| `title` | text | ✅ | Video title |
| `description` | text | ❌ | Video description |
| `category` | text | ✅ | Category (e.g., `AI`, `Web Dev`, `Cloud`) |
| `level` | text | ✅ | One of: `school`, `teens`, `college`, `it-pros` |
| `thumbnail_url` | text | ❌ | Custom thumbnail (auto-generated from YouTube if empty) |
| `is_published` | boolean | ❌ | Default: `true` |

### Add a Video

```sql
INSERT INTO videos (youtube_id, title, description, category, level)
VALUES (
  'YOUR_YOUTUBE_VIDEO_ID',
  'Video Title Here',
  'Brief description of the video content',
  'AI',
  'college'
);
```

### Example: Add Multiple Videos

```sql
INSERT INTO videos (youtube_id, title, description, category, level) VALUES
  ('abc123xyz', 'Introduction to Python', 'Learn Python basics for beginners', 'Programming', 'school'),
  ('def456uvw', 'Advanced Machine Learning', 'Deep dive into ML algorithms', 'AI', 'it-pros'),
  ('ghi789rst', 'Web Development 101', 'Getting started with HTML, CSS, JS', 'Web Dev', 'teens');
```

### Update a Video

```sql
UPDATE videos 
SET title = 'New Title', description = 'Updated description'
WHERE youtube_id = 'YOUR_YOUTUBE_VIDEO_ID';
```

### Hide/Unpublish a Video

```sql
UPDATE videos SET is_published = false WHERE youtube_id = 'YOUR_YOUTUBE_VIDEO_ID';
```

### Delete a Video

```sql
DELETE FROM videos WHERE youtube_id = 'YOUR_YOUTUBE_VIDEO_ID';
```

---

## 📰 Articles Table

### Table Structure
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slug` | text | ✅ | URL-friendly identifier (e.g., `intro-to-ai`) |
| `title` | text | ✅ | Article title |
| `description` | text | ❌ | Short summary |
| `content` | text | ✅ | Full article content (supports Markdown) |
| `author` | text | ❌ | Default: `Tech Tamizha` |
| `category` | text | ✅ | One of: `school`, `college`, `professional`, `teens`, `it-pros` |
| `tags` | text[] | ❌ | Array of tags (e.g., `{'AI', 'Tutorial'}`) |
| `read_time` | text | ❌ | Default: `5 min read` |
| `featured` | boolean | ❌ | Show in featured section |
| `is_published` | boolean | ❌ | Default: `true` |

### Add an Article

```sql
INSERT INTO articles (slug, title, description, content, category, tags, read_time)
VALUES (
  'my-article-slug',
  'Article Title Here',
  'A brief description of the article',
  '## Introduction

This is the full article content. You can use **Markdown** formatting.

### Section 1
Your content here...

### Section 2
More content here...',
  'college',
  ARRAY['AI', 'Tutorial', 'Beginner'],
  '8 min read'
);
```

### Add a Featured Article

```sql
INSERT INTO articles (slug, title, description, content, category, tags, featured)
VALUES (
  'featured-article',
  'Must-Read: Getting Started with AI',
  'Everything you need to know about AI',
  '## Your content here...',
  'college',
  ARRAY['AI', 'Featured'],
  true
);
```

### Update an Article

```sql
UPDATE articles 
SET 
  title = 'Updated Title',
  content = '## Updated Content Here...',
  tags = ARRAY['New', 'Tags']
WHERE slug = 'my-article-slug';
```

### Delete an Article

```sql
DELETE FROM articles WHERE slug = 'my-article-slug';
```

---

## 🖼️ Uploading Images (for Products)

### Using Supabase Storage (Recommended)

1. Go to **Supabase Dashboard** → **Storage**
2. Create a bucket called `product-images` (make it **Public**)
3. Upload your image files
4. Click on the uploaded file → **Copy URL**
5. Use that URL in the `image_url` field

**Example URL format:**
```
https://YOUR_PROJECT_ID.supabase.co/storage/v1/object/public/product-images/my-image.png
```

### Alternative Options

- **External URLs**: You can use images from any public URL (Unsplash, official product websites, etc.)
- **Public folder**: Add images to `/public/images/` in your code (requires redeployment)

---

## 🛍️ Products Table

### Table Structure
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | text | ✅ | Product name |
| `description` | text | ❌ | Product description |
| `category` | text | ✅ | Category (e.g., `AI Tools`, `Learning`) |
| `tags` | text[] | ❌ | Array of tags |
| `image_url` | text | ❌ | Product image URL |
| `price` | text | ❌ | Price display (e.g., `Free`, `$9.99/mo`) |
| `price_type` | text | ❌ | One of: `free`, `paid`, `subscription` |
| `badge` | text | ❌ | Badge text (e.g., `New`, `Popular`) |
| `is_affiliate` | boolean | ❌ | Mark as affiliate product |
| `cta_buttons` | jsonb | ❌ | Array of CTA buttons |
| `sort_order` | integer | ❌ | Display order (lower = first) |
| `is_published` | boolean | ❌ | Default: `true` |

### Add a Free Product

```sql
INSERT INTO products (title, description, category, tags, price, price_type, cta_buttons)
VALUES (
  'ChatGPT',
  'AI-powered conversational assistant for learning and productivity',
  'AI Tools',
  ARRAY['AI', 'Chatbot', 'Free'],
  'Free',
  'free',
  '[{"label": "Try Now", "href": "https://chat.openai.com", "variant": "primary"}]'::jsonb
);
```

### Add an Affiliate Product

```sql
INSERT INTO products (title, description, category, tags, price, price_type, badge, is_affiliate, cta_buttons, sort_order)
VALUES (
  'Coursera Plus',
  'Unlimited access to 7,000+ courses from top universities',
  'Learning Platforms',
  ARRAY['Courses', 'Education', 'Subscription'],
  '$59/month',
  'subscription',
  'Popular',
  true,
  '[
    {"label": "Start Free Trial", "href": "https://coursera.org/plus", "variant": "primary"},
    {"label": "Learn More", "href": "https://coursera.org/about", "variant": "secondary"}
  ]'::jsonb,
  1
);
```

### Add a Product with Multiple CTA Buttons

```sql
INSERT INTO products (title, description, category, price, cta_buttons)
VALUES (
  'VS Code',
  'Free and powerful code editor from Microsoft',
  'Developer Tools',
  'Free',
  '[
    {"label": "Download", "href": "https://code.visualstudio.com/download", "variant": "primary"},
    {"label": "Web Version", "href": "https://vscode.dev", "variant": "secondary"},
    {"label": "Docs", "href": "https://code.visualstudio.com/docs", "variant": "outline"}
  ]'::jsonb
);
```

### Update a Product

```sql
UPDATE products 
SET 
  price = '$49/month',
  badge = 'Sale',
  cta_buttons = '[{"label": "Get Discount", "href": "https://example.com/sale", "variant": "primary"}]'::jsonb
WHERE title = 'Product Name';
```

### Delete a Product

```sql
DELETE FROM products WHERE title = 'Product Name';
```

---

## 🔗 Related Content Table (Sidebar Suggestions)

### Table Structure
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | text | ✅ | Display title |
| `content_type` | text | ✅ | One of: `video`, `article`, `product`, `external` |
| `category` | text | ❌ | Category for filtering |
| `href` | text | ✅ | Link URL |
| `is_active` | boolean | ❌ | Default: `true` |
| `sort_order` | integer | ❌ | Display order |

### Add Related Content

```sql
-- Add a video recommendation
INSERT INTO related_content (title, content_type, category, href)
VALUES (
  'Watch: AI Explained in 10 Minutes',
  'video',
  'AI',
  '/videos?search=ai+explained'
);

-- Add an article recommendation
INSERT INTO related_content (title, content_type, category, href)
VALUES (
  'Read: Getting Started with Python',
  'article',
  'Programming',
  '/articles/python-basics'
);

-- Add an external link (e.g., YouTube channel)
INSERT INTO related_content (title, content_type, href, sort_order)
VALUES (
  'Subscribe to YouTube',
  'external',
  'https://www.youtube.com/@TecTamizha',
  10
);
```

### Update Related Content

```sql
UPDATE related_content 
SET href = 'https://new-url.com'
WHERE title = 'Subscribe to YouTube';
```

### Delete Related Content

```sql
DELETE FROM related_content WHERE title = 'Old Link Title';
```

---

## 🔍 Useful Queries

### View All Published Videos
```sql
SELECT * FROM videos WHERE is_published = true ORDER BY created_at DESC;
```

### View All Featured Articles
```sql
SELECT * FROM articles WHERE featured = true AND is_published = true;
```

### View All Affiliate Products
```sql
SELECT * FROM products WHERE is_affiliate = true AND is_published = true;
```

### Count Content by Category
```sql
SELECT category, COUNT(*) as count FROM videos GROUP BY category ORDER BY count DESC;
```

### Search Content
```sql
-- Search videos by title
SELECT * FROM videos WHERE title ILIKE '%python%';

-- Search articles by tag
SELECT * FROM articles WHERE 'AI' = ANY(tags);
```

---

## 🚢 Deployment

### Cloudflare Pages

1. Push code to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Output directory**: `out`
5. Add environment variables in Settings → Environment Variables
6. Deploy!

---

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── articles/           # Articles listing and detail pages
│   ├── videos/             # Videos page
│   ├── products/           # Products showcase page
│   ├── contact/            # Contact page
│   ├── privacy/            # Privacy policy
│   ├── terms/              # Terms of service
│   └── disclaimer/         # Disclaimer page
├── components/             # Reusable React components
├── lib/
│   ├── supabase/           # Supabase client and utilities
│   │   ├── client.ts       # Browser client
│   │   ├── server.ts       # Server client
│   │   ├── content.ts      # Content fetching functions
│   │   ├── types.ts        # TypeScript types
│   │   ├── content-schema.sql  # Database schema
│   │   └── content-seed.sql    # Sample data
│   └── articles.ts         # Article utilities
└── public/                 # Static assets
```

---

## 📞 Contact

- **Email**: ashokin2film@gmail.com
- **YouTube**: [@TecTamizha](https://www.youtube.com/@TecTamizha)

---

## 📄 License

This project is for educational purposes. © Tech Tamizha
