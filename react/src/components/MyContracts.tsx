import { useAuth0 } from "@auth0/auth0-react";
import { useGetAllContracts } from "../hooks/api/useGetContracts";
import { Spinner } from "./Spinner";

export const MyContracts = () => {
  const { isLoading: isLoadingAuth, isAuthenticated } = useAuth0();

  const {
    data,
    error,
    isLoading: isLoadingQuery,
  } = useGetAllContracts("39128722");

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

  return <div>{JSON.stringify(data)}</div>;
};
