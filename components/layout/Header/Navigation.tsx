import { styled } from "../../../stitches.config";
import { NavigationButton } from "./NavigationButton";
import { NavigationInterface } from "../../../types/LayoutTypes";
import { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import { useToggle } from "react-use";
import { keyframes } from "@stitches/react";
import { NavigationMobileButton } from "./NavigationMobileButton";
import { getImageLink } from "../../../utils/parseImageLink";

export interface NavigationProps {
  navigation: NavigationInterface[];
  brand?: ReactNode;
  socialmediabuttons?: ReactNode;
  divider?: boolean;
  pattern: any;
}

export const Navigation = ({
  navigation,
  brand,
  socialmediabuttons,
  divider = false,
  pattern,
}: NavigationProps) => {
  const isMobile = useMediaQuery({ maxWidth: 900 });
  const [open, setOpen] = useToggle(false);
  const NavigationHeader = styled("header", {
    zIndex: "2",
    textAlign: "center",
    position: "sticky",
    paddingBottom: "16px",
    top: "0",
    background: `url(${getImageLink({
      media: pattern,
    })}) center bottom repeat-x`,
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
  return (
    <NavigationHeader>
      <NavigationBackground>
        <NavigationContainer>
          {brand && brand}
          {!isMobile && (
            <NavigationLinks divider={divider}>
              <NavigationMenu>
                {navigation.map((item) => (
                  <NavigationButton
                    buttonText={item.text}
                    link={item.href}
                    key={item.id}
                  />
                ))}
                {socialmediabuttons && socialmediabuttons}
              </NavigationMenu>
            </NavigationLinks>
          )}
          {isMobile && !open && (
            <GiHamburgerMenu
              size={32}
              color="hsl(206, 97%, 76.7%)"
              onClick={setOpen}
              style={{ marginRight: "20px" }}
            />
          )}
          {isMobile && open && (
            <MdClose
              size={32}
              color="hsl(206, 97%, 76.7%)"
              onClick={setOpen}
              style={{ marginRight: "20px" }}
            />
          )}
        </NavigationContainer>
        {open && isMobile && (
          <NavigationMobileLinks divider={divider}>
            <NavigationMobileMenu>
              {navigation.map((item) => (
                <NavigationMobileButton
                  buttonText={item.text}
                  link={item.href}
                  key={item.id}
                />
              ))}
              {socialmediabuttons && socialmediabuttons}
            </NavigationMobileMenu>
          </NavigationMobileLinks>
        )}
      </NavigationBackground>
    </NavigationHeader>
  );
};
const NavigationBackground = styled("div", {
  width: "100%",
  backgroundColor: "white",
});

const NavigationContainer = styled("div", {
  maxWidth: "$xl5",
  boxSizing: "border-box",
  margin: "0 auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "White",
  "@bp2": { flexDirection: "column", alignItems: "center" },
});

const NavigationLinks = styled("div", {
  padding: "30px 0",
  variants: {
    divider: {
      true: { borderTop: "2px solid #e3e3e3" },
      false: {},
    },
  },
});

const NavigationMenu = styled("ul", {
  listStyle: "none",
  display: "flex",
  alignItems: "center",
});

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const NavigationMobileLinks = styled("div", {
  padding: "30px 0",
  animation: `${fadeIn} ease-in-out 0.6s both`,
  variants: {
    divider: {
      true: { borderTop: "2px solid #e3e3e3" },
      false: {},
    },
  },
});

const NavigationMobileMenu = styled("ul", {
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
