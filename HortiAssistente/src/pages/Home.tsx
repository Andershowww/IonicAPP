import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonToolbar
} from '@ionic/react';
import { cart, chevronDown, location } from 'ionicons/icons';
import React from 'react';
import CategoryList from '../components/CategoryList';
import OfferBanner from '../components/OfferBanner';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const products = [
    { id: 1, name: 'Banana', price: 3.99, rating: 4.8, reviews: 287, image: '🍌' },
    { id: 2, name: 'Pepper', price: 2.99, rating: 4.8, reviews: 287, image: '🫑' },
    { id: 3, name: 'Orange', price: 3.99, rating: 4.8, reviews: 287, image: '🍊' },
    { id: 4, name: 'Lemon', price: 4.00, rating: 4.8, reviews: 287, image: '🍊' }
  ];

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar style={{ '--background': '#fff', '--padding-top': '8px', '--padding-bottom': '8px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IonIcon icon={location} style={{ fontSize: '20px', color: '#1a1a1a' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <IonText style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a' }}>
                  61 Hopper street..
                </IonText>
                <IonIcon icon={chevronDown} style={{ fontSize: '16px', color: '#1a1a1a' }} />
              </div>
            </div>
            <IonIcon icon={cart} style={{ fontSize: '24px', color: '#1a1a1a' }} />
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <OfferBanner />

        <CategoryList />

        <div style={{ padding: '16px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px'
          }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#1a1a1a',
              margin: 0
            }}>
              Fruits
            </h2>
            <span style={{
              fontSize: '14px',
              color: '#0ca201',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              See all
            </span>
          </div>

          <div style={{
            display: 'flex',
            gap: '16px',
            overflowX: 'auto',
            paddingBottom: '16px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                rating={product.rating}
                reviews={product.reviews}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
