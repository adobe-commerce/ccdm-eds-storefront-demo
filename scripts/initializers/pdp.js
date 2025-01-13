/* eslint-disable import/prefer-default-export */
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */

import { initializers } from '@dropins/tools/initializer.js';
import { Image, provider as UI } from '@dropins/tools/components.js';
import {
  initialize,
  setEndpoint,
  setFetchGraphQlHeaders,
  fetchProductData,
} from '@dropins/storefront-pdp/api.js';
import { initializeDropin } from './index.js';
import {
  commerceEndpointWithQueryParams,
  getOptionsUIDsFromUrl,
  getSkuFromUrl,
  loadErrorPage,
} from '../commerce.js';
import { getConfigValue } from '../configs.js';
import { fetchPlaceholders } from '../aem.js';

export const IMAGES_SIZES = {
  width: 960,
  height: 1191,
};

/** Temp function copied almost wholesale from for-stephen branch of storefront-search-dropin */
function getMake() {
  const context = JSON.parse(window.localStorage.getItem('_demo:context'));
  const data = JSON.parse(window.localStorage.getItem('_demo:data'));
  const makeId = context?.id;
  let make;
  const index = Object.keys(data).findIndex((key) => data[key].id === makeId);
  if (index !== -1) {
    make = Object.keys(data)[index];
  }
  return { make, makeId };
}

/** Temp function copied almost wholesale from for-stephen branch of storefront-search-dropin */
function getPriceBookHeader() {
  // will be Brand, Vip, or Employee
  const priceBook = window.localStorage.getItem('_demo:price-book') || 'Brand';
  if (priceBook === 'Brand') {
    const context = JSON.parse(window.localStorage.getItem('_demo:context'));
    return context?.value.toLowerCase();
  }

  return priceBook.toLowerCase();
}

/** Temp function copied almost wholesale from for-stephen branch of storefront-search-dropin */
const getHeaders = () => {
  const model = window.localStorage.getItem('_demo:model');
  const { makeId } = getMake();
  const priceBook = getPriceBookHeader();

  const newHeaders = {
    'Content-Type': 'application/json',
    'AC-Environment-Id': 'c09ecfb1-333a-4db3-9669-ce07ec0e3a00',
    ...(makeId ? { 'AC-Channel-Id': makeId } : {}),
    ...(model ? { 'AC-Policy-Model': model } : {}),
    ...(priceBook ? { 'AC-Price-Book-Id': priceBook } : {}),
    'AC-Scope-Locale': 'en-US',
    'X-Api-Key': 'search_gql',
    'X-Request-Id': crypto.randomUUID(),
  };
  console.log('PDP Headers', JSON.stringify(newHeaders, null, 2));
  return newHeaders;
};

await initializeDropin(async () => {
  // Set Fetch Endpoint (Service)
  setEndpoint(await commerceEndpointWithQueryParams());

  // Set Fetch Headers (Service)
  setFetchGraphQlHeaders(getHeaders());

  const sku = getSkuFromUrl();
  const optionsUIDs = getOptionsUIDsFromUrl();

  const [product, labels] = await Promise.all([
    fetchProductData(sku, { optionsUIDs, skipTransform: true }).then(preloadImageMiddleware),
    fetchPlaceholders(),
  ]);

  if (!product?.sku) {
    return loadErrorPage();
  }

  const langDefinitions = {
    default: {
      ...labels,
    },
  };

  const models = {
    ProductDetails: {
      initialData: { ...product },
    },
  };

  // Initialize Dropins
  return initializers.mountImmediately(initialize, {
    sku,
    optionsUIDs,
    langDefinitions,
    models,
    acdl: true,
    persistURLParams: true,
  });
})();

async function preloadImageMiddleware(data) {
  const image = data?.images?.[0]?.url?.replace(/^https?:/, '');

  if (image) {
    await UI.render(Image, {
      src: image,
      ...IMAGES_SIZES.mobile,
      params: {
        ...IMAGES_SIZES,
      },
      loading: 'eager',
    })(document.createElement('div'));
  }
  return data;
}
