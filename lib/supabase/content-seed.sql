-- Seed Data for Tech Tamizha Content
-- Run this after creating the tables to insert initial data

-- ============================================
-- SEED VIDEOS
-- ============================================
INSERT INTO videos (youtube_id, title, description, category, level) VALUES
  ('7Lf100R7Nag', 'Don''t Get Hacked! Cyber Security Explained in 5 Minutes', 'Ever wondered how a single click can cost you ₹5000? 💸 In this video, we break down Cyber Security using a fun and easy-to-understand whiteboard story!', 'Security', 'school'),
  ('ARH-qNQ9Wwc', 'Physical AI & Humanoid Robots Explained', 'The Robots are here! We have seen AI write poems and code, but what happens when AI gets hands and legs?', 'AI', 'teens'),
  ('UcvXZ9DNcn4', 'Agentic AI & MAS Concept!', 'We go beyond simple chatbots to explore the world of Multiagent Systems (MAS) and Agentic AI.', 'AI', 'college'),
  ('NvaIj7ccf2Y', 'What are Domain-Specific Language Models (DSLMs)?', 'Why are Domain-Specific Language Models (DSLMs) becoming the secret weapon for engineers over general AI models?', 'AI', 'it-pros'),
  ('1Rs2ND1ryYc', 'CSS Flexbox & Grid Layout', 'Build responsive layouts with CSS Flexbox and Grid. Understand alignment, distribution, and responsive design patterns.', 'CSS', 'school'),
  ('RGOj5yH7evk', 'Node.js REST API Tutorial', 'Build a complete REST API with Node.js and Express. Covers routing, middleware, authentication, and database integration.', 'Node.js', 'college'),
  ('Oe421EPjeBE', 'Next.js 14 Complete Guide', 'Learn Next.js 14 with App Router, Server Components, and all the latest features for building modern web applications.', 'Next.js', 'it-pros'),
  ('ZBCUegTZF7M', 'TypeScript Fundamentals', 'Get started with TypeScript. Learn types, interfaces, generics, and how to integrate TypeScript with React projects.', 'TypeScript', 'teens')
ON CONFLICT (youtube_id) DO NOTHING;

-- ============================================
-- SEED PRODUCTS
-- ============================================
INSERT INTO products (title, description, category, tags, image_url, price, price_type, badge, is_affiliate, cta_buttons, sort_order) VALUES
  (
    'AI Whiteboard Simulator App',
    'Practice AI concepts with our interactive whiteboard simulator. Draw neural networks, visualize algorithms, and learn by doing - just like in our YouTube videos!',
    'iOS App',
    ARRAY['AI', 'Education', 'Interactive'],
    '/images/products/ai-whiteboard.jpg',
    'Free',
    'free',
    'New',
    false,
    '[{"label": "App Store", "href": "https://apps.apple.com/app/ai-whiteboard", "type": "primary", "icon": "appstore"}, {"label": "Play Store", "href": "https://play.google.com/store/apps/details?id=com.techtamizha.aiwhiteboard", "type": "secondary", "icon": "playstore"}]'::jsonb,
    1
  ),
  (
    'Quantum Computing Cheat Sheet PDF',
    'A beautifully designed PDF covering quantum computing basics, qubits, gates, and algorithms. Perfect companion for students learning quantum concepts.',
    'Downloadable PDF',
    ARRAY['Quantum', 'PDF', 'Students'],
    '/images/products/quantum-pdf.jpg',
    '₹99',
    'paid',
    NULL,
    false,
    '[{"label": "Download PDF", "href": "https://gumroad.com/techtamizha/quantum-cheatsheet", "type": "primary", "icon": "download"}]'::jsonb,
    2
  ),
  (
    'My Custom AI Prompt Toolkit',
    '500+ carefully crafted prompts for ChatGPT, Claude, and other AI assistants. Boost your productivity with prompts for coding, learning, and content creation.',
    'AI Product',
    ARRAY['ChatGPT', 'Prompts', 'Productivity'],
    '/images/products/prompt-toolkit.jpg',
    '₹299',
    'paid',
    'Popular',
    false,
    '[{"label": "Buy Now", "href": "https://gumroad.com/techtamizha/prompt-toolkit", "type": "primary", "icon": "external"}, {"label": "Preview", "href": "/products/prompt-toolkit-preview", "type": "secondary", "icon": "external"}]'::jsonb,
    3
  ),
  (
    'Grok API Playground',
    'Explore and experiment with xAI''s Grok API. Build conversational AI apps, test prompts, and learn how modern AI APIs work with this interactive playground.',
    'Web Tool',
    ARRAY['Grok', 'API', 'AI'],
    '/images/products/grok-playground.jpg',
    'Free',
    'free',
    NULL,
    true,
    '[{"label": "Launch Web App", "href": "https://console.x.ai/", "type": "primary", "icon": "launch"}]'::jsonb,
    4
  ),
  (
    'Web Dev Starter Kit',
    'Complete starter kit for web development beginners. Includes HTML/CSS templates, JavaScript exercises, and project ideas explained in our video tutorials.',
    'Resource',
    ARRAY['Web Dev', 'Beginner', 'Templates'],
    '/images/products/webdev-kit.jpg',
    'Free',
    'free',
    NULL,
    false,
    '[{"label": "Download Free", "href": "https://github.com/techtamizha/webdev-starter-kit", "type": "primary", "icon": "download"}]'::jsonb,
    5
  ),
  (
    'ChatGPT Plus Subscription',
    'Recommended: Get access to GPT-4, DALL-E, and advanced features. Essential tool for students and developers learning AI - I use it daily for content creation!',
    'Affiliate',
    ARRAY['ChatGPT', 'OpenAI', 'Subscription'],
    '/images/products/chatgpt-plus.jpg',
    '$20',
    'subscription',
    'Recommended',
    true,
    '[{"label": "Subscribe Now", "href": "https://chat.openai.com/", "type": "primary", "icon": "external"}]'::jsonb,
    6
  )
ON CONFLICT DO NOTHING;

-- ============================================
-- SEED ARTICLES
-- ============================================
INSERT INTO articles (slug, title, description, content, author, category, tags, read_time, featured) VALUES
  (
    'ai-basics-for-beginners',
    'AI Basics for Beginners',
    'A comprehensive introduction to artificial intelligence for students and beginners.',
    E'# AI Basics for Beginners\n\nArtificial Intelligence (AI) is transforming the world around us. From voice assistants like Alexa to recommendation systems on Netflix, AI is everywhere.\n\n## What is AI?\n\nArtificial Intelligence refers to computer systems that can perform tasks that typically require human intelligence. These tasks include:\n\n- Learning from experience\n- Understanding natural language\n- Recognizing patterns\n- Making decisions\n\n## Types of AI\n\n### 1. Narrow AI (Weak AI)\nThis is AI designed for specific tasks, like playing chess or recognizing faces.\n\n### 2. General AI (Strong AI)\nThis theoretical AI would have human-like intelligence across all domains.\n\n### 3. Super AI\nA hypothetical AI that surpasses human intelligence in all aspects.\n\n## Getting Started with AI\n\nTo start learning AI, you should:\n\n1. Learn Python programming\n2. Understand basic mathematics (linear algebra, statistics)\n3. Study machine learning fundamentals\n4. Practice with real datasets\n\n## Conclusion\n\nAI is an exciting field with endless possibilities. Start your journey today!',
    'Tech Tamizha',
    'school',
    ARRAY['AI', 'Machine Learning', 'Beginners', 'Technology'],
    '5 min read',
    true
  ),
  (
    'quantum-computing-intro',
    'Quantum Computing Introduction',
    'Explore the fascinating world of quantum computing and understand its revolutionary potential.',
    E'# Quantum Computing Introduction\n\nQuantum computing is the next frontier in computational technology, promising to solve problems that are impossible for classical computers.\n\n## What is Quantum Computing?\n\nUnlike classical computers that use bits (0 or 1), quantum computers use **qubits** which can exist in multiple states simultaneously thanks to quantum superposition.\n\n## Key Concepts\n\n### Superposition\nA qubit can be both 0 and 1 at the same time, allowing quantum computers to process multiple calculations simultaneously.\n\n### Entanglement\nQubits can be "entangled," meaning the state of one qubit instantly affects its entangled partner, regardless of distance.\n\n### Interference\nQuantum algorithms use interference to amplify correct answers and cancel out wrong ones.\n\n## Applications\n\n- Drug discovery\n- Cryptography\n- Financial modeling\n- Climate simulation\n- Optimization problems\n\n## The Future\n\nWhile we''re still in the early stages, quantum computing has the potential to revolutionize many industries. Companies like IBM, Google, and Microsoft are racing to build practical quantum computers.',
    'Tech Tamizha',
    'college',
    ARRAY['Quantum', 'Computing', 'Physics', 'Advanced'],
    '7 min read',
    true
  ),
  (
    'web-development-roadmap-2024',
    'Web Development Roadmap 2024',
    'A complete guide to becoming a web developer in 2024 with the latest technologies.',
    E'# Web Development Roadmap 2024\n\nWhether you''re starting fresh or looking to update your skills, this roadmap will guide you through becoming a modern web developer.\n\n## Frontend Development\n\n### 1. HTML & CSS\n- Semantic HTML5\n- CSS Grid & Flexbox\n- Responsive Design\n- CSS Variables\n\n### 2. JavaScript\n- ES6+ features\n- DOM manipulation\n- Async programming\n- APIs & Fetch\n\n### 3. Frontend Frameworks\n- React.js (most popular)\n- Vue.js (easier learning curve)\n- Next.js (React framework)\n\n## Backend Development\n\n### 1. Node.js\n- Express.js\n- REST APIs\n- Authentication (JWT)\n\n### 2. Databases\n- PostgreSQL (SQL)\n- MongoDB (NoSQL)\n- Supabase (BaaS)\n\n## DevOps & Deployment\n\n- Git & GitHub\n- Vercel / Netlify\n- Docker basics\n- CI/CD pipelines\n\n## Tips for Success\n\n1. Build projects, not just tutorials\n2. Contribute to open source\n3. Join developer communities\n4. Keep learning - tech evolves fast!',
    'Tech Tamizha',
    'professional',
    ARRAY['Web Development', 'JavaScript', 'React', 'Career'],
    '10 min read',
    false
  ),
  (
    'cybersecurity-essentials',
    'Cybersecurity Essentials for Everyone',
    'Learn the fundamental concepts of cybersecurity to protect yourself online.',
    E'# Cybersecurity Essentials for Everyone\n\nIn today''s digital world, understanding cybersecurity is not just for IT professionals - it''s essential for everyone.\n\n## Why Cybersecurity Matters\n\nEvery year, millions of people fall victim to cyber attacks, losing money, personal data, and privacy. Understanding basic security can protect you and your family.\n\n## Common Threats\n\n### Phishing\nFake emails or websites designed to steal your information.\n\n**How to spot:**\n- Check sender email addresses\n- Look for spelling errors\n- Don''t click suspicious links\n\n### Malware\nMalicious software including viruses, trojans, and ransomware.\n\n**Protection:**\n- Keep software updated\n- Use antivirus software\n- Don''t download from untrusted sources\n\n### Password Attacks\nAttempts to guess or steal your passwords.\n\n**Prevention:**\n- Use strong, unique passwords\n- Enable two-factor authentication\n- Use a password manager\n\n## Best Practices\n\n1. Keep software updated\n2. Use strong passwords\n3. Enable 2FA everywhere\n4. Be careful what you share online\n5. Back up your data regularly',
    'Tech Tamizha',
    'school',
    ARRAY['Security', 'Cyber Safety', 'Privacy', 'Beginners'],
    '6 min read',
    false
  )
ON CONFLICT (slug) DO NOTHING;

-- ============================================
-- SEED RELATED CONTENT
-- ============================================
INSERT INTO related_content (title, content_type, category, href, sort_order) VALUES
  ('AI Basics for Beginners', 'article', 'AI', '/articles/ai-basics-for-beginners', 1),
  ('Web Development Roadmap 2024', 'article', 'Web Dev', '/articles/web-development-roadmap-2024', 2),
  ('Check out our Products', 'product', 'General', '/products', 3),
  ('Subscribe to YouTube', 'external', 'General', 'https://www.youtube.com/@TecTamizha', 4)
ON CONFLICT DO NOTHING;

