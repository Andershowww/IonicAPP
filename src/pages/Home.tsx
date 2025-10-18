import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonToolbar,
  IonSearchbar,
  IonButton,
  IonBadge,
  IonModal,
  IonTitle,
  IonButtons,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/react';
import { cart, chevronDown, location } from 'ionicons/icons';
import React, { useState } from 'react';
import CategoryList from '../components/CategoryList';
import ProductCard from '../components/ProductCard';
import InventoryStatus from '../components/InventoryStatus';
import { useHistory } from 'react-router-dom';


const Home: React.FC = () => {
  const history = useHistory();
  const products = [
    { id: 1, name: 'Banana', price: 3.99, rating: 4.8, reviews: 287, image: '🍌', category: 'Frutas' },
    { id: 2, name: 'Pimentão', price: 2.99, rating: 4.8, reviews: 287, image: '🫑', category: 'Legumes' },
    { id: 3, name: 'Laranja', price: 3.99, rating: 4.8, reviews: 287, image: '🍊', category: 'Frutas' },
    { id: 4, name: 'Leite', price: 5.49, rating: 4.9, reviews: 320, image: '🥛', category: 'Leite e ovos' },
    { id: 5, name: 'Refrigerante', price: 4.99, rating: 4.5, reviews: 150, image: '🥤', category: 'Bebidas' }
  ];

  const [results, setResults] = useState([...products]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Produtos por categoria');
  const [cartCount, setCartCount] = useState(0)
  const [selectedAddress, setSelectedAddress] = useState('Casa');
  const [showModal, setShowModal] = useState(false);

  const addresses = [
    'Casa',
    'Casa 2',
  ];
  
  const navigateToRefrigerator = () => {
    history.push('/tabs/myFridge');
  };
  const handleSelectAddress = (address: string) => {
    setSelectedAddress(address);
    setShowModal(false);
  };


  const navigateToCart = () => {
    history.push('/tabs/cart')
  }

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const handleInput = (event: Event) => {
    const target = event.target as HTMLIonSearchbarElement;
    const query = (target?.value || '').toLowerCase();

    setResults(
      products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) &&
          (selectedCategory === 'Produtos por categoria' || p.category === selectedCategory)
      )
    );
  };

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    if (categoryName === 'Produtos por categoria') setResults(products);
    else setResults(products.filter((p) => p.category === categoryName));
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar
          style={{
            '--background': '#fff',
            '--padding-top': '8px',
            '--padding-bottom': '8px'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 16px'
            }}
          >
            <IonButton fill="clear" style={{ display: 'flex', alignItems: 'center', padding: 0 }} onClick={() => setShowModal(true)}>
              <IonIcon icon={location} style={{ fontSize: '20px', color: '#1a1a1a', marginRight: '6px' }} />
              <IonText style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a1a' }}>
                {selectedAddress}
              </IonText>
              <IonIcon icon={chevronDown} style={{ fontSize: '16px', color: '#1a1a1a', marginLeft: '4px' }} />
            </IonButton>
            <IonButton onClick={navigateToCart} fill="clear" style={{ padding: 0, minWidth: 'auto' }}>
              <IonIcon icon={cart} style={{ color: '#666' }} />
              {cartCount > 0 && <IonBadge color="danger">{cartCount}</IonBadge>}
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
        <IonSearchbar
          animated
          placeholder="Pesquisar produtos"
          onIonInput={handleInput}
        ></IonSearchbar>

        <InventoryStatus onClick={navigateToRefrigerator} />
        <CategoryList
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
        />
        <div style={{ padding: '16px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px'
            }}
          >
            <h2
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#1a1a1a',
                margin: 0
              }}
            >
              {selectedCategory === 'Produtos por categoria' ? 'Todos os produtos' : selectedCategory}
            </h2>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              overflowX: 'auto',
              paddingBottom: '16px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {results.map((product) => (
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
      </IonContent>
    </IonPage>
  );
};

export default Home;
