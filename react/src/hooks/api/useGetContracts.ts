import { isError, useQuery } from "@tanstack/react-query";
import { apiClient } from "../../api.client";
import { useDefaultInitBuilder } from "./useDefaultInit";

export const useGetAllContracts = (partnerNumber: string) => {
  const buildDefaultInit = useDefaultInitBuilder();

  return useQuery(["contracts", partnerNumber], async () => {
    try {
      return await apiClient.contract.getContracts(
        { partnerNumber },
        await buildDefaultInit()
      );
    } catch (e) {
      if (isError(e)) {
        console.error(e.message);
      } else {
        console.error(e);
      }
    }
  });
};
