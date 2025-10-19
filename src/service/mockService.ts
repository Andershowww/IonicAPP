// src/services/mockService.ts

import { Product, CartItem, Order } from '../types/index';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Banana Prata Teste mockService',
    price: 3.99,
    rating: 4.8,
    reviews: 287,
    image: '🍌',
    category: 'Frutas',
    description: 'Banana prata fresca, ideal para consumo diário',
    stock: 50,
    supplier: 'Fazenda Verde',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: 'prod-2',
    name: 'Pimentão Colorido',
    price: 2.99,
    rating: 4.6,
    reviews: 156,
    image: '🫑',
    category: 'Legumes',
    description: 'Mix de pimentões vermelho, amarelo e verde',
    stock: 30,
    supplier: 'Horta Orgânica',
    createdAt: new Date('2024-01-16'),
    updatedAt: new Date('2024-01-21')
  },
  {
    id: 'prod-3',
    name: 'Laranja Lima',
    price: 3.99,
    rating: 4.7,
    reviews: 203,
    image: '🍊',
    category: 'Frutas',
    description: 'Laranja lima doce e suculenta',
    stock: 40,
    supplier: 'Citrus Brasil',
    createdAt: new Date('2024-01-17'),
    updatedAt: new Date('2024-01-22')
  },
  {
    id: 'prod-4',
    name: 'Leite Integral',
    price: 5.49,
    rating: 4.9,
    reviews: 320,
    image: '🥛',
    category: 'Laticínios',
    description: 'Leite integral fresco, 1L',
    stock: 25,
    supplier: 'Fazenda Leiteira',
    createdAt: new Date('2024-01-18'),
    updatedAt: new Date('2024-01-23')
  },
  {
    id: 'prod-5',
    name: 'Refrigerante Cola',
    price: 4.99,
    rating: 4.5,
    reviews: 150,
    image: '🥤',
    category: 'Bebidas',
    description: 'Refrigerante de cola, 2L VALIDA TESTE MOCK',
    stock: 20,
    supplier: 'Bebidas Brasil',
    createdAt: new Date('2024-01-19'),
    updatedAt: new Date('2024-01-24')
  }
];

export const MOCK_CART_ITEMS: CartItem[] = [
  {
    id: 'cart-1',
    productId: 'prod-1',
    product: MOCK_PRODUCTS[0],
    quantity: 2,
    addedAt: new Date('2024-01-25')
  },
  {
    id: 'cart-2',
    productId: 'prod-3',
    product: MOCK_PRODUCTS[2],
    quantity: 1,
    addedAt: new Date('2024-01-25')
  }
];

export const MOCK_ORDERS: Order[] = [
  {
    id: 'order-1',
    userId: 'user-123',
    items: MOCK_CART_ITEMS,
    total: 11.97,
    status: 'delivered',
    deliveryAddress: 'Rua das Flores, 123 – Centro',
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-21')
  }
];

// Função para obter dados mock baseado no ambiente
export const getMockData = () => {
  return {
    products: MOCK_PRODUCTS,
    cartItems: MOCK_CART_ITEMS,
    orders: MOCK_ORDERS
  };
};
