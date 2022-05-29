import type { NextPage } from "next";
import { fetchAPI } from "../../api/api";
import { PinkSection } from "../../components/sections/PinkSection";
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

const Psi: NextPage<PsiProps> = ({ psi, meta }: PsiProps) => {
  return (
    <PinkSection>
      <></>
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
