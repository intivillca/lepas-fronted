import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "../../../stitches.config";
import {
  getImageAlt,
  getImageLink,
  ImageBase,
} from "../../../utils/parseImageLink";
interface BlogCardProps {
  naslov: string;
  kratkiSadrzaj: string;
  autor: string;
  slika: ImageBase;
  slug: string;
  first?: boolean;
}
export const BlogCard = ({
  naslov,
  kratkiSadrzaj,
  autor,
  slika,
  slug,
  first = false,
}: BlogCardProps) => {
  return (
    <BlogCardWrapper big={first}>
      <Link href={`happy-ever-afters${slug}`} passHref>
        <BlogCardContainer>
          <BlogCardImageContainer>
            <Image
              objectFit="cover"
              layout="fill"
              alt={getImageAlt({ media: slika })}
              src={getImageLink({ media: slika })}
            />
          </BlogCardImageContainer>
          <BlogCardArticle>
            <BlogCardHeading>{naslov}</BlogCardHeading>
            <BlogCardContent>{kratkiSadrzaj}</BlogCardContent>
            <BlogCardAuthor>{autor}</BlogCardAuthor>
          </BlogCardArticle>
        </BlogCardContainer>
      </Link>
    </BlogCardWrapper>
  );
};

const BlogCardWrapper = styled("div", {
  variants: {
    big: {
      true: {
        "@bp2": { gridColumn: "1 / span 2" },
      },
    },
  },
});
const BlogCardContainer = styled("a", {
  background: "white",
  textDecoration: "none",
  color: "#444",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  position: "relative",
  top: "0",
  transition: "all 0.1s ease-in",
  "&:hover": {
    top: "-2px",
    boxShadow: "0 4px 5px rgba(0, 0, 0, 0.2)",
  },
});
const BlogCardImageContainer = styled("div", {
  paddingBottom: "60%",
  aspectRatio: 5 / 1,
  objectFit: "cover",
  width: "100%",
  height: "auto",
  position: "relative",
});

const BlogCardArticle = styled("article", {
  padding: "20px",
  flex: "1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});
const BlogCardHeading = styled("h3", {
  fontSize: "20px",
  margin: "0",
  color: "#333",
});
const BlogCardContent = styled("p", {
  flex: "1",
  lineHeight: "1.4",
});
const BlogCardAuthor = styled("span", {
  fontSize: "12px",
  fontWeight: "bold",
  color: "#999",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  margin: "2em 0 0 0",
});
