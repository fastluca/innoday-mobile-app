import { useAuth0 } from "@auth0/auth0-react";
import { useGetAllUsers } from "../hooks/api/useGetAllUsers";
import { Spinner } from "./Spinner";

export const AppService = () => {
  const { isLoading: isLoadingAuth, isAuthenticated } = useAuth0();

  const { data: users, error, isLoading: isLoadingQuery } = useGetAllUsers();

  if (error) {
    return (
      <div>
        <p>{JSON.stringify(error)}</p>
      </div>
    );
  }

  if (isLoadingAuth || isLoadingQuery) {
    return <Spinner />;
  }

  if (!isAuthenticated) {
    return null;
  }

  return <div>{JSON.stringify(users)}</div>;
};
