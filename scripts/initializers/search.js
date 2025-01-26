/* eslint-disable import/no-unresolved */
import { initializers } from '@dropins/tools/initializer.js';
import {
  initialize,
  setEndpoint,
  setFetchGraphQlHeaders,
} from 'http://localhost:3002/api.js';
// eslint-disable-next-line import/no-cycle
import { initializeDropin } from './index.js';
import { getConfigValue } from '../configs.js';
import { fetchPlaceholders } from '../aem.js';

await initializeDropin(async () => {
  // should come from getConfigValue
  const labels = await fetchPlaceholders();

  const langDefinitions = {
    default: {
      ...labels,
    },
  };

  // details of the storefront including environment id's, keys, and headers
  const storefront = {
    type: 'eds',
    environmentId: await getConfigValue('commerce-environment-id'),
    environmentType: (async () => {
      const endpoint = await getConfigValue('commerce-endpoint');
      return (endpoint.includes('sandbox')) ? 'testing' : '';
    })(),
    apiKey: await getConfigValue('commerce-x-api-key'),
    apiUrl: await getConfigValue('commerce-endpoint'),
    websiteCode: await getConfigValue('commerce-website-code'),
    storeCode: await getConfigValue('commerce-store-code'),
    storeViewCode: await getConfigValue('commerce-store-view-code'),
    customerGroup: await getConfigValue('commerce-customer-group'),
    route: ({ sku, urlKey }) => `/products/${urlKey}/${sku}`,
    // headers: getHeaders('search'),
  };

  // configurations for
  const search = {
    pageSize: 8,
    perPageConfig: {
      pageSizeOptions: [12, 24, 36],
      defaultPageSizeOption: 24,
    },
    minQueryLength: 2,
    currencySymbol: '$',
    currencyRate: 1,
    displayOutOfStock: true,
    allowAllProducts: false,
    route: {
      route: '/search',
      query: 'q',
    },
  };

  setEndpoint(await getConfigValue('commerce-endpoint'));
  setFetchGraphQlHeaders({
    'Content-Type': 'application/json',
    'AC-Environment-Id': await getConfigValue('commerce-environment-id'),
    'AC-Scope-Locale':
      (await getConfigValue('commerce-scope-locale')) ?? 'en-US',
    'X-Api-Key': await getConfigValue('commerce-x-api-key'),
    // configurable headers (for the demo);
    'AC-Channel-Id': 'b726c1e9-2842-4ab5-9b19-ca65c23bbb3b',
    'AC-Price-Book-Id': 'aurora',
    // 'AC-Policy-Model': 'Nexus',
  });

  return initializers.mountImmediately(initialize, {
    langDefinitions,
    storefront,
    search,
  });
})();
