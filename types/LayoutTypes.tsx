export type SocialMediaType = "facebook" | "instagram" | "twitter";

export interface NavigationInterface {
  id: number;
  href: string;
  text: string;
}

export interface SocialMedia {
  id: number;
  href: string;
  site: SocialMediaType;
}
