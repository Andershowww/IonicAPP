/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonToolbar,
  IonButton,
  IonTitle,
  IonCard,
  IonCardContent,
  IonToast,
} from '@ionic/react';
import { arrowBack, camera } from 'ionicons/icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Camera, CameraResultType } from '@capacitor/camera';

const Fridge: React.FC = () => {
  const history = useHistory();
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);


  const handleOpenCamera = async () => {
    try {
      const photo = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
      });
      setScanResult('Imagem capturada com sucesso!');
      setShowToast(true);
      // lógica para ler QRCode
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setScanResult('Falha ao acessar a câmera.');
      setShowToast(true);
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
            <IonButton fill="clear" style={{ minWidth: 'auto', padding: 0 }} onClick={() => history.goBack()}>
              <IonIcon icon={arrowBack} style={{ fontSize: '24px', color: '#1a1a1a' }} />
            </IonButton>
            <IonTitle style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#1a1a1a',
              textAlign: 'center'
            }}>
              Geladeira
            </IonTitle>
            <div style={{ width: '24px' }}></div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen style={{ '--background': '#f9fafb' }}>
        <div style={{
          background: 'linear-gradient(to right, #86efac, #bbf7d0)',
          padding: '28px 16px 14px 16px',
          textAlign: 'center',
          marginBottom: '24px'
        }}>
          <IonText style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#166534',
            display: 'block',
            marginBottom: '10px'
          }}>
            Integração com Geladeira
          </IonText>
          <IonText style={{
            fontSize: '15px',
            color: '#166534',
            display: 'block'
          }}>
            Para integrar seu assistent de mercado, faça a leitura do QR code apontando sua câmera, e pronto, vai ser integrado a sua geladeira ao HortAssistent.
          </IonText>
        </div>

        <IonCard style={{ margin: '16px', borderRadius: '16px' }}>
          <IonCardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <IonButton
              expand="block"
              color="success"
              style={{
                width: '180px',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
              onClick={handleOpenCamera}
            >
              <IonIcon icon={camera} style={{ fontSize: '20px', marginRight: '6px' }} />
              Abrir Câmera
            </IonButton>
            <IonText style={{ color: '#666', fontSize: '14px', marginTop: '8px' }}>
              Clique para escanear o QR Code da geladeira.
            </IonText>
          </IonCardContent>
        </IonCard>

        {/* mensagem */}
        <IonToast
          isOpen={showToast}
          message={scanResult ?? ""}
          duration={1800}
          onDidDismiss={() => setShowToast(false)}
          color={scanResult === 'Imagem capturada com sucesso!' ? 'success' : 'danger'}
        />
      </IonContent>
    </IonPage>
  );
};

export default Fridge;