import type { NextPage } from "next";
import { fetchAPI } from "../api/api";
import { Donations } from "../components/elements/Donations/Donations";
import { PageHeading } from "../components/elements/PageHeading/PageHeading";
import { Section } from "../components/sections/Section";

interface DonacijeProps {
  data: any;
  zaglavlje: any;
  donacije: any;
}
const Donacije: NextPage<DonacijeProps> = ({ data, zaglavlje, donacije }) => {
  console.log(data.attributes.donacije);
  return (
    <>
      <PageHeading title={zaglavlje.naslov} image={zaglavlje.slika} />
      <Section sectionColor="white">
        <Donations donations={donacije} />
      </Section>
    </>
  );
};

export async function getStaticProps() {
  const APIRes = await fetchAPI("/donacije", {
    populate: {
      donacije: {
        populate: "*",
      },
      zaglavlje: {
        populate: "*",
      },
    },
  });
  return {
    props: {
      data: APIRes.data,
      zaglavlje: APIRes.data.attributes.zaglavlje,
      donacije: APIRes.data.attributes.donacije,
    },
    revalidate: 60,
  };
}

export default Donacije;
