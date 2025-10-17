import { Redirect, Route } from 'react-router-dom';
import { IonApp, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Cart from './pages/Cart';
import OrderReview from './pages/OrderReview';
import MyFridge from './pages/MyFridge';

/* Core CSS */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';

/* Theme */
import './theme/variables.css';

import MainTabs from './pages/MainTabs';
import ProductDetail from './pages/ProductDetail';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Route path="/tabs">
        <MainTabs />
      </Route>
      <Route exact path="/product/:id" component={ProductDetail} />
      <Route exact path="/">
        <Redirect to="/tabs/home" />
      </Route>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/review" component={OrderReview} />
        <Route exact path="/myfridge" component={MyFridge} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
