import React, { useState } from "react";
import {
  IonCard,
  IonCardContent,
  IonButton,
  IonText,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonPage,
  IonToolbar,
  IonHeader,
  IonContent,
} from "@ionic/react";
import { add, arrowBack, remove } from "ionicons/icons";
import { useHistory, useLocation } from "react-router";

const Product: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const { product } = location.state as {
    id: string;
    name: string;
    price: number;
    rating: string;
    reviews: string;
    image: string;
  };

  const unitPrice = product.price;
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
  const addUnits = (n: number) => setQuantity((q) => q + n);
  const totalPrice = (unitPrice * quantity).toFixed(2);

  return (
    <IonPage>
      {/* Cabeçalho */}
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
              Meu produto
            </IonText>
            <div style={{ width: "24px" }}></div>
          </div>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <IonCard
          style={{
            backgroundColor: "#fff",
            borderRadius: "16px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
            padding: "20px",
            maxWidth: "900px",
            margin: "16px auto",
          }}
        >
          <IonCardContent>
            <IonGrid>
              <IonRow
                className="ion-align-items-center ion-justify-content-center"
                style={{ gap: "16px" }}
              >
                {/* Imagem */}
                <IonCol
                  size="12"
                  sizeMd="5"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "80px", // aumenta o emoji
                      width: "300px",
                      height: "200px",
                      borderRadius: "12px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {product.image}
                  </p>
                </IonCol>

                {/* Informações */}
                <IonCol
                  size="12"
                  sizeMd="7"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <IonText>
                    <h2
                      style={{
                        fontWeight: "bold",
                        marginBottom: "6px",
                        lineHeight: "1.3",
                        color: "#1a1a1a",
                      }}
                    >
                      {product.name}
                    </h2>
                  </IonText>
                  <IonText>
                    <h3
                      style={{
                        fontWeight: 500,
                        marginTop: "0",
                        color: "#1a1a1a",
                      }}
                    >
                      R$ {unitPrice.toFixed(2)}
                    </h3>
                  </IonText>

                  {/* Contador */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "12px",
                      marginTop: "12px",
                    }}
                  >
                    <IonButton
                      onClick={decrease}
                      fill="outline"
                      color="medium"
                      style={{
                        borderRadius: "8px",
                        minWidth: "35px",
                        height: "35px",
                      }}
                    >
                      <IonIcon icon={remove} />
                    </IonButton>

                    <IonText
                      style={{
                        fontSize: "1.2rem",
                        minWidth: "40px",
                        color: "#000",
                        fontWeight: 600,
                      }}
                    >
                      {quantity.toString().padStart(2, "0")}
                    </IonText>

                    <IonButton
                      onClick={increase}
                      fill="outline"
                      color="medium"
                      style={{
                        borderRadius: "8px",
                        minWidth: "35px",
                        height: "35px",
                      }}
                    >
                      <IonIcon icon={add} />
                    </IonButton>
                  </div>

                  {/* Botões de quantidade rápida */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "10px",
                      marginTop: "12px",
                      flexWrap: "wrap",
                    }}
                  >
                    {[6, 10, 15].map((n) => (
                      <IonButton
                        key={n}
                        fill="outline"
                        color="medium"
                        size="small"
                        onClick={() => addUnits(n)}
                        style={{
                          borderColor: "#ccc",
                          color: "#333",
                          borderRadius: "10px",
                          textTransform: "none",
                          fontWeight: 500,
                        }}
                      >
                        + {n} un.
                      </IonButton>
                    ))}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      marginTop: "16px",
                      flexWrap: "wrap",
                    }}
                  >
                    <IonButton
                      color="success"
                      style={{
                        fontWeight: "bold",
                        borderRadius: "25px",
                        color: "#000",
                        padding: "10px 20px",
                        textTransform: "uppercase",
                      }}
                    >
                      ADICIONAR ({quantity})
                    </IonButton>
                    <IonText
                      style={{
                        fontWeight: "bold",
                        color: "#000",
                        fontSize: "1.1rem",
                      }}
                    >
                      R$ {totalPrice}
                    </IonText>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Product;
