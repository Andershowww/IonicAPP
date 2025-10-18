import React from 'react';

interface FridgeItemProps {
  id: number;
  name: string;
  quantity: number;
  image: string;
  expiryDays?: number;
  onBuy: (id: number) => void;
}

const FridgeItem: React.FC<FridgeItemProps> = ({ id, name, quantity, image, expiryDays = 0, onBuy }) => {
  const isLow = quantity <= 2;
  const isExpiring = expiryDays <= 3 && expiryDays > 0;
  return (
    <div
      style={{
        background: '#ffffff',
        borderRadius: '16px',
        padding: '12px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'all 0.2s',
        border: isLow || isExpiring ? '2px solid #fca5a5' : 'none',
        cursor: 'default'
      }}>
      <div style={{
        width: '80px',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <span style={{ fontSize: '64px' }}>{image}</span>
      </div>

      <h3 style={{
        fontSize: '15px',
        fontWeight: '600',
        color: '#1a1a1a',
        margin: 0,
        textAlign: 'center'
      }}>
        {name}
      </h3>

      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
        <span style={{ fontSize: '16px', fontWeight: 'bold', color: isLow ? '#dc2626' : '#1a1a1a' }}>{quantity}</span>
        <span style={{ fontSize: '12px', color: '#6b7280' }}>un.</span>
      </div>
      {isExpiring && (
        <span style={{ fontSize: '12px', fontWeight: '600', color: '#f97316', marginBottom: '4px' }}>
          {expiryDays} dias
        </span>
      )}
      <button
        onClick={() => onBuy(id)}
        style={{
          width: '100%',
          backgroundColor: '#16a34a',
          color: '#ffffff',
          fontWeight: 600,
          fontSize: '12px',
          padding: '8px 12px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px',
          marginTop: 'auto'
        }}
      >
        Comprar
      </button>
    </div>
  );
};

export default FridgeItem;
