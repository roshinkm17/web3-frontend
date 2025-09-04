// / <reference types="vite/client" />

declare const __VITE_BACKEND_HOST__: string;

interface ImportMetaEnv {
  readonly VITE_BACKEND_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
