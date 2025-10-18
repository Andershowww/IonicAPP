import {
    IonContent,
    IonHeader,
    IonIcon,
    IonPage,
    IonText,
    IonToolbar,
    IonButton,
    IonList,
    IonItem,
    IonLabel,
    IonRadio,
    IonRadioGroup,
    IonToggle,
    IonCard,
    IonCardContent
  } from '@ionic/react';
  import { arrowBack, checkmark, time, documentText, card } from 'ionicons/icons';
  import React, { useState } from 'react';
  import { useHistory } from 'react-router-dom';
  
  interface DeliveryOption {
    id: string;
    name: string;
    time: string;
    price: number;
    selected: boolean;
  }
  
  interface OrderSummary {
    subtotal: number;
    bagFee: number;
    serviceFee: number;
    delivery: number;
    total: number;
    itemCount: number;
  }
  
  const Payment: React.FC = () => {
    const history = useHistory();
    
    const [selectedDelivery, setSelectedDelivery] = useState('priority');
    const [requestInvoice, setRequestInvoice] = useState(false);
    
    const deliveryOptions: DeliveryOption[] = [
      {
        id: 'priority',
        name: 'Priority',
        time: '10 - 20 mins',
        price: 0,
        selected: true
      },
      {
        id: 'standard',
        name: 'Standard',
        time: '30 - 45 mins',
        price: 0,
        selected: false
      },
      {
        id: 'schedule',
        name: 'Schedule',
        time: 'Agendar',
        price: 0,
        selected: false
      }
    ];
  
    const orderSummary: OrderSummary = {
      subtotal: 40.25,
      bagFee: 0.25,
      serviceFee: 5.25,
      delivery: 0.00,
      total: 49.00,
      itemCount: 12
    };
  
    const handleDeliveryChange = (value: string) => {
      setSelectedDelivery(value);
    };
  
    const handlePlaceOrder = () => {
      console.log('Pedido realizado:', {
        delivery: selectedDelivery,
        invoice: requestInvoice,
        total: orderSummary.total
      });
      
      history.push('/review');
    };
  
    return (
      <IonPage>
        {/* Header */}
        <IonHeader className="ion-no-border">
          <IonToolbar style={{ '--background': '#fff', '--padding-top': '8px', '--padding-bottom': '8px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 16px',
              height: '48px'
            }}>
              {/* Botão de voltar */}
              <IonIcon
                icon={arrowBack}
                style={{
                  fontSize: '24px',
                  color: '#1a1a1a',
                  cursor: 'pointer'
                }}
                onClick={() => history.push('/tabs/cart')}
              />
  
              {/* Título */}
              <IonText style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#1a1a1a'
              }}>
                Checkout
              </IonText>
  
              <div style={{ width: '24px' }}></div>
            </div>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen style={{ '--background': '#f9fafb' }}>
          <div style={{ padding: '16px', paddingBottom: '120px' }}>
            
            {/* Delivery Options Section */}
            <div style={{ marginBottom: '24px' }}>
              <IonText style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#1a1a1a',
                marginBottom: '16px',
                display: 'block'
              }}>
                Opções de Entrega
              </IonText>
              
              <IonCard style={{ margin: 0, borderRadius: '12px' }}>
                <IonCardContent style={{ padding: 0 }}>
                  <IonRadioGroup value={selectedDelivery} onIonChange={e => handleDeliveryChange(e.detail.value)}>
                    {deliveryOptions.map((option, index) => (
                      <div key={option.id}>
                        <IonItem 
                          lines={index < deliveryOptions.length - 1 ? "full" : "none"}
                          style={{ '--background': '#fff', '--padding-start': '16px', '--padding-end': '16px' }}
                        >
                          <IonIcon 
                            icon={option.id === 'schedule' ? time : documentText} 
                            slot="start" 
                            style={{ color: '#666', fontSize: '20px' }}
                          />
                          <IonLabel>
                            <div style={{ fontSize: '14px', fontWeight: '500', color: '#1a1a1a' }}>
                              {option.name}
                            </div>
                            <div style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>
                              {option.time}
                            </div>
                          </IonLabel>
                          <IonRadio slot="end" value={option.id} />
                        </IonItem>
                      </div>
                    ))}
                  </IonRadioGroup>
                </IonCardContent>
              </IonCard>
            </div>
  
            {/* Order Summary Section */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px'
              }}>
                <IonText style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#1a1a1a'
                }}>
                  Resumo do Pedido ({orderSummary.itemCount} itens)
                </IonText>
                <IonIcon icon={arrowBack} style={{ 
                  transform: 'rotate(180deg)', 
                  fontSize: '16px', 
                  color: '#666' 
                }} />
              </div>
              
              <IonCard style={{ margin: 0, borderRadius: '12px' }}>
                <IonCardContent style={{ padding: '16px' }}>
                  <div style={{ marginBottom: '12px' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px'
                    }}>
                      <IonText style={{ fontSize: '14px', color: '#666' }}>Subtotal</IonText>
                      <IonText style={{ fontSize: '14px', color: '#1a1a1a' }}>
                        R$ {orderSummary.subtotal.toFixed(2)}
                      </IonText>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px'
                    }}>
                      <IonText style={{ fontSize: '14px', color: '#666' }}>Taxa da sacola</IonText>
                      <IonText style={{ fontSize: '14px', color: '#1a1a1a' }}>
                        R$ {orderSummary.bagFee.toFixed(2)}
                      </IonText>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px'
                    }}>
                      <IonText style={{ fontSize: '14px', color: '#666' }}>Taxa de serviço</IonText>
                      <IonText style={{ fontSize: '14px', color: '#1a1a1a' }}>
                        R$ {orderSummary.serviceFee.toFixed(2)}
                      </IonText>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '12px'
                    }}>
                      <IonText style={{ fontSize: '14px', color: '#666' }}>Entrega</IonText>
                      <IonText style={{ fontSize: '14px', color: '#1a1a1a' }}>
                        R$ {orderSummary.delivery.toFixed(2)}
                      </IonText>
                    </div>
                    
                    <div style={{
                      borderTop: '1px solid #e5e7eb',
                      paddingTop: '12px',
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}>
                      <IonText style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a' }}>
                        Total
                      </IonText>
                      <IonText style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a' }}>
                        R$ {orderSummary.total.toFixed(2)}
                      </IonText>
                    </div>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '16px'
                  }}>
                    <IonText style={{ fontSize: '14px', color: '#666' }}>
                      Solicitar nota fiscal
                    </IonText>
                    <IonToggle 
                      checked={requestInvoice} 
                      onIonChange={e => setRequestInvoice(e.detail.checked)}
                      style={{ '--background': '#e5e7eb', '--background-checked': '#16a34a' }}
                    />
                  </div>
                </IonCardContent>
              </IonCard>
            </div>
  
            {/* Payment Method Section */}
            <div>
              <IonText style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#1a1a1a',
                marginBottom: '16px',
                display: 'block'
              }}>
                Método de Pagamento
              </IonText>
              
              <IonCard style={{ margin: 0, borderRadius: '12px' }}>
                <IonCardContent style={{ padding: 0 }}>
                  <IonItem style={{ '--background': '#fff', '--padding-start': '16px', '--padding-end': '16px' }}>
                    <IonIcon icon={card} slot="start" style={{ color: '#666', fontSize: '20px' }} />
                    <IonLabel>
                      <div style={{ fontSize: '14px', fontWeight: '500', color: '#1a1a1a' }}>
                        Apple Pay
                      </div>
                    </IonLabel>
                    <IonIcon icon={arrowBack} slot="end" style={{ 
                      transform: 'rotate(180deg)', 
                      fontSize: '16px', 
                      color: '#666' 
                    }} />
                  </IonItem>
                </IonCardContent>
              </IonCard>
            </div>
          </div>
  
          {/* Bottom Action Button */}
          <div style={{
            position: 'fixed',
            bottom: '0',
            left: '0',
            right: '0',
            background: '#fff',
            padding: '16px',
            borderTop: '1px solid #f3f4f6'
          }}>
            <button 
              onClick={handlePlaceOrder}
              style={{
                width: '100%',
                background: '#16a34a',
                color: '#fff',
                fontWeight: '600',
                padding: '16px',
                borderRadius: '16px',
                border: 'none',
                fontSize: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              Finalizar Pedido
              <IonIcon icon={checkmark} style={{ fontSize: '20px' }} />
            </button>
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Payment;
