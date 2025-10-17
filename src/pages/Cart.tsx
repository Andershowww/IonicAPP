import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonToolbar,
  IonButton,
  IonBadge,
  IonModal,
  IonTitle,
  IonButtons,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/react';
import { arrowBack, cart, chevronDown, location } from 'ionicons/icons';
import React, { useState } from 'react';
import CartItem from '../components/CartItem';
import { useHistory } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  fornecedor: string;
  image: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const [selectedAddress, setSelectedAddress] = useState('Casa');
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const addresses = [
    'Casa',
    'Casa 2',
  ];

  const handleSelectAddress = (address: string) => {
    setSelectedAddress(address);
    setShowModal(false);
  };
  
  const [cartItems, setCartItems] = useState<Product[]>([
    {
      id: 1,
      name: 'Cacho de Banana',
      price: 3.45,
      fornecedor: 'Fornecedor A',
      image: '🍌',
      quantity: 1
    },
    {
      id: 2,
      name: 'Morango',
      price: 3.45,
      fornecedor: 'Fornecedor B',
      image: '🍓',
      quantity: 1
    },
    {
      id: 3,
      name: 'Cenoura',
      price: 3.45,
      fornecedor: 'Fornecedor C',
      image: '🥕',
      quantity: 2
    },
    {
      id: 4,
      name: 'Tomate',
      price: 3.60,
      fornecedor: 'Fornecedor D',
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
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0 16px',
                  position: 'relative', // necessário para posicionar o botão de voltar
                  height: '48px'
                }}>

            {/* Botão de voltar */}
            <IonIcon
                icon={arrowBack}
                style={{
                  fontSize: '24px',
                  color: '#1a1a1a',
                  cursor: 'pointer',
                  position: 'absolute',
                  left: '16px', // fixa na borda esquerda
                }}
                onClick={() => history.push('/home')} // <-- volta para a home
            />

            <IonButton fill="clear" style={{ display: 'flex', alignItems: 'center', padding: 0, margin: 0,}} onClick={() => setShowModal(true)}>
                <IonIcon icon={location} style={{ fontSize: '20px', color: '#1a1a1a', marginRight: '6px' }} />
                <IonText style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a' }}>
                  {selectedAddress}
                </IonText>
                <IonIcon icon={chevronDown} style={{ fontSize: '16px', color: '#1a1a1a', marginLeft: '4px' }} />
              </IonButton>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
          <IonHeader>
            <IonToolbar style={{ '--background': '#fff' }}>
              <IonTitle>Selecione um endereço</IonTitle>
              <IonButtons slot="end" >
                <IonButton  onClick={() => setShowModal(false)}>Fechar</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding" style={{ '--background': '#fff' }}>
            <IonList color="light">
              {addresses.map((address, idx) => (
                <IonItem className="ion-padding p-0" lines="full" style={{ '--background': '#fff' }} key={idx} button onClick={() => handleSelectAddress(address)}>
                  <IonIcon icon={location} slot="start" />
                  <IonLabel>{address}</IonLabel>
                </IonItem>
              ))}
            </IonList>
          </IonContent>
        </IonModal>

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
