/*! Copyright 2025 Adobe
All Rights Reserved. */
import{FetchGraphQL as M}from"@dropins/tools/fetch-graphql.js";var L=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function g(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var l={exports:{}},f={AED:"د.إ",AFN:"؋",ALL:"L",AMD:"֏",ANG:"ƒ",AOA:"Kz",ARS:"$",AUD:"$",AWG:"ƒ",AZN:"₼",BAM:"KM",BBD:"$",BDT:"৳",BGN:"лв",BHD:".د.ب",BIF:"FBu",BMD:"$",BND:"$",BOB:"$b",BOV:"BOV",BRL:"R$",BSD:"$",BTC:"₿",BTN:"Nu.",BWP:"P",BYN:"Br",BYR:"Br",BZD:"BZ$",CAD:"$",CDF:"FC",CHE:"CHE",CHF:"CHF",CHW:"CHW",CLF:"CLF",CLP:"$",CNH:"¥",CNY:"¥",COP:"$",COU:"COU",CRC:"₡",CUC:"$",CUP:"₱",CVE:"$",CZK:"Kč",DJF:"Fdj",DKK:"kr",DOP:"RD$",DZD:"دج",EEK:"kr",EGP:"£",ERN:"Nfk",ETB:"Br",ETH:"Ξ",EUR:"€",FJD:"$",FKP:"£",GBP:"£",GEL:"₾",GGP:"£",GHC:"₵",GHS:"GH₵",GIP:"£",GMD:"D",GNF:"FG",GTQ:"Q",GYD:"$",HKD:"$",HNL:"L",HRK:"kn",HTG:"G",HUF:"Ft",IDR:"Rp",ILS:"₪",IMP:"£",INR:"₹",IQD:"ع.د",IRR:"﷼",ISK:"kr",JEP:"£",JMD:"J$",JOD:"JD",JPY:"¥",KES:"KSh",KGS:"лв",KHR:"៛",KMF:"CF",KPW:"₩",KRW:"₩",KWD:"KD",KYD:"$",KZT:"₸",LAK:"₭",LBP:"£",LKR:"₨",LRD:"$",LSL:"M",LTC:"Ł",LTL:"Lt",LVL:"Ls",LYD:"LD",MAD:"MAD",MDL:"lei",MGA:"Ar",MKD:"ден",MMK:"K",MNT:"₮",MOP:"MOP$",MRO:"UM",MRU:"UM",MUR:"₨",MVR:"Rf",MWK:"MK",MXN:"$",MXV:"MXV",MYR:"RM",MZN:"MT",NAD:"$",NGN:"₦",NIO:"C$",NOK:"kr",NPR:"₨",NZD:"$",OMR:"﷼",PAB:"B/.",PEN:"S/.",PGK:"K",PHP:"₱",PKR:"₨",PLN:"zł",PYG:"Gs",QAR:"﷼",RMB:"￥",RON:"lei",RSD:"Дин.",RUB:"₽",RWF:"R₣",SAR:"﷼",SBD:"$",SCR:"₨",SDG:"ج.س.",SEK:"kr",SGD:"S$",SHP:"£",SLL:"Le",SOS:"S",SRD:"$",SSP:"£",STD:"Db",STN:"Db",SVC:"$",SYP:"£",SZL:"E",THB:"฿",TJS:"SM",TMT:"T",TND:"د.ت",TOP:"T$",TRL:"₤",TRY:"₺",TTD:"TT$",TVD:"$",TWD:"NT$",TZS:"TSh",UAH:"₴",UGX:"USh",USD:"$",UYI:"UYI",UYU:"$U",UYW:"UYW",UZS:"лв",VEF:"Bs",VES:"Bs.S",VND:"₫",VUV:"VT",WST:"WS$",XAF:"FCFA",XBT:"Ƀ",XCD:"$",XOF:"CFA",XPF:"₣",XSU:"Sucre",XUA:"XUA",YER:"﷼",ZAR:"R",ZMW:"ZK",ZWD:"Z$",ZWL:"$"};const u=f;l.exports=function(r){if(typeof r!="string")return;const t=r.toUpperCase();if(Object.prototype.hasOwnProperty.call(u,t))return u[t]};l.exports.currencySymbolMap=u;var P=l.exports;const R=g(P),_=e=>{var t,a,n;let r=null;return e.thumbnail?r=(t=e.thumbnail)==null?void 0:t.url:e.small_image?r=(a=e.small_image)==null?void 0:a.url:e.image&&(r=(n=e.image)==null?void 0:n.url),r??""},C=e=>{const t=new DOMParser().parseFromString(e,"text/html").documentElement.textContent;return t||""},T=(e,r,t)=>{let a=e.price_range.minimum_price.regular_price.currency;r?a=r:a=R(a)??"";const n=e.price_range.minimum_price.final_price.value??0,c=t?n*parseFloat(t):n;return!n===null?"":`${a}${c.toFixed(2)}`},G="livesearch-popover-dropin",N="_demo:data",A="_demo:context",{setEndpoint:U,setFetchGraphQlHeader:y,removeFetchGraphQlHeader:E,setFetchGraphQlHeaders:O,fetchGraphQl:h,getConfig:H}=new M().getMethods(),m=e=>({current:(e==null?void 0:e.current_page)??0,size:(e==null?void 0:e.page_size)??0,total:(e==null?void 0:e.total_pages)??0}),K=(e,r,t="",a="1")=>{var n;return{uid:e.uid,sku:e.sku??"",image:_(e),name:C(e.name??""),price:T(e,t,a),url:e.canonical_url??"",imageUrl:((n=e.image)==null?void 0:n.url)??"",rank:r}},B=`
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
`,b=async(e,r=4,t=1,a=[],n=[])=>{const c=[],i=m();try{const s=await h(B,{variables:{phrase:e,size:r,current:t,filter:a,sort:n}});if(!s.data.productSearch.items)return{pageInfo:i,products:c};const{page_info:S,items:$}=s.data.productSearch;return $.forEach((o,d)=>{var D;if(!o)return;const p=K(o.product,d);p.urlKey=((D=o.productView)==null?void 0:D.urlKey)??"",c.push(p)}),{pageInfo:m(S),products:c}}catch(s){return console.error(s),{pageInfo:i,products:c}}};export{A as D,b as a,y as b,L as c,N as d,U as e,O as f,g,h,H as i,E as r,G as s};
