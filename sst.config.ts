/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "my-remix-app",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          region: "us-east-2"
        }
      }
    };
  },
  async run() {

    // sample command to set value for local dev:
    // sst secret set ShopifyAppUrl https://deciding-handy-haddock.ngrok-free.app

    // sample command to set value for another env (dev/prod):
    // sst secret set ShopifyAppUrl https://d3rrs21dxabqgx.cloudfront.net --stage=dev
    const shopifyApiKey = new sst.Secret("ShopifyApiKey");
    const shopifyApiSecret = new sst.Secret("ShopifyApiSecret");
    const shopifyAppUrl = new sst.Secret("ShopifyAppUrl");

    new sst.aws.Remix("MyWeb", {
      environment: {
        SHOPIFY_API_KEY: shopifyApiKey.value,
        SHOPIFY_API_SECRET: shopifyApiSecret.value,
        SHOPIFY_APP_URL: shopifyAppUrl.value,
      }
    });
  },
});
