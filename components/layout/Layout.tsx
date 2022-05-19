import { ReactNode, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchAPI } from "../../api/api";
import { styled } from "../../stitches.config";
import { Footer } from "./Footer/Footer";
import { Navigation } from "./Header/Navigation";
import { NavigationBrand } from "./Header/NavigationBrand";
import { NavigationSocialMediaButtons } from "./Header/NavigationSocialMediaButtons";
import { UpArrow } from "./UpArrow/UpArrow";

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
  const footer = data?.footerlinks ?? {};
  const logo = data?.logo ?? {};
  if (isLoading) return <>Loading...</>;
  return (
    <>
      <Navigation
        navigation={navigation}
        brand={<NavigationBrand logo={logo} />}
        socialmediabuttons={
          <NavigationSocialMediaButtons socialmedia={socialMedia} />
        }
        divider={true}
      />
      {children}
      <UpArrow />
      <Footer navigation={navigation} socialmedia={socialMedia} />
    </>
  );
};
