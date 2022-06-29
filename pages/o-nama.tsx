import { Collapse, Text } from "@nextui-org/react";
import type { NextPage } from "next";
import CountUp from "react-countup";
import { fetchAPI } from "../api/api";
import { Features } from "../components/elements/Features/Features";
import { PageHeading } from "../components/elements/PageHeading/PageHeading";
import { Section } from "../components/sections/Section";
import { Heading } from "../components/typograpghy/Heading";
import VisibilitySensor from "react-visibility-sensor";
import { SubHeading } from "../components/typograpghy/Paragraph";
import { styled } from "../stitches.config";

interface Props {
  zaglavlje: any;
  onama: any;
  faq: any;
  faqPozadina: any;
  zaglavljeONama: any;
  zaglavljeStatistika: any;
  statistika: any;
  zaglavljeFAQ: any;
}
const ONama: NextPage<Props> = ({
  zaglavlje,
  zaglavljeONama,
  onama,
  zaglavljeStatistika,
  statistika,
  zaglavljeFAQ,
  faq,
  faqPozadina,
}) => {
  return (
    <>
      <PageHeading title={zaglavlje.naslov} image={zaglavlje.slika} />
      <Section
        sectionColor="white"
        style={{
          padding: "0 2rem",
          width: "auto",
          marginBottom: "2.25rem 0",
        }}
      >
        <Heading heading="h2" variant="pink" style={{ marginTop: "32px" }}>
          {zaglavljeONama.naslov}
        </Heading>
        <SubHeading heading="h2" variant="black">
          {zaglavljeONama.tekst}
        </SubHeading>
        <Features features={onama} />
      </Section>
      <Section
        sectionColor="pink"
        style={{
          padding: "0 2rem",
          width: "auto",
          marginBottom: "2.25rem 0",
        }}
      >
        <Heading heading="h2" variant="white" style={{ marginTop: "32px" }}>
          {zaglavljeStatistika.naslov}
        </Heading>
        <SubHeading heading="h2" variant="white">
          {zaglavljeStatistika.tekst}
        </SubHeading>
        <StatCardWrapper>
          {statistika.map((stat: any) => (
            <StatCard key={stat.id}>
              <Heading
                heading="h2"
                variant={"pink"}
                style={{ margin: "0", width: "100%", textAlign: "center" }}
              >
                <CountUp end={stat.broj} redraw={false} duration={3}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </Heading>

              <Text>{stat.tekst}</Text>
            </StatCard>
          ))}
        </StatCardWrapper>
      </Section>

      <Section
        sectionColor={"image"}
        bgImageUrl={faqPozadina}
        style={{
          padding: "0 2rem",
          width: "auto",
        }}
      >
        <Heading
          heading="h2"
          variant="black"
          style={{
            marginTop: "2.25rem",
            marginBottom: "2.25rem",
          }}
        >
          {zaglavljeFAQ.naslov}
        </Heading>
        <SubHeading
          heading="h2"
          variant="black"
          style={{ marginBottom: "2rem" }}
        >
          {zaglavljeFAQ.tekst}
        </SubHeading>

        <Collapse.Group
          shadow
          style={{ width: "70%", marginBottom: "2rem", marginTop: "2rem" }}
        >
          {faq.map((pitanje: any) => (
            <Collapse
              title={
                <SubHeading heading={"h2"} variant={"black"}>
                  {pitanje.pitanje}
                </SubHeading>
              }
              key={pitanje.id}
            >
              <Text>{pitanje.odgovor}</Text>
            </Collapse>
          ))}
        </Collapse.Group>
      </Section>
    </>
  );
};
const StatCardWrapper = styled("div", {
  display: "grid",
  padding: "8px",
  gridTemplateColumns: "1fr",
  "@bp2": { gridTemplateColumns: "1fr 1fr 1fr" },
  gridGap: "2rem",
  margin: "2rem 0",
});
const StatCard = styled("div", {
  textAlign: "center",
  width: "full",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  borderRadius: "5% 0",
  padding: "$12",
});

export async function getStaticProps() {
  const elementiStr = await fetchAPI("/informacije", {
    populate: {
      zaglavlje: {
        populate: "*",
      },
      onama: {
        populate: "*",
      },
      statistika: { populate: "*" },
      faq: { populate: "*" },
      faqPozadina: "*",
      zaglavljeONama: { populate: "*" },
      zaglavljeStatistika: { populate: "*" },
      zaglavljeFAQ: { populate: "*" },
    },
  });
  return {
    props: {
      zaglavlje: elementiStr.data.attributes.zaglavlje,
      onama: elementiStr.data.attributes.onama,
      statistika: elementiStr.data.attributes.statistika,
      faq: elementiStr.data.attributes.faq,
      faqPozadina: elementiStr.data.attributes.faqPozadina,
      zaglavljeONama: elementiStr.data.attributes.zaglavljeONama,
      zaglavljeStatistika: elementiStr.data.attributes.zaglavljeStatistika,
      zaglavljeFAQ: elementiStr.data.attributes.zaglavljeFAQ,
    },
    revalidate: 60,
  };
}

export default ONama;
