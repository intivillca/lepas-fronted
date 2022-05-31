import { styled } from "@nextui-org/react";
import Head from "next/head";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { Section } from "../components/sections/Section";
import { Heading } from "../components/typograpghy/Heading";
import { SubHeading } from "../components/typograpghy/Paragraph";

export default function Page404() {
  const statusCode = 404;
  const title = "This page could not be found";
  return (
    <>
      <Head>
        <title>
          {statusCode}: {title}
        </title>
      </Head>
      <Section sectionColor={"white"} style={{ minHeight: "50vh" }}>
        <Heading heading={"h1"} variant={"black"} fontVariant={"sansSerif"}>
          Stranica nije pronađena
        </Heading>
        <Link href={"/"} passHref>
          <LinkStyled>
            <SubHeading heading={"h1"} variant={"pink"}>
              Vrati se na početnu
            </SubHeading>
          </LinkStyled>
        </Link>
      </Section>
    </>
  );
}
const LinkStyled = styled("a", {
  textDecoration: "none",
  color: "$pink700",
});
