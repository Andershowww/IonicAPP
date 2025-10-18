import { IonIcon, IonText } from '@ionic/react';
import { star } from 'ionicons/icons';
import React from 'react';
import { useHistory } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  onAdd?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, rating, reviews, image, onAdd }) => {
  const history = useHistory();
  
  const goToDetail = () => {
    console.log(id);
    history.push("/product");
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAdd) {
      onAdd();
    }
  };

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: '16px',
        padding: '16px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        position: 'relative',
        cursor: 'pointer'
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

      {/* Botão de adicionar ao carrinho */}
      <button
        onClick={handleAddToCart}
        style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: '#16a34a',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
        }}
      >
        +
      </button>
    </div>
  );
};

export default ProductCard;