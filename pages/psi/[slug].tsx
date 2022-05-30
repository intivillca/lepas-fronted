import type { NextPage } from "next";
import { fetchAPI } from "../../api/api";
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

const Psi: NextPage<PsiProps> = ({ psi, meta }: PsiProps) => {
  console.log(psi);
  return <></>;
};

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const res = await fetchAPI("/psi", { populate: "*" });

  return {
    paths: res.data.map((pas: Pas) => `/psi${pas.attributes.slug}`) || [],
    fallback: true,
  };
}
export default Psi;
