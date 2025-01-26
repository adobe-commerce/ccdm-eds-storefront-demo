/* eslint-disable import/no-unresolved */
// uncomment this line if you are using the local version
// import { render as provider } from 'http://localhost:3002/render.js';
import { ProductListingPage } from 'http://localhost:3002/containers/ProductListingPage.js';
// import { ProductListingPage } from 'http://localhost:3002/src/containers/ProductListingPage/ProductListingPage.tsx';
// import { LiveSearchPLP } from 'http://localhost:3002/src/index.tsx';
// import { LiveSearchPLP } from 'http://localhost:4173/search.es.js';
// import { LiveSearchPLP } from 'http://localhost:4173/search.css';
import { readBlockConfig } from '../../scripts/aem.js';
import { getConfigValue } from '../../scripts/configs.js';

export default async function decorate(block) {
  const { category, urlpath, type } = readBlockConfig(block);

  block.textContent = '';

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
        defaultPageSizeOption: '12',
      },
      minQueryLength: '2',
      currencySymbol: '$',
      currencyRate: '1',
      displayOutOfStock: true,
      allowAllProducts: false,
      imageCarousel: false,
      optimizeImages: true,
      imageBaseWidth: 200,
      listview: true,
      displayMode: '', // "" for plp || "PAGE" for category/catalog
      addToCart: async (...args) => {
        const { addProductsToCart } = await import('../../scripts/__dropins__/storefront-cart/api.js');
        await addProductsToCart([{
          sku: args[0],
          options: args[1],
          quantity: args[2],
        }]);
      },
    },
    context: {
      customerGroup: await getConfigValue('commerce-customer-group'),
    },
    route: ({ sku, urlKey }) => {
      const a = new URL(window.location.origin);
      a.pathname = `/products/${urlKey}/${sku}`;
      return a.toString();
    },
  };

  // for non search pages
  if (type !== 'search') {
    storeDetails.config.categoryName = document.querySelector('.default-content-wrapper > h1')?.innerText;
    storeDetails.config.currentCategoryId = category;
    storeDetails.config.currentCategoryUrlPath = urlpath;

    // Enable enrichment
    block.dataset.category = category;
  }

  const widget = document.createElement('div');
  block.appendChild(widget);

  // TODO: SVG issue causes either local rendering or static rendering to break.
  // You have to pick one. If you want local rendering to work, then in the
  // icons/index.ts you have to add back `?react` at end of imports.
  ProductListingPage({ storeDetails, root: widget });
  // provider.render(ProductListingPage, { storefrontDetails: storeDetails })(widget);
}
