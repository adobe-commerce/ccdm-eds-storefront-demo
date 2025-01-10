import { f, g, r, b, s, c, a } from "./chunks/searchProducts.js";
import { Initializer } from "@dropins/tools/lib.js";
import "./chunks/currency-symbol-map.js";
import "@dropins/tools/fetch-graphql.js";
const initialize = new Initializer({
  init: async (config2) => {
    const defaultConfig = {};
    initialize.config.setConfig({
      ...defaultConfig,
      ...config2
    });
  },
  listeners: () => [
    // events.on('authenticated', (authenticated) => {
    //   console.log('authenticated', authenticated);
    // }),
  ]
});
const config = initialize.config;
export {
  config,
  f as fetchGraphQl,
  g as getConfig,
  initialize,
  r as removeFetchGraphQlHeader,
  b as searchProducts,
  s as setEndpoint,
  c as setFetchGraphQlHeader,
  a as setFetchGraphQlHeaders
};
//# sourceMappingURL=api.js.map
