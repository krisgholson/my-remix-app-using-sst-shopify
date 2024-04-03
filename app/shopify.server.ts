import '@shopify/shopify-app-remix/server/adapters/node';
import {
    LATEST_API_VERSION, shopifyApp,
} from '@shopify/shopify-app-remix/server';
import {MemorySessionStorage} from '@shopify/shopify-app-session-storage-memory';

const shopify = shopifyApp({
    apiKey: process.env.SHOPIFY_API_KEY!,
    apiSecretKey: process.env.SHOPIFY_API_SECRET!,
    appUrl: process.env.SHOPIFY_APP_URL!,
    scopes: ['read_products'],
    apiVersion: LATEST_API_VERSION,
    isEmbeddedApp: true,
    sessionStorage: new MemorySessionStorage(),
    future: {
        unstable_newEmbeddedAuthStrategy: true,
    },
});
export default shopify;
