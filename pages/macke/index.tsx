import { Pagination } from "@nextui-org/react";
import type { NextPage } from "next";
import { fetchAPI } from "../../api/api";
import { AnimalCard } from "../../components/elements/AnimalCard/AnimalCard";
import { PageHeading } from "../../components/elements/PageHeading/PageHeading";

import { Section } from "../../components/sections/Section";
import { styled } from "../../stitches.config";

interface MackeProps {
  data: any[];
  meta: any;
  stranica: any;
}
const ParseMacke = (macke: any[]) => {
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
const Macke: NextPage<MackeProps> = ({ data, meta, stranica }: MackeProps) => {
  const AnimalCardGroup = styled("div", {
    width: "80%",
    display: "grid",
    gridGap: "$4",
    gridTemplateColumns: "1fr",
    padding: "0px 20px",
    "@bp2": {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  });

  return (
    <>
      <PageHeading
        title={stranica.attributes.zaglavlje.naslov}
        image={stranica.attributes.zaglavlje.slika}
      />
      <Section
        sectionColor={"white"}
        style={{
          margin: "4rem 0rem",
        }}
      >
        <AnimalCardGroup>
          {ParseMacke(data).map((macka, idx) => (
            <AnimalCard
              key={idx}
              ime={macka.ime}
              slika={macka.slika}
              slug={macka.slug}
              path={"macke"}
            />
          ))}
        </AnimalCardGroup>
      </Section>
    </>
  );
};

export async function getStaticProps() {
  const APIRes = await fetchAPI("/macke", {
    populate: "*",
  });
  const elementiStr = await fetchAPI("/udomi-macku", {
    populate: {
      zaglavlje: {
        populate: "*",
      },
    },
  });
  return {
    props: {
      data: APIRes.data,
      meta: APIRes.meta,
      stranica: elementiStr.data,
    },
    revalidate: 60,
  };
}
export default Macke;
