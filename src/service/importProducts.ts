// importProducts.ts

import { initializeApp } from "firebase/app";
import { getFirestore, collection, writeBatch, doc } from "firebase/firestore";
import { environment } from "../environments/environment";
import { Product } from "../types/index";

// 1. Inicializar o Firebase
const firebaseConfig = environment.firebase;
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 2. Definir seus produtos mock (exemplo)
const products: Product[] = [
  {
    id: "prod-1",
    name: "Banana Prata",
    price: 3.99,
    rating: 4.8,
    reviews: 287,
    image: "🍌",
    category: "Frutas",
    description: "Banana prata fresca, ideal para consumo diário",
    stock: 50,
    supplier: "Fazenda Verde",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "prod-2",
    name: "Pimentão Colorido",
    price: 2.99,
    rating: 4.6,
    reviews: 156,
    image: "🫑",
    category: "Legumes",
    description: "Mix de pimentões vermelho, amarelo e verde",
    stock: 30,
    supplier: "Horta Orgânica",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "prod-3",
    name: "Laranja Lima",
    price: 3.99,
    rating: 4.7,
    reviews: 203,
    image: "🍊",
    category: "Frutas",
    description: "Laranja lima doce e suculenta",
    stock: 40,
    supplier: "Citrus Brasil",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "prod-4",
    name: "Leite Integral",
    price: 5.49,
    rating: 4.9,
    reviews: 320,
    image: "🥛",
    category: "Laticínios",
    description: "Leite integral fresco, 1L",
    stock: 25,
    supplier: "Fazenda Leiteira",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "prod-5",
    name: "Refrigerante Cola",
    price: 4.99,
    rating: 4.5,
    reviews: 150,
    image: "🥤",
    category: "Bebidas",
    description: "Refrigerante de cola, 2L",
    stock: 20,
    supplier: "Bebidas Brasil",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// 3. Função para importar os produtos
async function importProducts() {
  const batch = writeBatch(db);
  const colRef = collection(db, "products");

  products.forEach(prod => {
    const docRef = doc(colRef, prod.id);  // usar o id definido para cada produto
    batch.set(docRef, {
      name: prod.name,
      price: prod.price,
      rating: prod.rating,
      reviews: prod.reviews,
      image: prod.image,
      category: prod.category,
      description: prod.description,
      stock: prod.stock,
      supplier: prod.supplier,
      createdAt: prod.createdAt,
      updatedAt: prod.updatedAt
    });
  });

  await batch.commit();
  console.log(`Importação concluída: ${products.length} produtos adicionados.`);
}

importProducts().catch(err => {
  console.error("Erro na importação de produtos:", err);
});
