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

/* Theme */
import './theme/variables.css';
import Profile from './pages/Profile';
import Address from './pages/Address';
import CustomSplash from "./components/CustomSplash";
import TrackOrder from './pages/TrackOrder';
import Cart from './pages/Cart';


setupIonicReact();

const App: React.FC = () => (
  <>
  <CustomSplash />
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/tabs" component={MainTabs} />
        <Route exact path="/review" component={OrderReview} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/product-selection" component={ProductSelection} />
        <Route exact path="/myorders" component={MyOrders} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/track-order" component={TrackOrder} />
        <Route exact path="/address" component={Address} />
        <Route exact path="/">
          <Redirect to="/tabs/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
  </>
);

export default App;
