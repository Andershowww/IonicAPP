import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonToolbar
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FridgeItem from '../components/FridgeItem';

interface FridgeProduct {
  id: number;
  name: string;
  quantity: number;
  image: string;
}

const MyFridge: React.FC = () => {
    const history = useHistory();
  const [fridgeItems] = useState<FridgeProduct[]>([
    {
      id: 1,
      name: 'Banana',
      quantity: 4,
      image: '🍌'
    },
    {
      id: 2,
      name: 'Brócolis',
      quantity: 3,
      image: '🥦'
    },
    {
      id: 3,
      name: 'Laranja',
      quantity: 2,
      image: '🍊'
    },
    {
      id: 4,
      name: 'Cenoura',
      quantity: 1,
      image: '🥕'
    },
    {
      id: 5,
      name: 'Morango',
      quantity: 5,
      image: '🍓'
    },
    {
      id: 6,
      name: 'Tomate',
      quantity: 6,
      image: '🍅'
    }
  ]);

  const handleBuy = (itemId: number) => {
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
            >
            {/* Botão de voltar */}
            <IonIcon
            icon={arrowBack}
            style={{
                fontSize: '24px',
                color: '#1a1a1a',
                cursor: 'pointer'
            }}
            onClick={() => history.push('/home')}
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
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px'
          }}>
            {fridgeItems.map(item => (
              <FridgeItem
                key={item.id}
                id={item.id}
                name={item.name}
                quantity={item.quantity}
                image={item.image}
                onBuy={handleBuy}
              />
            ))}
          </div>
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
          <button style={{
            width: '100%',
            background: '#16a34a',
            color: '#fff',
            fontWeight: '600',
            padding: '16px',
            borderRadius: '16px',
            border: 'none',
            fontSize: '16px',
            cursor: 'pointer'
          }}>
            Minha Geladeira
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MyFridge;
