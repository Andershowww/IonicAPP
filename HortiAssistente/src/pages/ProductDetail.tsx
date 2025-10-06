import React from 'react';
import { useParams } from 'react-router-dom';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const products = [
  { id: 1, name: 'Camiseta Ionic', price: 79.9, description: 'Confortável e estilosa.' },
  { id: 2, name: 'Boné React', price: 59.9, description: 'Ideal para devs que pensam em hooks.' },
  { id: 3, name: 'Tênis Dev', price: 299.9, description: 'Alta performance para codar em pé.' },
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Produto não encontrado</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>{product.name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>R$ {product.price.toFixed(2)}</h3>

        <IonButton expand="block" color="secondary" onClick={() => history.push('/home')}>
          Voltar
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default ProductDetail;
