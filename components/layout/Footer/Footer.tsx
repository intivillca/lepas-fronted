import { styled } from "../../../stitches.config";
import { NavigationInterface, SocialMedia } from "../../../types/LayoutTypes";
import { Navigation } from "../Header/Navigation";
import { FooterSocialMediaButton } from "./FooterSocialMediaButton";
export interface FooterProps {
  navigation: NavigationInterface[];
  socialmedia: SocialMedia[];
}
export const Footer = ({ navigation, socialmedia }: FooterProps) => {
  return (
    <FooterComponent>
      <FooterContainer>
        <SocialMediaCircleContainer>
          {socialmedia.map((item) => (
            <FooterSocialMediaButton
              link={item.href}
              site={item.site}
              key={item.id}
            />
          ))}
        </SocialMediaCircleContainer>
        <Copyright>LePas © 2022</Copyright>
        <Donate>
          IBAN: HR3923600001102884721 SWIFT: ZABAHR2X PAYPAL: udruga@lepas.hr
          KEKSPAY: 0981397298
        </Donate>
      </FooterContainer>
    </FooterComponent>
  );
};
const FooterComponent = styled("footer", {
  width: "$full",
  paddingBottom: "20px",
  textAlign: "center",
  backgroundColor: "white",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  "&::after": {
    clear: "both",
    content: ".",
    display: "block",
    fontSize: "0",
    height: "0",
    lineHeight: "0",
    overflow: "hidden",
  },
});
const FooterContainer = styled("div", {
  maxWidth: "$xl5",
  boxSizing: "border-box",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
const SocialMediaCircleContainer = styled("div", {
  display: "flex",
  padding: "1.25rem 0",
});
const Copyright = styled("div", {
  textAlign: "center",
  fontSize: "13px",
  color: "#aaa",
});
const Donate = styled("div", {
  textAlign: "center",
  fontSize: "13px",
  color: "#aaa",
});
