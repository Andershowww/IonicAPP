import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonText,
  IonIcon,
  IonCard,
  IonCardContent,
  IonButton,
} from '@ionic/react';
import { cart, arrowBack, call, chatbubbles } from 'ionicons/icons';
import React from 'react';
import Maps from '../components/Maps';
import { useHistory } from 'react-router-dom';

const shopper = {
  name: 'James Williams',
  rating: 4.8,
  status: 'Itens Separados',
};

const orderStages = [
  { label: 'Confirmado', active: true },
  { label: 'Itens Separados', active: true },
  { label: 'Saindo para entrega', active: false },
  { label: 'Entregue', active: false },
];

const tips = [2, 5, 10, 15];

const TrackOrder: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      {/* Status Bar */}
      <IonHeader className="ion-no-border">
        <IonToolbar style={{ '--background': '#fff', '--padding-top': '8px', '--padding-bottom': '8px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 16px',
            height: '48px'
          }}>
            <IonIcon
              icon={arrowBack}
              style={{
                fontSize: '24px',
                color: '#1a1a1a',
                cursor: 'pointer'
              }}
              onClick={() => history.push('/tabs/home')}
            />

            <IonText style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#1a1a1a'
            }}>
              Rastrear
            </IonText>

            <div style={{ width: '24px' }}></div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen style={{ '--background': '#F2F2F2' }}>
        {/* Google Map */}
        <Maps />

        {/* Card de status do pedido */}
        <IonCard style={{
          width: '96%',
          maxWidth: '430px',
          margin: 'auto',
          marginTop: '-60px',
          borderRadius: '24px',
          boxShadow: '0 8px 30px rgba(60,60,70,0.08)',
          position: 'relative',
          zIndex: 2,
        }}>
          <IonCardContent style={{ padding: '24px 16px' }}>
            <IonText style={{ fontSize: '18px', fontWeight: 600, color: '#fff' }}>
              Seu pedido está a caminho...
            </IonText>
            <IonText style={{ fontSize: '13px', color: '#666', display: 'block', marginBottom: '12px' }}>
              Chegando às 11:45
            </IonText>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: '18px 0 13px 0'
            }}>
              {orderStages.map((stage, idx) => (
                <React.Fragment key={stage.label}>
                  <div style={{ textAlign: 'center', flex: 1 }}>
                    <div style={{
                      fontSize: '23px',
                      color: stage.active ? '#16a34a' : '#cfcfcf'
                    }}>
                      <IonIcon icon={cart} />
                    </div>
                    <div style={{
                      fontSize: '12px',
                      fontWeight: stage.active ? 600 : 400,
                      color: stage.active ? '#16a34a' : '#cfcfcf'
                    }}>
                      {stage.label}
                    </div>
                  </div>
                  {idx < orderStages.length - 1 && (
                    <div style={{
                      height: '3px',
                      width: '28px',
                      background: stage.active ? '#16a34a' : '#cfcfcf',
                      borderRadius: '2px'
                    }}></div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '8px',
              marginBottom: '10px',
              gap: '14px'
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: '50%',
                overflow: 'hidden', background: '#e7e7e7'
              }}>
                <img src="/assets/shopper-avatar.jpg"
                  alt="Shopper"
                  width="44"
                  height="44"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <div style={{
                  fontWeight: 600, fontSize: '15px', color: '#fff'
                }}>{shopper.name}</div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  Seu pedido está a caminho... <span style={{ color: '#F59E42', marginLeft: '3px' }}>★ {shopper.rating}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '7px', marginLeft: 'auto' }}>
                <IonButton fill="clear" size="small" color="fff" style={{ margin: 0 }}>
                  <IonIcon icon={call} />
                </IonButton>
                <IonButton fill="clear" size="small" color="dark" style={{ margin: 0 }}>
                  <IonIcon icon={chatbubbles} />
                </IonButton>
              </div>
            </div>
          </IonCardContent>
        </IonCard>

        {/* Tip your shopper */}
        <div style={{
          width: '96%',
          maxWidth: '430px',
          margin: 'auto',
          marginTop: '16px',
        }}>
          <IonText style={{
            fontSize: '15px',
            color: '#232323',
            fontWeight: 600,
            display: 'block',
            marginBottom: '7px'
          }}>
            Dê uma gorjeta ao entregador
          </IonText>
          <IonText style={{
            fontSize: '13px',
            color: '#666',
            display: 'block',
            marginBottom: '12px'
          }}>
            Agradeça ao seu entregador com uma gorjeta
          </IonText>
          <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            {tips.map(tip => (
              <IonButton
                key={tip}
                color="light"
                style={{
                  minWidth: '70px',
                  borderRadius: '16px',
                  fontWeight: 500,
                  fontSize: '15px',
                  border: '2px solid #e5e7eb',
                  color: '#232323'
                }}
              >
                {tip.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </IonButton>
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TrackOrder;