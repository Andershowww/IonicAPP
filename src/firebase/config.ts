// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { environment } from '../environments/environment';

/**
 * Configuração do Firebase para o projeto HortiAssistente
 * 
 * @description Contém todas as credenciais e configurações necessárias para inicializar
 * a conexão com os serviços do Firebase, incluindo Firestore Database.
 * 
 * @constant {Object} firebaseConfig
 * @property {string} apiKey - Chave da API do Firebase para autenticação
 * @property {string} authDomain - Domínio de autenticação do Firebase
 * @property {string} projectId - ID único do projeto Firebase
 * @property {string} storageBucket - Bucket de armazenamento do Firebase
 * @property {string} messagingSenderId - ID do remetente para mensagens
 * @property {string} appId - ID único da aplicação Firebase
 * @property {string} measurementId - ID para Analytics do Firebase
 * 
 * @example
 * ```typescript
 * // A configuração é automaticamente aplicada ao inicializar o Firebase
 * import { db } from './firebase/config';
 * ```
 * 
 * @since 1.0.0
 * @version 1.0.0
 */
const firebaseConfig = {
  apiKey: "AIzaSyDTlgDZtIW4yCqySuWZdGNgjEt8WmsEId4",
  authDomain: "hort-assistente-app.firebaseapp.com",
  projectId: "hort-assistente-app",
  storageBucket: "hort-assistente-app.firebasestorage.app",
  messagingSenderId: "620771814251",
  appId: "1:620771814251:web:4b4e091e9a107e6ac4ba2e",
  measurementId: "G-YF86N90XM3"
};

/**
 * Instância principal da aplicação Firebase
 * 
 * @description Representa a aplicação Firebase inicializada com todas as configurações.
 * Esta instância é usada como base para todos os serviços do Firebase.
 * 
 * @constant {FirebaseApp} app
 * @see {@link https://firebase.google.com/docs/reference/js/firebase.app.FirebaseApp FirebaseApp}
 * 
 * @example
 * ```typescript
 * import app from './firebase/config';
 * console.log('Firebase app:', app.name);
 * ```
 * 
 * @since 1.0.0
 * @version 1.0.0
 */
const app = initializeApp(firebaseConfig);

/**
 * Instância do Firestore Database
 * 
 * @description Representa a conexão com o banco de dados Firestore do Firebase.
 * Esta instância é usada para todas as operações de leitura e escrita no banco de dados.
 * 
 * @constant {Firestore} db
 * @see {@link https://firebase.google.com/docs/reference/js/firebase.firestore.Firestore Firestore}
 * 
 * @example
 * ```typescript
 * import { db } from './firebase/config';
 * import { collection, getDocs } from 'firebase/firestore';
 * 
 * // Buscar dados de uma coleção
 * const productsCol = collection(db, 'products');
 * const snapshot = await getDocs(productsCol);
 * ```
 * 
 * @since 1.0.0
 * @version 1.0.0
 */
export const db = getFirestore(app);

/**
 * Exporta a instância da aplicação Firebase como padrão
 * 
 * @description Permite importar a instância da aplicação Firebase usando import default.
 * 
 * @default
 * @type {FirebaseApp}
 * 
 * @example
 * ```typescript
 * import app from './firebase/config';
 * // ou
 * import { db } from './firebase/config';
 * ```
 * 
 * @since 1.0.0
 * @version 1.0.0
 */
export default app;