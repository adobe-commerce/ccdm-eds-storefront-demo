/* eslint-disable import/no-unresolved */

// setting importmap to `@dropins/storefront-search` doesn't seem to work anymore ???
import { render as provider } from 'http://localhost:3002/render.js';
import SearchPopover from 'http://localhost:3002/containers/SearchPopover.js';

// import { loadScript } from '../../scripts/aem.js';
import { getConfigValue } from '../../scripts/configs.js';

(async () => {
  // const widgetProd = '/scripts/widgets/SearchAsYouType.js';
  // await loadScript(widgetProd);

  const storeDetails = {
    environmentId: await getConfigValue('commerce-environment-id'),
    environmentType: (await getConfigValue('commerce-endpoint')).includes('sandbox') ? 'testing' : '',
    apiKey: await getConfigValue('commerce-x-api-key'),
    apiUrl: await getConfigValue('commerce-endpoint'),
    websiteCode: await getConfigValue('commerce-website-code'),
    storeCode: await getConfigValue('commerce-store-code'),
    storeViewCode: await getConfigValue('commerce-store-view-code'),
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
      customerGroup: await getConfigValue('commerce-customer-group'),
    },
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
