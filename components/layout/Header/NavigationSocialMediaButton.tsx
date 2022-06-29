import { styled } from "../../../stitches.config";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLink, FaTwitter } from "react-icons/fa";
import { SocialMediaType } from "../../../types/LayoutTypes";

interface NavigationButtonProps {
  site: SocialMediaType;
  link: string;
}
const getSocialMediaIcon = (site: SocialMediaType) => {
  switch (site) {
    case "facebook":
      return <FaFacebook />;
    case "instagram":
      return <FaInstagram />;
    case "twitter":
      return <FaTwitter />;
    default:
      return <FaLink />;
  }
};
export const NavigationSocialMediaButton = ({
  site,
  link,
}: NavigationButtonProps) => {
  return (
    <ListItem>
      <Link href={link} passHref>
        <ListLink>{getSocialMediaIcon(site)}</ListLink>
      </Link>
    </ListItem>
  );
};

const ListItem = styled("li", {
  fontWeight: "bold",
  textTransform: "uppercase",
  display: "inline-block",
  margin: "0 10px",
});
const ListLink = styled("a", {
  color: "#262626",
  letterSpacing: ".2em",
  WebkitTransition: "all 0.2s ease-in-out",
  MozTransition: "all 0.2s ease-in-out",
  OTransition: "all 0.2s ease-in-out",
  transition: "all 0.2s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    color: "$blue800",
  },
});
