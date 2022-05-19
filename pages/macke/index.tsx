import type { NextPage } from "next";
import { fetchAPI } from "../../api/api";
import { AnimalCardProps } from "../../components/elements/AnimalCard/AnimalCard";
import { AnimalCardGroup } from "../../components/elements/AnimalCardGroup/DogCardGroup";
import { PinkSection } from "../../components/sections/PinkSection";

interface MackeProps {
  data: any[];
  meta: {};
}
const ParseMacke = (macke: any[]): AnimalCardProps[] => {
  const parsedMacke = macke.map((macka) => {
    return [
      {
        ime: macka.attributes.ime,
        slika: macka.attributes.slika,
        slug: macka.attributes.slug,
        path: "macke",
      },
    ];
  });
  const ret = parsedMacke.flat();
  return ret;
};
const Macke: NextPage<MackeProps> = ({ data, meta }: MackeProps) => {
  console.log(data, meta);
  return (
    <PinkSection>
      <AnimalCardGroup animals={ParseMacke(data)} />
    </PinkSection>
  );
};

export async function getStaticProps() {
  const APIRes = await fetchAPI("/macke", {
    populate: "*",
  });
  console.log(APIRes);
  return {
    props: {
      data: APIRes.data,
      meta: APIRes.meta,
    },
    revalidate: 60,
  };
}
export default Macke;
