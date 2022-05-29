import type { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { fetchAPI } from "../../api/api";
import { BlogCard } from "../../components/elements/BlogCard/BlogCard";
import { WhiteSection } from "../../components/sections/WhiteSection";
import {
  getImageAlt,
  getImageLink,
  ImageBase,
} from "../../utils/parseImageLink";
import date from "date-and-time";
import { styled } from "@stitches/react";

interface Props {
  data: any;
}

const HappyEverAfter: NextPage<Props> = ({ data }: Props) => {
  console.log(data);
  return (
    <WhiteSection>
      {data.map((blog: any) => {
        const date = new Date(blog.attributes.updatedAt).toLocaleDateString(
          "hr-HR"
        );
        return (
          <div style={{ width: "100%" }} key={"x"}>
            <BlogCardImageContainer>
              <Image
                objectFit="cover"
                layout="fill"
                alt={getImageAlt({ media: blog.attributes.slika })}
                src={getImageLink({ media: blog.attributes.slika })}
              />
            </BlogCardImageContainer>
            <>{blog.attributes.naslov}</>
            <>{date}</>
            <ReactMarkdown className="markdown">
              {blog.attributes.clanak}
            </ReactMarkdown>{" "}
            <hr></hr>
            <>{blog.attributes.autor}</>
          </div>
        );
      })}
    </WhiteSection>
  );
};

const BlogCardImageContainer = styled("div", {
  aspectRatio: 16 / 9,
  width: "100%",
  height: "auto",
  position: "relative",
  maxWidth: "xl",
});

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
