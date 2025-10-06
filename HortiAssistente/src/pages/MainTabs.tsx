import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { heart, home, menu, person, search } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import Favourite from './Favourite';
import Home from './Home';
import Menu from './Menu';
import Profile from './Profile';
import Search from './Search';

const MainTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/tabs/home" component={Home} />
        <Route exact path="/tabs/favourite" component={Favourite} />
        <Route exact path="/tabs/search" component={Search} />
        <Route exact path="/tabs/profile" component={Profile} />
        <Route exact path="/tabs/menu" component={Menu} />
        <Route exact path="/tabs">
          <Redirect to="/tabs/home" />
        </Route>
      </IonRouterOutlet>

      <IonTabBar slot="bottom" style={{ '--background': '#fff', height: '60px' }}>
        <IonTabButton tab="home" href="/tabs/home">
          <IonIcon icon={home} style={{ color: '#0ca201' }} />
          <IonLabel style={{ color: '#0ca201', fontSize: '12px', fontWeight: '500' }}>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="favourite" href="/tabs/favourite">
          <IonIcon icon={heart} style={{ color: '#666' }} />
          <IonLabel style={{ color: '#666', fontSize: '12px' }}>Favourite</IonLabel>
        </IonTabButton>

        <IonTabButton tab="search" href="/tabs/search">
          <IonIcon icon={search} style={{ color: '#666' }} />
          <IonLabel style={{ color: '#666', fontSize: '12px' }}>Search</IonLabel>
        </IonTabButton>

        <IonTabButton tab="profile" href="/tabs/profile">
          <IonIcon icon={person} style={{ color: '#666' }} />
          <IonLabel style={{ color: '#666', fontSize: '12px' }}>Profile</IonLabel>
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
