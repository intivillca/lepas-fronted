import { Pagination } from "@nextui-org/react";
import type { NextPage } from "next";
import { fetchAPI } from "../../api/api";
import { AnimalCard } from "../../components/elements/AnimalCard/AnimalCard";
import { PageHeading } from "../../components/elements/PageHeading/PageHeading";
import { Section } from "../../components/sections/Section";
import { styled } from "../../stitches.config";
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
  stranica: any;
  meta: any;
}
const ParsePsi = (psi: Pas[]) => {
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

const Psi: NextPage<PsiProps> = ({ psi, meta, stranica }: PsiProps) => {

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
          {ParsePsi(psi).map((pas, idx) => (
            <AnimalCard
              key={idx}
              ime={pas.ime}
              slika={pas.slika}
              slug={pas.slug}
              path={"psi"}
            />
          ))}
        </AnimalCardGroup>
      </Section>
    </>
  );
};

export async function getStaticProps() {
  const APIRes = await fetchAPI("/psi", {
    populate: "*",
  });
  const elementiStr = await fetchAPI("/udomi-psa", {
    populate: {
      zaglavlje: {
        populate: "*",
      },
    },
  });
  return {
    props: {
      psi: APIRes.data,
      meta: APIRes.meta,
      stranica: elementiStr.data,
    },
    revalidate: 60,
  };
}
export default Psi;
