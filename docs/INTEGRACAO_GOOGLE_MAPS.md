# Integração Simples com Google Maps em Aplicações React/Ionic

Este documento descreve como integrar de forma simples o Google Maps em uma aplicação React/Ionic utilizando a biblioteca `@react-google-maps/api`.

---

## Passos para Integração

### 1. Obtenha sua API Key do Google Maps

- Acesse o [Google Cloud Console](https://console.cloud.google.com/).
- Crie um projeto ou selecione um existente.
- Habilite a **Maps JavaScript API**.
- Gere uma **API Key**.

> **Importante:** Restrinja sua API Key para maior segurança.

---

### 2. Instale a biblioteca

No terminal do projeto, execute:

```bash
npm install @react-google-maps/api
```

---

### 3. Crie o Componente de Mapa

Crie um arquivo, por exemplo: `src/components/SimpleMap.tsx`

```tsx
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '390px'
};

const center = {
  lat: -23.55052,    // Latitude de exemplo (São Paulo)
  lng: -46.633308    // Longitude de exemplo (São Paulo)
};

export default function SimpleMap() {
  return (
    <LoadScript googleMapsApiKey="SUA_API_KEY_AQUI">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
```

Troque `"SUA_API_KEY_AQUI"` pela sua chave do Google Maps.

---

### 4. Utilize o Mapa na Tela Desejada

No arquivo da tela onde deseja exibir o mapa (ex: `TrackOrder.tsx`):

```tsx
import SimpleMap from '../components/SimpleMap';

const TrackOrder: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        {/* ...outras seções */}
        <SimpleMap />
        {/* ...outras seções */}
      </IonContent>
    </IonPage>
  );
};
```

---

## Dicas Adicionais

- Para adicionar múltiplos marcadores, utilize múltiplos componentes `<Marker />` dentro do `<GoogleMap />`.
- Você pode customizar o centro do mapa e o zoom dinamicamente através de props.
- A biblioteca oferece recursos para rotas, eventos de clique, customização de ícones e muito mais.

---

## Referências

- [Documentação oficial @react-google-maps/api](https://react-google-maps-api-docs.netlify.app/)
- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview)

---

## Exemplo de Uso Rápido

```tsx
<SimpleMap />
```

---

## Segurança

- Sempre restrinja o uso da sua API Key no Google Cloud Console para domínios/autorização da sua aplicação.

---

Com esses passos, a integração do Google Maps estará pronta e funcional em seu app React/Ionic.
