import {
    IonContent,
    IonHeader,
    IonIcon,
    IonPage,
    IonText,
    IonToolbar,
    IonButton,
    IonBadge
  } from '@ionic/react';
  import { arrowBack, cart } from 'ionicons/icons';
  import React, { useState } from 'react';
  import { useHistory } from 'react-router-dom';
  import ProductCard from '../components/ProductCard';
  
  interface Product {
    id: number;
    name: string;
    price: number;
    rating: number;
    reviews: number;
    image: string;
    category: string;
  }
  
  const ProductSelection: React.FC = () => {
    const history = useHistory();
    const [cartCount, setCartCount] = useState(0);
  
    const products: Product[] = [
      { id: 1, name: 'Banana', price: 3.99, rating: 4.8, reviews: 287, image: '🍌', category: 'Frutas' },
      { id: 2, name: 'Pimentão', price: 2.99, rating: 4.8, reviews: 287, image: '🫑', category: 'Legumes' },
      { id: 3, name: 'Laranja', price: 3.99, rating: 4.8, reviews: 287, image: '🍊', category: 'Frutas' },
      { id: 4, name: 'Leite', price: 5.49, rating: 4.9, reviews: 320, image: '🥛', category: 'Leite e ovos' },
      { id: 5, name: 'Refrigerante', price: 4.99, rating: 4.5, reviews: 150, image: '🥤', category: 'Bebidas' }
    ];
  
    const addToCart = () => {
      setCartCount(prev => prev + 1);
    };
  
    const goToCart = () => {
      history.push('/cart');
    };
  
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
              {/* Botão de voltar */}
              <IonIcon
                icon={arrowBack}
                style={{
                  fontSize: '24px',
                  color: '#1a1a1a',
                  cursor: 'pointer'
                }}
                onClick={() => history.push('/tabs/home')}
              />
  
              {/* Título */}
              <IonText style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#1a1a1a'
              }}>
                Selecionar Produtos
              </IonText>
  
              {/* Botão do carrinho */}
              <IonButton fill="clear" style={{ padding: 0, minWidth: 'auto' }} onClick={goToCart}>
                <IonIcon icon={cart} style={{ color: '#666' }} />
                {cartCount > 0 && <IonBadge color="danger">{cartCount}</IonBadge>}
              </IonButton>
            </div>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen style={{ '--background': '#f9fafb' }}>
          {/* Banner de destaque */}
          <div style={{
            margin: '16px',
            borderRadius: '16px',
            background: 'linear-gradient(to right, #86efac, #bbf7d0)',
            padding: '20px',
            textAlign: 'center'
          }}>
            <IonText style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#166534'
            }}>
              Produtos Selecionados
            </IonText>
            <div style={{
              fontSize: '14px',
              color: '#166534',
              marginTop: '4px'
            }}>
              Escolha até 5 produtos para seu pedido
            </div>
          </div>
  
          {/* Lista de produtos */}
          <div style={{ padding: '0 16px', marginBottom: '100px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px'
            }}>
              <IonText style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1a1a1a'
              }}>
                Produtos Disponíveis ({products.length})
              </IonText>
            </div>
  
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  rating={product.rating}
                  reviews={product.reviews}
                  image={product.image}
                  onAdd={addToCart}
                />
              ))}
            </div>
          </div>
  
          {/* Botão fixo inferior para ir ao carrinho */}
          <div style={{
            position: 'fixed',
            bottom: '0',
            left: '0',
            right: '0',
            background: '#fff',
            padding: '16px',
            borderTop: '1px solid #f3f4f6',
            boxShadow: '0 -2px 10px rgba(0,0,0,0.1)'
          }}>
            <button 
              onClick={goToCart}
              style={{
                width: '100%',
                background: '#16a34a',
                color: '#fff',
                fontWeight: '600',
                padding: '16px',
                borderRadius: '16px',
                border: 'none',
                fontSize: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              Ir para o Carrinho
              <IonIcon icon={cart} style={{ fontSize: '20px' }} />
              {cartCount > 0 && (
                <IonBadge color="danger" style={{ marginLeft: '8px' }}>
                  {cartCount}
                </IonBadge>
              )}
            </button>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default ProductSelection;
