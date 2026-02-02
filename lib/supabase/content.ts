import { createClient } from "./client";
import type {
  Video,
  Article,
  ArticlePreview,
  Product,
  RelatedContent,
  AudienceLevel,
} from "./types";

// ============================================
// VIDEO FUNCTIONS
// ============================================

export async function getVideos(options?: {
  level?: AudienceLevel;
  category?: string;
  search?: string;
  limit?: number;
}): Promise<Video[]> {
  const supabase = createClient();
  let query = supabase
    .from("videos")
    .select("*")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (options?.level) {
    query = query.eq("level", options.level);
  }

  if (options?.category) {
    query = query.eq("category", options.category);
  }

  if (options?.search) {
    query = query.or(
      `title.ilike.%${options.search}%,description.ilike.%${options.search}%,category.ilike.%${options.search}%`
    );
  }

  if (options?.limit) {
    query = query.limit(options.limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching videos:", error);
    return [];
  }

  return data || [];
}

export async function getVideoByYoutubeId(
  youtubeId: string
): Promise<Video | null> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("videos")
    .select("*")
    .eq("youtube_id", youtubeId)
    .eq("is_published", true)
    .single();

  if (error) {
    console.error("Error fetching video:", error);
    return null;
  }

  return data;
}

export async function getVideoCategories(): Promise<string[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("videos")
    .select("category")
    .eq("is_published", true);

  if (error) {
    console.error("Error fetching video categories:", error);
    return [];
  }

  if (!data || !Array.isArray(data)) {
    return [];
  }

  const categories = new Set(data.map((v: { category: string }) => v.category));
  return Array.from(categories).sort();
}

// ============================================
// ARTICLE FUNCTIONS
// ============================================

export async function getArticles(options?: {
  category?: string;
  tag?: string;
  search?: string;
  featured?: boolean;
  limit?: number;
}): Promise<ArticlePreview[]> {
  const supabase = createClient();
  let query = supabase
    .from("articles")
    .select(
      "id, slug, title, description, author, category, tags, read_time, featured, published_at"
    )
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  if (options?.category) {
    query = query.eq("category", options.category);
  }

  if (options?.tag) {
    query = query.contains("tags", [options.tag]);
  }

  if (options?.search) {
    query = query.or(
      `title.ilike.%${options.search}%,description.ilike.%${options.search}%`
    );
  }

  if (options?.featured !== undefined) {
    query = query.eq("featured", options.featured);
  }

  if (options?.limit) {
    query = query.limit(options.limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching articles:", error);
    return [];
  }

  return data || [];
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error) {
    console.error("Error fetching article:", error);
    return null;
  }

  return data;
}

export async function getAllArticleSlugs(): Promise<string[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("articles")
    .select("slug")
    .eq("is_published", true);

  if (error) {
    console.error("Error fetching article slugs:", error);
    return [];
  }

  if (!data || !Array.isArray(data)) {
    return [];
  }

  return data.map((a: { slug: string }) => a.slug);
}

export async function getArticleTags(): Promise<string[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("articles")
    .select("tags")
    .eq("is_published", true);

  if (error) {
    console.error("Error fetching article tags:", error);
    return [];
  }

  if (!data || !Array.isArray(data)) {
    return [];
  }

  const tagsSet = new Set<string>();
  data.forEach((article: { tags?: string[] }) => {
    article.tags?.forEach((tag: string) => tagsSet.add(tag));
  });

  return Array.from(tagsSet).sort();
}

export async function getArticleCategories(): Promise<string[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("articles")
    .select("category")
    .eq("is_published", true);

  if (error) {
    console.error("Error fetching article categories:", error);
    return [];
  }

  if (!data || !Array.isArray(data)) {
    return [];
  }

  const categories = new Set(data.map((a: { category: string }) => a.category));
  return Array.from(categories).sort();
}

// ============================================
// PRODUCT FUNCTIONS
// ============================================

export async function getProducts(options?: {
  category?: string;
  isAffiliate?: boolean;
  search?: string;
  limit?: number;
}): Promise<Product[]> {
  const supabase = createClient();
  let query = supabase
    .from("products")
    .select("*")
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (options?.category) {
    query = query.eq("category", options.category);
  }

  if (options?.isAffiliate !== undefined) {
    query = query.eq("is_affiliate", options.isAffiliate);
  }

  if (options?.search) {
    query = query.or(
      `title.ilike.%${options.search}%,description.ilike.%${options.search}%`
    );
  }

  if (options?.limit) {
    query = query.limit(options.limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }

  if (!data || !Array.isArray(data)) {
    return [];
  }

  // Parse cta_buttons from JSONB
  return data.map((product: Product) => ({
    ...product,
    cta_buttons: product.cta_buttons || [],
  }));
}

export async function getProductById(id: string): Promise<Product | null> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .eq("is_published", true)
    .single();

  if (error) {
    console.error("Error fetching product:", error);
    return null;
  }

  return {
    ...data,
    cta_buttons: data.cta_buttons || [],
  };
}

export async function getProductCategories(): Promise<string[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("products")
    .select("category")
    .eq("is_published", true);

  if (error) {
    console.error("Error fetching product categories:", error);
    return [];
  }

  if (!data || !Array.isArray(data)) {
    return [];
  }

  const categories = new Set(data.map((p: { category: string }) => p.category));
  return Array.from(categories).sort();
}

// ============================================
// RELATED CONTENT FUNCTIONS
// ============================================

export async function getRelatedContent(options?: {
  contentType?: string;
  limit?: number;
}): Promise<RelatedContent[]> {
  const supabase = createClient();
  let query = supabase
    .from("related_content")
    .select("*")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (options?.contentType) {
    query = query.eq("content_type", options.contentType);
  }

  if (options?.limit) {
    query = query.limit(options.limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching related content:", error);
    return [];
  }

  return data || [];
}

