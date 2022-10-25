import {
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonPage,
} from "@ionic/react";

import { useAuth0 } from "@auth0/auth0-react";
import { logoInstagram, logoTwitter, logoVimeo, share } from "ionicons/icons";
import { Header } from "../components/Header";
import { MyContracts } from "../components/MyContracts";
import { Spinner } from "../components/Spinner";

import "./Home.css";

const Home = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <Header />
        <div className="container">
          <MyContracts />
        </div>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton>
            <IonIcon icon={share} />
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton>
              <IonIcon icon={logoVimeo} />
            </IonFabButton>
          </IonFabList>
          <IonFabList side="start">
            <IonFabButton>
              <IonIcon icon={logoInstagram} />
            </IonFabButton>
          </IonFabList>
          <IonFabList side="end">
            <IonFabButton>
              <IonIcon icon={logoTwitter} />
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
