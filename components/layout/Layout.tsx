import { ReactNode } from "react";
import { useQuery } from "react-query";
import { fetchAPI } from "../../api/api";
import { styled } from "../../stitches.config";
import { Footer } from "./Footer/Footer";
import { Navigation } from "./Header/Navigation";
import { NavigationBrand } from "./Header/NavigationBrand";
import { NavigationSocialMediaButtons } from "./Header/NavigationSocialMediaButtons";
import ScrollToTop from "./ScrollTop";

interface LayoutProps {
  children: ReactNode;
}
const getLayoutData = async () => {
  const APIRes = await fetchAPI("/global", {
    populate: {
      navigation: "*",
      footer: "*",
      socialmedia: "*",
      logo: "*",
    },
  });
  return APIRes.data.attributes;
};

const useLayout = () => {
  const { data, isLoading } = useQuery(["layout"], () => getLayoutData());
  return { data, isLoading };
};

export const Layout = ({ children }: LayoutProps) => {
  const { data, isLoading } = useLayout();
  const navigation = data?.navigation ?? {};
  const socialMedia = data?.socialmedia ?? {};
  const logo = data?.logo ?? {};
  if (isLoading) return <>Loading...</>;
  return (
    <PageWrapper>
      <Navigation
        navigation={navigation}
        brand={<NavigationBrand logo={logo} />}
        socialmediabuttons={
          <NavigationSocialMediaButtons socialmedia={socialMedia} />
        }
        divider={true}
      />
      <BgFix>{children}</BgFix>
      <ScrollToTop />
      <Footer navigation={navigation} socialmedia={socialMedia} />
    </PageWrapper>
  );
};

const PageWrapper = styled("div", {
  height: "100vh",
  margin: 0,
  display: "flex",
  flexDirection: "column",
  overflowX: "hidden",
});
const BgFix = styled("div", { marginTop: "-16px" });
