type Store = {
  id: number
  store_logo: string
  store_name: string
  store_description: string
  store_thumbnail: string
  store_email: string
  store_phone: string
  store_address: string
  store_instagram: string
  store_facebook: string
  store_twitter: string
  store_whatsapp: string
  store_status: number
  store_is_featured: number
  store_view_count: number
  created_at: string
  updated_at: string
  products_total: number
  user: User
}

type Catalog = {
  id: nunmber
  catalog_name: string
  catalog_image: string
  catalog_type: string
  store_id: number
  created_at: string
  updated_at: string
  categories: Category[]
}

type Category = {
  id: number
  category_name: string
  catalog_id: number
  created_at: string
  updated_at: string
  products: Product[]
  catalog: Catalog
}

type Product = {
  id: number
  product_colors: string
  product_description: string
  product_details: string
  product_name: string
  product_price: string
  product_reference: string
  product_slug: string
  product_status: number
  images: Image[]
  category: Category
  category_id: number
  created_at: string
  updated_at: string
}

type Image = {
  id: number
  product_image: string
}
