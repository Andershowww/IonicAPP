import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonToolbar,
  IonItem,
  IonLabel,
  IonRadio,
  IonRadioGroup,
  IonToggle,
  IonCard,
  IonCardContent
} from '@ionic/react';
import { arrowBack, checkmark, time, documentText, card } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseService } from '../service/firebaseService';

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

  interface Product {
    id: string;
    name: string;
    price: number;
    quantity: number;
    totalPrice: string;
  }
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedDelivery, setSelectedDelivery] = useState('priority');
  const [requestInvoice, setRequestInvoice] = useState(false);
  const [orderSummary, setOrderSummary] = useState<OrderSummary>({
    subtotal: 0,
    bagFee: 0,
    serviceFee: 0,
    delivery: 0,
    total: 0,
    itemCount: 0
  });

  useEffect(() => {
    // Lê o localStorage
    const cartData = localStorage.getItem('cart');
    console.log("order sumary",cartData)
    if (cartData) {
      const parsedProducts: Product[] = JSON.parse(cartData);
      setProducts(parsedProducts);
      
      const subtotal = parsedProducts.reduce((sum, p) => sum + p.price * p.quantity, 0);
      const bagFee = 0.25;
      const serviceFee = 5.25;
      const delivery = 20;
      const total = subtotal + bagFee + serviceFee + delivery;
     
      setOrderSummary({
        subtotal,
        bagFee,
        serviceFee,
        delivery,
        total,
        itemCount: parsedProducts.reduce((sum, p) => sum + p.quantity, 0)
      });
    }
  }, []);
  const deliveryOptions: DeliveryOption[] = [
    {
      id: 'Entrega rápida',
      name: 'Entrega rápida',
      time: '10 - 20 mins',
      price: 0,
      selected: true
    },
    {
      id: 'Normal',
      name: 'Normal',
      time: '30 - 45 mins',
      price: 0,
      selected: false
    },
    {
      id: 'Agendar',
      name: 'Agendar',
      time: 'Agendar',
      price: 0,
      selected: false
    }
  ];

  const handleDeliveryChange = (value: string) => {
    setSelectedDelivery(value);
  };

  // AJUSTADO: Redireciona para TrackOrder após finalizar
  const handlePlaceOrder = () => {

    const service = new FirebaseService()
    service.createOrder({
      clienteId: "1",
      produtos: products.map(p => ({ name: p.name, quantity: p.quantity, price: p.price })),
      status: "pendente",
      valorTotal: orderSummary.total,
    });
    console.log('Pedido realizado:', {
      delivery: selectedDelivery,
      invoice: requestInvoice,
      total: orderSummary.total
    });
    history.push('/track-order'); // Redireciona para tela de acompanhamento
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
            <IonText style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a', marginBottom: '16px', display: 'block' }}>
              
              Resumo do Pedido ({orderSummary.itemCount} itens)
            </IonText>
            <IonCard style={{ margin: 0, borderRadius: '12px' }}>
              <IonCardContent style={{ padding: '16px' }}>
                {products.map((p, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <IonText style={{ fontSize: '14px', color: '#fff' }}>{p.name} x{p.quantity}</IonText>
                    <IonText style={{ fontSize: '14px', color: '#fff' }}>R$ {(p.price * p.quantity).toFixed(2)}</IonText>
                  </div>
                ))}

                <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <IonText style={{ fontSize: '14px', color: '#fff' }}>Subtotal</IonText>
                    <IonText style={{ fontSize: '14px', color: '#fff' }}>{orderSummary.subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</IonText>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <IonText style={{ fontSize: '14px', color: '#fff' }}>Taxa da sacola</IonText>
                    <IonText style={{ fontSize: '14px', color: '#fff' }}>{orderSummary.bagFee.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</IonText>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <IonText style={{ fontSize: '14px', color: '#fff' }}>Taxa de serviço</IonText>
                    <IonText style={{ fontSize: '14px', color: '#fff' }}>{orderSummary.serviceFee.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</IonText>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <IonText style={{ fontSize: '14px', color: '#fff' }}>Entrega</IonText>
                    <IonText style={{ fontSize: '14px', color: '#fff' }}>{orderSummary.delivery.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</IonText>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: 600 }}>
                    <IonText>Total</IonText>
                    <IonText> {orderSummary.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</IonText>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
                    <IonText style={{ fontSize: '14px', color: '#666' }}>Solicitar nota fiscal</IonText>
                    <IonToggle checked={requestInvoice} onIonChange={e => setRequestInvoice(e.detail.checked)} style={{ '--background': '#e5e7eb', '--background-checked': '#16a34a' }} />
                  </div>
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
                      Google Pay
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
