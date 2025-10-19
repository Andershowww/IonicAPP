import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonToolbar,
  IonButton,
  IonBadge,
  IonSpinner
} from '@ionic/react';
import { cart, chevronDown, location } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CategoryList from '../components/CategoryList';
import ProductCard from '../components/ProductCard';
import InventoryStatus from '../components/InventoryStatus';
import { Product } from '../types';
import { FirebaseService } from '../service/firebaseService';

const Home: React.FC = () => {
  const history = useHistory();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    const service = new FirebaseService();
    service.getProducts()
      .then(data => {
        setProducts(data);
      })
      .catch(err => {
        console.error('Erro ao carregar produtos:', err);
        setError('Não foi possível carregar os produtos.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (productId: string) => {
    setCartCount(prev => prev + 1);
    console.log('Produto adicionado ao carrinho:', productId);
  };

  const handleInventoryClick = () => {
    history.push('/myfridge');
  };

  const filteredProducts = selectedCategory === 'Todas' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <IonPage>
      {/* Header */}
      <IonHeader className="ion-no-border">
        <IonToolbar style={{ '--background': '#fff', '--padding-top': '8px', '--padding-bottom': '8px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 16px',
            height: '48px'
          }}>
            {/* Localização */}
            <IonButton fill="clear" style={{ display: 'flex', alignItems: 'center', padding: 0, margin: 0 }}>
              <IonIcon icon={location} style={{ fontSize: '20px', color: '#1a1a1a', marginRight: '6px' }} />
              <IonText style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a' }}>
                CASA
              </IonText>
              <IonIcon icon={chevronDown} style={{ fontSize: '16px', color: '#1a1a1a', marginLeft: '4px' }} />
            </IonButton>

            {/* Botão do carrinho */}
            <IonButton fill="clear" style={{ padding: 0, minWidth: 'auto' }} onClick={() => history.push('/cart')}>
              <IonIcon icon={cart} style={{ color: '#666' }} />
              {cartCount > 0 && <IonBadge color="danger">{cartCount}</IonBadge>}
            </IonButton>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen style={{ '--background': '#f9fafb' }}>
        {loading && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
            <IonSpinner name="crescent" />
          </div>
        )}

        {error && (
          <div style={{ padding: '16px', textAlign: 'center' }}>
            <IonText color="danger">{error}</IonText>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Status da Geladeira */}
            <InventoryStatus onClick={handleInventoryClick} />

            {/* Categorias */}
            <CategoryList 
              selectedCategory={selectedCategory} 
              onCategorySelect={handleCategorySelect} 
            />

            {/* Todos os produtos */}
            <div style={{ padding: '0 16px 100px 16px' }}>
              <IonText color="dark">
                <h2 style={{
                  marginBottom: '16px',
                  marginTop: '8px',
                  textAlign: 'left',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#1a1a1a',
                }}>
                  Todos os produtos
                </h2>
              </IonText>

              {/* Grid de produtos */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px'
              }}>
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    id={parseInt(product.id.replace('prod-', ''))}
                    name={product.name}
                    price={product.price}
                    rating={product.rating}
                    reviews={product.reviews}
                    image={product.image}
                    onAdd={() => handleAddToCart(product.id)}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
