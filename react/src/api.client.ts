import { ApiMiddleware } from "./api.middleware";
import {
  Configuration,
  ConfigurationParameters,
  UserControllerV1Api,
} from "./openapi";

const configParams: ConfigurationParameters = {
  basePath: "https://app-service-atvciqi4lq-ey.a.run.app",
  middleware: [new ApiMiddleware()],
};

const apiConfig = new Configuration(configParams);

export const apiClient = {
  user: new UserControllerV1Api(apiConfig),
};

export type ApiClient = typeof apiClient;

