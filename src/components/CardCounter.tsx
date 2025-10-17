import { IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';
import React, { ReactNode, useState } from 'react';

interface CardProps {
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: ReactNode;
}

const CardCounter: React.FC<CardProps> = ({ name, price, rating, reviews, image }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div style={{ background: '#fff', borderRadius: '16px', padding: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', minWidth: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '12px' }}>
      <div style={{ width: '140px', height: '140px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '64px', overflow: 'hidden', margin: '0 auto' }}>
        {image}
      </div>
      <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a', margin: 0, lineHeight: 1.2 }}>{name}</h3>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '4px', fontSize: '14px', color: '#4a4a4a' }}>
          <IonIcon icon={star} style={{ fontSize: '14px', color: '#ffc409' }} />
          <span style={{ fontWeight: 500 }}>{rating} ({reviews})</span>
        </div>
        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#1a1a1a', margin: 0 }}>${price.toFixed(2)}</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', background: '#f1f1f1', padding: '6px 12px', borderRadius: '20px', fontSize: '16px', fontWeight: 'bold' }}>
        <button onClick={decrement} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#0ca201', fontSize: '18px' }}>-</button>
        <span style={{ minWidth: '24px', textAlign: 'center' }}>{count}</span>
        <button onClick={increment} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#0ca201', fontSize: '18px' }}>+</button>
      </div>
    </div>
  );
};

export default CardCounter;
