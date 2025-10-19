import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonToolbar,
  
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import OrderReviewItem from '../components/OrderReviewItem';
import { useHistory, useParams } from 'react-router-dom';
import { Camera, CameraResultType } from '@capacitor/camera';
import { FirebaseService } from '../service/firebaseService';

// Interface de item do pedido
interface OrderItem {
  id: string;
  name: string;
  supplier: string;
  image: string;
  photo?: string; // foto tirada pelo usuário
}

// Interface do pedido completo
interface Order {
  id: string;
  produtos: OrderItem[];
  valorTotal: number;
  date: string;
  status: string;
}

// Parâmetros da rota
interface RouteParams {
  id: string;
}

const OrderReview: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<RouteParams>(); // pega o ID do pedido da URL

  const [order, setOrder] = useState<Order | null>(null);
  const [ratings, setRatings] = useState<{ [key: string]: number }>({});

  // 🔹 Busca o pedido do Firebase pelo ID
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const service = new FirebaseService();
        const data = await service.getOrderById(id);
        console.log(data)
        if (data) {
          setOrder(data as Order);
        } else {
          console.warn('Pedido não encontrado.');
        }
      } catch (error) {
        console.error('Erro ao buscar pedido:', error);
      } 
    };

    fetchOrder();
  }, [id]);

  const handleRating = (itemId: string, rating: number) => {
    setRatings(prev => ({
      ...prev,
      [itemId]: rating
    }));
  };

  const handleTakePhoto = async (itemId: string) => {
    try {
      const photo = await Camera.getPhoto({
        quality: 80,
        allowEditing: false,
        resultType: CameraResultType.Uri
      });

      if (photo?.webPath) {
        setOrder(prev =>
          prev
            ? {
                ...prev,
                items: prev.produtos.map(item =>
                  item.id === itemId ? { ...item, photo: photo.webPath } : item
                )
              }
            : prev
        );
      }
    } catch (error) {
      console.error('Erro ao abrir a câmera:', error);
    }
  };

  const handleSubmitReview = () => {
    console.log('⭐ Avaliações:', ratings);
    console.log('📷 Fotos:', order?.produtos.map(i => ({ id: i.id, photo: i.photo })));
    alert('Avaliação enviada com sucesso!');
    history.push('/');
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
            <IonIcon
              icon={arrowBack}
              style={{ fontSize: '24px', color: '#1a1a1a', cursor: 'pointer' }}
              onClick={() => history.goBack()}
            />
            <IonText
              style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#1a1a1a'
              }}
            >
              Avaliação do Pedido #{order?.id}
            </IonText>
            <div style={{ width: '24px' }}></div>
          </div>
        </IonToolbar>
      </IonHeader>

      {/* Conteúdo */}
      <IonContent fullscreen style={{ '--background': '#f9fafb' }}>
        <div style={{ padding: '16px', paddingBottom: '100px' }}>
          {order?.produtos?.map(item => (
            <div key={item.id}>
              <OrderReviewItem
                item={item}
                rating={ratings[item.id]}
                onRating={handleRating}
                onTakePhoto={handleTakePhoto}
              />
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
