import type { NextPage } from "next";
import { fetchAPI } from "../../api/api";
import { BlogCard } from "../../components/elements/BlogCard/BlogCard";
import { BlogCardGroup } from "../../components/elements/BlogCard/BlogCardGroup";

interface Props {
  data: any[];
  meta: {};
}
const HappyEverAfters: NextPage<Props> = ({ data, meta }: Props) => {
  return (
    <BlogCardGroup>
      {data.map((blog, idx) => (
        <BlogCard
          key={idx}
          naslov={blog.attributes.naslov}
          kratkiSadrzaj={blog.attributes.kratkiSadrzaj}
          autor={blog.attributes.autor}
          slika={blog.attributes.slika}
          slug={blog.attributes.slug}
          first={idx === 0}
        />
      ))}
    </BlogCardGroup>
  );
};

export async function getStaticProps() {
  const APIRes = await fetchAPI("/happy-ever-afters", {
    populate: "*",
  });
  return {
    props: {
      data: APIRes.data,
      meta: APIRes.meta,
    },
    revalidate: 60,
  };
}
export default HappyEverAfters;
