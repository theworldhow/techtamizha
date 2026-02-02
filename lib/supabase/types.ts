// Supabase Database Types for Content Management

export type AudienceLevel = "school" | "teens" | "college" | "it-pros";
export type ArticleCategory = "school" | "college" | "professional" | "teens" | "it-pros";
export type PriceType = "free" | "paid" | "subscription";
export type ContentType = "video" | "article" | "product" | "external";

// ============================================
// VIDEO TYPES
// ============================================
export interface Video {
  id: string;
  youtube_id: string;
  title: string;
  description: string | null;
  category: string;
  level: AudienceLevel;
  thumbnail_url: string | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface VideoInsert {
  youtube_id: string;
  title: string;
  description?: string;
  category: string;
  level: AudienceLevel;
  thumbnail_url?: string;
  is_published?: boolean;
}

export interface VideoUpdate {
  youtube_id?: string;
  title?: string;
  description?: string;
  category?: string;
  level?: AudienceLevel;
  thumbnail_url?: string;
  is_published?: boolean;
}

// ============================================
// ARTICLE TYPES
// ============================================
export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  content: string;
  author: string;
  category: ArticleCategory;
  tags: string[];
  read_time: string;
  featured: boolean;
  is_published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface ArticlePreview {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  author: string;
  category: ArticleCategory;
  tags: string[];
  read_time: string;
  featured: boolean;
  published_at: string;
}

export interface ArticleInsert {
  slug: string;
  title: string;
  content: string;
  description?: string;
  author?: string;
  category: ArticleCategory;
  tags?: string[];
  read_time?: string;
  featured?: boolean;
  is_published?: boolean;
}

export interface ArticleUpdate {
  slug?: string;
  title?: string;
  content?: string;
  description?: string;
  author?: string;
  category?: ArticleCategory;
  tags?: string[];
  read_time?: string;
  featured?: boolean;
  is_published?: boolean;
}

// ============================================
// PRODUCT TYPES
// ============================================
export interface ProductCTA {
  label: string;
  href: string;
  type: "primary" | "secondary";
  icon?: "appstore" | "playstore" | "download" | "external" | "launch";
}

export interface Product {
  id: string;
  title: string;
  description: string | null;
  category: string;
  tags: string[];
  image_url: string | null;
  price: string;
  price_type: PriceType;
  badge: string | null;
  is_affiliate: boolean;
  cta_buttons: ProductCTA[];
  sort_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProductInsert {
  title: string;
  description?: string;
  category: string;
  tags?: string[];
  image_url?: string;
  price?: string;
  price_type?: PriceType;
  badge?: string;
  is_affiliate?: boolean;
  cta_buttons?: ProductCTA[];
  sort_order?: number;
  is_published?: boolean;
}

export interface ProductUpdate {
  title?: string;
  description?: string;
  category?: string;
  tags?: string[];
  image_url?: string;
  price?: string;
  price_type?: PriceType;
  badge?: string;
  is_affiliate?: boolean;
  cta_buttons?: ProductCTA[];
  sort_order?: number;
  is_published?: boolean;
}

// ============================================
// RELATED CONTENT TYPES
// ============================================
export interface RelatedContent {
  id: string;
  title: string;
  content_type: ContentType;
  category: string | null;
  href: string;
  is_active: boolean;
  sort_order: number;
  created_at: string;
}

// ============================================
// DATABASE TYPE (for Supabase client)
// ============================================
export interface Database {
  public: {
    Tables: {
      videos: {
        Row: Video;
        Insert: VideoInsert;
        Update: VideoUpdate;
      };
      articles: {
        Row: Article;
        Insert: ArticleInsert;
        Update: ArticleUpdate;
      };
      products: {
        Row: Product;
        Insert: ProductInsert;
        Update: ProductUpdate;
      };
      related_content: {
        Row: RelatedContent;
        Insert: Omit<RelatedContent, "id" | "created_at">;
        Update: Partial<Omit<RelatedContent, "id" | "created_at">>;
      };
    };
  };
}
