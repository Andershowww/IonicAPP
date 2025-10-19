// src/services/firebaseService.ts

import { environment } from '../environments/environment';
import { db } from '../firebase/config';
import { addDoc, collection, getDocs, serverTimestamp, Timestamp } from 'firebase/firestore';
import { Product } from '../types';
import { getMockData } from './mockService';

/**
 * Serviço para gerenciar operações com Firebase Firestore
 * 
 * @class FirebaseService
 * @description Classe responsável por todas as operações de leitura e escrita no Firebase
 * @example
 * ```typescript
 * const firebaseService = new FirebaseService();
 * const products = await firebaseService.getProducts();
 * ```
 */
export interface Pedido {
  clienteId: string;
  data: Timestamp; // timestamp do Firestore
  produtos: { name: string; quantity: number; price: number }[]; // array de itens
  status: string;
  valorTotal: number;
}
export class FirebaseService {
  /**
   * Busca todos os produtos disponíveis no Firebase Firestore
   * 
   * @async
   * @method getProducts
   * @description Recupera todos os produtos da coleção 'products' do Firestore.
   * Se mockData estiver habilitado no environment, retorna dados mock.
   * Em caso de erro, faz fallback para dados mock.
   * 
   * @returns {Promise<Product[]>} Array de produtos com todas as propriedades necessárias
   * 
   * @throws {Error} Quando há falha na conexão com o Firebase
   * 
   * @example
   * ```typescript
   * const service = new FirebaseService();
   * const products = await service.getProducts();
   * console.log(`Carregados ${products.length} produtos`);
   * ```
   * 
   * @since 1.0.0
   * @version 1.0.0
   */
  async getProducts(): Promise<Product[]> {
    if (environment.features.mockData) {
      return getMockData().products;
    }

    try {
      console.log('Carregando produtos do Firebase...');
      const productsCol = collection(db, 'products');
      const snapshot = await getDocs(productsCol);

      const products = snapshot.docs.map(doc => {
        const data = doc.data();
        console.log('Documento:', doc.id, data);

        return {
          id: doc.id,
          name: data.name || '',
          price: parseFloat(data.price) || 0,
          rating: parseFloat(data.rating) || 0,
          reviews: typeof data.reviews === 'string' ? parseInt(data.reviews) || 0 : data.reviews || 0,
          image: data.image || '📦',
          category: data.category || 'Outros',
          description: data.description || '',
          stock: parseInt(data.stock) || 0,
          supplier: data.supplier || '',
          createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : new Date(),
          updatedAt: data.updatedAt?.toDate ? data.updatedAt.toDate() : new Date()
        } as Product;
      });

      console.log('Produtos carregados do Firebase:', products.length);
      return products;
    } catch (error) {
      console.error('Erro ao carregar produtos do Firebase:', error);
      // Fallback para dados mock em caso de erro
      console.log('Usando dados mock como fallback...');
      return getMockData().products;
    }
  }

  /**
   * Adiciona um produto ao carrinho do usuário
   * 
   * @async
   * @method addToCart
   * @description Adiciona um produto específico ao carrinho de compras do usuário.
   * Atualmente implementado como placeholder - deve ser expandido para operações reais no Firebase.
   * 
   * @param {string} userId - ID único do usuário
   * @param {string} productId - ID único do produto a ser adicionado
   * @param {number} quantity - Quantidade do produto a ser adicionada
   * 
   * @returns {Promise<void>} Promise que resolve quando o produto é adicionado
   * 
   * @example
   * ```typescript
   * const service = new FirebaseService();
   * await service.addToCart('user123', 'prod456', 2);
   * ```
   * 
   * @since 1.0.0
   * @version 1.0.0
   */
  async addToCart(userId: string, productId: string, quantity: number): Promise<void> {
    console.log('Adicionando ao carrinho:', { userId, productId, quantity });
  }

  /**
   * Recupera o carrinho de compras do usuário
   * 
   * @async
   * @method getCart
   * @description Busca todos os itens no carrinho de compras de um usuário específico.
   * Atualmente implementado como placeholder - deve ser expandido para operações reais no Firebase.
   * 
   * @param {string} userId - ID único do usuário
   * 
   * @returns {Promise<any[]>} Array com os itens do carrinho do usuário
   * 
   * @example
   * ```typescript
   * const service = new FirebaseService();
   * const cartItems = await service.getCart('user123');
   * console.log(`Usuário tem ${cartItems.length} itens no carrinho`);
   * ```
   * 
   * @since 1.0.0
   * @version 1.0.0
   */
  async getCart(userId: string): Promise<any[]> {
    console.log('Buscando carrinho do usuário:', userId);
    return [];
  }

  /**
   * Minha Geladeira
   * 
   * @async
   * @method getFridgeItems
   * @description Busca todos os itens que contém na geladeira
   * 
   * @param {string} userId - ID único do usuário
   * 
   * @returns {Promise<any[]>}
   * 
   * @example
   * ```typescript
   * const service = new FirebaseService();
   * const cartItems = await service.getCart('user123');
   * console.log(``);
   * ```
   * 
   */
  async getFridgeItems(): Promise<any[]> {
    try {
      const fridgeCol = collection(db, 'geladeira');
      const snapshot = await getDocs(fridgeCol);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Erro ao carregar itens da geladeira:', error);
      return [];
    }
  }


  async createOrder(orderData: Omit<Pedido, "data">): Promise<void> {
    try {
      await addDoc(collection(db, "pedidos"), {
        ...orderData,
        createdAt: serverTimestamp(), 
      });

    } catch (error) {
      console.error("❌ Erro ao criar pedido:", error);
      throw error;
    }
  }
  async getOrders() {
    const querySnapshot = await getDocs(collection(db, "pedidos"));
    const orders = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return orders;
  }
}
