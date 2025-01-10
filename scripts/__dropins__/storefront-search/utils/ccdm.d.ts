/** Available Channels for Testing Environment. Maps `ac-channel-id` header in catalog-service-qa.adobe.io */
export declare const channels: {
    Aurora: {
        id: string;
        value: string;
        models: string[];
    };
    Bolt: {
        id: string;
        value: string;
        models: string[];
    };
    Cruz: {
        id: string;
        value: string;
        models: string[];
    };
};
export declare const setDemoContext: (brand: keyof typeof channels) => void;
/** Sets the correct headers for CCDM configuration */
export declare const setHeaders: () => void;
//# sourceMappingURL=ccdm.d.ts.map