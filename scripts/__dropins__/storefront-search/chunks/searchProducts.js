import { FetchGraphQL } from "@dropins/tools/fetch-graphql.js";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var currencySymbolMap$1 = { exports: {} };
var map = {
  AED: "د.إ",
  AFN: "؋",
  ALL: "L",
  AMD: "֏",
  ANG: "ƒ",
  AOA: "Kz",
  ARS: "$",
  AUD: "$",
  AWG: "ƒ",
  AZN: "₼",
  BAM: "KM",
  BBD: "$",
  BDT: "৳",
  BGN: "лв",
  BHD: ".د.ب",
  BIF: "FBu",
  BMD: "$",
  BND: "$",
  BOB: "$b",
  BOV: "BOV",
  BRL: "R$",
  BSD: "$",
  BTC: "₿",
  BTN: "Nu.",
  BWP: "P",
  BYN: "Br",
  BYR: "Br",
  BZD: "BZ$",
  CAD: "$",
  CDF: "FC",
  CHE: "CHE",
  CHF: "CHF",
  CHW: "CHW",
  CLF: "CLF",
  CLP: "$",
  CNH: "¥",
  CNY: "¥",
  COP: "$",
  COU: "COU",
  CRC: "₡",
  CUC: "$",
  CUP: "₱",
  CVE: "$",
  CZK: "Kč",
  DJF: "Fdj",
  DKK: "kr",
  DOP: "RD$",
  DZD: "دج",
  EEK: "kr",
  EGP: "£",
  ERN: "Nfk",
  ETB: "Br",
  ETH: "Ξ",
  EUR: "€",
  FJD: "$",
  FKP: "£",
  GBP: "£",
  GEL: "₾",
  GGP: "£",
  GHC: "₵",
  GHS: "GH₵",
  GIP: "£",
  GMD: "D",
  GNF: "FG",
  GTQ: "Q",
  GYD: "$",
  HKD: "$",
  HNL: "L",
  HRK: "kn",
  HTG: "G",
  HUF: "Ft",
  IDR: "Rp",
  ILS: "₪",
  IMP: "£",
  INR: "₹",
  IQD: "ع.د",
  IRR: "﷼",
  ISK: "kr",
  JEP: "£",
  JMD: "J$",
  JOD: "JD",
  JPY: "¥",
  KES: "KSh",
  KGS: "лв",
  KHR: "៛",
  KMF: "CF",
  KPW: "₩",
  KRW: "₩",
  KWD: "KD",
  KYD: "$",
  KZT: "₸",
  LAK: "₭",
  LBP: "£",
  LKR: "₨",
  LRD: "$",
  LSL: "M",
  LTC: "Ł",
  LTL: "Lt",
  LVL: "Ls",
  LYD: "LD",
  MAD: "MAD",
  MDL: "lei",
  MGA: "Ar",
  MKD: "ден",
  MMK: "K",
  MNT: "₮",
  MOP: "MOP$",
  MRO: "UM",
  MRU: "UM",
  MUR: "₨",
  MVR: "Rf",
  MWK: "MK",
  MXN: "$",
  MXV: "MXV",
  MYR: "RM",
  MZN: "MT",
  NAD: "$",
  NGN: "₦",
  NIO: "C$",
  NOK: "kr",
  NPR: "₨",
  NZD: "$",
  OMR: "﷼",
  PAB: "B/.",
  PEN: "S/.",
  PGK: "K",
  PHP: "₱",
  PKR: "₨",
  PLN: "zł",
  PYG: "Gs",
  QAR: "﷼",
  RMB: "￥",
  RON: "lei",
  RSD: "Дин.",
  RUB: "₽",
  RWF: "R₣",
  SAR: "﷼",
  SBD: "$",
  SCR: "₨",
  SDG: "ج.س.",
  SEK: "kr",
  SGD: "S$",
  SHP: "£",
  SLL: "Le",
  SOS: "S",
  SRD: "$",
  SSP: "£",
  STD: "Db",
  STN: "Db",
  SVC: "$",
  SYP: "£",
  SZL: "E",
  THB: "฿",
  TJS: "SM",
  TMT: "T",
  TND: "د.ت",
  TOP: "T$",
  TRL: "₤",
  TRY: "₺",
  TTD: "TT$",
  TVD: "$",
  TWD: "NT$",
  TZS: "TSh",
  UAH: "₴",
  UGX: "USh",
  USD: "$",
  UYI: "UYI",
  UYU: "$U",
  UYW: "UYW",
  UZS: "лв",
  VEF: "Bs",
  VES: "Bs.S",
  VND: "₫",
  VUV: "VT",
  WST: "WS$",
  XAF: "FCFA",
  XBT: "Ƀ",
  XCD: "$",
  XOF: "CFA",
  XPF: "₣",
  XSU: "Sucre",
  XUA: "XUA",
  YER: "﷼",
  ZAR: "R",
  ZMW: "ZK",
  ZWD: "Z$",
  ZWL: "$"
};
const currencySymbolMap = map;
currencySymbolMap$1.exports = function getSymbolFromCurrency(currencyCode) {
  if (typeof currencyCode !== "string") {
    return void 0;
  }
  const code = currencyCode.toUpperCase();
  if (!Object.prototype.hasOwnProperty.call(currencySymbolMap, code)) {
    return void 0;
  }
  return currencySymbolMap[code];
};
currencySymbolMap$1.exports.currencySymbolMap = currencySymbolMap;
var currencySymbolMapExports = currencySymbolMap$1.exports;
const getSymbolFromCurrency2 = /* @__PURE__ */ getDefaultExportFromCjs(currencySymbolMapExports);
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
    currency = getSymbolFromCurrency2(currency) ?? "";
  }
  const price = product.price_range.minimum_price.final_price.value ?? 0;
  const convertedPrice = currencyRate ? price * parseFloat(currencyRate) : price;
  if (!price === null) return "";
  return `${currency}${convertedPrice.toFixed(2)}`;
};
const searchUnitId = "livesearch-popover-dropin";
const DEMO_DATA_KEY = "_demo:data";
const DEMO_CONTEXT = "_demo:context";
const {
  setEndpoint,
  setFetchGraphQlHeader,
  removeFetchGraphQlHeader,
  setFetchGraphQlHeaders,
  fetchGraphQl,
  getConfig
} = new FetchGraphQL().getMethods();
const transfromPageInfo = (info) => {
  return {
    current: (info == null ? void 0 : info.current_page) ?? 0,
    size: (info == null ? void 0 : info.page_size) ?? 0,
    total: (info == null ? void 0 : info.total_pages) ?? 0
  };
};
const transfromProduct = (product, rank, currencySymbol = "", currencyRate = "1") => {
  var _a;
  return {
    uid: product.uid,
    sku: product.sku ?? "",
    image: getProductImage(product),
    name: htmlStringDecode(product.name ?? ""),
    price: getProductPrice(product, currencySymbol, currencyRate),
    // for analytics, maybe separate these into another model?
    url: product.canonical_url ?? "",
    imageUrl: ((_a = product.image) == null ? void 0 : _a.url) ?? "",
    rank
  };
};
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
const searchProducts = async (phrase, size = 4, current = 1, filter = [], sort = []) => {
  const transformed = [];
  const pageInfo = transfromPageInfo();
  try {
    const results = await fetchGraphQl(PRODUCT_SEARCH, {
      variables: {
        phrase,
        size,
        current,
        filter,
        sort
      }
    });
    if (!results.data.productSearch.items) return {
      pageInfo,
      products: transformed
    };
    const {
      page_info,
      items
    } = results.data.productSearch;
    items.forEach((item, index) => {
      var _a;
      if (!item) return;
      const newItem = transfromProduct(item.product, index);
      newItem.urlKey = ((_a = item.productView) == null ? void 0 : _a.urlKey) ?? "";
      transformed.push(newItem);
    });
    return {
      pageInfo: transfromPageInfo(page_info),
      products: transformed
    };
  } catch (error) {
    console.error(error);
    return {
      pageInfo,
      products: transformed
    };
  }
};
export {
  DEMO_CONTEXT as D,
  searchProducts as a,
  setFetchGraphQlHeader as b,
  commonjsGlobal as c,
  DEMO_DATA_KEY as d,
  setEndpoint as e,
  setFetchGraphQlHeaders as f,
  getDefaultExportFromCjs as g,
  fetchGraphQl as h,
  getConfig as i,
  removeFetchGraphQlHeader as r,
  searchUnitId as s
};
//# sourceMappingURL=searchProducts.js.map
