import{a as u}from"./currency-symbol-map.js";import{FetchGraphQL as s}from"@dropins/tools/fetch-graphql.js";const{setEndpoint:d,setFetchGraphQlHeader:y,removeFetchGraphQlHeader:$,setFetchGraphQlHeaders:S,fetchGraphQl:l,getConfig:v}=new s().getMethods(),o=`
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
`,m=e=>{var r,a,n;let t=null;return e.thumbnail?t=(r=e.thumbnail)==null?void 0:r.url:e.small_image?t=(a=e.small_image)==null?void 0:a.url:e.image&&(t=(n=e.image)==null?void 0:n.url),t??""},p=e=>{const r=new DOMParser().parseFromString(e,"text/html").documentElement.textContent;return r||""},f=(e,t,r)=>{let a=e.price_range.minimum_price.regular_price.currency;t?a=t:a=u(a)??"";const n=e.price_range.minimum_price.final_price.value??0,c=r?n*parseFloat(r):n;return!n===null?"":`${a}${c.toFixed(2)}`},_=(e,t="",r="1")=>({uid:e.uid,sku:e.sku??"",image:m(e),name:p(e.name??""),price:f(e,t,r)}),x=async(e,t=4)=>{try{const r=await l(o,{variables:{phrase:e,size:t}}),a=[];return r.data.productSearch.items&&r.data.productSearch.items.forEach(n=>{var i;if(!n)return;const c=_(n.product);c.urlKey=((i=n.productView)==null?void 0:i.urlKey)??"",a.push(c)}),a}catch(r){console.error(r)}};export{S as a,x as b,y as c,l as f,v as g,$ as r,d as s};
