/* eslint-disable import/no-unresolved */
import { initializers } from '@dropins/tools/initializer.js';
import {
  initialize,
  setEndpoint,
  setFetchGraphQlHeaders,
} from '/scripts/__dropins__/storefront-search/api.js';
// eslint-disable-next-line import/no-cycle
import { initializeDropin } from './index.js';
import { getConfigValue } from '../configs.js';

await initializeDropin(async () => {
  // should come from getConfigValue
  // console.log(await getConfigValue('commerce-ccdm-enabled'));

  setEndpoint(await getConfigValue('commerce-endpoint'));
  setFetchGraphQlHeaders({
    'Content-Type': 'application/json',
    'AC-Environment-Id': await getConfigValue('commerce-environment-id'),
    'AC-Scope-Locale': await getConfigValue('commerce-scope-locale') ?? 'en-US',
    'X-Api-Key': await getConfigValue('commerce-x-api-key'),
    // configurable headers (for the demo);
    'AC-Channel-Id': 'b726c1e9-2842-4ab5-9b19-ca65c23bbb3b',
    'AC-Price-Book-Id': 'aurora',
    // 'AC-Policy-Model': 'Nexus',
  });

  return initializers.mountImmediately(initialize);
})();
