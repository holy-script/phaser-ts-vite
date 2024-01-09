/// <reference types="vite/client" />

declare const __APP_ENV__: "development" | "production";

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
