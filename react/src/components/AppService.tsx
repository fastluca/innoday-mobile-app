import { useAuth0 } from "@auth0/auth0-react";

export const AppService = (props: {}) => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return null;
  }

  if (!isAuthenticated) {
    return null;
  }

  return <div>hello app service</div>;
};
