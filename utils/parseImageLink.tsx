import { getStrapiURL } from "../api/api";

export interface ImageProps {
  media: ImageBase;
}
export interface ImageBase {
  id: string | number | undefined;
  attributes?: {
    url: string;
    alt: string;
    formats: { thumbnail: { url: string } };
  };
  data: {
    attributes: {
      url: string;
      alt: string;
      formats: { thumbnail: { url: string } };
    };
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

export function getImagePreview({ media }: ImageProps): string {
  let url;
  if (media.attributes === undefined) url = "";
  if (media.data === undefined) url = media.attributes?.formats.thumbnail.url;
  else url = media.data.attributes.formats.thumbnail.url;
  const imageUrl = url!.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl ?? "";
}
