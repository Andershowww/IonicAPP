import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonToolbar,
  IonSpinner
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FridgeItem from '../components/FridgeItem';
import { FirebaseService } from '../service/firebaseService';
import { Product } from '../types';

const MyFridge: React.FC = () => {
  const history = useHistory();
  const [fridgeItems, setFridgeItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const service = new FirebaseService();
    service.getFridgeItems()
      .then(data => setFridgeItems(data))
      .catch(() => setError('Não foi possível carregar os itens da geladeira.'))
      .finally(() => setLoading(false));
  }, []);

  const handleBuy = (itemId: string) => {
    history.push(`/product/${itemId}`);
    console.log('Comprar item:', itemId);
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar style={{ '--background': '#fff', '--padding-top': '8px', '--padding-bottom': '8px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 16px',
            height: '48px'
          }}>
            <button
              style={{
                background: 'transparent',
                border: 'none',
                padding: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={() => history.push("/tabs/home")}
            >
              <IonIcon
                icon={arrowBack}
                style={{
                  fontSize: '24px',
                  color: '#1a1a1a',
                  cursor: 'pointer'
                }}
              />
            </button>
            <IonText style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a' }}>
              Minha Geladeira
            </IonText>
            <div style={{ width: '40px' }}></div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen style={{ '--background': '#f9fafb' }}>
        <div style={{ padding: '16px', paddingBottom: '100px' }}>
          {loading && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
              <IonSpinner name="crescent" />
            </div>
          )}

          {error && (
            <div style={{ textAlign: 'center', color: 'red', padding: '16px' }}>
              <IonText color="danger">{error}</IonText>
            </div>
          )}

          {!loading && !error && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px'
            }}>
              {fridgeItems.map(item => (
            <FridgeItem
              key={item.id}
              id={typeof item.id === 'string' ? parseInt(item.id) || 0 : item.id}
              name={item.name}
              quantity={typeof item.stock === 'number' ? item.stock : 0}
              image={item.image}
              expiryDays={"expiryDays" in item && typeof item.expiryDays === "number" ? item.expiryDays : 0}
              onBuy={() => handleBuy(item.id)}
            />
              ))}
            </div>
          )}
        </div>
        <div style={{
          position: 'fixed',
          bottom: '0',
          left: '0',
          right: '0',
          background: '#fff',
          padding: '16px',
          borderTop: '1px solid #f3f4f6'
        }}>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MyFridge;
