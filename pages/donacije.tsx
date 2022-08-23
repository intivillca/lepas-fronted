import type { NextPage } from "next";
import { fetchAPI } from "../api/api";
import { Donations } from "../components/elements/Donations/Donations";
import { PageHeading } from "../components/elements/PageHeading/PageHeading";
import { Section } from "../components/sections/Section";
import { Heading } from "../components/typograpghy/Heading";
import { SubHeading } from "../components/typograpghy/SubHeading";
import { Text } from "@nextui-org/react";
import { styled } from "../stitches.config";

interface DonacijeProps {
  slika: any;
  zaglavlje: any;
  donacije: any;
}
const Donacije: NextPage<DonacijeProps> = ({ slika, zaglavlje, donacije }) => {
  return (
    <>
      <PageHeading title={zaglavlje.naslov} image={zaglavlje.slika} />
      <Section sectionColor="white">
        <Donations donations={donacije} />
      </Section>
      <Section sectionColor="image" bgImageUrl={slika}>
        <Heading
          heading="h2"
          variant="white"
          style={{
            marginTop: "2.25rem",
            marginBottom: "2.25rem",
          }}
        >
          Računi
        </Heading>
        <RacuniWrapper>
          <Text color="black">
            <span style={{ fontWeight: "bolder" }}>OTP BANKA </span>
          </Text>
          <Text color="black">
            <span style={{ fontWeight: "bolder" }}>IBAN: </span>
            HR5224070001100005210
          </Text>
          <Text color="black">
            <span style={{ fontWeight: "bolder" }}>SWIFT: </span>
            OTPVHR2X
          </Text>
        </RacuniWrapper>
      </Section>
    </>
  );
};
const RacuniWrapper = styled("div", {
  marginTop: "2.25rem",
  width: "90%",
  "@bp2": { width: "30%" },
  backgroundColor: "White",
  padding: "$4",
  marginBottom: "2.25rem",
  borderRadius: "20px",
});

export async function getStaticProps() {
  const APIRes = await fetchAPI("/donacije", {
    populate: {
      donacije: {
        populate: "*",
      },
      zaglavlje: {
        populate: "*",
      },
      slika: "*",
    },
  });
  return {
    props: {
      slika: APIRes.data.attributes.slika,
      zaglavlje: APIRes.data.attributes.zaglavlje,
      donacije: APIRes.data.attributes.donacije,
    },
    revalidate: 60,
  };
}

export default Donacije;
