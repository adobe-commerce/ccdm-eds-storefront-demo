import { ProductDataModel } from '../../data/models/product';

/** Searches the GraphQL Endpoint `productSearch` and returns a transformed list of products */
export declare const searchProducts: (phrase?: string, size?: number, current?: number, filter?: never[], sort?: never[]) => Promise<{
    pageInfo: import('../../data/models/page-info').PageInfoDataModel;
    products: ProductDataModel[];
}>;
//# sourceMappingURL=searchProducts.d.ts.map