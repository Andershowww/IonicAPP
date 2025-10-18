import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/react';
import { 
  arrowBack, 
  person, 
  list,
  location, 
  logOut,
} from 'ionicons/icons';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Menu: React.FC = () => {
  const history = useHistory();

  const menuItems = [
    { id: 1, title: 'Minha Conta', icon: person, route: '/profile' },
    { id: 2, title: 'Meus Pedidos', icon: list, route: '/tabs/myorders' },
    { id: 4, title: 'Endereço', icon: location, route: '/address' },
    { id: 5, title: 'Sair', icon: logOut, route: '/login', isLogout: true }
  ];

  const handleMenuClick = (route: string, isLogout?: boolean) => {
    if (isLogout) {
      alert('Logout realizado com sucesso!');
      history.push('/tabs/home');
    } else {
      console.log(route);
      history.push(route);
    }
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
              onClick={() => history.push('/tabs/home')}
            />

            <IonText style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#1a1a1a'
            }}>
              Menu
            </IonText>

            <div style={{ width: '24px' }}></div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen style={{ '--background': '#f9fafb' }}>
        {/* Header do menu */}
        <div style={{
          background: 'linear-gradient(to right, #86efac, #bbf7d0)',
          padding: '24px 16px',
          marginBottom: '24px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: '#fff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>
              👤
            </div>
            <div>
              <IonText style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#166534',
                display: 'block'
              }}>
                Olá, João!
              </IonText>
              <IonText style={{
                fontSize: '14px',
                color: '#166534',
                display: 'block'
              }}>
                Bem-vindo ao HortiAssistente
              </IonText>
            </div>
          </div>
        </div>

        {/* Lista de opções do menu */}
        <div style={{ padding: '0 16px' }}>
          <IonList style={{ background: 'transparent' }}>
            {menuItems.map((item) => (
              <IonItem
                key={item.id}
                button
                onClick={() => handleMenuClick(item.route, item.isLogout)}
                style={{
                  '--background': '#fff',
                  borderRadius: '12px',
                  marginBottom: '8px',
                  '--padding-start': '16px',
                  '--padding-end': '16px'
                }}
              >
                <IonIcon 
                  icon={item.icon} 
                  slot="start" 
                  style={{ 
                    color: item.isLogout ? '#ef4444' : '#16a34a',
                    fontSize: '20px'
                  }} 
                />
                <IonLabel>
                  <h3 style={{
                    color: item.isLogout ? '#ef4444' : '#1a1a1a',
                    fontWeight: '500'
                  }}>
                    {item.title}
                  </h3>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </div>

        {/* Informações adicionais */}
        <div style={{
          padding: '24px 16px',
          textAlign: 'center'
        }}>
          <IonText style={{
            fontSize: '12px',
            color: '#666',
            display: 'block'
          }}>
            Versão 1.0.0
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Menu;