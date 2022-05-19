import { ImageBase } from "../utils/parseImageLink";

export interface PasComponent {
  id: number;
  pas: {
    data: {
      attributes: {
        ime: string;
        slika: ImageBase;
        slug: string;
      };
    };
  };
}

export interface Pas {
  data: {
    attributes: {
      ime: string;
      slika: ImageBase;
    };
  };
}
