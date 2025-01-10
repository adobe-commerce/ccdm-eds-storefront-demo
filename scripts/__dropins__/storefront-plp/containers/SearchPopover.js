import { u, t } from "../chunks/jsxRuntime.module.js";
import { useRef, useEffect, useMemo, useState, createContext, useContext } from "@dropins/tools/preact-compat.js";
import { s as setEndpoint, a as setFetchGraphQlHeaders, b as searchProducts } from "../chunks/searchProducts.js";
import "@dropins/tools/lib.js";
import { g as getDefaultExportFromCjs, c as commonjsGlobal } from "../chunks/currency-symbol-map.js";
/* empty css              */
import { Fragment } from "@dropins/tools/preact.js";
import "@dropins/tools/fetch-graphql.js";
var _jsxFileName$3 = "/Users/stephen/work/code/ccdm/storefront-search-dropin/src/components/NoImageSvg/NoImage.tsx";
function NoImage() {
  return u("svg", {
    width: "60",
    height: "74",
    viewBox: "0 0 60 74",
    children: u("path", {
      d: "M26,85H70a8.009,8.009,0,0,0,8-8V29.941a7.947,7.947,0,0,0-2.343-5.657L64.716,13.343A7.946,7.946,0,0,0,59.059,11H26a8.009,8.009,0,0,0-8,8V77a8.009,8.009,0,0,0,8,8ZM20,19a6.007,6.007,0,0,1,6-6H59.059A5.96,5.96,0,0,1,63.3,14.757L74.242,25.7A5.96,5.96,0,0,1,76,29.941V77a6.007,6.007,0,0,1-6,6H26a6.007,6.007,0,0,1-6-6Zm6.614,51.06h0L68,69.98a.75.75,0,0,0,.545-1.263L57.67,57.129a1.99,1.99,0,0,0-2.808-.028L51.6,60.467l-.024.026-7.087-7.543a1.73,1.73,0,0,0-1.229-.535,1.765,1.765,0,0,0-1.249.5L26.084,68.778a.75.75,0,0,0,.529,1.281Zm26.061-8.548,3.252-3.354a.333.333,0,0,1,.332-.123.463.463,0,0,1,.324.126L66.27,68.484l-7.177.014-6.5-6.916a.735.735,0,0,0,.078-.071Zm-9.611-7.526a.235.235,0,0,1,.168-.069.212.212,0,0,1,.168.068L57.039,68.5l-28.606.055Zm20.05-.43h.079a5.087,5.087,0,0,0,3.583-1.47,5.146,5.146,0,1,0-7.279-.109,5.089,5.089,0,0,0,3.617,1.579Zm-2.456-7.839a3.6,3.6,0,0,1,2.534-1.042h.056a3.7,3.7,0,0,1,2.478,6.34,3.51,3.51,0,0,1-2.589,1.041,3.6,3.6,0,0,1-2.557-1.118,3.715,3.715,0,0,1,.079-5.221Z",
      transform: "translate(-18 -11)",
      fill: "#8e8e8e"
    }, void 0, false, {
      fileName: _jsxFileName$3,
      lineNumber: 4,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName$3,
    lineNumber: 3,
    columnNumber: 9
  }, this);
}
function r(e) {
  var t2, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t2 = 0; t2 < o; t2++) e[t2] && (f = r(e[t2])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t2, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t2 = r(e)) && (n && (n += " "), n += t2);
  return n;
}
var _jsxFileName$2 = "/Users/stephen/work/code/ccdm/storefront-search-dropin/src/components/PopoverViewAll/PopoverViewAll.tsx";
const PopoverViewAll = ({
  className,
  ...props
}) => {
  const {
    products
  } = usePopover();
  if (!products.length) return u(Fragment, {}, void 0);
  return u("button", {
    ...props,
    type: "submit",
    className: clsx(["search-popover-view-all", className]),
    children: "View All"
  }, void 0, false, {
    fileName: _jsxFileName$2,
    lineNumber: 16,
    columnNumber: 9
  }, void 0);
};
var _jsxFileName$1 = "/Users/stephen/work/code/ccdm/storefront-search-dropin/src/components/PopoverRoot/PopoverRoot.tsx";
function PopoverRoot() {
  const {
    products,
    route
  } = usePopover();
  return u("div", {
    className: "grid grid-cols-1 gap-4",
    children: [products.map((product) => u("div", {
      className: "relative flex items-center px-6 py-5 space-x-3 bg-white border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400",
      children: [u("div", {
        className: "flex-shrink-0",
        children: u(ProductImage, {
          product
        }, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 26,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 25,
        columnNumber: 21
      }, this), u("div", {
        className: "flex-1 min-w-0",
        children: u("a", {
          href: route == null ? void 0 : route({
            sku: product.sku,
            urlKey: product.urlKey ?? ""
          }),
          className: "focus:outline-none",
          children: [u("span", {
            "aria-hidden": "true",
            className: "inset-0"
          }, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 30,
            columnNumber: 29
          }, this), u("p", {
            className: "font-medium text-gray-900",
            children: product.name
          }, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 31,
            columnNumber: 29
          }, this), u("p", {
            className: "mt-4 text-gray-500 no-underline",
            children: product.price
          }, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 32,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$1,
          lineNumber: 29,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 28,
        columnNumber: 21
      }, this)]
    }, product.uid, true, {
      fileName: _jsxFileName$1,
      lineNumber: 21,
      columnNumber: 17
    }, this)), u(PopoverViewAll, {}, void 0, false, {
      fileName: _jsxFileName$1,
      lineNumber: 37,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$1,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}
function ProductImage({
  product
}) {
  if (!product.image) return u(NoImage, {}, void 0, false, {
    fileName: _jsxFileName$1,
    lineNumber: 43,
    columnNumber: 32
  }, this);
  return u("img", {
    alt: "",
    src: product.image,
    className: "h-56"
  }, void 0, false, {
    fileName: _jsxFileName$1,
    lineNumber: 44,
    columnNumber: 12
  }, this);
}
var FUNC_ERROR_TEXT = "Expected a function";
var NAN = 0 / 0;
var symbolTag = "[object Symbol]";
var reTrim = /^\s+|\s+$/g;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
var objectProto = Object.prototype;
var objectToString = objectProto.toString;
var nativeMax = Math.max, nativeMin = Math.min;
var now = function() {
  return root.Date.now();
};
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
    return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function isObject(value) {
  var type = typeof value;
  return !!value && (type == "object" || type == "function");
}
function isObjectLike(value) {
  return !!value && typeof value == "object";
}
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, "");
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var lodash_debounce = debounce;
const debounce$1 = /* @__PURE__ */ getDefaultExportFromCjs(lodash_debounce);
function useUnmount(func) {
  const funcRef = t(useRef(func), "funcRef");
  funcRef.current = func;
  useEffect(() => () => {
    funcRef.current();
  }, []);
}
function useDebounceCallback(func, delay = 500, options) {
  const debouncedFunc = t(useRef(), "debouncedFunc");
  useUnmount(() => {
    if (debouncedFunc.current) {
      debouncedFunc.current.cancel();
    }
  });
  const debounced = t(useMemo(() => {
    const debouncedFuncInstance = debounce$1(func, delay, options);
    const wrappedFunc = (...args) => {
      return debouncedFuncInstance(...args);
    };
    wrappedFunc.cancel = () => {
      debouncedFuncInstance.cancel();
    };
    wrappedFunc.isPending = () => {
      return !!debouncedFunc.current;
    };
    wrappedFunc.flush = () => {
      return debouncedFuncInstance.flush();
    };
    return wrappedFunc;
  }, [func, delay, options]), "debounced");
  useEffect(() => {
    debouncedFunc.current = debounce$1(func, delay, options);
  }, [func, delay, options]);
  return debounced;
}
function useDebounceValue(initialValue, delay, options) {
  const eq = (left, right) => left === right;
  const unwrappedInitialValue = initialValue instanceof Function ? initialValue() : initialValue;
  const [debouncedValue, setDebouncedValue] = t(useState(unwrappedInitialValue), "debouncedValue");
  const previousValueRef = t(useRef(unwrappedInitialValue), "previousValueRef");
  const updateDebouncedValue = useDebounceCallback(setDebouncedValue, delay, options);
  if (!eq(previousValueRef.current, unwrappedInitialValue)) {
    updateDebouncedValue(unwrappedInitialValue);
    previousValueRef.current = unwrappedInitialValue;
  }
  return [debouncedValue, updateDebouncedValue];
}
var _jsxFileName = "/Users/stephen/work/code/ccdm/storefront-search-dropin/src/containers/SearchPopover/SearchPopover.tsx";
const defaultState = {
  products: [],
  config: {
    pageSize: 8,
    perPageConfig: {
      pageSizeOptions: "12,24,36",
      defaultPageSizeOption: "24"
    },
    minQueryLength: "2",
    currencySymbol: "$",
    currencyRate: "1",
    displayOutOfStock: true,
    allowAllProducts: false
  },
  route: ({
    sku,
    urlKey
  }) => `/products/${urlKey}/${sku}`
};
const PopoverContext = createContext(defaultState);
const SearchPopover = ({
  children: _children,
  storefrontDetails
}) => {
  const {
    config,
    route
  } = storefrontDetails;
  useEffect(() => {
    setEndpoint(storefrontDetails.apiUrl);
    setFetchGraphQlHeaders({
      "Magento-Environment-Id": storefrontDetails.environmentId,
      "Magento-Website-Code": storefrontDetails.websiteCode,
      "Magento-Store-Code": storefrontDetails.storeCode,
      "Magento-Store-View-Code": storefrontDetails.storeViewCode,
      "X-Api-Key": storefrontDetails.apiKey
    });
  }, [storefrontDetails.apiKey, storefrontDetails.apiUrl, storefrontDetails.environmentId, storefrontDetails.storeCode, storefrontDetails.storeViewCode, storefrontDetails.websiteCode]);
  const formRef = t(useRef(null), "formRef");
  const inputRef = t(useRef(null), "inputRef");
  const resultsRef = t(useRef(null), "resultsRef");
  const [query, setQuery] = useDebounceValue("", 500);
  const [products, setProducts] = t(useState([]), "products");
  const handleChange = (e) => {
    setQuery(e.currentTarget.value);
  };
  useEffect(() => {
    const formElement = document.getElementById("search_mini_form");
    const inputElement = document.getElementById("search");
    const resultsElement = document.getElementById("search_autocomplete");
    formRef.current = formElement;
    inputRef.current = inputElement;
    resultsRef.current = resultsElement;
    inputElement == null ? void 0 : inputElement.addEventListener("input", handleChange);
    return () => {
      inputElement == null ? void 0 : inputElement.removeEventListener("input", handleChange);
    };
  }, []);
  useEffect(() => {
    (async () => {
      if (query.length > +config.minQueryLength) {
        const response = await searchProducts(query, config.pageSize);
        setProducts(response ?? []);
      }
    })();
  }, [query, config.minQueryLength, config.pageSize]);
  const values = {
    products,
    config,
    route
  };
  return u(PopoverContext.Provider, {
    value: values,
    children: u(PopoverRoot, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }, void 0)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 9
  }, void 0);
};
const usePopover = () => {
  const context = useContext(PopoverContext);
  if (context === null) {
    const err = new Error(`Missing <PopoverProvider /> component.`);
    if (Error.captureStackTrace) Error.captureStackTrace(err, usePopover);
    throw err;
  }
  return context;
};
export {
  PopoverContext,
  SearchPopover,
  SearchPopover as default,
  usePopover
};
//# sourceMappingURL=SearchPopover.js.map
