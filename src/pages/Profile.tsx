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
  IonLabel,
  IonList,
  IonAlert,
  IonInput,
} from '@ionic/react';
import { person, arrowBack, settings, notifications, mail, call, trash, checkmark } from 'ionicons/icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const PROFILE_DATA = {
  name: "João Silva",
  email: "joao.silva@email.com",
  phone: "(11) 99999-8888"
};

const Profile: React.FC = () => {
  const history = useHistory();
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  // States for editing fields
  const [editingEmail, setEditingEmail] = useState(false);
  const [email, setEmail] = useState(PROFILE_DATA.email);

  const [editingPhone, setEditingPhone] = useState(false);
  const [phone, setPhone] = useState(PROFILE_DATA.phone);

  const handleConfirmEmail = () => {
    setEditingEmail(false);
    // lógica para atualizar e-mail no backend/Firebase, se necessário
  };

  const handleConfirmPhone = () => {
    setEditingPhone(false);
    // lógica para atualizar telefone no backend/Firebase, se necessário
  };

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
            <IonIcon icon={person} style={{ color: '#16a34a', fontSize: '40px' }} />
          </IonAvatar>
          
          <IonText style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#166534',
            display: 'block',
            marginBottom: '4px'
          }}>
            {PROFILE_DATA.name}
          </IonText>
          
          <IonText style={{
            fontSize: '14px',
            color: '#166534',
            display: 'block'
          }}>
            {email}
          </IonText>
        </div>

        <div style={{ padding: '0 16px' }}>
          <IonList lines="none" style={{ background: 'transparent' }}>
            {/* E-mail editável */}
            <IonItem style={{ '--background': '#fff', borderRadius: '12px', marginBottom: '12px' }}>
              <IonIcon icon={mail} slot="start" style={{ color: '#16a34a' }} />
              <IonLabel>
                <h3>E-mail</h3>
                {!editingEmail ? (
                  <div
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                    onClick={() => setEditingEmail(true)}
                  >
                    <span>{email}</span>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <IonInput
                      type="email"
                      value={email}
                      onIonChange={e => setEmail(e.detail.value!)}
                      style={{
                        background: '#f6f6f6',
                        borderRadius: '8px',
                        paddingLeft: '8px',
                        paddingRight: '8px',
                        height: '32px',
                        fontSize: '15px',
                        width: '180px'
                      }}
                    />
                    <IonButton
                      size="small"
                      color="success"
                      onClick={handleConfirmEmail}
                      style={{
                        minWidth: '28px',
                        width: '28px',
                        height: '28px',
                        padding: 0,
                        borderRadius: '8px',
                        '--background': '#16a34a',
                        '--color': '#fff'
                      }}
                    >
                      <IonIcon icon={checkmark} />
                    </IonButton>
                  </div>
                )}
              </IonLabel>
            </IonItem>

            {/* Telefone editável */}
            <IonItem style={{ '--background': '#fff', borderRadius: '12px', marginBottom: '12px' }}>
              <IonIcon icon={call} slot="start" style={{ color: '#16a34a' }} />
              <IonLabel>
                <h3>Telefone</h3>
                {!editingPhone ? (
                  <div
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                    onClick={() => setEditingPhone(true)}
                  >
                    <span>{phone}</span>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <IonInput
                      type="tel"
                      value={phone}
                      onIonChange={e => setPhone(e.detail.value!)}
                      style={{
                        background: '#f6f6f6',
                        borderRadius: '8px',
                        paddingLeft: '8px',
                        paddingRight: '8px',
                        height: '32px',
                        fontSize: '15px',
                        width: '130px'
                      }}
                    />
                    <IonButton
                      size="small"
                      color="success"
                      onClick={handleConfirmPhone}
                      style={{
                        minWidth: '28px',
                        width: '28px',
                        height: '28px',
                        padding: 0,
                        borderRadius: '8px',
                        '--background': '#16a34a',
                        '--color': '#fff'
                      }}
                    >
                      <IonIcon icon={checkmark} />
                    </IonButton>
                  </div>
                )}
              </IonLabel>
            </IonItem>

            <IonItem style={{ '--background': '#fff', borderRadius: '10px', marginBottom: '10px' }} button>
              <IonIcon icon={notifications} slot="start" style={{ color: '#16a34a' }} />
              <IonLabel>
                <h3>Notificações</h3>
                <p>Gerenciar preferências</p>
              </IonLabel>
            </IonItem>

            <IonItem style={{ '--background': '#fff', borderRadius: '10px', marginBottom: '10px' }} button onClick={() => setShowDeleteAlert(true)}>
              <IonIcon icon={trash} slot="start" style={{ color: '#ef4444' }} />
              <IonLabel>
                <h3 style={{ color: '#ef4444', fontWeight: 600 }}>Deletar Conta</h3>
                <p style={{ color: '#ef4444' }}>Excluir conta permanentemente</p>
              </IonLabel>
            </IonItem>
          </IonList>
        </div>

        <IonAlert
          isOpen={showDeleteAlert}
          onDidDismiss={() => setShowDeleteAlert(false)}
          header="Deletar conta?"
          message="Ao confirmar a exclusão, sua conta será marcada para ser deletada em 30 dias. Deseja continuar?"
          buttons={[
            {
              text: 'Cancelar',
              role: 'cancel',
              cssClass: 'secondary'
            },
            {
              text: 'Deletar',
              handler: () => {
                // lógica para marcar a conta como deletar em 30 dias
              },
              cssClass: 'danger'
            }
          ]}
        />
        <div style={{ height: '60px' }}></div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;