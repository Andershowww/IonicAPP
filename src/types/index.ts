export interface Product {
    id: string;
    name: string;
    price: number;
    rating: number;
    reviews: number;
    image: string;
    category: string;
    description?: string;
    stock?: number;
    supplier?: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface CartItem {
    id: string;
    productId: string;
    product: Product;
    quantity: number;
    addedAt: Date;
  }
  
  export interface Order {
    id: string;
    userId: string;
    items: CartItem[];
    total: number;
    status: 'pending' | 'confirmed' | 'preparing' | 'delivered' | 'cancelled';
    deliveryAddress: string;
    createdAt: Date;
    updatedAt: Date;
  }