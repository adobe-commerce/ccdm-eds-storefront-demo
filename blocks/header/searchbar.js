/* eslint-disable import/no-unresolved */

// setting importmap to `@dropins/storefront-search` doesn't seem to work anymore ???
// import { render as provider } from 'http://localhost:3002/render.js';
// import SearchPopover from 'http://localhost:3002/containers/SearchPopover.js';
import { render as provider } from "@dropins/storefront-search/render.js"
import SearchPopover from "@dropins/storefront-search/containers/SearchPopover.js";

// import { loadScript } from '../../scripts/aem.js';
import { getConfigValue } from '../../scripts/configs.js';

(async () => {
  /*
   * NOTE! There's a few ways to initialize the dropin config. Default values
   * can be set in the /scripts/initializers/search.js file. This should be the place to
   * set your default configs. You CAN pass in the default configs in this file, but they
   * will overwrite the initializer config completely.
   */

  const storeDetails = {
    // STOREFRONT CONFIG
    environmentId: await getConfigValue('commerce-environment-id'),
    environmentType: (await getConfigValue('commerce-endpoint')).includes('sandbox') ? 'testing' : '',
    apiKey: await getConfigValue('commerce-x-api-key'),
    apiUrl: await getConfigValue('commerce-endpoint'),
    websiteCode: await getConfigValue('commerce-website-code'),
    storeCode: await getConfigValue('commerce-store-code'),
    storeViewCode: await getConfigValue('commerce-store-view-code'),
    // SEARCH CONFIG
    config: {
      pageSize: 8,
      perPageConfig: {
        pageSizeOptions: '12,24,36',
        defaultPageSizeOption: '24',
      },
      minQueryLength: '2',
      currencySymbol: '$',
      currencyRate: '1',
      displayOutOfStock: true,
      allowAllProducts: false,
    },
    context: {
      // why is this different? just stick it in the storefront config
      customerGroup: await getConfigValue('commerce-customer-group'),
    },
    // ROUTE CONFIG
    route: ({ sku, urlKey }) => `/products/${urlKey}/${sku}`,
    searchRoute: {
      route: '/search',
      query: 'q',
    },
  };

  // attach the popover element to the "search_autocomplete" div
  const rootElement = document.getElementById('search_autocomplete');

  provider.render(SearchPopover, { storefrontDetails: storeDetails })(rootElement);
})();
