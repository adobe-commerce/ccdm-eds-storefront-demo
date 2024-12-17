// import { LiveSearchPLP } from 'http://localhost:8081/src/plp/LiveSearchPLP.tsx';
// import { readBlockConfig } from '../../scripts/aem.js';
// import { getConfigValue } from '../../scripts/configs.js';

// export default async function decorate(block) {
//   // eslint-disable-next-line import/no-absolute-path, import/no-unresolved
//   // await import('/scripts/widgets/search.js');

//   const { category, urlpath, type } = readBlockConfig(block);
//   block.textContent = '';

//   const storeDetails = {
//     // STOREFRONT CONFIG
//     environmentId: await getConfigValue('commerce-environment-id'),
//     environmentType: (await getConfigValue('commerce-endpoint')).includes('sandbox') ? 'testing' : '',
//     apiKey: await getConfigValue('commerce-x-api-key'),
//     apiUrl: await getConfigValue('commerce-endpoint'),
//     websiteCode: await getConfigValue('commerce-website-code'),
//     storeCode: await getConfigValue('commerce-store-code'),
//     storeViewCode: await getConfigValue('commerce-store-view-code'),
//     // SEARCH CONFIG
//     config: {
//       pageSize: 8,
//       perPageConfig: {
//         pageSizeOptions: '12,24,36',
//         defaultPageSizeOption: '12',
//       },
//       minQueryLength: '2',
//       currencySymbol: '$',
//       currencyRate: '1',
//       displayOutOfStock: true,
//       allowAllProducts: false,
//       imageCarousel: false,
//       optimizeImages: true,
//       imageBaseWidth: 200,
//       listview: true,
//       displayMode: '', // "" for plp || "PAGE" for category/catalog
//       addToCart: async (...args) => {
//         const { addProductsToCart } = await import('../../scripts/__dropins__/storefront-cart/api.js');
//         await addProductsToCart([{
//           sku: args[0],
//           options: args[1],
//           quantity: args[2],
//         }]);
//       },
//     },
//     context: {
//       customerGroup: await getConfigValue('commerce-customer-group'),
//     },
//     route: ({ sku, urlKey }) => {
//       const a = new URL(window.location.origin);
//       a.pathname = `/products/${urlKey}/${sku}`;
//       return a.toString();
//     },
//   };

//   if (type !== 'search') {
//     storeDetails.config.categoryName = document.querySelector('.default-content-wrapper > h1')?.innerText;
//     storeDetails.config.currentCategoryId = category;
//     storeDetails.config.currentCategoryUrlPath = urlpath;

//     // Enable enrichment
//     block.dataset.category = category;
//   }

//   // await new Promise((resolve) => {
//   //   const interval = setInterval(() => {
//   //     if (window.LiveSearchPLP) {
//   //       clearInterval(interval);
//   //       resolve();
//   //     }
//   //   }, 200);
//   // });

//   return LiveSearchPLP({ storeDetails, root: block });
// }

import { LiveSearchPLP } from 'http://localhost:8081/src/plp/LiveSearchPLP.tsx';
import { render as provider } from 'http://localhost:3002/render.js';
import { ProductListPage } from 'http://localhost:3002/containers/ProductListPage.js';
import { readBlockConfig } from '../../scripts/aem.js';
import { getConfigValue } from '../../scripts/configs.js';

export default async function decorate(block) {
  const { category, urlpath, type } = readBlockConfig(block);
  block.textContent = '';

  // const storeDetails = {
  //   // STOREFRONT CONFIG
  //   environmentId: await getConfigValue('commerce-environment-id'),
  //   environmentType: (await getConfigValue('commerce-endpoint')).includes('sandbox') ? 'testing' : '',
  //   apiKey: await getConfigValue('commerce-x-api-key'),
  //   apiUrl: await getConfigValue('commerce-endpoint'),
  //   websiteCode: await getConfigValue('commerce-website-code'),
  //   storeCode: await getConfigValue('commerce-store-code'),
  //   storeViewCode: await getConfigValue('commerce-store-view-code'),
  //   // SEARCH CONFIG
  //   config: {
  //     pageSize: 8,
  //     perPageConfig: {
  //       pageSizeOptions: '12,24,36',
  //       defaultPageSizeOption: '12',
  //     },
  //     minQueryLength: '2',
  //     currencySymbol: '$',
  //     currencyRate: '1',
  //     displayOutOfStock: true,
  //     allowAllProducts: false,
  //     imageCarousel: false,
  //     optimizeImages: true,
  //     imageBaseWidth: 200,
  //     listview: true,
  //     displayMode: '', // "" for plp || "PAGE" for category/catalog
  //     addToCart: async (...args) => {
  //       const { addProductsToCart } = await import('../../scripts/__dropins__/storefront-cart/api.js');
  //       await addProductsToCart([{
  //         sku: args[0],
  //         options: args[1],
  //         quantity: args[2],
  //       }]);
  //     },
  //   },
  //   context: {
  //     customerGroup: await getConfigValue('commerce-customer-group'),
  //   },
  //   route: ({ sku, urlKey }) => {
  //     const a = new URL(window.location.origin);
  //     a.pathname = `/products/${urlKey}/${sku}`;
  //     return a.toString();
  //   },
  // };

  // for non search pages
  // if (type !== 'search') {
  //   storeDetails.config.categoryName = document.querySelector('.default-content-wrapper > h1')?.innerText;
  //   storeDetails.config.currentCategoryId = category;
  //   storeDetails.config.currentCategoryUrlPath = urlpath;

  //   // Enable enrichment
  //   block.dataset.category = category;
  // }

  provider.render(ProductListPage)(block);
}
