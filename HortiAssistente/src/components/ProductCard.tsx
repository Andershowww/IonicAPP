import React from 'react';
import { IonIcon, IonText } from '@ionic/react';
import { add, star } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  onAdd?: () => void; // função para adicionar ao carrinho
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, rating, reviews, image, onAdd }) => {
  const history = useHistory(); 
  const goToDetail = () => {
    history.push(`/product/${id}`);
  };
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: '16px',
        padding: '16px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        position: 'relative',
        minWidth: '160px'
      }}
      onClick={goToDetail}
    >
      {/* Imagem / emoji */}
      <div
        style={{
          width: '100%',
          height: '120px',
          borderRadius: '12px',
          background: '#f8f8f8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '12px',
          fontSize: '64px',
          position: 'relative'
        }}
      >
        {image}
        <button
             onClick={(event) => {
              event.stopPropagation(); // impede que o clique vá pro card
              if (onAdd) onAdd(); 
            }}
            style={{
              position: 'absolute',
              bottom: '8px',
              right: '8px',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: '#0ca201',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
            }}
          >
            <IonIcon icon={add} style={{ fontSize: '20px', color: '#fff' }} />
          </button>
        
      </div>

      {/* Nome */}
      <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a', marginBottom: '8px' }}>
        {name}
      </h3>

      {/* Rating */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
        <IonIcon icon={star} style={{ fontSize: '14px', color: '#ffc409' }} />
        <IonText style={{ fontSize: '14px', fontWeight: 500, color: '#4a4a4a' }}>
          {rating} ({reviews})
        </IonText>
      </div>

      {/* Preço */}
      <IonText style={{ fontSize: '14px', color: '#4a4a4a', display: 'block', marginBottom: '4px' }}>
        Valor médio:
      </IonText>
      <IonText style={{ fontSize: '18px', fontWeight: 'bold', color: '#1a1a1a' }}>
        {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </IonText>
    </div>
  );
};

export default ProductCard;
