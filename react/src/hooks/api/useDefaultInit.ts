import { useAuth0 } from "@auth0/auth0-react";
import { isError } from "@tanstack/react-query";

export const useDefaultInitBuilder = () => {
  const { getAccessTokenSilently } = useAuth0();

  return async () => {
    try {
      const accessToken = await getAccessTokenSilently({
        audience: "https://neo.axa.ch",
        scope: "openid email",
      });

      return {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
    } catch (e) {
      if (isError(e)) {
        console.error(e.message);
      } else {
        console.error(e);
      }
    }
  };
};
