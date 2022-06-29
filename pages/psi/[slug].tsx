import type { NextPage } from "next";
import { fetchAPI } from "../../api/api";
import { AnimalPage } from "../../components/elements/AnimalPage/AnimalPage";
import { ImageBase } from "../../utils/parseImageLink";
import Page404 from "../404";

interface Props {
  data: any;
  meta: any;
}

const Psi: NextPage<Props> = ({ data }: Props) => {
  return (
    <>
      <AnimalPage
        naslov={data[0].attributes.ime}
        text={data[0].attributes.opis}
        slika={data[0].attributes.slika}
        kategorija={data[0].attributes.kategorija}
      />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetchAPI("/psi", { populate: "*" });
  const paths = res.data.map((pas: any) => `/psi${pas.attributes.slug}`);
  return {
    paths: [...paths] || [],
    fallback: true,
  };
}
export default Psi;

interface GSProps {
  params: any;
}
export async function getStaticProps({
  params,
}: GSProps): Promise<{ props: {}; revalidate: number }> {
  const APIRes = await fetchAPI("/psi", {
    populate: "*",
    filters: {
      slug: `/${params.slug}`,
    },
  });
  return {
    props: { data: APIRes.data },
    revalidate: 60,
  };
}
