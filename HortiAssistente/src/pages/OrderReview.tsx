import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonToolbar
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import React, { useState } from 'react';
import OrderReviewItem from '../components/OrderReviewItem';
import { useHistory } from 'react-router-dom';
import { Camera, CameraResultType } from '@capacitor/camera';

interface OrderItem {
  id: number;
  name: string;
  supplier: string;
  image: string;
  photo?: string; // armazenará a foto tirada
}

const OrderReview: React.FC = () => {
  const history = useHistory();

  const [orderItems, setOrderItems] = useState<OrderItem[]>([
    {
      id: 1,
      name: 'Cacho de Banana',
      supplier: 'Fornecedor A',
      image: '🍌'
    },
    {
      id: 2,
      name: 'Brócolis',
      supplier: 'Fornecedor B',
      image: '🥦'
    },
    {
      id: 3,
      name: 'Laranja',
      supplier: 'Fornecedor C',
      image: '🍊'
    }
  ]);

  const [ratings, setRatings] = useState<{ [key: number]: number }>({});

  // Função para avaliar o produto (1 a 3 estrelas)
  const handleRating = (itemId: number, rating: number) => {
    setRatings(prev => ({
      ...prev,
      [itemId]: rating
    }));
  };

  // Função que abre a câmera e salva a foto
  const handleTakePhoto = async (itemId: number) => {
    try {
      const photo = await Camera.getPhoto({
        quality: 80,
        allowEditing: false,
        resultType: CameraResultType.Uri
      });

      // Atualiza o item com o caminho da foto
      setOrderItems(prev =>
        prev.map(item =>
          item.id === itemId ? { ...item, photo: photo.webPath } : item
        )
      );

      console.log(`📸 Foto tirada para o item ${itemId}:`, photo.webPath);
    } catch (error) {
      console.error('Erro ao abrir a câmera:', error);
    }
  };

  // Função chamada ao clicar em "Avaliar"
  const handleSubmitReview = () => {
    console.log('⭐ Avaliações:', ratings);
    console.log('📷 Fotos:', orderItems.map(i => ({ id: i.id, photo: i.photo })));
    alert('Avaliação enviada com sucesso!');
    history.push('/home');
  };

  return (
    <IonPage>
      {/* Header */}
      <IonHeader className="ion-no-border">
        <IonToolbar
          style={{
            '--background': '#fff',
            '--padding-top': '8px',
            '--padding-bottom': '8px'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 16px',
              height: '48px'
            }}
          >
            {/* Botão de voltar */}
            <IonIcon
              icon={arrowBack}
              style={{
                fontSize: '24px',
                color: '#1a1a1a',
                cursor: 'pointer'
              }}
              onClick={() => history.push('/home')}
            />

            {/* Título */}
            <IonText
              style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#1a1a1a'
              }}
            >
              Avaliação do Pedido
            </IonText>

            <div style={{ width: '24px' }}></div>
          </div>
        </IonToolbar>
      </IonHeader>

      {/* Conteúdo */}
      <IonContent fullscreen style={{ '--background': '#f9fafb' }}>
        <div style={{ padding: '16px', paddingBottom: '100px' }}>
          {orderItems.map(item => (
            <div key={item.id}>
              <OrderReviewItem
                item={item}
                rating={ratings[item.id]}
                onRating={handleRating}
                onTakePhoto={handleTakePhoto}
              />
              {/* Exibe miniatura da foto, se existir */}
              {item.photo && (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}
                >
                  <img
                    src={item.photo}
                    alt={`Foto de ${item.name}`}
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      border: '1px solid #e5e7eb'
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Botão fixo inferior */}
        <div
          style={{
            position: 'fixed',
            bottom: '0',
            left: '0',
            right: '0',
            background: '#fff',
            padding: '16px',
            borderTop: '1px solid #f3f4f6'
          }}
        >
          <button
            onClick={handleSubmitReview}
            style={{
              width: '100%',
              background: '#16a34a',
              color: '#fff',
              fontWeight: '600',
              padding: '16px',
              borderRadius: '16px',
              border: 'none',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Enviar Avaliação
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default OrderReview;
