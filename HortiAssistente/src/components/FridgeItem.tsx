import React from 'react';

interface FridgeItemProps {
  id: number;
  name: string;
  quantity: number;
  image: string;
  onBuy: (id: number) => void;
}

const FridgeItem: React.FC<FridgeItemProps> = ({ id, name, quantity, image, onBuy }) => {
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px'
      }}
    >
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

      <p style={{
        fontSize: '13px',
        color: '#6b7280',
        margin: 0
      }}>
        {quantity} Unid.
      </p>

      <button
        onClick={() => onBuy(id)}
        style={{
          width: '100%',
          background: '#16a34a',
          color: '#fff',
          fontWeight: '600',
          fontSize: '13px',
          padding: '8px 16px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          marginTop: '4px'
        }}
      >
        Comprar
      </button>
    </div>
  );
};

export default FridgeItem;
