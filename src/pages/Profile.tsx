import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonToolbar,
  IonButton,
  IonAvatar,
  IonItem,
  IonLabel
} from '@ionic/react';
import { person, arrowBack, settings, notifications } from 'ionicons/icons';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Profile: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
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
              onClick={() => history.goBack()}
            />

            <IonText style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#1a1a1a'
            }}>
              Meu Perfil
            </IonText>

            <IonButton fill="clear" style={{ padding: 0, minWidth: 'auto' }}>
              <IonIcon icon={settings} style={{ color: '#666', fontSize: '20px' }} />
            </IonButton>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen style={{ '--background': '#f9fafb' }}>
        {/* Header do perfil */}
        <div style={{
          background: 'linear-gradient(to right, #86efac, #bbf7d0)',
          padding: '32px 16px',
          textAlign: 'center',
          marginBottom: '24px'
        }}>
          <IonAvatar style={{
            width: '80px',
            height: '80px',
            margin: '0 auto 16px',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px'
          }}>

          </IonAvatar>
          
          <IonText style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#166534',
            display: 'block',
            marginBottom: '4px'
          }}>
            João Silva
          </IonText>
          
          <IonText style={{
            fontSize: '14px',
            color: '#166534',
            display: 'block'
          }}>
            joao.silva@email.com
          </IonText>
        </div>

        {/* Informações do usuário */}
        <div style={{ padding: '0 16px' }}>
          <IonItem style={{ '--background': '#fff', borderRadius: '12px', marginBottom: '12px' }}>
            <IonIcon icon={person} slot="start" style={{ color: '#16a34a' }} />
            <IonLabel>
              <h3>Informações Pessoais</h3>
              <p>Editar dados pessoais</p>
            </IonLabel>
          </IonItem>

          <IonItem style={{ '--background': '#fff', borderRadius: '12px', marginBottom: '12px' }}>
            <IonIcon icon={notifications} slot="start" style={{ color: '#16a34a' }} />
            <IonLabel>
              <h3>Notificações</h3>
              <p>Gerenciar preferências</p>
            </IonLabel>
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;