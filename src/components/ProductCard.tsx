import { IonIcon } from '@ionic/react';
import { add, star } from 'ionicons/icons';
import React from 'react';

interface ProductCardProps {
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, rating, reviews, image }) => {
  return (
    <div style={{
      background: '#fff',
      borderRadius: '16px',
      padding: '16px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
      position: 'relative',
      minWidth: '160px'
    }}>
      <div style={{
        width: '100%',
        height: '120px',
        borderRadius: '12px',
        background: '#f8f8f8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '12px',
        fontSize: '64px'
      }}>
        {image}
      </div>

      <button style={{
        position: 'absolute',
        bottom: '100px',
        right: '24px',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        background: '#fff',
        border: 'none',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }}>
        <IonIcon icon={add} style={{ fontSize: '20px', color: '#0ca201' }} />
      </button>

      <h3 style={{
        fontSize: '16px',
        fontWeight: '600',
        color: '#1a1a1a',
        marginBottom: '8px'
      }}>
        {name}
      </h3>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        marginBottom: '8px'
      }}>
        <IonIcon icon={star} style={{ fontSize: '14px', color: '#ffc409' }} />
        <span style={{ fontSize: '14px', color: '#4a4a4a', fontWeight: '500' }}>
          {rating} ({reviews})
        </span>
      </div>

      <p style={{
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#1a1a1a'
      }}>
        ${price.toFixed(2)}
      </p>
    </div>
  );
};

export default ProductCard;
