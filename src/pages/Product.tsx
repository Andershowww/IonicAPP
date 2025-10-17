import React from "react";
import { IonIcon, IonText } from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { IonPage, IonContent } from "@ionic/react";
import pizza from "../assets/pizza.jpg";
import baitaSuper from "../assets/baita-super.jpg";
import mercadoOliveira from "../assets/mercado-oliveira.jpg";
import { useHistory } from "react-router-dom";
import Card from "../components/CardCounter";

const Product: React.FC = () => {
  const history = useHistory();

  const market = [
    {id: 1, name: "Baita Super", price: 3.99, rating: 4.8, reviews: 287, image: (<img src={baitaSuper} alt="Baita Super" style={{ borderRadius: "10px" }}/>)},
    {id: 2, name: "Mercado Oliveira", price: 4.0, rating: 4.8, reviews: 287, image: (<img src={mercadoOliveira} alt="Mercado Oliveira" style={{ borderRadius: "10px" }}/>)},
  ];

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 16px", height: "48px" }}>
          <IonIcon icon={arrowBack} style={{ fontSize: "24px", color: "#1a1a1a", cursor: "pointer" }} onClick={() => history.push("/home")} />
          <IonText style={{ fontSize: "16px", fontWeight: "600", color: "#1a1a1a" }}>Selecionar Produto</IonText>
          <div style={{ width: "24px" }}></div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <img src={pizza} alt="Logo do App" style={{ width: "400px", height: "150px", borderRadius: "20px", objectFit: "cover" }} />
          </div>

          <div>
            <h1>Pizza 🌿</h1>
            <p style={{ color: "#4B5563", fontWeight: "lighter" }}>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
          </div>

          <h3 style={{ textAlign: "center" }}>Destaques</h3>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", overflowX: "auto", paddingBottom: "16px", scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {market.map((market) => (
              <Card key={market.id} name={market.name} price={market.price} rating={market.rating} reviews={market.reviews} image={market.image} />
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Product;
