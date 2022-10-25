import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import { MyContracts } from "../components/MyContracts";
import Profile from "../components/Profile";
import { Spinner } from "../components/Spinner";
import "./Home.css";

const Home = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Auth0 React Sample</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Auth0 React Sample</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <Profile />
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          <MyContracts />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
