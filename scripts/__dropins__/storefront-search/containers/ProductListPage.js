import { t, u } from "../chunks/jsxRuntime.module.js";
import * as React from "@dropins/tools/preact-compat.js";
import { useState } from "@dropins/tools/preact-compat.js";
import "@dropins/tools/preact.js";
function PlusIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"
  }));
}
const ForwardRef = /* @__PURE__ */ React.forwardRef(PlusIcon);
var _jsxFileName$1 = "/Users/stephen/work/code/ccdm/storefront-search-dropin/src/containers/ProductListPage/PageContainer.tsx";
const filters = [{
  id: "category",
  name: "Category",
  options: [{
    value: "new-arrivals",
    label: "All New Arrivals",
    checked: false
  }, {
    value: "tees",
    label: "Tees",
    checked: false
  }, {
    value: "objects",
    label: "Objects",
    checked: true
  }, {
    value: "sweatshirts",
    label: "Sweatshirts",
    checked: false
  }, {
    value: "pants-shorts",
    label: "Pants & Shorts",
    checked: false
  }]
}, {
  id: "color",
  name: "Color",
  options: [{
    value: "white",
    label: "White",
    checked: false
  }, {
    value: "beige",
    label: "Beige",
    checked: false
  }, {
    value: "blue",
    label: "Blue",
    checked: false
  }, {
    value: "brown",
    label: "Brown",
    checked: false
  }, {
    value: "green",
    label: "Green",
    checked: false
  }, {
    value: "purple",
    label: "Purple",
    checked: false
  }]
}, {
  id: "sizes",
  name: "Sizes",
  options: [{
    value: "xs",
    label: "XS",
    checked: false
  }, {
    value: "s",
    label: "S",
    checked: false
  }, {
    value: "m",
    label: "M",
    checked: false
  }, {
    value: "l",
    label: "L",
    checked: false
  }, {
    value: "xl",
    label: "XL",
    checked: false
  }, {
    value: "2xl",
    label: "2XL",
    checked: false
  }]
}];
const products = [
  {
    id: 1,
    name: "Basic Tee 8-Pack",
    href: "#",
    price: "$256",
    description: "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    options: "8 colors",
    imageSrc: "https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-01.jpg",
    imageAlt: "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green."
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description: "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc: "https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-02.jpg",
    imageAlt: "Front of plain black t-shirt."
  }
  // More products...
];
function PageContainer() {
  t(useState(false), "mobileMenuOpen");
  const [mobileFiltersOpen, setMobileFiltersOpen] = t(useState(false), "mobileFiltersOpen");
  return (
    // <main className="max-w-2xl px-4 mx-auto lg:max-w-7xl lg:px-8">
    u("section", {
      className: "max-w-2xl px-4 mx-auto lg:max-w-7xl lg:px-8",
      children: [u("div", {
        className: "pt-24 pb-10 border-b border-gray-200",
        children: [u("h1", {
          className: "text-4xl font-bold tracking-tight text-gray-900",
          children: "New Arrivals"
        }, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 241,
          columnNumber: 17
        }, this), u("p", {
          className: "mt-4 text-base text-gray-500",
          children: "Checkout out the latest release of Basic Tees, new and improved with four openings!"
        }, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 242,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$1,
        lineNumber: 240,
        columnNumber: 13
      }, this), u("div", {
        className: "pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4",
        children: [u("aside", {
          children: [u("h2", {
            className: "sr-only",
            children: "Filters"
          }, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 249,
            columnNumber: 21
          }, this), u("button", {
            type: "button",
            onClick: () => setMobileFiltersOpen(true),
            className: "inline-flex items-center lg:hidden",
            children: [u("span", {
              className: "text-sm font-medium text-gray-700",
              children: "Filters"
            }, void 0, false, {
              fileName: _jsxFileName$1,
              lineNumber: 256,
              columnNumber: 25
            }, this), u(ForwardRef, {
              "aria-hidden": "true",
              className: "ml-1 text-gray-400 size-5 shrink-0"
            }, void 0, false, {
              fileName: _jsxFileName$1,
              lineNumber: 257,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$1,
            lineNumber: 251,
            columnNumber: 21
          }, this), u("div", {
            className: "hidden lg:block",
            children: u("form", {
              className: "space-y-10 divide-y divide-gray-200",
              children: filters.map((section, sectionIdx) => u("div", {
                className: sectionIdx === 0 ? "" : "pt-10",
                children: u("fieldset", {
                  children: [u("legend", {
                    className: "block text-sm font-medium text-gray-900",
                    children: section.name
                  }, void 0, false, {
                    fileName: _jsxFileName$1,
                    lineNumber: 265,
                    columnNumber: 41
                  }, this), u("div", {
                    className: "pt-6 space-y-3",
                    children: section.options.map((option, optionIdx) => u("div", {
                      className: "flex gap-3",
                      children: [u("div", {
                        className: "flex items-center h-5 shrink-0",
                        children: u("div", {
                          className: "grid grid-cols-1 group size-4",
                          children: [u("input", {
                            defaultValue: option.value,
                            id: `${section.id}-${optionIdx}`,
                            name: `${section.id}[]`,
                            type: "checkbox",
                            className: "col-start-1 row-start-1 bg-white border border-gray-300 rounded appearance-none checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                          }, void 0, false, {
                            fileName: _jsxFileName$1,
                            lineNumber: 273,
                            columnNumber: 61
                          }, this), u("svg", {
                            fill: "none",
                            viewBox: "0 0 14 14",
                            className: "pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25",
                            children: [u("path", {
                              d: "M3 8L6 11L11 3.5",
                              strokeWidth: 2,
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              className: "opacity-0 group-has-[:checked]:opacity-100"
                            }, void 0, false, {
                              fileName: _jsxFileName$1,
                              lineNumber: 285,
                              columnNumber: 65
                            }, this), u("path", {
                              d: "M3 7H11",
                              strokeWidth: 2,
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              className: "opacity-0 group-has-[:indeterminate]:opacity-100"
                            }, void 0, false, {
                              fileName: _jsxFileName$1,
                              lineNumber: 292,
                              columnNumber: 65
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName$1,
                            lineNumber: 280,
                            columnNumber: 61
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$1,
                          lineNumber: 272,
                          columnNumber: 57
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$1,
                        lineNumber: 271,
                        columnNumber: 53
                      }, this), u("label", {
                        htmlFor: `${section.id}-${optionIdx}`,
                        className: "text-sm text-gray-600",
                        children: option.label
                      }, void 0, false, {
                        fileName: _jsxFileName$1,
                        lineNumber: 302,
                        columnNumber: 53
                      }, this)]
                    }, option.value, true, {
                      fileName: _jsxFileName$1,
                      lineNumber: 270,
                      columnNumber: 49
                    }, this))
                  }, void 0, false, {
                    fileName: _jsxFileName$1,
                    lineNumber: 268,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$1,
                  lineNumber: 264,
                  columnNumber: 37
                }, this)
              }, section.name, false, {
                fileName: _jsxFileName$1,
                lineNumber: 263,
                columnNumber: 33
              }, this))
            }, void 0, false, {
              fileName: _jsxFileName$1,
              lineNumber: 261,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 260,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$1,
          lineNumber: 248,
          columnNumber: 17
        }, this), u("section", {
          "aria-labelledby": "product-heading",
          className: "mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3",
          children: [u("h2", {
            id: "product-heading",
            className: "sr-only",
            children: "Products"
          }, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 319,
            columnNumber: 21
          }, this), u("div", {
            className: "grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3",
            children: products.map((product) => u("div", {
              className: "relative flex flex-col overflow-hidden bg-white border border-gray-200 rounded-lg group",
              children: [u("img", {
                alt: product.imageAlt,
                src: product.imageSrc,
                className: "aspect-[3/4] bg-gray-200 object-cover group-hover:opacity-75 sm:h-96"
              }, void 0, false, {
                fileName: _jsxFileName$1,
                lineNumber: 329,
                columnNumber: 33
              }, this), u("div", {
                className: "flex flex-col flex-1 p-4 space-y-2",
                children: [u("h3", {
                  className: "text-sm font-medium text-gray-900",
                  children: u("a", {
                    href: product.href,
                    children: [u("span", {
                      "aria-hidden": "true",
                      className: "absolute inset-0"
                    }, void 0, false, {
                      fileName: _jsxFileName$1,
                      lineNumber: 337,
                      columnNumber: 45
                    }, this), product.name]
                  }, void 0, true, {
                    fileName: _jsxFileName$1,
                    lineNumber: 336,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName$1,
                  lineNumber: 335,
                  columnNumber: 37
                }, this), u("p", {
                  className: "text-sm text-gray-500",
                  children: product.description
                }, void 0, false, {
                  fileName: _jsxFileName$1,
                  lineNumber: 341,
                  columnNumber: 37
                }, this), u("div", {
                  className: "flex flex-col justify-end flex-1",
                  children: [u("p", {
                    className: "text-sm italic text-gray-500",
                    children: product.options
                  }, void 0, false, {
                    fileName: _jsxFileName$1,
                    lineNumber: 343,
                    columnNumber: 41
                  }, this), u("p", {
                    className: "text-base font-medium text-gray-900",
                    children: product.price
                  }, void 0, false, {
                    fileName: _jsxFileName$1,
                    lineNumber: 344,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$1,
                  lineNumber: 342,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$1,
                lineNumber: 334,
                columnNumber: 33
              }, this)]
            }, product.id, true, {
              fileName: _jsxFileName$1,
              lineNumber: 325,
              columnNumber: 29
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 323,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$1,
          lineNumber: 318,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$1,
        lineNumber: 247,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$1,
      lineNumber: 239,
      columnNumber: 9
    }, this)
  );
}
var _jsxFileName = "/Users/stephen/work/code/ccdm/storefront-search-dropin/src/containers/ProductListPage/ProductListPage.tsx";
const ProductListPage = ({
  children,
  ...props
}) => {
  return u("div", {
    className: "ds-dropin",
    ...props,
    children: u(PageContainer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 50
    }, void 0)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 12
  }, void 0);
};
export {
  ProductListPage
};
//# sourceMappingURL=ProductListPage.js.map
