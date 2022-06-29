import { styled } from "../../../stitches.config";
import Link from "next/link";

interface NavigationButtonProps {
  buttonText: string;
  link: string;
}

export const NavigationButton = ({
  buttonText,
  link,
}: NavigationButtonProps) => {
  return (
    <ListItem>
      <Link href={link}>
        <ListLink>{buttonText}</ListLink>
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
  fontFamily: "'Baloo Tamma 2', cursive",
  cursor: "pointer",
  "&:hover": {
    color: "$blue800",
  },
});
