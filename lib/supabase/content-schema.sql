-- Content Management Schema for Tech Tamizha
-- Run this in your Supabase SQL Editor to create tables for videos, articles, and products

-- ============================================
-- VIDEOS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS videos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  youtube_id TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  level TEXT NOT NULL CHECK (level IN ('school', 'teens', 'college', 'it-pros')),
  thumbnail_url TEXT,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE videos ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published videos
CREATE POLICY "Anyone can view published videos" ON videos
  FOR SELECT USING (is_published = true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS videos_level_idx ON videos(level);
CREATE INDEX IF NOT EXISTS videos_category_idx ON videos(category);
CREATE INDEX IF NOT EXISTS videos_created_at_idx ON videos(created_at DESC);

-- ============================================
-- ARTICLES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT,
  content TEXT NOT NULL,
  author TEXT NOT NULL DEFAULT 'Tech Tamizha',
  category TEXT NOT NULL CHECK (category IN ('school', 'college', 'professional', 'teens', 'it-pros')),
  tags TEXT[] DEFAULT '{}',
  read_time TEXT DEFAULT '5 min read',
  featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  published_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published articles
CREATE POLICY "Anyone can view published articles" ON articles
  FOR SELECT USING (is_published = true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS articles_slug_idx ON articles(slug);
CREATE INDEX IF NOT EXISTS articles_category_idx ON articles(category);
CREATE INDEX IF NOT EXISTS articles_featured_idx ON articles(featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS articles_published_at_idx ON articles(published_at DESC);
CREATE INDEX IF NOT EXISTS articles_tags_idx ON articles USING GIN(tags);

-- ============================================
-- PRODUCTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  image_url TEXT,
  price TEXT DEFAULT 'Free',
  price_type TEXT DEFAULT 'free' CHECK (price_type IN ('free', 'paid', 'subscription')),
  badge TEXT,
  is_affiliate BOOLEAN DEFAULT false,
  cta_buttons JSONB DEFAULT '[]'::jsonb,
  sort_order INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published products
CREATE POLICY "Anyone can view published products" ON products
  FOR SELECT USING (is_published = true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS products_category_idx ON products(category);
CREATE INDEX IF NOT EXISTS products_is_affiliate_idx ON products(is_affiliate) WHERE is_affiliate = true;
CREATE INDEX IF NOT EXISTS products_sort_order_idx ON products(sort_order);
CREATE INDEX IF NOT EXISTS products_tags_idx ON products USING GIN(tags);

-- ============================================
-- RELATED CONTENT TABLE (for sidebar suggestions)
-- ============================================
CREATE TABLE IF NOT EXISTS related_content (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content_type TEXT NOT NULL CHECK (content_type IN ('video', 'article', 'product', 'external')),
  category TEXT,
  href TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE related_content ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Anyone can view active related content" ON related_content
  FOR SELECT USING (is_active = true);

-- ============================================
-- UPDATE TIMESTAMP TRIGGER
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply trigger to all content tables
DROP TRIGGER IF EXISTS update_videos_updated_at ON videos;
CREATE TRIGGER update_videos_updated_at BEFORE UPDATE ON videos
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_articles_updated_at ON articles;
CREATE TRIGGER update_articles_updated_at BEFORE UPDATE ON articles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_products_updated_at ON products;
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- GRANT PERMISSIONS (for authenticated users to manage content)
-- These are optional - only needed if you want authenticated users to add content
-- ============================================

-- Videos: Allow authenticated users to manage their content
CREATE POLICY "Authenticated users can insert videos" ON videos
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update videos" ON videos
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated users can delete videos" ON videos
  FOR DELETE TO authenticated USING (true);

-- Articles: Allow authenticated users to manage their content
CREATE POLICY "Authenticated users can insert articles" ON articles
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update articles" ON articles
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated users can delete articles" ON articles
  FOR DELETE TO authenticated USING (true);

-- Products: Allow authenticated users to manage their content
CREATE POLICY "Authenticated users can insert products" ON products
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update products" ON products
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated users can delete products" ON products
  FOR DELETE TO authenticated USING (true);

-- Related Content: Allow authenticated users to manage
CREATE POLICY "Authenticated users can manage related content" ON related_content
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

