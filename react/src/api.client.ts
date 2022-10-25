import {
  Configuration,
  ConfigurationParameters,
  ContractControllerV1Api,
  UserControllerV1Api,
} from "./openapi";

const configParams: ConfigurationParameters = {
  basePath: "https://app-service-atvciqi4lq-ey.a.run.app",
  middleware: [],
};

const apiConfig = new Configuration(configParams);

export const apiClient = {
  user: new UserControllerV1Api(apiConfig),
  contract: new ContractControllerV1Api(apiConfig),
};

export type ApiClient = typeof apiClient;
