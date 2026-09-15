/// <reference types="astro/client" />

declare module "*.JPG" {
  const src: import("astro").ImageMetadata;
  export default src;
}
