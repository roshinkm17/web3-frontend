// / <reference types="vite/client" />

declare const __VITE_BACKEND_HOST__: string;
declare const __VITE_ENVIRONMENT_ID__: string;
interface ImportMetaEnv {
  readonly VITE_BACKEND_HOST: string;
  readonly VITE_ENVIRONMENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
