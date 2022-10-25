import { useAuth0 } from "@auth0/auth0-react";
import { IonAvatar, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

import "./Header.css";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { Spinner } from "./Spinner";

export const Header = (props: {}) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle className="title">
          <span>Home</span>
          <span>24H</span>
        </IonTitle>
        {user && (
          <>
            <IonAvatar className="avatar">
              <img src={user.picture} alt={user.name} />
            </IonAvatar>
            {user.given_name}
            {user.family_name}
            {user.email}
          </>
        )}
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </IonToolbar>
    </IonHeader>
  );
};
