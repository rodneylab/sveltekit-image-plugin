/// <reference types="@sveltejs/kit" />

import type { ILazyLoadInstance } from 'vanilla-lazyload';

declare global {
  interface Document {
    lazyloadInstance: ILazyLoadInstance;
  }

  module '*.jpg?width=672';
  module '*.jpg?width=1344;672;336&format=webp&srcset';
  module '*.jpg?width=1344;672;336&srcset';
}
