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
}
const Kontakt: NextPage<Props> = ({ zaglavlje }) => {
  return (
    <>
      <PageHeading title={zaglavlje.naslov} image={zaglavlje.slika} />
      <Section sectionColor={"pink"}>
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
                0981397298
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
                udruga@lepas.hr
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
                Odranska ul. 25, 10000, Hrašće Turopoljsko
              </SubHeading>
            </Flex>
          </Container>
        </ContactWrapper>
        <iframe
          style={{ border: 0, width: "100%", height: "300px" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBsCixq1Git6963h8VjLnWlYEzCmScA8yo
    &q=Odranska+ul.+25,+10000,+Hrašće+Turopoljsko"
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
  margin: "32px 0",
});
const ImageContainer = styled("div", {
  overflow: "hidden",
  position: "relative",
  color: "white",
});
const Flex = styled("div", {
  display: "flex",
  alignItems: "center",
  backgroundColor: "White",

  padding: "0 32px",
});

const ImageBackground = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$pink600",
  padding: "$4",
  aspectRatio: 1,
  backgroundColor: "$pink500",
  borderRadius: "50%",
});

export async function getStaticProps() {
  const APIRes = await fetchAPI("/kontakt", {
    populate: {
      zaglavlje: {
        populate: "*",
      },
    },
  });
  return {
    props: {
      zaglavlje: APIRes.data.attributes.zaglavlje,
    },
    revalidate: 60,
  };
}

export default Kontakt;
