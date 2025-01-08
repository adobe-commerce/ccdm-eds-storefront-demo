import { initializers } from "@dropins/tools/initializer.js";
import { initialize, setEndpoint, setFetchGraphQlHeaders } from "http://localhost:5173/src/api";
import { getConfig, getConfigValue } from "../configs.js";
import { initializeDropin } from "./index.js";


// because I can already see the typo's
const terms = ["headers", "header"];

const getHeaders = (config) => {
  const headers = config.reduce((dict, { key, value }) => {
    if (terms.some(term => key.includes(term))) {
      dict[key] = value;
    }
    return dict;
  }, {});

  return headers;
};

await initializeDropin(async () => {
  const config = await getConfig();
  
  setEndpoint(await getConfigValue("commerce-endpoint"));

  const headers = getHeaders(config);
  setFetchGraphQlHeaders({
    "content-type": "application/json",
    ...headers
  })

  initializers.mountImmediately(initialize);
})();
