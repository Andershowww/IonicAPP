import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import MainTabs from './pages/MainTabs';
import OrderReview from './pages/OrderReview';
import Product from './pages/Product';
import MyOrders from './pages/MyOrders';
import Payment from './pages/Payment';
import ProductSelection from './pages/ProductSelection';

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
import { SplashScreen } from '@capacitor/splash-screen';

/* Theme */
import './theme/variables.css';
import Profile from './pages/Profile';
import Address from './pages/Address';
import { useEffect } from 'react';

setupIonicReact();

const App: React.FC = () => {
useEffect(() => {
    // Esconde manualmente o splash após 2 segundos
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  
  return(
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/tabs" component={MainTabs} />
        <Route exact path="/review" component={OrderReview} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/product-selection" component={ProductSelection} />
        <Route exact path="/myorders" component={MyOrders} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/address" component={Address} />
        <Route exact path="/">
          <Redirect to="/tabs/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)};

export default App;
