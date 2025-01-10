import { a as getSymbolFromCurrency } from "./currency-symbol-map.js";
import { FetchGraphQL } from "@dropins/tools/fetch-graphql.js";
const {
  setEndpoint,
  setFetchGraphQlHeader,
  removeFetchGraphQlHeader,
  setFetchGraphQlHeaders,
  fetchGraphQl,
  getConfig
} = new FetchGraphQL().getMethods();
const PRODUCT_SEARCH = (
  /* GraphQL */
  `
    query ProductSearch(
        $phrase: String!
        $size: Int = 20
        $current: Int = 1
        $filter: [SearchClauseInput!]
        $sort: [ProductSearchSortInput!]
    ) {
        productSearch(phrase: $phrase, page_size: $size, current_page: $current, filter: $filter, sort: $sort) {
            page_info {
                current_page
                page_size
                total_pages
            }
            items {
                product {
                    uid
                    sku
                    name
                    canonical_url
                    small_image {
                        url
                    }
                    image {
                        url
                    }
                    thumbnail {
                        url
                    }
                    price_range {
                        minimum_price {
                            fixed_product_taxes {
                                amount {
                                    value
                                    currency
                                }
                                label
                            }
                            regular_price {
                                value
                                currency
                            }
                            final_price {
                                value
                                currency
                            }
                            discount {
                                percent_off
                                amount_off
                            }
                        }
                        maximum_price {
                            fixed_product_taxes {
                                amount {
                                    value
                                    currency
                                }
                                label
                            }
                            regular_price {
                                value
                                currency
                            }
                            final_price {
                                value
                                currency
                            }
                            discount {
                                percent_off
                                amount_off
                            }
                        }
                    }
                }
                productView {
                    urlKey
                }
            }
        }
    }
`
);
const getProductImage = (product) => {
  var _a, _b, _c;
  let url = null;
  if (product.thumbnail) {
    url = (_a = product.thumbnail) == null ? void 0 : _a.url;
  } else if (product.small_image) {
    url = (_b = product.small_image) == null ? void 0 : _b.url;
  } else if (product.image) {
    url = (_c = product.image) == null ? void 0 : _c.url;
  }
  return url ?? "";
};
const htmlStringDecode = (input) => {
  const doc = new DOMParser().parseFromString(input, "text/html");
  const text = doc.documentElement.textContent;
  if (!text) return "";
  return text;
};
const getProductPrice = (product, currencySymbol, currencyRate) => {
  let currency = product.price_range.minimum_price.regular_price.currency;
  if (currencySymbol) {
    currency = currencySymbol;
  } else {
    currency = getSymbolFromCurrency(currency) ?? "";
  }
  const price = product.price_range.minimum_price.final_price.value ?? 0;
  const convertedPrice = currencyRate ? price * parseFloat(currencyRate) : price;
  if (!price === null) return "";
  return `${currency}${convertedPrice.toFixed(2)}`;
};
const transfromProduct = (product, currencySymbol = "", currencyRate = "1") => {
  return {
    uid: product.uid,
    sku: product.sku ?? "",
    image: getProductImage(product),
    name: htmlStringDecode(product.name ?? ""),
    price: getProductPrice(product, currencySymbol, currencyRate)
  };
};
const searchProducts = async (phrase, size = 4) => {
  try {
    const results = await fetchGraphQl(PRODUCT_SEARCH, {
      variables: {
        phrase,
        size
      }
    });
    const transformed = [];
    if (!results.data.productSearch.items) return transformed;
    results.data.productSearch.items.forEach((item) => {
      var _a;
      if (!item) return;
      const newItem = transfromProduct(item.product);
      newItem.urlKey = ((_a = item.productView) == null ? void 0 : _a.urlKey) ?? "";
      transformed.push(newItem);
    });
    return transformed;
  } catch (error) {
    console.error(error);
  }
};
export {
  setFetchGraphQlHeaders as a,
  searchProducts as b,
  setFetchGraphQlHeader as c,
  fetchGraphQl as f,
  getConfig as g,
  removeFetchGraphQlHeader as r,
  setEndpoint as s
};
//# sourceMappingURL=searchProducts.js.map
