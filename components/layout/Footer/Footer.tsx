import { styled } from "../../../stitches.config";
import { NavigationInterface, SocialMedia } from "../../../types/LayoutTypes";
import { FooterSocialMediaButton } from "./FooterSocialMediaButton";
export interface FooterProps {
  navigation: NavigationInterface[];
  socialmedia: SocialMedia[];
}
export const Footer = ({ socialmedia }: FooterProps) => {
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
        <Copyright>Animadvor © 2022</Copyright>
        <Copyright>Izradio <Link href="mailto:intivillca@gmail.com">Inti Villca</Link> student <Link href="https://www.tvz.hr/">Tehničkog veleučilišta u Zagrebu</Link> kao dio projekta</Copyright>
        <Donate>
        IBAN: HR5224070001100005210
        </Donate>
      </FooterContainer>
    </FooterComponent>
  );
};
const FooterComponent = styled("footer", {
  marginTop: "auto",
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
  fontSize: "1rem",
  color: "#aaa",
  py: '0.5rem'
});
const Donate = styled("div", {
  textAlign: "center",
  fontSize: "1rem",
  color: "#aaa",
});

const Link = styled('a', {
  color: '#abf',
  textDecoration: 'none',

  '&:hover' :{color: '#adf', textDecoration:'underline'},
  '&:visited' :{},
  '&:active' :{},
  '&:link' :{},

})
