import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonToolbar,
  IonSpinner,
} from "@ionic/react";
import { arrowBack, chevronForward } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { FirebaseService } from "../service/firebaseService";

interface Order {
  id: string;
  date: string;
  status: "entregue" | "em_transito" | "cancelado";
  valorTotal: number;
  items: number;
}

const MyOrders: React.FC = () => {
  const history = useHistory();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "entregue":
        return "#16a34a";
      case "em_transito":
        return "#f59e0b";
      case "cancelado":
        return "#dc2626";
      default:
        return "#6b7280";
    }
  };

  const getStatusText = (status: Order["status"]) => {
    switch (status) {
      case "entregue":
        return "Entregue";
      case "em_transito":
        return "Em Trânsito";
      case "cancelado":
        return "Cancelado";
      default:
        return status;
    }
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const service = new FirebaseService();
        const data = await service.getOrders();
        setOrders(data as Order[]);
      } catch (error) {
        console.error("Erro ao buscar pedidos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar
          style={{
            "--background": "#fff",
            "--padding-top": "8px",
            "--padding-bottom": "8px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 16px",
              height: "48px",
            }}
          >
            <IonIcon
              icon={arrowBack}
              style={{
                fontSize: "24px",
                color: "#1a1a1a",
                cursor: "pointer",
              }}
              onClick={() => history.goBack()}
            />
            <IonText
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#1a1a1a",
              }}
            >
              Meus Pedidos
            </IonText>

            <div style={{ width: "24px" }}></div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen style={{ "--background": "#f9fafb" }}>
        <div style={{ padding: "16px" }}>
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "70vh",
              }}
            >
              <IonSpinner name="crescent" />
            </div>
          ) : orders.length === 0 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "48px 16px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "64px", marginBottom: "16px" }}>📦</div>
              <IonText
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#1a1a1a",
                }}
              >
                Nenhum pedido ainda
              </IonText>
              <IonText
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  marginTop: "8px",
                }}
              >
                Seus pedidos aparecerão aqui
              </IonText>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {orders.map((order) => (
                <div
                  key={order.id}
                  onClick={() => {
                    if (order.status === "entregue") {
                      history.push(`/review/${order.id}`); 
                    } else {
                      history.push(`/track-order`); 
                    }}}
                  style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "16px",
                    cursor: "pointer",
                    transition: "transform 0.2s",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "12px",
                    }}
                  >
                    <div>
                      <IonText
                        style={{
                          fontSize: "16px",
                          fontWeight: "600",
                          color: "#1a1a1a",
                          display: "block",
                        }}
                      >
                        Pedido #{order.id}
                      </IonText>
                      <IonText
                        style={{
                          fontSize: "13px",
                          color: "#6b7280",
                          display: "block",
                          marginTop: "4px",
                        }}
                      >
                        {order.date} • {order.items}{" "}
                        {order.items === 1 ? "item" : "itens"}
                      </IonText>
                    </div>

                    <IonIcon
                      icon={chevronForward}
                      style={{
                        fontSize: "20px",
                        color: "#d1d5db",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: "12px",
                      borderTop: "1px solid #f3f4f6",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        background: `${getStatusColor(order.status)}15`,
                        padding: "4px 12px",
                        borderRadius: "20px",
                      }}
                    >
                      <IonText
                        style={{
                          fontSize: "12px",
                          fontWeight: "600",
                          color: getStatusColor(order.status),
                        }}
                      >
                        {getStatusText(order.status)}
                      </IonText>
                    </div>

                    <IonText
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#1a1a1a",
                      }}
                    >
                      R$ {(order?.valorTotal?? 0).toFixed(2)}
                    </IonText>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MyOrders;
