import type { NextPage } from "next";
import { fetchAPI } from "../../api/api";
import { AnimalPage } from "../../components/elements/AnimalPage/AnimalPage";

interface Props {
  data: any;
  meta: any;
}
const Macka: NextPage<Props> = ({ data }: Props) => {
  return (
    <>
      <AnimalPage
        naslov={data[0].attributes.ime}
        text={data[0].attributes.opis}
        slika={data[0].attributes.slika}
        kategorija={'macka'}
      />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetchAPI("/macke", { populate: "*" });
  const paths = res.data.map((pas: any) => `/macke${pas.attributes.slug}`);
  console.log(paths);
  return {
    paths: [...paths] || [],
    fallback: true,
  };
}
interface GSProps {
  params: any;
}
export async function getStaticProps({
  params,
}: GSProps): Promise<{ props: {}; revalidate: number }> {
  console.log(params);
  const APIRes = await fetchAPI("/macke", {
    populate: "*",
    filters: {
      slug: `/${params.slug}`,
    },
  });
  console.log(APIRes);
  return {
    props: { data: APIRes.data },
    revalidate: 60,
  };
}

export default Macka;
