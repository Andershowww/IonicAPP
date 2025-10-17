import { IonButton, IonCard } from '@ionic/react';
import React from 'react';

const OfferBanner: React.FC = () => {
  return (
    <IonCard style={{
      background: 'linear-gradient(135deg, #a8e6a1 0%, #c8f5c4 100%)',
      margin: '16px',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#1a1a1a',
          marginBottom: '8px'
        }}>
          Up to 30% offer
        </h2>
        <p style={{
          fontSize: '14px',
          color: '#4a4a4a',
          marginBottom: '16px'
        }}>
          Enjoy our big offer
        </p>
        <IonButton
          style={{
            '--background': '#0ca201',
            '--border-radius': '8px',
            '--padding-start': '24px',
            '--padding-end': '24px',
            fontSize: '14px',
            fontWeight: '600',
            textTransform: 'none'
          }}
        >
          Shop Now
        </IonButton>
      </div>
      <div style={{
        position: 'absolute',
        right: '-20px',
        bottom: '-20px',
        width: '200px',
        height: '200px',
        opacity: 0.3
      }}>
        <span style={{ fontSize: '120px' }}>🧺</span>
      </div>
    </IonCard>
  );
};

export default OfferBanner;
