import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonCard,
  IonCardContent,
  IonButton,
  IonIcon,
  IonText,
} from "@ionic/react";
import { trash, cart, arrowBack } from "ionicons/icons";
import { useCart } from "../context/CartContext";
import { useHistory } from "react-router";

const CartPage: React.FC = () => {
  const { cartContext, removeFromCart, clearCart } = useCart();
  const history = useHistory();

  const totalAmount = cartContext.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar style={{ "--background": "#fff" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 16px",
              height: "56px",
            }}
          >
            <button
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => history.goBack()}
            >
              <IonIcon
                icon={arrowBack}
                style={{
                  fontSize: "24px",
                  color: "#1a1a1a",
                }}
              />
            </button>
            <IonText
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#1a1a1a",
              }}
            >
              Sacola
            </IonText>
            <div style={{ width: "24px" }}></div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {cartContext.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              marginTop: "50%",
              color: "#6b7280",
            }}
          >
            <IonIcon
              icon={cart}
              style={{ fontSize: "60px", marginBottom: "16px" }}
            />
            <h2>Seu carrinho está vazio</h2>
            <p>Adicione produtos para começar a comprar.</p>
          </div>
        ) : (
          <>
            {cartContext.map((item) => (
              <IonCard key={item.id} style={{ marginBottom: "12px" }}>
                <IonCardContent
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                    backgroundColor: "white",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "#f3f4f6",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "28px",
                    }}
                  >
                    {item.image}
                  </div>

                  <div style={{ flex: 1 }}>
                    <IonText style={{ fontWeight: 600 }}>{item.name}</IonText>
                    <p style={{ margin: 0, color: "#6b7280" }}>
                      R$ {item.price.toFixed(2)} x {item.quantity} = R${" "}
                      {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <IonButton
                    color="danger"
                    fill="outline"
                    size="small"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <IonIcon icon={trash} />
                  </IonButton>
                </IonCardContent>
              </IonCard>
            ))}

            {/* Total */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "16px",
                marginBottom: "16px",
              }}
            >
              <IonText style={{ fontWeight: "bold", fontSize: "18px" }}>
                Total:
              </IonText>
              <IonText style={{ fontWeight: "bold", fontSize: "18px" }}>
                R$ {totalAmount.toFixed(2)}
              </IonText>
            </div>

            {/* Ações */}
            <div style={{ display: "flex", gap: "12px" }}>
              <IonButton color="danger" expand="block" onClick={clearCart}>
                Limpar Carrinho
              </IonButton>
              <IonButton color="success" expand="block">
                Finalizar Compra
              </IonButton>
            </div>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default CartPage;
