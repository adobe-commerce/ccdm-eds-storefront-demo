import { D as DEMO_CONTEXT, b as setFetchGraphQlHeader, d as DEMO_DATA_KEY } from "./chunks/searchProducts.js";
import { h, i, r, a, e, f } from "./chunks/searchProducts.js";
import { Initializer } from "@dropins/tools/lib.js";
import { events } from "@dropins/tools/event-bus.js";
import { setFetchGraphQlHeader as setFetchGraphQlHeader$1 } from "@dropins/tools/fetch-graphql.js";
const channels = {
  "Aurora": {
    id: "b726c1e9-2842-4ab5-9b19-ca65c23bbb3b",
    value: "Aurora",
    models: ["Flux", "Nexus", "Nova", "Prism", "Pulse"]
  },
  "Bolt": {
    id: "552fb8e1-978f-42c5-aab2-d96642e436d8",
    value: "Bolt",
    models: ["Atlas", "Mammoth", "Ranger", "Scout", "Terrain"]
  },
  "Cruz": {
    id: "7140c0dc-0abf-4817-91ad-22f4edceeb85",
    value: "Cruz",
    models: ["Breeze", "Echo", "Element", "Harmony", "Verde"]
  }
};
const setDemoContext = (brand) => {
  const data = channels[brand];
  window.localStorage.setItem(DEMO_CONTEXT, JSON.stringify(data));
};
const configureHeaders = (type, payload) => {
  if (type === "Brand") {
    console.log("brand changed");
    const data = channels[payload];
    setFetchGraphQlHeader("AC-Channel-Id", data.id);
    setFetchGraphQlHeader("AC-Price-Book-Id", data.value.toLowerCase());
  }
  if (type === "Model") {
    console.log("model changed");
    channels[payload];
  }
};
const initializeDemoData = () => {
  let data = window.localStorage.getItem(DEMO_DATA_KEY);
  if (data) return JSON.parse(data);
  data = JSON.stringify(channels);
  window.localStorage.setItem(DEMO_DATA_KEY, data);
  return channels;
};
const initialize = new Initializer({
  init: async (config2) => {
    const demo = initializeDemoData();
    const defaultConfig = {
      // storefrontConfig --> config ccdm/"legacy" config set up
      // searchConfig --> config for search query
      // ... other top level configs
      demo,
      storefront: {},
      search: {}
    };
    initialize.config.setConfig({
      ...defaultConfig,
      ...config2
    });
  },
  listeners: () => [
    // events.on('authenticated', (authenticated) => {
    //   console.log('authenticated', authenticated);
    // }),
    events.on("search/event", ({
      type,
      payload
    }) => {
      const channelKey = payload;
      if (type === "Brand") {
        setDemoContext(channelKey);
      }
      if (type === "Model") {
        window.localStorage.setItem("_demo:model", payload);
      }
      if (type === "PriceBook") {
        const priceBook = payload;
        window.localStorage.setItem("_demo:price-book", priceBook);
        setFetchGraphQlHeader$1("AC-Price-Book-Id", priceBook.toLowerCase());
      }
      configureHeaders(type, payload);
      window.location.reload();
    })
  ]
});
const config = initialize.config;
export {
  config,
  h as fetchGraphQl,
  i as getConfig,
  initialize,
  r as removeFetchGraphQlHeader,
  a as searchProducts,
  e as setEndpoint,
  setFetchGraphQlHeader,
  f as setFetchGraphQlHeaders
};
//# sourceMappingURL=api.js.map
