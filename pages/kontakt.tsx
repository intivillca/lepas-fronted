import type { NextPage } from "next";
import { fetchAPI } from "../api/api";
import { Donations } from "../components/elements/Donations/Donations";
import { PageHeading } from "../components/elements/PageHeading/PageHeading";
import { Section } from "../components/sections/Section";
import { styled } from "../stitches.config";
import Image from "next/image";
import {
  getImageAlt,
  getImageLink,
  getImagePreview,
} from "../utils/parseImageLink";
import { Container, Input } from "@nextui-org/react";
import { FaEnvelope, FaHome, FaPhone } from "react-icons/fa";
import { Heading } from "../components/typograpghy/Heading";
import { SubHeading } from "../components/typograpghy/SubHeading";

interface Props {
  zaglavlje: any;
  data: any;
}
const Kontakt: NextPage<Props> = ({ zaglavlje, data }) => {
  console.log(data);
  return (
    <>
      <PageHeading title={zaglavlje.naslov} image={zaglavlje.slika} />
      <Section sectionColor={"pink"} noPadding={true}>
        <ContactWrapper>
          <FormContainer>
            <Input
              label="Ime"
              type="text"
              id="fname"
              name="firstname"
              width="70%"
              placeholder="Ime"
            />

            <Input
              size="lg"
              label="Prezime"
              type="text"
              id="fname"
              width="70%"
              name="firstname"
              placeholder="Prezime"
            />
            <Input
              size="lg"
              label="E-mail"
              type="email"
              width="70%"
              id="subject"
              name="subject"
              placeholder="E-mail"
            ></Input>

            <textarea
              style={{
                width: "70%",
                height: "200px",
                border: "none",
                resize: "none",
                borderRadius: "12px",
                margin: "32px 0",
              }}
            ></textarea>

            <Input type="submit" value="Submit" />
          </FormContainer>

          <Container style={{ backgroundColor: "white" }}>
            <Flex>
              <ImageBackground>
                <ImageContainer>
                  <FaPhone size={32} />
                </ImageContainer>
              </ImageBackground>

              <Heading heading={"h1"} variant={"pink"}>
                Telefon
              </Heading>
              <SubHeading heading={"h1"} variant={"black"}>
                {data.Telefon}
              </SubHeading>
            </Flex>
            <Flex>
              <ImageBackground>
                <ImageContainer>
                  <FaEnvelope size={32} />
                </ImageContainer>
              </ImageBackground>

              <Heading heading={"h1"} variant={"pink"}>
                Mail
              </Heading>
              <SubHeading heading={"h1"} variant={"black"}>
                {data.Mail}
              </SubHeading>
            </Flex>
            <Flex>
              <ImageBackground>
                <ImageContainer>
                  <FaHome size={32} />
                </ImageContainer>
              </ImageBackground>

              <Heading heading={"h1"} variant={"pink"}>
                Adresa
              </Heading>
              <SubHeading heading={"h1"} variant={"black"}>
                {data.Adresa}{" "}
              </SubHeading>
            </Flex>
          </Container>
        </ContactWrapper>
        <iframe
          style={{ border: 0, width: "100%", height: "300px" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={data.mapLink}
        ></iframe>
      </Section>
    </>
  );
};

const ContactWrapper = styled("div", {
  display: "grid",

  "@bp2": { gridTemplateColumns: "1fr 1fr" },
  width: "$full",
  height: "$full",
});
const FormContainer = styled("div", {
  display: "flex",
  width: "$full",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
const ImageContainer = styled("div", {
  overflow: "hidden",
  position: "relative",
  color: "white",
});
const Flex = styled("div", {
  display: "none",
  alignItems: "center",
  backgroundColor: "White",
  "@bp2": {
    display: "flex",
  },
});

const ImageBackground = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$blue600",
  aspectRatio: 1,
  padding: "$4",
  backgroundColor: "$blue500",
  borderRadius: "50%",
});

export async function getStaticProps() {
  const APIRes = await fetchAPI("/kontakt", {
    populate: {
      zaglavlje: {
        populate: "*",
      },
      mapLink: "*",
      Mail: "*",
      Adresa: "*",
      Telefon: "*",
    },
  });
  return {
    props: {
      zaglavlje: APIRes.data.attributes.zaglavlje,
      data: APIRes.data.attributes,
    },
    revalidate: 60,
  };
}

export default Kontakt;
