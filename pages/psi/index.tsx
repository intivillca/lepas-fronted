import type { NextPage } from "next";
import { useEffect, useMemo } from "react";
import { fetchAPI } from "../../api/api";
import { AnimalCardProps } from "../../components/elements/AnimalCard/AnimalCard";
import { AnimalCardGroup } from "../../components/elements/AnimalCardGroup/DogCardGroup";
import { PinkSection } from "../../components/sections/PinkSection";
import { WhiteSection } from "../../components/sections/WhiteSection";
import { PasComponent } from "../../types/DataTypes";
import { ImageBase } from "../../utils/parseImageLink";

interface Pas {
  attributes: {
    ime: string;
    slika: ImageBase;
    slug: string;
  };
}
interface PsiProps {
  psi: Pas[];
  meta: {};
}
const ParsePsi = (psi: Pas[]): AnimalCardProps[] => {
  const parsedPsi = psi.map((pas) => {
    return [
      {
        ime: pas.attributes.ime,
        slika: pas.attributes.slika,
        slug: pas.attributes.slug,
        path: "psi",
      },
    ];
  });
  const ret = parsedPsi.flat();
  return ret;
};

const Psi: NextPage<PsiProps> = ({ psi, meta }: PsiProps) => {
  return (
    <PinkSection>
      <AnimalCardGroup animals={ParsePsi(psi)} />
    </PinkSection>
  );
};

export async function getStaticProps() {
  const APIRes = await fetchAPI("/psi", {
    populate: "*",
  });
  return {
    props: {
      psi: APIRes.data,
      meta: APIRes.meta,
    },
    revalidate: 60,
  };
}
export default Psi;
