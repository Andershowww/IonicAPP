import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonToolbar
} from '@ionic/react';
import { arrowBack, cart, chevronDown, location } from 'ionicons/icons';
import React, { useState } from 'react';
import CartItem from '../components/CartItem';
import { useHistory } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const history = useHistory();
  const [cartItems, setCartItems] = useState<Product[]>([
    {
      id: 1,
      name: 'Cacho de Banana',
      price: 3.45,
      image: '🍌',
      quantity: 1
    },
    {
      id: 2,
      name: 'Morango',
      price: 3.45,
      image: '🍓',
      quantity: 1
    },
    {
      id: 3,
      name: 'Cenoura',
      price: 3.45,
      image: '🥕',
      quantity: 2
    },
    {
      id: 4,
      name: 'Tomate',
      price: 3.60,
      image: '🍅',
      quantity: 1
    }
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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

            {/* Botão de voltar */}
            <IonIcon
                icon={arrowBack}
                style={{ fontSize: '24px', color: '#1a1a1a', cursor: 'pointer' }}
                onClick={() => history.push('/home')} // <-- volta para a home
            />

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IonIcon icon={location} style={{ fontSize: '20px', color: '#1a1a1a' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <IonText style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a' }}>
                  Meu Endereço
                </IonText>
                <IonIcon icon={chevronDown} style={{ fontSize: '16px', color: '#1a1a1a' }} />
              </div>
            </div>
            <IonIcon icon={cart} style={{ fontSize: '24px', color: '#1a1a1a' }} />
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* Banner */}
        <div style={{
          margin: '16px',
          borderRadius: '16px',
          background: 'linear-gradient(to right, #86efac, #bbf7d0)',
          padding: '16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#166534'
          }}>
            Minha Sacola
          </div>
          {/* <div style={{ display: 'flex', gap: '8px' }}> */}
            {/* <div style={{
              width: '48px',
              height: '48px',
              background: '#fff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>
              🍌
            </div> */}
            {/* <div style={{
              width: '48px',
              height: '48px',
              background: '#fff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>
              🥗
            </div> */}
          {/* </div> */}
        </div>

        {/* Cart Items */}
        <div style={{ padding: '0 16px' }}>
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
            />
          ))}
        </div>

        {/* Bottom Action */}
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontSize: '16px',
            cursor: 'pointer'
          }}>
            Ir para Pagamento (R${totalAmount.toFixed(2)})
            <IonIcon icon={cart} style={{ fontSize: '20px' }} />
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Cart;
