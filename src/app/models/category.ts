export interface Category {
  id: number;
  title: string;
  slug: string;
}

export interface SubCategory {
  id: number;
  title: string;
  slug: string;
  category_id: number;
  image_url: string;
}
