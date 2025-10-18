// services/firebaseService.ts
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

export class FirebaseService {
  async getProducts() {
    const productsCol = collection(db, 'products');
    const snapshot = await getDocs(productsCol);
    const products = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return products;
  }
}
