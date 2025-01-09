import { PropsWithChildren } from 'preact/compat';
import { StorefrontConfig, StorefrontDetails } from '../types/storefront';

export type StorefrontContextState = {
    details?: StorefrontDetails;
    config: StorefrontConfig;
};
export declare const StorefrontContext: import('preact').Context<StorefrontContextState | null>;
export type StorefrontProviderProps = PropsWithChildren<{
    details: StorefrontDetails;
    config: StorefrontConfig;
}>;
/** The StorefrontProvider provides a configuration, validates the storeconfig if given, and configures the fetch-graphql url  */
export declare function StorefrontProvider({ children, details, config }: StorefrontProviderProps): import("preact/compat").JSX.Element;
//# sourceMappingURL=StorefrontContext.d.ts.map