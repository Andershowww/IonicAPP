import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { cart, home, menu, person } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import Search from './Search';
import Cart from './Cart';
import MyFridge from './MyFridge';
import MyOrders from './MyOrders';


const MainTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/tabs/home" component={Home} />
        <Route exact path="/tabs/cart" component={Cart} />
        <Route exact path="/tabs/search" component={Search} />
        <Route exact path="/tabs/myfridge" component={MyFridge} />
        <Route exact path="/tabs/menu" component={Menu} />
        <Route exact path="/tabs/myorders" component={MyOrders} />        
        <Route exact path="/tabs">
          <Redirect to="/tabs/home" />
        </Route>
      </IonRouterOutlet>

      <IonTabBar slot="bottom" style={{ '--background': '#fff', height: '60px' }}>
        <IonTabButton tab="home" href="/tabs/home">
          <IonIcon icon={home} style={{ color: '#0ca201' }} />
          <IonLabel style={{ color: '#0ca201', fontSize: '12px', fontWeight: '500' }}>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="cart" href="/tabs/cart">
          <IonIcon icon={cart} style={{ color: '#666' }} />
          <IonLabel style={{ color: '#666', fontSize: '12px' }}>Sacola</IonLabel>
        </IonTabButton>
        
        <IonTabButton tab="myfridge" href="/tabs/myfridge">
          <IonIcon icon={person} style={{ color: '#666' }} />
          <IonLabel style={{ color: '#666', fontSize: '12px' }}>Geladeira</IonLabel>
        </IonTabButton>

        <IonTabButton tab="menu" href="/tabs/menu">
          <IonIcon icon={menu} style={{ color: '#666' }} />
          <IonLabel style={{ color: '#666', fontSize: '12px' }}>Menu</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;
