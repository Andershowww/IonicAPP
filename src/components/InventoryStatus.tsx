import { IonButton, IonCard, IonIcon, IonSpinner } from '@ionic/react';
import { alertCircle, checkmarkCircle, warning } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  min_threshold: number;
  warning_threshold: number;
}

interface InventoryStatusProps {
  onClick: () => void;
}

const InventoryStatus: React.FC<InventoryStatusProps> = ({ onClick }) => {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simula carregamento de dados
    setTimeout(() => {
      const mockData: InventoryItem[] = [
        { id: 1, name: 'Leite', quantity: 3, min_threshold: 2, warning_threshold: 5 },
        { id: 2, name: 'Ovos', quantity: 1, min_threshold: 2, warning_threshold: 4 },
        { id: 3, name: 'Carne', quantity: 6, min_threshold: 2, warning_threshold: 5 },
        { id: 4, name: 'Verduras', quantity: 4, min_threshold: 2, warning_threshold: 5 },
      ];
      setItems(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  // funções mockadas equivalentes às do supabase/lib
  const getInventoryStatus = (items: InventoryItem[]) => {
    const critical = items.some(item => item.quantity < item.min_threshold);
    const warning = items.some(
      item => item.quantity >= item.min_threshold && item.quantity < item.warning_threshold
    );
    if (critical) return 'critical';
    if (warning) return 'warning';
    return 'good';
  };

  const getStatusMessage = (status: string, criticalCount: number, warningCount: number) => {
    switch (status) {
      case 'critical':
        return `${criticalCount} item(ns) com estoque crítico. Reabastecimento necessário!`;
      case 'warning':
        return `${warningCount} item(ns) com estoque baixo. Atenção!`;
      default:
        return 'Todos os itens estão com bom nível de estoque.';
    }
  };

  if (loading) {
    return (
      <IonCard style={{
        margin: '16px',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '180px'
      }}>
        <IonSpinner />
      </IonCard>
    );
  }

  const status = getInventoryStatus(items);
  const criticalItems = items.filter(item => item.quantity < item.min_threshold);
  const warningItems = items.filter(
    item => item.quantity >= item.min_threshold && item.quantity < item.warning_threshold
  );

  const statusConfig = {
    good: {
      gradient: 'linear-gradient(135deg, #a8e6a1 0%, #c8f5c4 100%)',
      icon: checkmarkCircle,
      iconColor: '#0ca201',
      buttonBg: '#0ca201'
    },
    warning: {
      gradient: 'linear-gradient(135deg, #ffe6a1 0%, #fff4c4 100%)',
      icon: warning,
      iconColor: '#f59e0b',
      buttonBg: '#f59e0b'
    },
    critical: {
      gradient: 'linear-gradient(135deg, #ffa1a1 0%, #ffc4c4 100%)',
      icon: alertCircle,
      iconColor: '#dc2626',
      buttonBg: '#dc2626'
    }
  };

  const config = statusConfig[status];
  const message = getStatusMessage(status, criticalItems.length, warningItems.length);

  const getPercentage = () => {
    const totalItems = items.length;
    if (totalItems === 0) return 100;

    const goodItems = items.filter(item => item.quantity >= item.warning_threshold).length;
    return Math.round((goodItems / totalItems) * 100);
  };

  const percentage = getPercentage();

  return (
    <IonCard
      onClick={onClick}
      style={{
        background: config.gradient,
        margin: '16px',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer'
      }}
    >
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
          <IonIcon
            icon={config.icon}
            style={{
              fontSize: '32px',
              color: config.iconColor,
              marginRight: '12px'
            }}
          />
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#1a1a1a',
            margin: 0
          }}>
            Status da Geladeira
          </h2>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.5)',
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '16px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px'
          }}>
            <span style={{ fontSize: '14px', color: '#4a4a4a', fontWeight: '600' }}>
              Nível de estoque
            </span>
            <span style={{ fontSize: '18px', color: '#1a1a1a', fontWeight: 'bold' }}>
              {percentage}%
            </span>
          </div>
          <div style={{
            width: '100%',
            height: '8px',
            background: 'rgba(255,255,255,0.5)',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${percentage}%`,
              height: '100%',
              background: config.iconColor,
              borderRadius: '4px',
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>

        <p style={{
          fontSize: '14px',
          color: '#4a4a4a',
          marginBottom: '16px',
          fontWeight: '500'
        }}>
          {message}
        </p>

        <IonButton
          style={{
            '--background': config.buttonBg,
            '--border-radius': '8px',
            '--padding-start': '24px',
            '--padding-end': '24px',
            fontSize: '14px',
            fontWeight: '600',
            textTransform: 'none'
          }}
        >
          Ver Detalhes
        </IonButton>
      </div>

      <div style={{
        position: 'absolute',
        right: '-20px',
        bottom: '-20px',
        width: '150px',
        height: '150px',
        opacity: 0.3
      }}>
        <span style={{ fontSize: '100px' }}>🧊</span>
      </div>
    </IonCard>
  );
};

export default InventoryStatus;
