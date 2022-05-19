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
      return (
        <FaFacebook
          style={{
            display: "inline-block",
          }}
        />
      );
    case "instagram":
      return <FaInstagram />;
    case "twitter":
      return <FaTwitter />;
    default:
      return <FaLink />;
  }
};
export const FooterSocialMediaButton = ({
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
  margin: "0 0.625rem",
  textAlign: "center",
});
const ListLink = styled("a", {
  fontSize: "24px",
  display: "flex",
  p: "8px",
  border: "1px solid black",
  borderRadius: "50%",
  textAlign: "center",
  color: "inherit",
  opacity: "0.75",
  "&:hover": {
    color: "$pink800",
    border: "1px solid",
  },
});
