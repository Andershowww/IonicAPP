import { IonIcon } from '@ionic/react';
import { add, remove, trash } from 'ionicons/icons';
import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartItemProps {
  item: Product;
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      paddingTop: '12px',
      paddingBottom: '12px'
    }}>
      {/* Product Image */}
      <div style={{
        width: '56px',
        height: '56px',
        background: '#f9fafb',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}>
        <span style={{ fontSize: '32px' }}>{item.image}</span>
      </div>

      {/* Product Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3 style={{
          fontSize: '14px',
          fontWeight: '500',
          color: '#1a1a1a',
          margin: '0 0 4px 0',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          {item.name}
        </h3>
        <p style={{
          fontSize: '14px',
          fontWeight: '600',
          color: '#374151',
          margin: 0
        }}>
          R${item.price.toFixed(2)}
        </p>
      </div>

      {/* Quantity Controls */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flexShrink: 0
      }}>
        {/* Delete Button */}
        <button
          onClick={() => onRemove(item.id)}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <IonIcon icon={trash} style={{ fontSize: '16px', color: '#6b7280' }} />
        </button>

        {/* Decrease Button */}
        <button
          onClick={() => onUpdateQuantity(item.id, -1)}
          disabled={item.quantity <= 1}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: item.quantity <= 1 ? 'not-allowed' : 'pointer',
            opacity: item.quantity <= 1 ? 0.5 : 1
          }}
        >
          <IonIcon icon={remove} style={{ fontSize: '16px', color: '#374151' }} />
        </button>

        {/* Quantity Display */}
        <span style={{
          fontSize: '14px',
          fontWeight: '500',
          color: '#1a1a1a',
          minWidth: '20px',
          textAlign: 'center'
        }}>
          {item.quantity}
        </span>

        {/* Increase Button */}
        <button
          onClick={() => onUpdateQuantity(item.id, 1)}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <IonIcon icon={add} style={{ fontSize: '16px', color: '#374151' }} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
