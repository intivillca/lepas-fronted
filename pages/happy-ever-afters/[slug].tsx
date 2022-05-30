import type { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../../api/api";
import { Section } from "../../components/sections/Section";
import { PageHeading } from "../../components/elements/PageHeading/PageHeading";
import { SubHeading } from "../../components/typograpghy/Paragraph";

interface Props {
  data: any;
}

const HappyEverAfter: NextPage<Props> = ({ data }: Props) => {
  return (
    <Section sectionColor={"white"}>
      {data.map((blog: any) => {
        const date = new Date(blog.attributes.updatedAt).toLocaleDateString(
          "hr-HR"
        );
        return (
          <div style={{ width: "100%" }} key={"x"}>
            <PageHeading
              title={blog.attributes.naslov}
              image={blog.attributes.slika}
              subtitle={date}
            />
            <div style={{ width: "80%", margin: "20px auto" }}>
              <ReactMarkdown className="markup">
                {blog.attributes.clanak}
              </ReactMarkdown>
              <hr></hr>
              <SubHeading
                heading="h2"
                variant="pink"
                style={{ textAlign: "center" }}
              >
                {blog.attributes.autor}
              </SubHeading>
            </div>
          </div>
        );
      })}
    </Section>
  );
};

interface GSProps {
  params: any;
}
export async function getStaticProps({
  params,
}: GSProps): Promise<{ props: {}; revalidate: number }> {
  const APIRes = await fetchAPI("/happy-ever-afters", {
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

export async function getStaticPaths() {
  const res = await fetchAPI("/happy-ever-afters", { populate: "*" });

  return {
    paths:
      res.data.map(
        (blog: any) => `/happy-ever-afters${blog.attributes.slug}`
      ) || [],
    fallback: true,
  };
}
export default HappyEverAfter;
