import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../api.client";
import { UserDto } from "../../openapi";

const fetcher = () => {
  return apiClient.user.getAllUsers();
};

  export const useGetAllUsers = () => useQuery<UserDto[]>(["users"], fetcher);
