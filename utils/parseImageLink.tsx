import { getStrapiURL } from "../api/api";

export interface ImageProps {
  media: ImageBase;
}
export interface ImageBase {
  attributes?: { url: string; alt: string };
  data: {
    attributes: { url: string; alt: string };
  };
}

export function getImageLink({ media }: ImageProps): string {
  let url;
  if (media.attributes === undefined) url = "";
  if (media.data === undefined) url = media.attributes?.url;
  else url = media.data.attributes.url;
  const imageUrl = url!.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl ?? "";
}

export function getImageAlt({ media }: ImageProps): string {
  let alt;
  if (media.attributes === undefined) alt = "";
  if (media.data === undefined) alt = media.attributes?.url;
  else alt = media.data.attributes.url;
  return alt ?? "";
}
