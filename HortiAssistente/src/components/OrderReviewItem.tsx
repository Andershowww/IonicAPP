import { IonIcon, IonText } from '@ionic/react';
import { camera, star } from 'ionicons/icons';
import React from 'react';

interface OrderItem {
  id: number;
  name: string;
  supplier: string;
  image: string;
}

interface OrderReviewItemProps {
  item: OrderItem;
  rating?: number;
  onRating: (itemId: number, rating: number) => void;
  onTakePhoto: (itemId: number) => void;
}

const OrderReviewItem: React.FC<OrderReviewItemProps> = ({
  item,
  rating = 0,
  onRating,
  onTakePhoto
}) => {
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: '16px',
        padding: '16px',
        marginBottom: '16px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '16px'
        }}
      >
        {/* Imagem do produto */}
        <div
          style={{
            width: '72px',
            height: '72px',
            background: '#f9fafb',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}
        >
          <span style={{ fontSize: '40px' }}>{item.image}</span>
        </div>

        {/* Detalhes e avaliação */}
        <div style={{ flex: 1, position: 'relative' }}>
          <h3
            style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#1a1a1a',
              margin: '0 0 4px 0'
            }}
          >
            {item.name}
          </h3>
          <p
            style={{
              fontSize: '14px',
              color: '#6b7280',
              margin: '0 0 12px 0'
            }}
          >
            {item.supplier}
          </p>

          <div style={{ position: 'relative', marginTop: '24px' }}>
            {/* Ícone da câmera acima das estrelas */}
            <IonIcon
              icon={camera}
              onClick={() => onTakePhoto(item.id)}
              style={{
                position: 'absolute',
                top: '-36px',
                right: '8px',
                fontSize: '26px',
                color: '#16a34a',
                cursor: 'pointer',
                background: '#fff',
                borderRadius: '50%',
                padding: '6px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
                transition: '0.2s ease'
              }}
            />

            {/* Texto "Avaliação" */}
            <IonText
              style={{
                fontSize: '12px',
                color: '#6b7280',
                fontWeight: '500'
              }}
            >
              Avaliação
            </IonText>

            {/* Estrelas */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginTop: '8px'
              }}
            >
              {[1, 2, 3].map((starIndex) => (
                <button
                  key={starIndex}
                  onClick={() => onRating(item.id, starIndex)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: '4px',
                    cursor: 'pointer'
                  }}
                >
                  <IonIcon
                    icon={star}
                    style={{
                      fontSize: '28px',
                      color: starIndex <= rating ? '#facc15' : '#d1d5db',
                      transition: 'color 0.2s'
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderReviewItem;
